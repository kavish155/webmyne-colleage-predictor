import React from 'react';
import CollegeCard from './CollegeCard';
import FidgetSpinnerWithMessage from './FidgetSpinnerWithMessage';
import '../styles/Results.css'

const Results = ({ colleges }) => {
  return (
    // <div>
    //   {colleges.length === 0 ? (
    //     <FidgetSpinnerWithMessage />
    //   ) : (
    //     colleges.map(college => (
    //       <CollegeCard key={college.id} college={college} />
    //     ))
    //   )}
    // </div>
    <div className='results'>
      {colleges.length === 0 ? (
        <FidgetSpinnerWithMessage />
      ) : (
        colleges.map(college => (
          <CollegeCard key={college.id} college={college} />
        ))
      )}
    </div>
  );
};

export default Results;



