import css from "../Options/Options.module.css";


const Options = ({ onBtnClick, resetFeedback, total}) => {
    return (
        <div className = {css.buttonwrapper}>
        <button 
        className={css.button} 
        onClick={() =>onBtnClick("good")}>
            Good</button>
        <button 
        className={css.button} 
        onClick={() =>onBtnClick("neutral")}>
            Neutral</button>
        <button 
        className={css.button} 
        onClick={() =>onBtnClick("bad")}>
            Bad</button>

    {total > 0 && (   
        <button className={css.button}  
        onClick={resetFeedback}>
            Reset</button>
    )}
        </div>
          
        )
}
export default Options;