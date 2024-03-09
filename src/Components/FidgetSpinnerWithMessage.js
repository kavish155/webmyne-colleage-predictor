// FidgetSpinnerWithMessage.js

import React from 'react';
import {FidgetSpinner} from 'react-loader-spinner';
import '../styles/FidgetSpinnerWithMessage.css';

const FidgetSpinnerWithMessage = () => {
  return (
    <div className="fidget-spinner-container">
      <div className="fidget-spinner-wrapper">
        <FidgetSpinner
          visible={true}
          height="100"
          width="100"
          ariaLabel="fidget-spinner-loading"
          wrapperStyle={{}}
          wrapperClass="fidget-spinner"
        />
        <p className="loading-message">Please fill in the details to view colleges.</p>
      </div>
    </div>
  );
};

export default FidgetSpinnerWithMessage;

