import React from 'react';
import './ErrorIndicator.css';

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <h2 className='boom'>Boom</h2>
            <span>Something has gone wrong</span>
            <span className='text-muted'>(but we already sent droids to fix it)</span>
        </div>
    )
}

export default ErrorIndicator
