import './App.css';
import { Routes, Route } from 'react-router';
import Home from './pages/Home/Home';
import GameBoard from './pages/game_board/GameBoard';
import questions from './pages/game_board/data/questions.json';
import type { QuestionPack } from './pages/game_board/types/question-pack.types';


const questionData = questions as QuestionPack;

function App() {

    const currentRound = questionData.rounds[0];

    if (!currentRound) {
        return <p>No rounds available.</p>;
    }

    return (
        <>
            <div>
                {/* <nav>
                    <p>NOT Jeopardy</p>
                    <Link to="/">Home</Link> | <Link to="/play">Game Board</Link>
                </nav> */}

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/play" element={<GameBoard round={currentRound} onQuestionSelect={() => { }} />} />
                </Routes>
            </div>
        </>
    )
}

export default App
