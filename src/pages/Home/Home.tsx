import React from 'react';
import GameSettingsForm from './components/GameSettingsForm';

const Home: React.FC = () => {
    return (
        <div className="min-h-dvh flex flex-row items-center justify-center text-white p-4 gap-8">
            <div className='flex-2 p-8'>
                <h1>Welcome to <i>NOT</i> Jeopardy</h1>
                <p>Get ready to test your knowledge and have fun!</p>
            </div>
            <GameSettingsForm />
        </div>
    );
};

export default Home;