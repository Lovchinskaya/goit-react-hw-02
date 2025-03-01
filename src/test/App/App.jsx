import Description from '../Description/Description'
import FeedBack from '../Feedback/Feedback'
import '../App/App'
import Options from "../Options/Options"
import { useState, useEffect } from 'react';
import Notification from "../Notification/Notification";

const App = () => {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = localStorage.getItem("feedback");
        return savedFeedback
          ? JSON.parse(savedFeedback)
          : { good: 0, neutral: 0, bad: 0 };
      });
    
      useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(feedback));
      }, [feedback]);

     const updateFeedback = (feedbackType) => {
        setFeedback({
            ...feedback, [feedbackType]: feedback[feedbackType] + 1,
        });
       }

       const resetFeedback = () => {
        setFeedback({ good: 0, neutral: 0, bad: 0 });
      };

   const totalFeedback = feedback.good + feedback.neutral + feedback.bad; 
   const positiveFeedback = totalFeedback  ? Math.round((feedback.good / totalFeedback) * 100)
   : 0;


  return (
    <>
      <Description />
      <Options 
      value = {feedback}
      total= {totalFeedback}
      onBtnClick = {updateFeedback}
      resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <FeedBack 
      feedback= {feedback}
      total= {totalFeedback}
      positive = {positiveFeedback}
      />
      ) : (
      <Notification />
      )}
    </>
  )
}
export default App;
