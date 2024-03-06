// InputForm.js
import React, { useState } from 'react';
import '../styles/InputForm.css';

const InputForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    rank: '',
    gender: '',
    state: '',
    caste: '',
    field: ''
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

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <div className="form-group">
        <label htmlFor="rank">Rank:</label>
        <input type="text" id="rankOrPercentile" name="rank" value={formData.rank} onChange={handleChange} placeholder="Enter Rank " />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="state">State:</label>
        <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} placeholder="State" />
      </div>
      <div className="form-group">
        <label htmlFor="caste">Caste:</label>
        <input type="text" id="caste" name="caste" value={formData.caste} onChange={handleChange} placeholder="Caste" />
      </div>
      <div className="form-group">
        <label htmlFor="field">Field:</label>
        <input type="text" id="field" name="field" value={formData.field} onChange={handleChange} placeholder="Field" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
