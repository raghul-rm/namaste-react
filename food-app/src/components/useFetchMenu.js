import * as React from 'react';

import { RESTRO_MENU_API_URL } from '../utils/constants';

const useFetchMenu = (id) => {    
  const [restroDetails, setRestroDetails] = React.useState(null);
  const [restroLists, setRestroLists] = React.useState([]);

  const fetchRestroMenu = React.useCallback(async () => {
    try {      
      let res = await fetch(`${RESTRO_MENU_API_URL}${id}`);
      let json = await res.json();      
      setRestroDetails(json?.data?.cards?.[2]?.card?.card?.info);
      // setRestroLists(json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards);
      // console.log(json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards);

      const filteredCategory = json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(category => category?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
      setRestroLists(filteredCategory);
    } catch(e) {
      console.error(e);
    }
  });

  React.useEffect(() => {
    fetchRestroMenu();
  }, []);

  return {restroDetails, restroLists};
}

export default useFetchMenu;
