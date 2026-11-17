import React from 'react';

interface Player {
    name: string;
    totalMoney: number;
}

const PlayerSection: React.FC = () => {
    const players: Player[] = [
        { name: 'Player 1', totalMoney: 1000 },
        { name: 'Player 2', totalMoney: 2000 },
        { name: 'Player 3', totalMoney: 1500 },
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
            {players.map((player, index) => (
                <div
                    key={index}
                    style={{
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '10px',
                        textAlign: 'center',
                        width: '150px',
                    }}
                >
                    <h3>{player.name}</h3>
                    <p>${player.totalMoney}</p>
                </div>
            ))}
        </div>
    );
};

export default PlayerSection;