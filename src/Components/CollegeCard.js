// CollegeCard.js
import React from 'react';
import '../styles/CollegeCard.css'; // Import CSS file

const CollegeCard = ({ college }) => {
  return (
    <div className="card">
      <h3 className="heading">{college.Institute}</h3>
      <p className="text">State: {college.State}</p>
      <p className="text">Course Offered: {college.Course}</p>
      <p className="text">Opening Rank: {college.Opening_Rank}</p>
      <p className="text">Closing Rank: {college.Closing_Rank}</p>
      {/* Add other details such as cutoff ranks */}
    </div>
  );
};

export default CollegeCard;


