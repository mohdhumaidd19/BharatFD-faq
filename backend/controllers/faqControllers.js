import db from "../models/index.js";

import { Redis } from "ioredis";
const { FAQ } = db;

const redis = new Redis();

// ✅ Get FAQs with Caching
export const getFAQs = async (req, res) => {
  try {
    const lang = req.query.lang || "en"; // Default to 'en' if no lang query param is provided
    const cacheKey = `faqs_${lang}`;

    // Check if data is in the cache
    const cachedData = await redis.get(cacheKey);
    if (cachedData) {
      return res.json(JSON.parse(cachedData));
    }

    // Fetch FAQs from the database
    const faqs = await FAQ.findAll();

    // Translate FAQs based on the language
    const translatedFAQs = faqs.map((faq) => ({
      question: faq[`question_${lang}`] || faq.question, // Fallback to English if translation is not available
      answer: faq.answer, // No translation needed for answer
    }));

    // Cache the result for future requests
    await redis.set(cacheKey, JSON.stringify(translatedFAQs), "EX", 3600); // Cache for 1 hour

    res.json(translatedFAQs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createFAQ = async (req, res) => {
  try {
    const { question, question_hi, question_bn, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ error: "Question and answer are required" });
    }

    // Save translations for question_hi and question_bn
    const newFAQ = await FAQ.create({ 
      question, 
      question_hi, 
      question_bn, 
      answer 
    });

    // Clear cache for fresh queries
    await redis.del("faqs_en", "faqs_hi", "faqs_bn"); 

    res.status(201).json(newFAQ);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
