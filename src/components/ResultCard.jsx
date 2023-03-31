import ResultCardCSS from "./ResultCard.module.css";
import getResult from '../functions/getResult';

const ResultCard = ({triesNum, animation = true}) => {
    const {getScore, getBarColor} = getResult();
    const score = getScore(triesNum);
    const barColor = getBarColor(score);

    return (
        <div className={ResultCardCSS.result}>
            <p className={ResultCardCSS.result__text}>{score > 80 ? (score > 100 ? 'You Are Super Dabooooor!!!!' : 'You Are Dabooooooooor!!!!') : (score > 50 ? 'You Are Sometimes Daboor !' : 'You Are Not Daboor !')}</p>
            <div className={ResultCardCSS.result__bar}>
                <p>{score}%</p>
                <div className={ResultCardCSS.range__container} >
                    {
                        animation?
                        <span className={ResultCardCSS.bar__animated}  style={barColor}></span>
                        :
                        <span className={ResultCardCSS.bar__static}  style={barColor}></span>
                    }
                </div>
            </div>
        </div>
    );
};

export default ResultCard;