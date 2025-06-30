import React from 'react'

const Shimmer = () => {
  return (
    <>
        {
            Array.from({ length: 8 }, (_, index) => <div key={index} className='restro-card shimmer'></div> )
        }
               
    </>
  )
}

export default Shimmer