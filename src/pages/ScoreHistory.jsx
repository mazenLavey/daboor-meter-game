import { useContext } from 'react';
import {GameContext} from '../context/GameContext';
import ScoreHistoryCSS from './css/ScoreHistory.module.css';
import ResultCard from '../components/ResultCard';
import { nanoid } from 'nanoid';

const ScoreHistory = () => {
    const {scoreHistory, resetHistory} = useContext(GameContext);

    // // history rest
    // function restHistory() {
    //     setPlayerHistory(() => []);
    //     localStorage.removeItem('score');
    // };

    //     // add To Player History after game ends
    //     function addToPlayerHistory() {
    //         if (winGame) {
    //             setPlayerHistory((prevHistory) => {
    //                 let result = resultBar();
    //                 let bar = barStyle(result);
    //                 return [
    //                     ...prevHistory,
    //                     {
    //                         result: result,
    //                         barStyle: bar
    //                     }
    //                 ]
    //             });
    //         };
    //     };
    
    //     addToPlayerHistory();

    //         // save player score to the local storage

    // function loadData() {
    //     if (localStorage.getItem('score') !== null) {
    //         if (localStorage.getItem('score').length > 0) {
    //             let scoreData = JSON.parse(localStorage.getItem('score'));
    //             setPlayerHistory(() => scoreData);
    //         };
    //     };
    // };

    // useEffect(() => {
    //     if (playerHistory.length > 0) {
    //         localStorage.setItem('score', JSON.stringify(playerHistory));
    //     };

    //     window.addEventListener('load', loadData, { once: true });
    // }, [playerHistory]);

    // render history of the game

    const historyElement = scoreHistory.reverse().map((score) => {
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