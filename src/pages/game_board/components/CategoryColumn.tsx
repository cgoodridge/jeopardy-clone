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
    <div className="category-column">
      <h2>{category.category_name}</h2>

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