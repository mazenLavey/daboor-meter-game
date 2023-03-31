import { useContext } from 'react';
import {GameContext} from '../context/GameContext';
import ScoreHistoryCSS from './css/ScoreHistory.module.css';
import ResultCard from '../components/ResultCard';
import { nanoid } from 'nanoid';

const ScoreHistory = () => {
    const {scoreHistory, resetHistory} = useContext(GameContext);
    
    const historyElement = scoreHistory.slice(0).reverse().map((score) => {
        console.log(score)
        return <ResultCard key={nanoid()} triesNum={score} animation={false} />
    });

    return (
        <div className={ScoreHistoryCSS.game__history}>
            <h2>History</h2>
            <div className={ScoreHistoryCSS.score__wrapper}>
                {historyElement}
            </div>
            {scoreHistory.length > 0 ? <button className={ScoreHistoryCSS.rest__btn} onClick={resetHistory}>Reset</button> : null}
        </div>
    );
};

export default ScoreHistory;