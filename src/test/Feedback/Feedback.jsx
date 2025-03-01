import css from "../Feedback/Feedback.module.css"

const FeedBack = ({ feedback, total, positive}) =>{



    return (
        <div className={css.optionwrapper}>
            <span className={css.text} >Good: {feedback.good}</span>
            <span className={css.text}>Neutral: {feedback.neutral}</span>
            <span className={css.text}>Bad: {feedback.bad}</span>
             <span className={css.text}>Total: {total}</span>
            <span className={css.text}>Positive: {positive}</span> 
        </div>
    )
}
export default FeedBack;
