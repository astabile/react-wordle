import React from 'react';
import data from '../data/db.json';

export default function Keypad({ usedKeys, handleClick }) {
    const letters = data.letters;

    return (
        <div className="keypad">
            <div onClick={() => handleClick('Enter')} className="special-key">Enter</div>
            {letters && letters.map((l) => {
                const color = usedKeys[l.key.toLowerCase()];
                return (
                    <div 
                        key={l.key} 
                        className={color}
                        onClick={() => handleClick(l.key.toLowerCase())}
                    >
                        {l.key}
                    </div>
                );
            })}
            <div onClick={() => handleClick('Backspace')} className="special-key">⌫</div>
        </div>
    );
}