import React from 'react';
import sprite from '../../icons/symbol-defs.svg';

const TemporaryModal = ({ title, children }) => {
    return (
        // overlay
        <div>
            {/* thumb */}
            <div>
                <button>
                    <svg width={18} height={18}>
                        <use href={sprite + '#icon-close'}/>
                    </svg>
                </button>
                <h3>{title}</h3>
                {children}
                <button>Вiдмiна</button>
            </div>
        </div>
    );
};

export default TemporaryModal;