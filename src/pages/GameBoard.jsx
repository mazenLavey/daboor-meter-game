import React, {useContext, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import {GameContext} from '../context/GameContext';
import GameBoardCSS from './css/GameBoard.module.css';
import ResultCard from '../components/ResultCard';
import Die from '../components/Die';


const GameBoard = () => {
    const [dice, setDice] = useState(newDiceSet());
    const [triesCount, setTriesCount] = useState(0);
    const [winGame, setWinGame] = useState(false);
    const {addToPlayerScoreHistory} = useContext(GameContext);

    // generate one die a time
    function generateNewDie() {
        return {
            id: nanoid(),
            value: Math.ceil(Math.random() * 6),
            isHeld: false
        }
    };

    // generate a set of dice when firstly open the game
    function newDiceSet() {
        let newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        };
        return newDice;
    };

    // generate a new set of dice when player plays again
    function newGame() {
        addToPlayerScoreHistory(triesCount);
        setDice((prevSet) => {
            return prevSet.map(() => {
                return generateNewDie();
            });
        });
        setWinGame(() => false)
        setTriesCount(() => 0)
    };

    // change die when btn 'Roll' ckicked
    function rollTheDies() {
        setDice((prevSet) => {
            return prevSet.map((die) => {
                return die.isHeld ? die : generateNewDie();
            });
        });

        setTriesCount(prevCount => prevCount + 1);
    };

    // freeze die when play clicks on it
    function toHeld(id) {
        setDice((prevSet) => {
            return prevSet.map((die) => {
                return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
            });
        });
    };

    // render the dice to the game board
    const newElement = dice.map((die) => {
        return <Die key={die.id} value={die.value} isHeld={die.isHeld} toHeld={() => toHeld(die.id)} />
    });


    // check if the game finishes
    useEffect(() => {
        let allIsHeld = dice.every(die => die.isHeld === true);
        let firstValue = dice[0].value;
        let allSameValue = dice.every((die) => {
            return die.value === firstValue;
        })

        if (allIsHeld && allSameValue) {
            setWinGame(() => true);
        };
    }, [dice]);

    return (
        <div className={GameBoardCSS.game__container}>
            {winGame && <ResultCard triesNum={triesCount}/>}
            <div className={GameBoardCSS.dies__container}>
                {!winGame && newElement}
            </div>
            {
                winGame ?
                <button onClick={newGame} className={GameBoardCSS.btn}>Play Again</button> :
                <button onClick={rollTheDies} className={GameBoardCSS.btn}>Roll {triesCount > 0 ? triesCount : null}</button>
            }
        </div>
    );
};

export default GameBoard;