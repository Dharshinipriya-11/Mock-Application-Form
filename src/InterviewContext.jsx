// InterviewContext.js
import React, { createContext, useState } from 'react';

export const InterviewContext = createContext();

export const InterviewProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    candidateName: '',
    tapid: '',
    batch: '',
    interviewDate: '',
    interviewTime: '',
    totalTime: '',
    interviewerName: ''
  });

  const interviewDetailsContent = `
  Candidate Name: ${formData.candidateName}
  TAP ID: ${formData.tapid}
  Batch: ${formData.batch}
  Interview Date: ${formData.interviewDate}
  Interview Time: ${formData.interviewTime}
  Total Time: ${formData.totalTime}
  Interviewer Name: ${formData.interviewerName}
`;

  return (
    <InterviewContext.Provider value={{ interviewDetailsContent,formData,setFormData }}>
      {children}
    </InterviewContext.Provider>
  );
};
