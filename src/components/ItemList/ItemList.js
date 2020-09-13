import React from 'react';
import './ItemList.css';
import PropTypes from 'prop-types';

const ItemList = ({ data, children, selectItemFromList }) => {
    const renderItems = (arr) => {
        return arr.map( item => {
            const details = children(item);
            return (
                <li key={item.id} 
                    className="list-group-item item-list__element"
                    onClick={() => selectItemFromList(item.id)}>
                        {details}
                </li>
            )
        })   
    }

    const items = renderItems(data);

    return (
        <div className='item-list'>
            <ul className="list-group">
                {items}
            </ul>
        </div>
    )
};

ItemList.defaultProps = {
    selectItemFromList: () => {}
}

ItemList.propTypes = {
    selectItemFromList: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired,
}

export default ItemList;
