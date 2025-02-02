import db from "../models/index.js";

import { Redis } from "ioredis";
const { FAQ } = db;

const redis = new Redis();

export const getFAQs = async (req, res) => {
  try {
    const lang = req.query.lang || "en";
    const cacheKey = `faqs_${lang}`;

    const cachedData = await redis.get(cacheKey);
    if (cachedData) {
      return res.json(JSON.parse(cachedData));
    }

    const faqs = await FAQ.findAll();

    const translatedFAQs = faqs.map((faq) => ({
      question: faq[`question_${lang}`] || faq.question, 
      answer: faq.answer, 
    }));

    await redis.set(cacheKey, JSON.stringify(translatedFAQs), "EX", 3600); 

    res.json(translatedFAQs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const createFAQ = async (req, res) => {
  try {
    const { question, question_hi, question_bn, question_ta, question_mr, question_gu, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ error: "Question and answer are required" });
    }

    const newFAQ = await FAQ.create({
      question,
      question_hi,
      question_bn,
      question_ta,
      question_mr,
      question_gu,
      answer,
    });

    await redis.del("faqs_en", "faqs_hi", "faqs_bn", "faqs_ta", "faqs_mr", "faqs_gu");

    res.status(201).json(newFAQ);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
