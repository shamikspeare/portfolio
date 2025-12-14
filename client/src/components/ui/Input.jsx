import * as React from "react"

/**
 * A styled input component with pure CSS.
 */
const Input = React.forwardRef(({ className = '', type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={`custom-input ${className}`}
            ref={ref}
            {...props}
        />
    );
})
Input.displayName = "Input"

export { Input }
