import { X } from 'lucide-react';
import { Link, useLocation, useNavigate, useParams } from 'react-router';
import CategoryColumn from './components/CategoryColumn';
import PlayerSection from './components/PlayerSection';
import type { Round, Question } from './types/question-pack.types';
import { useEffect } from 'react';
import { socket } from '../../services/socket';
import type { GameSession } from './types/session.types';
import { useGameSession } from '../../hooks/useGameSession';
import { PlayerList } from './components/lobby/PlayerList';

interface GameBoardProps {
    round: Round;
    onQuestionSelect: (question: Question) => void;
}

const GameBoard = ({
    round,
    onQuestionSelect,
}: GameBoardProps) => {

    const { roomCode } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const navigationState = location.state as
        |
        {
            playerId?: string;
            isHost?: boolean;
            session?: GameSession;
        }
        | null;

    const playerId = navigationState?.playerId;

    const { session, setSession } = useGameSession();

    useEffect(() => {
        if (navigationState?.session) {
            setSession(navigationState.session);
        }
    }, [navigationState?.session, setSession]);

    useEffect(() => {
        if (!playerId) {
            navigate("/");
            return;
        }

        if (!socket.connected) {
            navigate("/");
        }
    }, [playerId, navigate]);

    if (!session) {
        return <p>Waiting for game information...</p>
    }

    return (
        <div className="p-8 w-full overflow-x-auto">
            <div className="mb-4 flex items-center gap-3">
                <Link
                    to="/"
                    aria-label="Return to home"
                    title="Return to home"
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#29445e] text-[#c7d7e6] transition-colors hover:bg-[#12263a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#55d2f2]"
                >
                    <X aria-hidden="true" size={18} />
                </Link>
                <h1>{round.round_name} | The Big Mix</h1>
                <p>
                    {session.players.length} / 6 players
                </p>
                <p>Room Code: {roomCode}</p>
                <p>
                    Game status: {session.status}
                </p>
                <PlayerList
                    players={session.players}
                    hostPlayerId={session.hostPlayerId}
                />
            </div>
            <section className='flex w-max min-w-full justify-center flex-col gap-3 rounded-xl border border-[#24374b] bg-[#0b1928] p-3 text-white sm:flex-row sm:items-center sm:gap-4 mb-2'>
                <div className="flex flex-row ">
                    {round.categories.map((category) => (
                        <CategoryColumn
                            key={category.category_id}
                            category={category}
                            onQuestionSelect={onQuestionSelect}
                        />
                    ))}
                </div>
            </section>
            <PlayerSection />
        </div>
    );
};

export default GameBoard;
