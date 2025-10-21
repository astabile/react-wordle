import React from 'react';
import Row from './Row';

export default function Grid({ guesses, currentGuess, turn }) {
    return (
        <div>
            {guesses.map((g, i) => {
                if (i === turn) {
                    return <Row key={i} guess={g} currentGuess={currentGuess} />
                }
                return <Row key={i} guess={g} />
            })}
        </div>
    );
}