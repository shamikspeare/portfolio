import React from 'react';

/**
 * A simple wrapper component that replaces the animated SpringElement.
 * This just wraps children without animation effects.
 */
function SpringElement({ children, className = '', ...props }) {
    return (
        <div className={`spring-element ${className}`} {...props}>
            {children}
        </div>
    );
}

export { SpringElement };
