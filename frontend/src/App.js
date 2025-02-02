import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddFAQ from './components/AddFAQ';
import FAQList from './components/FAQList';

const App = () => {
  return (
    <Router>
      <div>
        <h1>FAQ Admin</h1>
        <Routes>
          <Route path="/add-faq" element={<AddFAQ />} />
          <Route path="/" element={<FAQList />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
