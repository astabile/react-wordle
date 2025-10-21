import React from 'react';

export default function Modal({ isCorrect, turn, solution }) {
    return (
        <div className="modal">
            {isCorrect && (
                <div>
                    <h1>You Win!</h1>
                    <p className='solution'>{solution}</p>
                    <p>You found the word in {turn} guesses!</p>
                </div>)}
            {!isCorrect && (
                <div>
                    <h1>You Lose!</h1>
                    <p className='solution'>{solution}</p>
                    <p>You didn't find the word in 6 guesses.</p>
                </div>)}
        </div>
    );
}