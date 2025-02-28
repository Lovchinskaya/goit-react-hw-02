import Description from '../Description/Description'
import FeedBack from '../Feedback/Feedback'
import '../App/App'
import Options from "../Options/Options"
import style from "../App/App.module.css"

const App = () => {
    const feedback = 
        {
            good: 0,
            neutral: 0,
            bad: 0
        }  
    const value = {
        good : "Good",
        neutral : "Nertral",
        bad: "Bad",
        reset: "Reset"
    }

  return (
    <>
      <Description />
      <div className = {style.buttonwrapper}>
      <Options 
      feedbacks = {feedback} 
      value = {value.good}
      />
       <Options 
      feedbacks = {feedback} 
      value = {value.neutral}
      />
       <Options 
      feedbacks = {feedback} 
      value = {value.bad}
      />
      </div>
      
      <FeedBack feedback = {feedback}/>
    </>
  )
}

export default App;
