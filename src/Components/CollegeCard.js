// CollegeCard.js
import React from 'react';

const CollegeCard = ({ college }) => {
  return (
    <div>
      <h3>{college.name}</h3>
      <p>Location: {college.location}</p>
      <p>Courses Offered: {college.courses.join(', ')}</p>
      {/* Add other details such as cutoff ranks */}
    </div>
  );
};

export default CollegeCard;
