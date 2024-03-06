// Results.js
import React from 'react';
import CollegeCard from './CollegeCard';

const Results = ({ colleges }) => {
  return (
    <div>
      {colleges.map(college => (
        <CollegeCard key={college.id} college={college} />
      ))}
    </div>
  );
};

export default Results;
