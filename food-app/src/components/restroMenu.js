import * as React from 'react'
import Shimmer from './shimmer';
import { useParams } from 'react-router-dom';

const RestroMenu = () => {

  const { id } = useParams();

  const [restroDetails, setRestroDetails] = React.useState(null);
  const [restroLists, setRestroLists] = React.useState([]);

  const fetchRestroMenu = React.useCallback(async () => {
    try {      
      let res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0209529&lng=80.16135109999999&restaurantId=${id}`);
      let json = await res.json();      
      setRestroDetails(json?.data?.cards?.[2]?.card?.card?.info);
      setRestroLists(json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards);
      // console.log(json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards);
    } catch(e) {
      console.error(e);
    }
  });

  React.useEffect(() => {
    fetchRestroMenu();
  }, []);

  if(!restroDetails) {
    return (      
      <div className='main restro-menu-container'>
      Loading ..
      </div>
    )
  }

  return (
    <div className='main restro-menu-container'>
      <h1>{restroDetails?.name}</h1>
      <h3>{restroDetails?.avgRating} &middot; {restroDetails?.costForTwoMessage}</h3>
      <h4>{restroDetails?.sla?.slaString}</h4>
      <p>{restroDetails?.cuisines?.join(', ')}</p>
      <p>Recommended</p>
      {
        !!restroLists?.length && (
          <ol>
            {
              restroLists?.map(list => {
                console.log(list);
                return (
                  <li key={list?.card?.info?.id}>{list?.card?.info?.name} - {!!list?.card?.info?.defaultPrice ?  list?.card?.info?.defaultPrice/ 100 : list?.card?.info?.price / 100}</li>
                )
            })
            }
          </ol>
        )
      }
    </div>
  )
}

export default RestroMenu