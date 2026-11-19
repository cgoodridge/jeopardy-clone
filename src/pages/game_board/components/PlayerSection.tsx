import Users from 'lucide-react/icons/users';

interface Player {
    name: string;
    totalMoney: number;
    isLeader: boolean;
}

const players: Player[] = [
    { name: 'Player 1', totalMoney: 1000, isLeader: true },
    { name: 'Player 2', totalMoney: 2000, isLeader: false },
    { name: 'Player 3', totalMoney: 1500, isLeader: false },
];

const PlayerSection = () => {
    return (
        <section className="flex w-full flex-col gap-3 rounded-xl border border-[#24374b] bg-[#0b1928] p-3 text-white sm:flex-row sm:items-center sm:gap-4">
            <div className="flex shrink-0 items-center gap-2 px-1 text-[#7894ad] sm:w-[76px] sm:flex-col sm:justify-center sm:gap-1">
                <Users />
                <span className="text-[9px] font-medium uppercase tracking-[0.18em]">Players</span>
            </div>

            <div className="grid min-w-0 flex-1 grid-cols-1 gap-2 sm:grid-cols-3">
                {players.map((player, index) => (
                    <div
                        key={player.name}
                        className={`flex min-w-0 items-center gap-2.5 rounded-xl px-3 py-2.5 ${
                            player.isLeader
                                ? 'border border-[#338da9] bg-[#142d40]'
                                : 'border border-transparent bg-[#102236]'
                        }`}
                    >
                        <span
                            className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] text-sm font-bold text-[#071522] ${
                                index === 0
                                    ? 'bg-[#55d2f2]'
                                    : index === 1
                                      ? 'bg-[#ffb649]'
                                      : 'bg-[#d58bf4]'
                            }`}
                        >
                            P
                        </span>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-[13px] font-semibold leading-4">{player.name}</p>
                            <p className="mt-0.5 text-[9px] leading-3 text-[#7796b2]">
                                {player.isLeader ? 'Current leader' : 'Player'}
                            </p>
                        </div>
                        <p className="shrink-0 text-lg font-bold tabular-nums">
                            ${player.totalMoney.toLocaleString()}
                        </p>
                    </div>
                ))}
            </div>

            <button
                type="button"
                className="flex shrink-0 items-center justify-center gap-2 rounded-lg border border-[#29445e] bg-transparent px-3.5 py-2.5 text-[11px] font-medium text-[#c7d7e6] transition-colors hover:bg-[#12263a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#55d2f2] sm:ml-[-3px]"
            >
                Host controls
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
                    <path d="m7 4 6 6-6 6" />
                </svg>
            </button>
        </section>
    );
};

export default PlayerSection;
