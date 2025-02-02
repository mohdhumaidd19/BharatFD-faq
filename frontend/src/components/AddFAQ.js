import React, { useState } from 'react';
import { createFAQ } from '../api';
import './AddFAQ.css';  

const AddFAQ = () => {
  const [question, setQuestion] = useState('');
  const [question_hi, setQuestionHi] = useState('');
  const [question_bn, setQuestionBn] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newFAQ = { question, question_hi, question_bn, answer };
      await createFAQ(newFAQ);
      alert('FAQ added successfully');
    } catch (error) {
      alert('Error adding FAQ');
    }
  };

  return (
    <div className="add-faq-container">
      <h2 className="add-faq-heading">Add New FAQ</h2>
      <form onSubmit={handleSubmit} className="faq-form">
        <div className="input-group">
          <label htmlFor="question" className="label">Question (English)</label>
          <input
            id="question"
            type="text"
            placeholder="Enter the question in English"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="question_hi" className="label">Question (Hindi)</label>
          <input
            id="question_hi"
            type="text"
            placeholder="Enter the question in Hindi"
            value={question_hi}
            onChange={(e) => setQuestionHi(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="question_bn" className="label">Question (Bengali)</label>
          <input
            id="question_bn"
            type="text"
            placeholder="Enter the question in Bengali"
            value={question_bn}
            onChange={(e) => setQuestionBn(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="answer" className="label">Answer</label>
          <textarea
            id="answer"
            placeholder="Provide the answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="textarea-field"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AddFAQ;
