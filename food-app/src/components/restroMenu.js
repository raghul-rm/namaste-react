import * as React from 'react'
import Shimmer from './shimmer';
import { useParams } from 'react-router-dom';

import useFetchMenu from './useFetchMenu';
import { RESTRO_CARD_IMG_URL } from '../utils/constants';

const RestroMenu = () => {
  const { id } = useParams();
  const {restroDetails, restroLists} = useFetchMenu(id);

  if(!restroDetails) {
    return (      
      <div className='shimmer-container'>
        <Shimmer />
      </div>
    )
  }

  return (
    <div className='restro-menu-container'>
      <div className='menu-header'>
        <img src={`${RESTRO_CARD_IMG_URL}${restroDetails?.cloudinaryImageId}`} alt={restroDetails?.name} />
      <h1>{restroDetails?.name}</h1>
      <h4>{restroDetails?.avgRating} &middot; {restroDetails?.costForTwoMessage}</h4>
      <h4>{restroDetails?.sla?.slaString}</h4>
      <p>{restroDetails?.cuisines?.join(', ')}</p>
      </div>
      <div className='menu-body'>
      <h4>Recommended</h4>
      {
        !!restroLists?.length && (
          <ol>
            {
              restroLists?.map(list => {
                return (
                  <li key={list?.card?.info?.id}>{list?.card?.info?.name} - {!!list?.card?.info?.defaultPrice ?  list?.card?.info?.defaultPrice/ 100 : list?.card?.info?.price / 100}</li>
                )
            })
            }
          </ol>
        )
      }
      </div>
    </div>
  )
}

export default RestroMenu