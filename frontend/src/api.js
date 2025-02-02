import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getFAQs = async (lang = 'en') => {
  try {
    const response = await api.get(`/faqs?lang=${lang}`);  
    return response.data;
  } catch (error) {
    console.error("Error fetching FAQs:", error.response?.data || error.message);
    throw new Error(error.response?.data?.error || 'Failed to fetch FAQs');
  }
};


export const createFAQ = async (faqData) => {
  try {
    const response = await api.post('/faqs', faqData);
    return response.data;
  } catch (error) {
    console.error("Error creating FAQ:", error.response?.data || error.message);
    throw new Error(error.response?.data?.error || 'Failed to create FAQ');
  }
};
