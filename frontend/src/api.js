import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});


export const getFAQs = async (lang = 'en') => {
  try {
    const response = await axios.get(`http://localhost:5000/api/faqs?lang=${lang}`);
    return response;
  } catch (error) {
    throw new Error('Error fetching FAQs');
  }
};

export const createFAQ = (faqData) => api.post('/faqs', faqData);
