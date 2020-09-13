import React from 'react'

const Record = ({selectedItem, field, label}) => {
    return (
        <li className="list-group-item">
            <span className='term'>{label}: </span>
            <span>{selectedItem[field]}</span>
        </li>
    )
}

export default Record;
