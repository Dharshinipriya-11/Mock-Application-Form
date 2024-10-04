import './App.css';
import MockInterviewForm from './User_details';
import InterviewResults from './InterviewResults';
import { InterviewProvider } from './InterviewContext';

function App() {
  return (
    <InterviewProvider>
    <div className="App">
      <MockInterviewForm />
      <InterviewResults />
    </div>
    </InterviewProvider>
  );
}

export default App;
