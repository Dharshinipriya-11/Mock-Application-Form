import React, { useContext} from 'react';
import './App.css';
import { InterviewContext } from './InterviewContext';

function MockInterviewForm() {  
  const { formData, setFormData } = useContext(InterviewContext);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  const handleTotalTimeBlur = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value < 0) {
      alert("Please enter positive values.");
      setFormData({
        ...formData,
        totalTime: ''
      });
    }
  };

  const batchOptions = [
    'Jan-1', 'Jan-2', 'Feb-1', 'Feb-2', 'Mar-1', 'Mar-2',
    'Apr-1', 'Apr-2', 'May-1', 'May-2', 'Jun-1', 'Jun-2',
    'Jul-1', 'Jul-2', 'Aug-1', 'Aug-2', 'Sep-1', 'Sep-2',
    'Oct-1', 'Oct-2', 'Nov-1', 'Nov-2', 'Dec-1', 'Dec-2'
  ];

  // const handleConsoleLogDetails = () => {
  //   console.log('Updated Form Data:', formData);
  // };

  return (
   
    <div className="main-container">
      <div className='heading'>
      <h2>Mock Interview Details</h2>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label>Candidate Name:</label>
            <input
              type="text"
              name="candidateName"
              value={formData.candidateName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Tap ID:</label>
            <input
              type="text"
              name="tapid"
              value={formData.tapid}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Batch:</label>
            <select
              name="batch"
              value={formData.batch}
              onChange={handleChange}
            >
              <option value="">Select Batch</option>
              {batchOptions.map((batch, index) => (
                <option key={index} value={batch}>{batch}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Interview Date:</label>
            <input
              type="date"
              name="interviewDate"
              value={formData.interviewDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Interview Time:</label>
            <input
              type="time"
              name="interviewTime"
              value={formData.interviewTime}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Total Time (minutes):</label>
            <input
              type="number"
              min='0'
              name="totalTime"
              value={formData.totalTime}
              onChange={handleChange}
              onBlur={handleTotalTimeBlur}
            />
          </div>
          <div className="form-group">
            <label>Interviewer Name:</label>
            <input
              type="text"
              name="interviewerName"
              value={formData.interviewerName}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </div>    
  );
}

export default MockInterviewForm;
