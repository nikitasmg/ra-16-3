import React from 'react';

const Listing = ({items}) => {

    const shortText = (el) => {
        if (el && el.length > 50) {
            return el.slice(0,50) + '...'
        } else {
            return el
        }
    }

    const currentCurrencyCode = (el) => {
        if(el && el === 'USD') {
            return '$'
        } else if (el === 'EUR') {
            return '€'
        } else {
            return el
        }
    }

    const quantityStyle = (el) => {
        if (el && el <= 10) {
            return 'low'
        } else if(el <=20) {
            return 'medium'
        } else {
            return 'high'
        }
    }

    return (
        <div className="item-list">
            {items.map(el => <div className="item" key={el.listing_id}>
                <div className="item-image">
                    <a href={el.url}>
                        <img src={el?.MainImage?.url_570xN} />
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{shortText(el.title)}</p>
                    <p className="item-price">{currentCurrencyCode(el.currency_code)}{el.price}</p>
                    <p className={`item-quantity level-${quantityStyle(el.quantity)}`}>{el.quantity} left</p>
                </div>
            </div>)}
        </div>
    );
};

export default Listing;