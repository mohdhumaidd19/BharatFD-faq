import React, { useState } from 'react';
import { createFAQ } from '../api';
import './AddFAQ.css';  

const AddFAQ = () => {
  const [question, setQuestion] = useState('');
  const [question_hi, setQuestionHi] = useState('');
  const [question_bn, setQuestionBn] = useState('');
  const [question_ta, setQuestionTa] = useState('');
  const [question_mr, setQuestionMr] = useState('');
  const [question_gu, setQuestionGu] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newFAQ = { question, question_hi, question_bn,question_ta,question_mr,question_gu,answer };
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
          <label htmlFor="question_ta" className="label">Question (Tamil)</label>
          <input
            id="question_ta"
            type="text"
            placeholder="Enter the question in tamil"
            value={question_ta}
            onChange={(e) => setQuestionTa(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="question_mr" className="label">Question (Marathi)</label>
          <input
            id="question_mr"
            type="text"
            placeholder="Enter the question in Marathi"
            value={question_mr}
            onChange={(e) => setQuestionMr(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="question_gu" className="label">Question (Gujrati)</label>
          <input
            id="question_gu"
            type="text"
            placeholder="Enter the question in Gujrati"
            value={question_gu}
            onChange={(e) => setQuestionGu(e.target.value)}
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
