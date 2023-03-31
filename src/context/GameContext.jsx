import React, { useEffect, useState } from "react";
const GameContext = React.createContext();

const GameContextProvider = (props)=>{
    const [scoreHistory, setScoreHistory ] = useState([]);
    console.log(scoreHistory);

    function addToPlayerScoreHistory(score) {
        const updateScore = [...scoreHistory, score];
        localStorage.setItem('DaboorScoreHistory', JSON.stringify(updateScore));
        setScoreHistory(updateScore);
    }

    function resetHistory(){
        setScoreHistory([]);
        localStorage.setItem('DaboorScoreHistory', JSON.stringify([]));
    }

    useEffect(()=>{
        let x = JSON.parse(localStorage.getItem('DaboorScoreHistory'));
        setScoreHistory(x);
    }, [])
    
    return (
        <GameContext.Provider value={{scoreHistory, addToPlayerScoreHistory, resetHistory}}>
            {props.children}
        </GameContext.Provider>
    )
};

export {GameContextProvider, GameContext}