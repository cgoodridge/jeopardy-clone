
import CategoryColumn from './components/CategoryColumn';
import PlayerSection from './components/PlayerSection';
import type { Round, Question } from './types/question-pack.types';

interface GameBoardProps {
    round: Round;
    onQuestionSelect: (question: Question) => void;
}

const GameBoard = ({
    round,
    onQuestionSelect,
}: GameBoardProps) => {
    return (
        <div className="p-8 w-full overflow-x-auto">
            <h1>{round.round_name} | The Big Mix</h1>

            <div className="flex w-max min-w-full flex-row justify-center gap-2">
                {round.categories.map((category) => (
                    <CategoryColumn
                        key={category.category_id}
                        category={category}
                        onQuestionSelect={onQuestionSelect}
                    />
                ))}
            </div>
            <PlayerSection />
        </div>
    );
};

export default GameBoard;