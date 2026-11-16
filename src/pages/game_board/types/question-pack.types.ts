export interface Question {
    question_id: string;
    question_desc: string;
    question_answer: string;
    is_daily_double: boolean;
    dollar_amount: number;
}

export interface Category {
    category_id: string;
    category_name: string;
    questions: Question[];
}

export interface Round {
    round_id: string;
    round_name: string;
    categories: Category[];
}

export interface QuestionPack {
    pack_id: string;
    pack_name: string;
    rounds: Round[];
}