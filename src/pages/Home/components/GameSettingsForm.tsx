import React from 'react';
import { useNavigate } from 'react-router';

// interface GameSettings {
//     numberOfPlayers: number;
//     difficulty: string;
// }

const GameSettingsForm: React.FC = () => {
    const navigate = useNavigate();

    const handleStartGame = () => {
        // Navigate to the game board page
        navigate('/play');
    }
    // const [settings, setSettings] = useState<GameSettings>({
    //     numberOfPlayers: 2,
    //     difficulty: 'medium',
    // });

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    //     const { name, value } = e.target;
    //     setSettings((prevSettings) => ({
    //         ...prevSettings,
    //         [name]: name === 'numberOfPlayers' ? parseInt(value, 10) : value,
    //     }));
    // };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log('Game Settings:', settings);
    // };

    return (
        <div className='border-1 border-slate-700 bg-slate-800 rounded-xl flex-2 flex-col items-center justify-center gap-4 p-4'>
            <p>Game Type</p>
            <div className='mb-4 flex flex-row gap-4'>
                <button className='flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors'>Individuals</button>
                <button className='flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors'>Teams</button>
            </div>
            <p className="test">How many players?</p>
            <div className="radio-group flex flex-row gap-4 mb-4">
                <input type="radio" id="num1" name="players" value="1" checked />
                <label htmlFor="num1">1</label>

                <input type="radio" id="num2" name="players" value="2" />
                <label htmlFor="num2">2</label>

                <input type="radio" id="num3" name="players" value="3" />
                <label htmlFor="num3">3</label>

                <input type="radio" id="num4" name="players" value="4" />
                <label htmlFor="num4">4</label>
            </div>
            <p>Choose a question pack.</p>
            <div className="flex flex-row gap-4 mb-4">
                <select name="questionPack" id="questionPack" className='border-1 border-slate-500 rounded-xl flex-1 px-4 py-2 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors'>
                    <option value="pack1">Pack 1</option>
                    <option value="pack2">Pack 2</option>
                    <option value="pack3">Pack 3</option>
                </select>
                <button className='border-1 border-slate-500 rounded-xl px-4 py-2 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors'>+ New Pack</button>
            </div>
            <button onClick={handleStartGame} className='w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors'>Start Game</button>
        </div>
    );
};

export default GameSettingsForm;