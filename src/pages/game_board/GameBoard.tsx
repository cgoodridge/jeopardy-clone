import React from 'react';
import QuestionTile from './components/QuestionTile';
import questionsData from './data/questions.json';
import CategoryColumn from './components/CategoryColumn';
import type { Round, Question } from './types/question-pack.types';

interface GameBoardProps {
    round: Round;
    onQuestionSelect: (question: Question) => void;
}

// type QuestionsData = Category[];

const GameBoard = ({
    round,
    onQuestionSelect,
}: GameBoardProps) => {
    return (
        <div className="game-board">
            <h1>{round.round_name}</h1>

            <div className="flex flex-row justify-center gap-4">
                {round.categories.map((category) => (
                    <CategoryColumn
                        key={category.category_id}
                        category={category}
                        onQuestionSelect={onQuestionSelect}
                    />
                ))}
            </div>
        </div>
    );
};

export default GameBoard;