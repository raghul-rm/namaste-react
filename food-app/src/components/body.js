import * as React from 'react';
import { Link } from 'react-router-dom';

import RestroCard from './restroCard';
import Shimmer from './shimmer';

import { RESTRO_LIST_API_URL } from '../utils/constants';

const Main = () => {
    const [restroData, setRestroData] = React.useState([]);
    const [filteredRestroData, setFilteredRestroData] = React.useState([]);
    const [searchText, setSearchText] = React.useState('');

    const fetchData = React.useCallback(async () => {
        try {            
            let res = await fetch(`https://cors-anywhere.herokuapp.com/${RESTRO_LIST_API_URL}`);
            let json = await res.json();

            setRestroData(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch(e) {
            console.error(e);
        }
    });

    const handleTopRatedRestuarants = () => {
        let filteredData = restroData?.filter(data =>data?.info?.avgRating > 4.2);
        setRestroData(filteredData);
    }

   const handleOnChange = (e) => {
    if(!searchText) {
        setFilteredRestroData([]);
    }    
    setSearchText(e.target.value);
    }

    const handleSearchByCushine = () => {
        if(!searchText) return;
        let updatedSearchText = new RegExp(searchText, 'gi');
        let cushinesData = restroData?.filter(data => 
        {            
            for(let cushineText of data?.info?.cuisines) {
                return cushineText.match(updatedSearchText);
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
            <button type='button' onClick={handleTopRatedRestuarants}>Top Rated Resturants</button>
            <div>
                <input type='text' name='search' placeholder='Search by Cushine' value={searchText} onChange={handleOnChange} />
                <button type='button' onClick={handleSearchByCushine}>Submit</button>
            </div>
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
                        <Link to={data?.info?.id} key={data?.info?.id}><RestroCard cardData={data?.info} /></Link>
                    ))
                }
                </>
            }
        </div>
    </main>
  )
}

export default Main;