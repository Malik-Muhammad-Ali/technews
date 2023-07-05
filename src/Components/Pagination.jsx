import React, { useContext } from 'react';
import { AppContext } from './Context/context';

const Pagination = () => {

  const { page, nbPages, prevPage, nextPage } = useContext(AppContext);

  return (
    <>
      <div className='pagination-btn'>
        <button onClick={()=> prevPage()}>PREV</button>
        <p>{page+1} of {nbPages}</p>
        <button onClick={()=> nextPage()}>NEXT</button>
      </div>
    </>
  )
}

export default Pagination;