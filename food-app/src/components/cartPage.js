import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import RestroMenuItem from './restroMenuItem';
import { clearItem, removeItem } from '../utils/cartSlices';
import { withRemoveButton } from './restroMenuItem';

const CartPage = () => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const EnhancedMenuItem = withRemoveButton(RestroMenuItem);
    console.log(cartItems);

  const handleClearItem = () => {
    dispatch(clearItem([]));
  }

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  }

  if(!cartItems?.length) {
    return (
      <div className='restro-menu-container' style={{marginBlock:"20px"}}>
        <h4>Cart is Empty</h4>
      </div>      
    )
  }

  return (
    <div className='restro-menu-container' style={{marginBlock:"20px"}}>
        <div className='menu-body'>
        <h1>CartPage <button type='button' onClick={handleClearItem}>Clear Cart</button></h1>        
        {
            cartItems?.map(list => (
                <EnhancedMenuItem key={list?.card?.info?.id} list={list} handleRemoveItem={handleRemoveItem} />
            ))
        }
        </div>
    </div>
  )
}

export default CartPage