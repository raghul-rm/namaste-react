import React from 'react';
import { useDispatch } from 'react-redux';

import { RESTRO_CARD_IMG_URL } from '../utils/constants';
import {addItem} from '../utils/cartSlices.js';

const RestroMenuItem = ({list, handleRemoveItem, children}) => {
    const dispatch = useDispatch();    

    const handleClick = (item) => {
      dispatch(addItem(item));
    }

    return (
        <div className='menu-items'>
            <div className='menu-item'>
                <h4>{list?.card?.info?.name}</h4>
                <h5><b>₹</b>&nbsp;{!!list?.card?.info?.defaultPrice ? list?.card?.info?.defaultPrice / 100 : list?.card?.info?.price / 100}</h5>
                <p>{list?.card?.info?.description}</p>
            </div>
            <div className='menu-img'>
                <img src={`${RESTRO_CARD_IMG_URL}${list?.card?.info?.imageId}`} />
                {
                    !!children ? children : <button type='button' onClick={() => handleClick(list)}>Add to Cart</button>
                }
            </div>
        </div>
    )
}

export default RestroMenuItem;

export const withRemoveButton = (RestroMenuItem) => {
    return (props) => {
        return (
            <RestroMenuItem list={props.list}>
            <button type='button' onClick={() => props.handleRemoveItem(props.list?.card?.info?.id)}>Remove Item</button>
            </RestroMenuItem>
        )
    }
}