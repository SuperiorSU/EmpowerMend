import React from 'react';

function Button({ children, className, onClick }) {
    return (
        <button
            className={`bg-indigo-600 text-white font-semibold py-2 px-4 rounded ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
