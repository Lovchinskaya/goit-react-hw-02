import css from "../Options/Options.module.css"



const Options = (feedback, onUpdate) => {
    // const handleClick = (type) => { setFeedback({ ...feedback, [type]: feedback[type] + 1 }) };

    
    return (
          <div className={css.wrapperbutton}>
            <button className={css.button} onClick={onUpdate.clickGood}>Good {feedback.feedback.good}</button>
            <button className={css.button} onClick={onUpdate.clickNeutral}>Neutral {feedback.feedback.neutral}</button>
            <button className={css.button} onClick={onUpdate.clickBad}>Bad {feedback.feedback.bad}</button>
            {/* <button className={css.button}>Reset</button> */}

          </div>
       
    )
}
export default Options;