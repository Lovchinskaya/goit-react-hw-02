import css from "../Feedback/Feedback.module.css"
// import { useState } from 'react';

const FeedBack = ({feedbackClicksGood, feedbackClicksNeutral, feedbackClicksBad}) =>{

    return (
        <div className={css.optionwrapper}>
            <span className={css.text} type="good">Good: {feedbackClicksGood}</span>
            <span className={css.text}>Neutral: {feedbackClicksNeutral}</span>
            <span className={css.text}>Bad: {feedbackClicksBad}</span>
            <span className={css.text}>Total: 0</span>
            <span className={css.text}>Positive: 0</span>
        </div>
    )
}
export default FeedBack;
