
import React, { useState } from 'react';
import '../styles/InputForm.css';

const InputForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    rank: '',
    gender: '',
    state: '',
    category: '', // Renamed from 'Category' to 'category' for consistency
    quota: '', // New field for quota
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // List of Indian states
  const indianStates = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Lakshadweep',
    'Delhi',
    'Puducherry'
  ];

  // List of category options
  const categoryOptions = [
    'OPEN', 
    'OPEN (PwD)', 
    'EWS', 
    'OBC-NCL', 
    'SC', 
    'ST',
    'OBC-NCL (PwD)', 
    'SC (PwD)', 
    'EWS (PwD)', 
    'ST (PwD)'
  ];

  // List of quota options
  const quotaOptions = [
    'AI - All India Quota',
    'HS - Home State Quota',
    'OS - Other State Quota',
    'GO - Gender-Neutral Open Category',
    'JK - Jammu and Kashmir Quota',
    'LA - Ladakh Quota'
  ];

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <div className="form-group">
        <label htmlFor="rank">Rank: (PLEASE ENTER YOUR CATEGORY RANK) </label>
        <input type="text" id="rankOrPercentile" name="rank" value={formData.rank} onChange={handleChange} placeholder="Enter Rank " />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="state">State:</label>
        <select id="state" name="state" value={formData.state} onChange={handleChange}>
          <option value="">Select State</option>
          {indianStates.map((state, index) => (
            <option key={index} value={state}>{state}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={formData.category} onChange={handleChange}>
          <option value="">Select Category</option>
          {categoryOptions.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="quota">Quota:</label>
        <select id="quota" name="quota" value={formData.quota} onChange={handleChange}>
          <option value="">Select Quota</option>
          {quotaOptions.map((quota, index) => (
            <option key={index} value={quota}>{quota}</option>
          ))}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
