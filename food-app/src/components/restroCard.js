import React from 'react';

import { RESTRO_CARD_IMG_URL } from '../utils/constants';

const RestroCard = ({cardData}) => {
  return (    
        <div className='restro-card'>
            <img src={`${RESTRO_CARD_IMG_URL}${cardData?.cloudinaryImageId}`} alt={cardData?.name} />
            <div>
            <h5>{cardData?.name}</h5>
            <p><img src='https://cdn-icons-png.flaticon.com/512/13077/13077082.png' alt='Rating' style={{width:'20px', height:'20px'}} />&nbsp;{cardData?.avgRating}, {cardData?.sla?.slaString}</p>
            <p>{cardData?.cuisines?.join(', ')}</p>
            </div>
        </div>
  )
}

export default RestroCard;