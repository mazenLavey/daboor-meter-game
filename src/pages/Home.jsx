import HomeCSS from './css/Home.module.css';
import Header from './Header';
import GameBoard from './GameBoard';
import ScoreHistory from './ScoreHistory';
import GameInfo from './GameInfo';

function Home() {
    return (
        <>
            <div className={HomeCSS.header}>
                <Header />
                <div className={HomeCSS.body}>
                        <ScoreHistory />
                        <div>
                            <GameInfo />
                            <GameBoard />
                        </div>
                </div>
            </div>
        </>
    );
}

export default Home;
