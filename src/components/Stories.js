import React from 'react'
import Shimmer from './Shimmer';



const Stories = () => {

  let isLoading = true;


  if (isLoading) {
    return (
      <Shimmer/>
    )
  }



  return (
    <>
      <h2>Stories</h2>
    </>
  )
}

export default Stories