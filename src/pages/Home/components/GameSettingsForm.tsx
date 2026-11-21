import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
    ChevronDown,
    ChevronRight,
    LayoutGrid,
    Plus,
    Users,
} from 'lucide-react';

type GameMode = 'individuals' | 'teams';

const playerCounts = [2, 3, 4, 5, 6];
const teamCounts = [2, 3, 4];

const GameSettingsForm = () => {
    const navigate = useNavigate();
    const [gameMode, setGameMode] = useState<GameMode>('individuals');
    const [playerCount, setPlayerCount] = useState(3);
    const [teamCount, setTeamCount] = useState(3);

    const handleStartGame = () => {
        navigate('/play');
    };

    return (
        <section className="w-full max-w-[560px] rounded-2xl border border-slate-700 bg-slate-800 p-4 text-white sm:p-5">
            <header className="flex items-start justify-between gap-3 pb-5">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                        New game
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight">Build your game</h2>
                </div>
            </header>

            <div className="space-y-5 border-y border-slate-700/80 py-5">
                <section aria-labelledby="game-mode-heading">
                    <StepHeading
                        number="1"
                        title="How are you playing?"
                        description="Choose a game format"
                        id="game-mode-heading"
                    />
                    <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        <button
                            type="button"
                            aria-pressed={gameMode === 'individuals'}
                            onClick={() => setGameMode('individuals')}
                            className={`flex min-h-[78px] items-center gap-3 rounded-xl border px-3 py-3 text-left transition-colors ${gameMode === 'individuals'
                                ? 'border-cyan-400 bg-cyan-950/50'
                                : 'border-slate-700 bg-slate-800 hover:bg-slate-700/60'
                                }`}
                        >
                            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${gameMode === 'individuals' ? 'bg-cyan-400 text-slate-950' : 'bg-slate-700 text-slate-400'}`}>
                                <Users aria-hidden="true" size={20} strokeWidth={1.8} />
                            </span>
                            <span>
                                <span className="block text-[13px] font-semibold">Individuals</span>
                                <span className="mt-0.5 block text-[10px] text-slate-400">Every player for themselves</span>
                            </span>
                        </button>
                        <button
                            type="button"
                            aria-pressed={gameMode === 'teams'}
                            onClick={() => setGameMode('teams')}
                            className={`flex min-h-[78px] items-center gap-3 rounded-xl border px-3 py-3 text-left transition-colors ${gameMode === 'teams'
                                ? 'border-cyan-400 bg-cyan-950/50'
                                : 'border-slate-700 bg-slate-800 hover:bg-slate-700/60'
                                }`}
                        >
                            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${gameMode === 'teams' ? 'bg-cyan-400 text-slate-950' : 'bg-slate-700 text-slate-400'}`}>
                                <LayoutGrid aria-hidden="true" size={19} strokeWidth={1.8} />
                            </span>
                            <span>
                                <span className="block text-[13px] font-semibold">Teams</span>
                                <span className="mt-0.5 block text-[10px] text-slate-400">Play and score as groups</span>
                            </span>
                        </button>
                    </div>
                </section>

                <section className="border-t border-slate-700/80 pt-5" aria-labelledby="player-count-heading">
                    <StepHeading
                        number="2"
                        title={gameMode === 'individuals' ? "How many players?" : "How many teams? (2 Per Team)"}
                        description={gameMode === 'individuals' ? "You can add more later" : "You can adjust later"}
                        id="player-count-heading"
                    />
                    <div className="mt-3 flex flex-wrap gap-1.5" role="group" aria-label={gameMode === 'individuals' ? "Number of players" : "Number of teams"}>
                        {
                            gameMode === 'individuals' ?
                                playerCounts.map((count) => (
                                    <button
                                        key={count}
                                        type="button"
                                        aria-pressed={playerCount === count}
                                        onClick={() => setPlayerCount(count)}
                                        className={`h-[38px] w-[38px] rounded-lg border text-xs font-semibold transition-colors ${playerCount === count
                                            ? 'border-cyan-400 bg-cyan-400 text-slate-950 shadow-[0_0_0_4px_rgba(34,211,238,0.12)]'
                                            : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-500 hover:text-white'
                                            }`}
                                    >
                                        {count}
                                    </button>
                                ))
                                :
                                teamCounts.map((count) => (
                                    <button
                                        key={count}
                                        type="button"
                                        aria-pressed={teamCount === count}
                                        onClick={() => setTeamCount(count)}
                                        className={`h-[38px] w-[38px] rounded-lg border text-xs font-semibold transition-colors ${teamCount === count
                                            ? 'border-cyan-400 bg-cyan-400 text-slate-950 shadow-[0_0_0_4px_rgba(34,211,238,0.12)]'
                                            : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-500 hover:text-white'
                                            }`}
                                    >
                                        {count}
                                    </button>
                                ))

                        }
                    </div>
                </section>

                <section className="border-t border-slate-700/80 pt-5" aria-labelledby="question-pack-heading">
                    <StepHeading
                        number="3"
                        title="Choose a question pack"
                        description="30 clues · 6 categories"
                        id="question-pack-heading"
                    />
                    <div className="relative mt-3">
                        <select
                            name="questionPack"
                            id="questionPack"
                            // defaultValue="big-mix"
                            className="h-[46px] w-full appearance-none rounded-lg border border-slate-700 bg-slate-800 px-3 pr-10 text-sm text-slate-100 outline-none transition-colors focus:border-cyan-400"
                        >
                            <option value="">Please Select</option>
                            <option value="big-mix">The Big Mix — A little bit of everything</option>
                            <option value="pack-2">Pack 2</option>
                            <option value="pack-3">Pack 3</option>
                        </select>
                        <ChevronDown aria-hidden="true" size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                    <button
                        type="button"
                        className="mt-2 flex h-7 w-full items-center gap-1.5 rounded-lg border border-dashed border-slate-700 px-3 text-left text-[10px] font-semibold text-sky-300 transition-colors hover:border-sky-400 hover:bg-slate-700/40"
                    >
                        <Plus aria-hidden="true" size={14} />
                        New pack
                    </button>
                </section>
            </div>

            <button
                type="button"
                onClick={handleStartGame}
                className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
                Start game
                <ChevronRight aria-hidden="true" size={17} />
            </button>
        </section>
    );
};

interface StepHeadingProps {
    number: string;
    title: string;
    description: string;
    id: string;
}

const StepHeading = ({ number, title, description, id }: StepHeadingProps) => (
    <div className="flex items-center gap-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-slate-600 text-[10px] font-semibold text-cyan-300">
            {number}
        </span>
        <div>
            <h3 id={id} className="text-[12px] font-semibold leading-4">{title}</h3>
            <p className="mt-0.5 text-[9px] leading-3 text-slate-400">{description}</p>
        </div>
    </div>
);

// const PlayerCountSelection = ({count, participantCount, gameMode}) => (
//     <button
//         key={count}
//         type="button"
//         aria-pressed={participantCount === count}
//         onClick={
//             setTeamCount(count)
//         }
//         className={`h-[38px] w-[38px] rounded-lg border text-xs font-semibold transition-colors ${teamCount === count
//             ? 'border-cyan-400 bg-cyan-400 text-slate-950 shadow-[0_0_0_4px_rgba(34,211,238,0.12)]'
//             : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-500 hover:text-white'
//             }`}
//     >
//         {count}
//     </button>
// );

export default GameSettingsForm;
