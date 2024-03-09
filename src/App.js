import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import InputForm from "./Components/InputForm";
import Results from "./Components/Results";
import "./App.css"; // Import main CSS file for styling

const App = () => {
  const [colleges, setColleges] = useState([]);

  const handleSubmit = (formData) => {
    // Dummy data for demonstration purposes
    const dummyColleges = [
      {
        id: 1,
        Institute: "College 1",
        State: "Location 1",
        Course: "CourseA",
        Opening_Rank: 100,
        Closing_Rank:200
      },
      {
        id: 1,
        Institute: "College 1",
        State: "Location 1",
        Course: "CourseA",
        Opening_Rank: 100,
        Closing_Rank:200
      }
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
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default App;
