import * as React from 'react';
import { Link } from 'react-router-dom';

import RestroCard, { withAggregatedDiscount } from './restroCard';
import Shimmer from './shimmer';

import { RESTRO_LIST_API_URL } from '../utils/constants';

const Main = () => {
    const [restroData, setRestroData] = React.useState([]);
    const [filteredRestroData, setFilteredRestroData] = React.useState([]);
    const [searchText, setSearchText] = React.useState('');    

    const EnhancedRestroCard = withAggregatedDiscount(RestroCard);

    const fetchData = React.useCallback(async () => {
        try {            
            let res = await fetch(RESTRO_LIST_API_URL);
            let json = await res.json();

            setRestroData(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch(e) {
            console.error(e);
        }
    });

    const handleTopRatedRestuarants = () => {
        let filteredData = [...restroData]?.filter(data =>data?.info?.avgRating > 4.3);
        setRestroData(filteredData);
    }

   const handleOnChange = (e) => {
    if(!e.target.value) {
        setFilteredRestroData([]);
    }    
    setSearchText(e.target.value);
    }

    const handleSearchByCushine = () => {
        if(!searchText) return;
        let updatedSearchText = new RegExp(searchText, 'gi');
        let cushinesData = [...restroData]?.filter(data => 
        {            
        console.log(data?.info?.cuisines);
            for(let cushineText of data?.info?.cuisines) {
                let updatedCushineText = new RegExp(cushineText, 'gi');
                 if(cushineText.match(updatedSearchText)) {
                    return true;
                 }
            }
        });
        setFilteredRestroData(cushinesData);
    }

    React.useEffect(() => {
        fetchData();
    }, []);

    let updatedData = !filteredRestroData?.length ? restroData : filteredRestroData;

  return (
    <main className='main'>
        <div className='toolbar'>
            <div>
                <input type='text' name='search' placeholder='Search by Cushine' value={searchText} onChange={handleOnChange} />
                <button type='button' onClick={handleSearchByCushine}>Submit</button>
            </div>
            <button type='button' onClick={handleTopRatedRestuarants}>Top Rated Resturants</button>
        </div>
        <div className='restro-container'>            
            {
                !restroData?.length 
                ? (
                    <Shimmer /> 
                )
                : 
                <>
                {
                    updatedData?.map((data) => (                         
                        <Link to={data?.info?.id} key={data?.info?.id}>
                            {
                                !!data?.info?.aggregatedDiscountInfoV3 && !!Object?.keys(data?.info?.aggregatedDiscountInfoV3) ?
                                <EnhancedRestroCard cardData={data?.info} /> :                                
                                <RestroCard cardData={data?.info} />
                            }
                        </Link>
                    ))
                }
                </>
            }
        </div>
    </main>
  )
}

export default Main;