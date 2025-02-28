import css from "../Options/Options.module.css";
import { useState } from 'react';


const Options = (value) => {
    const [clicks, setFeedback] = useState(0)
 
    const updateFeedbacks = () => {
            console.log("I am here")
            setFeedback(clicks + 1);
    }
    
    return (
            <button className={css.button} onClick={updateFeedbacks}>{value.value} {clicks}</button>
    )
}
export default Options;