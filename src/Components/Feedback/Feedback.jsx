import css from "../Feedback/FeedBack.module.css"

const FeedBack = (feedback) =>{

    return (
        <div className={css.optionwrapper}>
            <span className={css.text}>Good: {feedback.feedback.good}</span>
            <span className={css.text}>Neutral: {feedback.feedback.neutral}</span>
            <span className={css.text}>Bad: {feedback.feedback.bad}</span>
            <span className={css.text}>Total: 0</span>
            <span className={css.text}>Positive: 0</span>
        </div>
    )
}
export default FeedBack;
