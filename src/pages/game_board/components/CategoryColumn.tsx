import type { Category, Question } from "../types/question-pack.types";

import QuestionTile from "./QuestionTile";

interface CategoryColumnProps {
    category: Category;
    onQuestionSelect: (question: Question) => void;
}

const CategoryColumn = ({
    category,
    onQuestionSelect,
}: CategoryColumnProps) => {
    return (
        <div className="flex flex-col min-w-[150px] shrink-0">
            <h2 style={{
                cursor: 'pointer',
                background: 'linear-gradient(145deg, rgb(11, 39, 59), rgb(16, 54, 83))',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center',
                width: '200px',
                margin: '4px',
            }}>{category.category_name}</h2>

            {category.questions.map((question) => (
                <QuestionTile
                    key={question.question_id}
                    question={question}
                    onSelect={onQuestionSelect}

                />
            ))}
        </div>
    );
};

export default CategoryColumn;