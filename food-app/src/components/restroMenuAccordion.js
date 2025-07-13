import * as React from 'react';

import RestroMenuItem from './restroMenuItem.js';

const RestroMenuAccordion = ({category, isOpen, handleOpen}) => {

    let restroCategoryLists = category?.card?.card?.itemCards;

    const handleAccordion = () => {
      handleOpen();
    }
    
    return (
          <div>
              <div style={{backgroundColor:'#eee', padding:'5px', marginBottom:'10px', display:'flex', justifyContent:'space-between'}} onClick={handleAccordion}>
                <h4>{category?.card?.card?.title} ({restroCategoryLists?.length})</h4>
                <span>{!isOpen ? '🔽' : '🔼'}</span>
              </div>            
              {              
                (!!restroCategoryLists?.length && isOpen) && (
                      restroCategoryLists?.map(list => {
                        // console.log(list);
                        return (
                          <RestroMenuItem key={list?.card?.info?.id} list={list} />                         
                          // <li key={list?.card?.info?.id}>{list?.card?.info?.name} - {!!list?.card?.info?.defaultPrice ?  list?.card?.info?.defaultPrice/ 100 : list?.card?.info?.price / 100}</li>
                        )
                    })
                )
              }
          </div>
    )
}

export default RestroMenuAccordion;