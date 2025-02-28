import Description from '../Description/Description'
import FeedBack from '../Feedback/Feedback'
import '../App/App'
import Options from "../Options/Options"
// import style from "../App/App.module.css"
import { useState } from 'react';


const App = () => {
    const feedback = 
    {
        good: 0,
        neutral: 0,
        bad: 0
    } 

     const [clicks, setFeedback] = useState(feedback)
     
     const updateFeedback = (feedbackType) => {
        setFeedback({
            ...clicks, [feedbackType]: clicks[feedbackType] + 1,
        })
       }
    const feedbackClicksGood = clicks.good;
    const feedbackClicksNeutral = clicks.neutral;
    const feedbackClicksBad = clicks.bad;


  return (
    <>
      <Description />

      <Options 
      value = {feedback}
      onBtnClick = {updateFeedback}
      />
      <FeedBack 
      feedbackClicksGood = {feedbackClicksGood}
      feedbackClicksNeutral = {feedbackClicksNeutral}
      feedbackClicksBad = {feedbackClicksBad}
      />
    </>
  )
}

export default App;
