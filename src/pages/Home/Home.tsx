import React from 'react';
import GameSettingsForm from './components/GameSettingsForm';

const Home: React.FC = () => {
    return (
        <div className="min-h-dvh flex flex-row items-center justify-center text-white p-4 gap-8">
            <div className="flex-2 p-8 text-center">
                <h1 className="text-5xl font-light leading-[0.98] tracking-[-0.055em] sm:text-6xl">
                    Welcome to <i className="not-italic font-normal text-cyan-400">NOT</i> Jeopardy
                </h1>
                <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-sky-200/75">
                    Get ready to test your knowledge and have fun!
                </p>
            </div>
            <GameSettingsForm />
        </div>
    );
};

export default Home;
