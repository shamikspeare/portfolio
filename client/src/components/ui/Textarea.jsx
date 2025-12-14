import * as React from "react"

/**
 * A styled textarea component with pure CSS.
 */
const Textarea = React.forwardRef(({ className = '', ...props }, ref) => {
    return (
        <textarea
            className={`custom-textarea ${className}`}
            ref={ref}
            {...props}
        />
    );
})
Textarea.displayName = "Textarea"

export { Textarea }
