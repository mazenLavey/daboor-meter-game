import GameInfoCSS from './css/GameInfo.module.css';

const GameInfo = ()=>{
        // defination of word "daboor"
        const daboorDefination = 'Daboor - is a Yemeni word that describes the most Unlucky Person In the world.';

        function showTooltip() {
            let tip = document.getElementById('tooltip');
            // cleaner function
            function deleteTooltip(event) {
                if (event.target !== tip) {
                    tip.classList.remove('active');
                    document.removeEventListener('click', deleteTooltip);
                };
            }
    
            // toggel active for sup element
            tip.classList.toggle('active');
    
            if (tip.classList.contains('active')) {
                document.addEventListener('click', deleteTooltip);
            };
        };
    
    return (
        <>
            <div className={GameInfoCSS.wrapper}>
                <h1>How much <span className='daboor' id='tooltip' onClick={showTooltip} data-title={daboorDefination}>Daboor<sup className='sup'>?</sup></span> You Are ?</h1>
                <p className={GameInfoCSS.game__paragraph} >Roll until all dice are the same, click on die to freeze it at its current value between rolls.</p>
            </div>
        </>
    );
};

export default GameInfo;