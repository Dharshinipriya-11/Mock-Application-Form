import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import BarChart from './BarChart';
import ProgressBar from './ProgressBar';
import { InterviewContext } from './InterviewContext';
import jsPDF from 'jspdf';

const remarkOptions = {
      "HTML": [
        { label: 'Strong knowledge of HTML...', value: 'Strong knowledge of HTML...' },
        { label: 'Good knowledge of HTML...', value: 'Good knowledge of HTML...' },
        { label: 'Theoretical knowledge of HTML...', value: 'Theoretical knowledge of HTML...' },
        { label: 'No knowledge of HTML...', value: 'No knowledge of HTML...' }
      ],
      "CSS": [
        { label: 'Strong knowledge of CSS...', value: 'Strong knowledge of CSS...' },
        { label: 'Good knowledge of CSS...', value: 'Good knowledge of CSS...' },
        { label: 'Theoretical knowledge of CSS...', value: 'Theoretical knowledge of CSS...' },
        { label: 'No knowledge of CSS...', value: 'No knowledge of CSS...' }
      ],
      "JavaScript Fundamentals": [
        { label: 'Strong knowledge of JavaScript Fundamentals', value: 'Strong knowledge of JavaScript Fundamentals' },
        { label: 'Good knowledge of JavaScript Fundamentals', value: 'Good knowledge of JavaScript Fundamentals' },
        { label: 'Theoretical knowledge of JavaScript Fundamentals', value: 'Theoretical knowledge of JavaScript Fundamentals' },
        { label: 'No knowledge of JavaScript Fundamentals', value: 'No knowledge of JavaScript Fundamentals' }
      ],
      "JavaScript Expert": [
        { label: 'Strong knowledge of JavaScript Expert', value: 'Strong knowledge of JavaScript Expert' },
        { label: 'Good knowledge of JavaScript Expert', value: 'Good knowledge of JavaScript Expert' },
        { label: 'Theoretical knowledge of JavaScript Expert', value: 'Theoretical knowledge of JavaScript Expert' },
        { label: 'No knowledge of JavaScript Expert', value: 'No knowledge of JavaScript Expert' }
      ],
      "React": [
        { label: 'Strong knowledge of React', value: 'Strong knowledge of React' },
        { label: 'Good knowledge of React', value: 'Good knowledge of React' },
        { label: 'Theoretical knowledge of React', value: 'Theoretical knowledge of React' },
        { label: 'No knowledge of React', value: 'No knowledge of React' }
      ],
      "Core Java": [
        { label: 'Strong knowledge of Core Java', value: 'Strong knowledge of Core Java' },
        { label: 'Good knowledge of Core Java', value: 'Good knowledge of Core Java' },
        { label: 'Theoretical knowledge of Core Java', value: 'Theoretical knowledge of Core Java' },
        { label: 'No knowledge of Core Java', value: 'No knowledge of Core Java' }
      ],
      "Adv Java": [
        { label: 'Strong knowledge of Adv Java', value: 'Strong knowledge of Adv Java' },
        { label: 'Good knowledge of Adv Java', value: 'Good knowledge of Adv Java' },
        { label: 'Theoretical knowledge of Adv Java', value: 'Theoretical knowledge of Adv Java' },
        { label: 'No knowledge of Adv Java', value: 'No knowledge of Adv Java' }
      ],
      "Spring": [
        { label: 'Strong knowledge of Spring', value: 'Strong knowledge of Spring' },
        { label: 'Good knowledge of Spring', value: 'Good knowledge of Spring' },
        { label: 'Theoretical knowledge of Spring', value: 'Theoretical knowledge of Spring' },
        { label: 'No knowledge of Spring', value: 'No knowledge of Spring' }
      ],
      "Hibernate": [
        { label: 'Strong knowledge of Hibernate', value: 'Strong knowledge of Hibernate' },
        { label: 'Good knowledge of Hibernate', value: 'Good knowledge of Hibernate' },
        { label: 'Theoretical knowledge of Hibernate', value: 'Theoretical knowledge of Hibernate' },
        { label: 'No knowledge of Hibernate', value: 'No knowledge of Hibernate' }
      ],
      "MySQL": [
        { label: 'Strong knowledge of MySQL', value: 'Strong knowledge of MySQL' },
        { label: 'Good knowledge of MySQL', value: 'Good knowledge of MySQL' },
        { label: 'Theoretical knowledge of MySQL', value: 'Theoretical knowledge of MySQL' },
        { label: 'No knowledge of MySQL', value: 'No knowledge of MySQL' }
      ],
      "Problem Solving": [
        { label: 'Strong problem-solving skills', value: 'Strong knowledge of ' },
        { label: 'Good problem-solving skills', value: 'Good knowledge of' },
        { label: 'Theoretical problem-solving skills', value: 'Theoretical knowledge of' },
        { label: 'No problem-solving skills', value: 'No knowledge of' }
      ],
      "DSA": [
        { label: 'Strong knowledge of DSA', value: 'Strong knowledge of DSA' },
        { label: 'Good knowledge of DSA', value: 'Good knowledge of DSA' },
        { label: 'Theoretical knowledge of DSA', value: 'Theoretical knowledge of DSA' },
        { label: 'No knowledge of DSA', value: 'No knowledge of DSA' }
      ],
      "Project": [
        { label: 'Strong project with good technical knowledge', value: 'Strong knowledge of ' },
        { label: 'Good project with technical knowledge', value: 'Good knowledge of' },
        { label: 'Theoretical project with technical knowledge', value: 'Theoretical knowledge of' },
        { label: 'No project with technical knowledge', value: 'No knowledge of' }
      ],
      "Communication": [
        { label: 'Strong communication skills', value: 'Strong knowledge of' },
        { label: 'Good communication skills', value: 'Good knowledge of' },
        { label: 'Theoretical communication skills', value: 'Theoretical knowledge of' },
        { label: 'No communication skills', value: 'No knowledge of' }
      ]
    };
    const InterviewResults = () => {
        const [interviewData, setInterviewData] = useState([
          {
            technology: 'HTML',
            points: 0,
            remarks: '',
            strength: '',
            weakness: '',
            questionsAsked: ''
          },
          {
            technology: 'CSS',
            points: 0,
            remarks: '',
            strength: '',
            weakness: '',
            questionsAsked: ''
          },
          {
            technology: 'JavaScript Fundamentals',
            points: 0,
            remarks: '',
            strength: '',
            weakness: '',
            questionsAsked: ''
          },
          {
            technology: 'JavaScript Expert',
            points: 0,
            remarks: '',
            strength: '',
            weakness: '',
            questionsAsked: ''
          },
          {
            technology: 'React',
            points: 0,
            remarks: '',
            strength: '',
            weakness: '',
            questionsAsked: ''
          },
          {
            technology: 'Core Java',
            points: 0,
            remarks: '',
            strength: '',
            weakness: '',
            questionsAsked: ''
          },
          {
            technology: 'Adv Java',
            points: 0,
            remarks: '',
            strength: '',
            weakness: '',
            questionsAsked: ''
          },
          {
            technology: 'Spring',
            points: 0,
            remarks: '',
            strength: '',
            weakness: '',
            questionsAsked: ''
          },
          {
            technology: 'Hibernate',
            points: 0,
            remarks: '',
            strength: '',
            weakness: '',
            questionsAsked: ''
          },
          {
            technology: 'MySQL',
            points: 0,
            remarks: '',
            strength: '',
            weakness: '',
            questionsAsked: ''
          },
          {
            technology: 'Problem Solving',
            points: 0,
            remarks: '',
            strength: '',
            weakness: '',
            questionsAsked: ''
          },
          {
            technology: 'DSA',
            points: 0,
            remarks: '',
            strength: '',
            weakness: '',
            questionsAsked: ''
          },
          {
            technology: 'Project',
            points: 0,
            remarks: '',
            strength: '',
            weakness: '',
            questionsAsked: ''
          },
          {
            technology: 'Communication',
            points: 0,
            remarks: '',
            strength: '',
            weakness: '',
            questionsAsked: ''
          },
        ]);
     

        const { interviewDetailsContent, formData,setFormData } = useContext(InterviewContext);
        const [selectedTechnology, setSelectedTechnology] = useState("HTML");
        const [pointsOptions, setPointsOptions] = useState(Array.from({ length: 11 }, (_, i) => i));
        const [selectedRemarks, setSelectedRemarks] = useState({
        //   "Test Score": '',
          "HTML": '',
          "CSS": '',
          "JavaScript Fundamentals": '',
          "JavaScript Expert": '',
          "React": '',
          "Core Java": '',
          "Adv Java": '',
          "Spring": '',
          "Hibernate": '',
          "MySQL": '',
          "Problem Solving": '',
          "DSA": '',
          "Project": '',
          "Communication": ''
        });
        
        let fullstscks=0;
        const calculateTotalPoints = () => {
          let totalPoints = 0,count=0;
          interviewData.forEach(item => {
            if (item.technology !== 'Communication' && item.technology !== 'DSA' && item.technology !== 'Project' && item.technology !== 'Problem Solving') {
            totalPoints +=parseInt (item.points);
            count++;
            }
          });
          console.log("full"+totalPoints)
          fullstscks=parseInt((totalPoints /count)* 10);
          return fullstscks;
        };
        const totalPoints = calculateTotalPoints();

        let frontendProgressPercentage=0;
        const calculateTotalPoints1 = () => {
          let totalPoints1 = 0,count=0;
          // const frontendTechnologies = ['HTML', 'CSS', 'JavaScript Fundamentals', 'JavaScript Expert', 'React'];

            interviewData.forEach(item => {
            if (item.technology === 'HTML' || item.technology === 'CSS' ||item.technology === 'JavaScript Fundamentals' || item.technology === 'JavaScript Expert' || item.technology === 'React') {
            totalPoints1 +=parseInt(item.points);
            count++;
            console.log(count+" "+totalPoints1);
            }
          });
          
          frontendProgressPercentage =parseInt((totalPoints1 /(count* 10))*100);
          
          return frontendProgressPercentage;
        };
      
       const frontend=calculateTotalPoints1();
       console.log(frontend)
      //  ={(totalPoints / (interviewData.length * 10)) * 100}


        let general=0;
        const calculateTotalPoints2 = () => {
          let totalPoints3 = 0,count=0;
          // const frontendTechnologies = ['HTML', 'CSS', 'JavaScript Fundamentals', 'JavaScript Expert', 'React'];

            interviewData.forEach(item => {
            // if (item.technology === 'HTML' || item.technology === 'CSS' ||item.technology === 'JavaScript Fundamentals' || item.technology === 'Adv Java' || item.technology !== 'JavaScript Expert' || item.technology !== 'React'){
            totalPoints3 +=parseInt(item.points);
            count++;
            console.log(count+" "+totalPoints3);
            // }
          });
          
          general =parseInt((totalPoints3 /(count* 10))*100);
          
          return general;
        };
      
       const generic=calculateTotalPoints2();
       console.log(frontend)


        const handlePointsClick = (index, point) => {
            const updatedData = [...interviewData];
            const maxPoints = 10;
        
            // If selected remark starts with "Strong knowledge"
            const selectedRemark = selectedRemarks[updatedData[index].technology];
            if( selectedRemark.startsWith('Strong')){
            if (selectedRemark && selectedRemark.startsWith('Strong')) {
              if (point >= 8) {
                updatedData[index].points = point + 1;
              } else {
                updatedData[index].points = 8;
              }
              if(point<=7){
                updatedData[index].points=8;
              }
            // } else {
            //   updatedData[index].points = point + 1;
            }
          }else if( selectedRemark.startsWith('Good')){
            if (selectedRemark && selectedRemark.startsWith('Good')) {
              if (point >= 5) {
                updatedData[index].points = point + 1;
              }else {
                updatedData[index].points = 5; 
              }
              if(point>=7){
                updatedData[index].points = 7;
              }
            } else {
              updatedData[index].points = point + 1;
            }
          }

          else if( selectedRemark.startsWith('Theoretical')){
            if (selectedRemark && selectedRemark.startsWith('Theoretical')) {
              if (point >= 3) {
                updatedData[index].points = point + 1;
              }else {
                updatedData[index].points = 3; 
              }
              if(point>=4){
                updatedData[index].points = 4;
              }
            } else {
              updatedData[index].points = point + 1;
            }
          }
          else if( selectedRemark.startsWith('No')){
            if(point>=0){
              updatedData[index].points = point + 1;
            }else{
              updatedData[index].points = 0;
            }
            if(point>=2){
              updatedData[index].points = 2;
            }
            else {
              updatedData[index].points = point + 1;
            }
          }
          else{
            updatedData[index].points = 0;
          }
            setInterviewData(updatedData);
          };


        //   const technology = updatedData[index].technology;
        //   const updatedFormData = {
        //     ...formData,
        //     [technology]: {
        //       ...formData[technology],
        //       points: point
        //     }
        //   };
        //   setFormData(updatedFormData);
        // };

          const handleTechnologyClick = (technology) => {
          setSelectedTechnology(technology);
        };

          const handleRemarkChange = (technology, remark) => {
            setSelectedRemarks({
              ...selectedRemarks,
              [technology]: remark
            });
        
        
            let options = [];
            // let options = Array.from({ length: 11 }, (_, i) => i);
        if (remark.startsWith('Strong')) {
            options = [8, 9, 10];
        } else if (remark.startsWith('Good')) {
            options = [5, 6, 7];
        } else if (remark.startsWith('Theoretical')) {
            options = [3, 4];
        } else if (remark.startsWith('No')) {
            options = [0, 1, 2];
        }
        setPointsOptions(options);
        
            // Update points based on selected remark
            const updatedData = [...interviewData];
            const selectedPoints = {
              'Strong knowledge of': 0,
              'Good knowledge of': 0,
              'Theoretical knowledge of': 0,
              'No knowledge of': 0
            };
        
            const selectedRemarkKey = Object.keys(selectedPoints).find(key => remark.startsWith(key));
            const points = selectedPoints[selectedRemarkKey] || 0;
        
            updatedData.find(item => item.technology === technology).points = points;
            setInterviewData(updatedData);
          };

          const handleInputChange = (field, value) => {
            if (!selectedTechnology) return;
        
            const index = interviewData.findIndex(item => item.technology === selectedTechnology.technology);
            const updatedData = [...interviewData];
            updatedData[index][field] = value;
        
            // Validate if remarks are selected
            const technology = selectedTechnology.technology;
            const selectedRemark = selectedRemarks[technology] || '';
        
            if (!selectedRemark) {
              alert('Please select remarks first before entering points.');
              return;
            }
        
            setInterviewData(updatedData);
          };
        
          const renderPoints = (points, index) => {
            const maxPoints = 10;
            const filledPoints = Math.round((points / 10) * maxPoints);
            const circles = [];
        
            for (let i = 0; i < maxPoints; i++) {
              circles.push(
                <div
                  key={i}
                  className={`point-circle ${i < filledPoints ? 'filled' : ''}`}
                  onClick={() => handlePointsClick(index, i)}
                ></div>
              );
            }

            const numericalValue = (
              <div className="numerical-value">{points}</div>
            );
        
            return (
              <div className="points-container">
                <div className="points-scale">{circles}</div>
                {numericalValue}
              </div>
            );
          };
        
          const renderRemarksDropdown = () => {
            if (!selectedTechnology) return null;
        
            const technology = selectedTechnology.technology;
            const options = remarkOptions[technology] || [];
            const selectedRemark = selectedRemarks[technology] || '';
        
            return (
              <select
                value={selectedRemark}
                onChange={(e) => handleRemarkChange(technology, e.target.value)}
              >
                <option value="">Select Remark</option>
                {options.map((option, index) => (
                  <option key={index} value={option.value}>{option.label}</option>
                ))}
              </select>
            );
          };

          const renderPointsDropdown = () => {
            if (!selectedTechnology) return null;
          
            // const technology = selectedTechnology.technology;
            const options = pointsOptions.length > 0 ? pointsOptions : Array.from({ length: 11 }, (_, i) => i);
            const selectedPoints = selectedTechnology.points;
          
            return (
              <select
                value={selectedPoints}
                onChange={(e) => handleInputChange('points', e.target.value)}
              >
                <option value="">Select Points</option>
                {options.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            );
          };

          const tableDataContent = `
          Full Stack Score: ${totalPoints}
          Frontend Score: ${frontend}
          Generic Score: ${generic}
          
          ${interviewData.map(row => `
            Technology: ${row.technology}
            Points: ${row.points}
            Remarks: ${row.remarks}
          `).join('\n')}
        `;

        const downloadReport = () => {
          const doc = new jsPDF();
          const pageHeight = doc.internal.pageSize.height;
          const lineHeight = 10;
      
          const addContentToPage = (content, startX, startY) => {
            const lines = doc.splitTextToSize(content, 180);
            lines.forEach((line, index) => {
              if (startY + (index + 1) * lineHeight > pageHeight) {
                doc.addPage();
                startY = 10;
              }
              doc.text(line, startX, startY + (index + 1) * lineHeight);
            });
            return startY + lines.length * lineHeight;
          };
      
          let yPosition = 10;
          yPosition = addContentToPage(interviewDetailsContent, 10, yPosition);
          yPosition = addContentToPage(tableDataContent, 10, yPosition);
      
          interviewData.forEach((item) => {
            yPosition += lineHeight;
            yPosition = addContentToPage(`Technology: ${item.technology}`, 10, yPosition);
            yPosition = addContentToPage(`Points: ${item.points}`, 10, yPosition);
            yPosition = addContentToPage(`Remarks: ${item.remarks}`, 10, yPosition);
            yPosition = addContentToPage(`Strength: ${item.strength}`, 10, yPosition);
            yPosition = addContentToPage(`Weakness: ${item.weakness}`, 10, yPosition);
            yPosition = addContentToPage(`Questions Asked: ${item.questionsAsked}`, 10, yPosition);
          });
      
          doc.save('interview_report.pdf');
        };

          useEffect(() => {
            // Set default selected technology to HTML when component mounts
            setSelectedTechnology(interviewData.find(item => item.technology === 'HTML'));
          }, []);
        
      
          return (
            <div className='abcd'>
              <div className='download'>
              <button onClick={downloadReport}>
                  Download Data
              </button>
              {/* <button onClick={() => {
          const number = prompt('Enter mobile number to send the message:');
          if (number) {
            setMobileNumber(number);
            
            sendMessage();
          }
        }}>Send Message</button> */}
              </div>
              <div className='progress_container'>
            {<ProgressBar scoreName="Fullstack Score" percentage={totalPoints} />}
            {<ProgressBar scoreName="Frontend Score" percentage={frontend} />}
            {<ProgressBar scoreName="Generic Score" percentage={generic} />}
            </div>
          
            <div className="container-int">
        <form className="technology-form">
        {/* <h2>Technology and Points</h2> */}
        <div className="technology-list">
          <div className="technology-list-header">
            <div className="technology-list-cell">Technology</div>
            <div className="technology-list-cell">Points</div>
          </div>
          {interviewData.map((item, index) => (
            <div className="technology-list-row" key={index}>
              <div className="technology-list-cell" onClick={() => handleTechnologyClick(item)}>{item.technology}</div>
              <div className="technology-list-cell">{renderPoints(item.points, index)}</div>
            </div>
          ))}
        </div>
      </form>

      

      {selectedTechnology && (
        <form className="details-form">
          <h2>Details for {selectedTechnology.technology}</h2>
          <label>Remarks:</label>
          {renderRemarksDropdown()}
          <label>Points:</label>
          {renderPointsDropdown()}
          <label>Strength:</label>
          <textarea
            value={selectedTechnology.strength}
            onChange={(e) => handleInputChange('strength', e.target.value)}
          />

          <label>Weakness:</label>
          <textarea
            value={selectedTechnology.weakness}
            onChange={(e) => handleInputChange('weakness', e.target.value)}
          />

          <label>Questions Asked:</label>
          <textarea
            value={selectedTechnology.questionsAsked}
            onChange={(e) => handleInputChange('questionsAsked', e.target.value)}
          />
        </form>
      )}
       
    </div>
    <BarChart data={interviewData} />
    </div>
  );
};

export default InterviewResults;