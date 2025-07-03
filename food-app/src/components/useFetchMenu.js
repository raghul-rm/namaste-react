import * as React from 'react'

const useFetchMenu = (id) => {    
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

  return {restroDetails, restroLists};
}

export default useFetchMenu;
