import { useState } from 'react'
import Description from '../Description/Description'
import FeedBack from '../Feedback/Feedback'
import '../App/App'
import Options from "../Options/Options"



const App = () => {
    const [feedback, setFeedback] = useState(
        {
            good: 0,
            neutral: 0,
            bad: 0
        }  
    )

const clickGood = () => {
    setFeedback( {...feedback, good: feedback.good +1})
};
const clickNeutral =() => {
    setFeedback ({ ...feedback, neutral: feedback.neutral +1})
};
const clickBad = () => {
    setFeedback ({ ...feedback, bad: feedback.bad + 1})
};


  return (
    <>
      <Description />
      <Options 
      feedback = {feedback} 
    
      onUpdate = {[clickGood, clickNeutral, clickBad]}
      />
      <FeedBack feedback = {feedback}/>
    </>
  )
}

export default App
