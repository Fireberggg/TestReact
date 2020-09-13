import React from 'react';
import './Row.css';
import PropTypes from 'prop-types';

const Row = ({left, right}) => (
    <div className="content-container">
        {left}
        {right}
    </div>
);

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node,
}

export default Row;
