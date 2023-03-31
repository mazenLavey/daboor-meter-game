import React, { useState } from "react";
const GameContext = React.createContext();

const GameContextProvider = (props)=>{
    const [scoreHistory, setScoreHistory ] = useState([]);

    function addToPlayerScoreHistory(score) {
        setScoreHistory(oldValue => [...oldValue, score]);
    }

    function resetHistory(){
        setScoreHistory([]);
    }
    
    return (
        <GameContext.Provider value={{scoreHistory, addToPlayerScoreHistory, resetHistory}}>
            {props.children}
        </GameContext.Provider>
    )
};

export {GameContextProvider, GameContext}