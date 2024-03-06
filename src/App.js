import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import InputForm from './Components/InputForm';
import Results from './Components/Results';
import './App.css'; // Import main CSS file for styling

const App = () => {
  const [colleges, setColleges] = useState([]);

  const handleSubmit = (formData) => {
    // Dummy data for demonstration purposes
    const dummyColleges = [
      { id: 1, name: 'College 1', location: 'Location 1', courses: ['Course A', 'Course B'], cutoffRank: 100 },
      { id: 2, name: 'College 2', location: 'Location 2', courses: ['Course C', 'Course D'], cutoffRank: 150 }
    ];
    setColleges(dummyColleges);
  };

  return (
    <div>
      <Navbar />
      <div className="content-wrapper">
        <div className="left-panel">
          <InputForm onSubmit={handleSubmit} />
        </div>
        <div className="right-panel">
          <Results colleges={colleges} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
