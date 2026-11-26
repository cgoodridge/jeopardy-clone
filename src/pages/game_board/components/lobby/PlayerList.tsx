import type { Player } from "../../types/session.types";

interface PlayerListProps {
    players: Player[];
    hostPlayerId: string | null;
}

export function PlayerList({
    players,
    hostPlayerId
}: PlayerListProps) {
    return (
        <div>
            <h2>Players</h2>

            {players.map((player) => (
                <div key={player.playerId}>
                    <span>{player.playerName}</span>

                    {player.playerId === hostPlayerId && (
                        <span> Host</span>
                    )}

                    <span>
                        {player.isConnected ? " Connected" : " Disconnected"}
                    </span>
                </div>
            ))}
        </div>
    );
}