import React, { createContext, useState } from 'react';

export const InterviewContext = createContext();

export const InterviewProvider = ({ children }) => {
  const [interviewData, setInterviewData] = useState([]);

  const calculateTotalPoints = () => {
    let totalPoints = 0;
    interviewData.forEach(item => {
      totalPoints += item.points;
    });
    return totalPoints;
  };

  const totalPoints = calculateTotalPoints();

  return (
    <InterviewContext.Provider value={{ interviewData, setInterviewData, totalPoints }}>
      {children}
    </InterviewContext.Provider>
  );
};
