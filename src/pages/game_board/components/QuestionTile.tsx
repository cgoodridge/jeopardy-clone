import React, { useState } from 'react';
import type { Question } from '../types/question-pack.types';

interface QuestionTileProps {
    question: Question;
    onSelect: (question: Question) => void;
    disabled?: boolean;
}

const QuestionTile: React.FC<QuestionTileProps> = ({ question }) => {
    const [isQuestionVisible, setIsQuestionVisible] = useState(false);
    console.log("QuestionTile rendered with question:", question);


    const handleClick = () => {
        setIsQuestionVisible(true);
    };

    const handleClose = () => {
        setIsQuestionVisible(false);
    };

    return (
        <>
            <div
                onClick={handleClick}
                style={{
                    cursor: 'pointer',
                    background: 'linear-gradient(145deg, rgb(15, 71, 112), rgb(16, 54, 83))',
                    borderRadius: '8px',
                    padding: '20px',
                    textAlign: 'center',
                    width: '200px',
                    margin: '4px',
                }}
            >
                <span style={{ color: '#F6BD5C', fontSize: '24px', fontWeight: 'bold' }}>
                    ${question.dollar_amount}
                </span>
            </div>

            {isQuestionVisible && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                    }}
                    onClick={handleClose}
                >
                    <div
                        className='flex flex-col justify-center items-center'
                        style={{
                            background: 'radial-gradient(circle, #082D4B, #0A3E5F)',
                            padding: '20px',
                            borderRadius: '8px',
                            width: '100%',
                            height: '100%',
                            textAlign: 'center',
                        }}
                    >

                        <p style={{ fontSize: '34px' }}>{question.question_desc}</p>
                        
                        <button
                            onClick={handleClose}
                            style={{
                                marginTop: '20px',
                                padding: '10px 20px',
                                backgroundColor: 'orange',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default QuestionTile;