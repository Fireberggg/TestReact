import React from 'react';

const WithChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>{fn}</Wrapped>
        )
    }
}

export default WithChildFunction;