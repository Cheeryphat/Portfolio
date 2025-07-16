import React from 'react';
import styles from './customButton.module.css';

const Button = ({ 
    children, 
    type = 'button', 
    variant = 'primary',
    size = 'medium',
    disabled = false,
    onClick,
    className,
    ...props 
}) => {
    const buttonClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className || ''}`;

    return (
        <button
            type={type}
            className={buttonClasses}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;