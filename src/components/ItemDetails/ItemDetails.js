import React from 'react';
import './ItemDetails.css';

const ItemDetails = ({ selectedItem, image, children }) => {
    return (
        <div className='person-details card'>
            <img className='person-image' src={image} alt="character"/>
            <div className="card-body person-body">
                <h4>{selectedItem.name}</h4>
                <ul className="list-group">
                    {
                        React.Children.map(children, child => {
                            return React.cloneElement(child, { selectedItem });
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ItemDetails;
