import React from 'react'
import Shimmer from './Shimmer';
import { useContext } from 'react';
import { AppContext, useGlobalContext } from '../context/context';



const Stories = () => {


  const data = useGlobalContext();

  let isLoading = false;
  if (isLoading) {
    return (
      <Shimmer/>
    )
  }

  return (
    <>
      <h2>Stories</h2>
      <h1>{ data }</h1>
    </>
  )
}

export default Stories