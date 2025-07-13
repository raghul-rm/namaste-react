import * as React from 'react'
import Shimmer from './shimmer';
import { useParams } from 'react-router-dom';

import RestroMenuAccordion from './restroMenuAccordion';

import useFetchMenu from './useFetchMenu';
import { RESTRO_CARD_IMG_URL } from '../utils/constants';

const RestroMenu = () => {
  const { id } = useParams();
    // const [isOpen, setIsOpen] = React.useState(false);
    const [accordionIndex, setAccordionIndex] = React.useState(0);
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
        {/* <img src={`${RESTRO_CARD_IMG_URL}${restroDetails?.cloudinaryImageId}`} alt={restroDetails?.name} /> */}
      <h1>{restroDetails?.name}</h1>
      <h4>{restroDetails?.avgRating} &middot; {restroDetails?.costForTwoMessage}</h4>
      <h4>{restroDetails?.sla?.slaString}</h4>
      <p>{restroDetails?.cuisines?.join(', ')}</p>
      </div>
      <div className='menu-body'>
        {
            restroLists?.map((category, index) => {
            return (
              <RestroMenuAccordion key={category?.card?.card?.title} category={category} isOpen={accordionIndex === index ? true : false} handleOpen={() => setAccordionIndex(index)} />            
          )}) 
        }
      </div>
    </div>
  )
}

export default RestroMenu