import css from "../Options/Options.module.css";


const Options = ({ onBtnClick}) => {

    return (
        <div className = {css.buttonwrapper}>
        <button className={css.button} onClick={() =>onBtnClick("good")}>Good</button>
        <button className={css.button} onClick={() =>onBtnClick("neutral")}>Neutral</button>
        <button className={css.button} onClick={() =>onBtnClick("bad")}>Bad</button>
        <button className={css.button} onClick={() =>onBtnClick(0)}>Reset</button>
        </div>
          
        )
}
export default Options;