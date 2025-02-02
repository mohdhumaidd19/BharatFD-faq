import React, { useEffect, useState } from 'react';
import { getFAQs } from '../api';
import { Link } from 'react-router-dom';
import './FAQList.css';

const FAQList = () => {
  const [faqs, setFaqs] = useState([]);
  const [language, setLanguage] = useState('en'); 

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await getFAQs(language);
        setFaqs(response.data);
      } catch (error) {
        alert('Error fetching FAQs');
      }
    };
    fetchFAQs();
  }, [language]);

  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
  };

  return (
    <div className="faq-list-container">
      <h2 className="faq-list-heading">FAQ List</h2>

      {/* Language Selection Buttons */}
      <div className="language-selector">
        <button onClick={() => handleLanguageChange('en')}>English</button>
        <button onClick={() => handleLanguageChange('hi')}>Hindi</button>
        <button onClick={() => handleLanguageChange('bn')}>Bengali</button>
      </div>

      {/* Add Question Button */}
      <div className="add-question-btn">
        <Link to="/add-faq">
          <button className="add-faq-btn">Add a Question</button>
        </Link>
      </div>

      {/* FAQ Table */}
      <table className="faq-table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          {faqs.map((faq) => (
            <tr key={faq.id}>
              <td>{faq.question}</td>
              <td>{faq.answer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FAQList;
