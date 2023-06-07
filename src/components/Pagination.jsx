import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const Pagination = () => {
    const {page,handlePageChange,totalpages}=useContext(AppContext);
  return (
    <div className='flex justify-between items-center border-2 fixed bottom-0 w-screen bg-white'>
    <div className='w-10/12 max-w-[700px] flex justify-between mx-auto my-2 items-center'>
    <div className='flex gap-2'>
    {
        page!==1 && 
        <button className='border-2 py-1 px-3 rounded-md'
        onClick={()=>{handlePageChange(page-1)}}
        >Previous</button>
    }
    {
        page!==totalpages &&
        <button className='border-2 py-1 px-3 rounded-md'
        onClick={()=>{handlePageChange(page+1)}}
        >Next</button>
    }
    </div>
    <div className='font-bold'>
        Page {page} of {totalpages}
    </div>
    </div>
    </div>
  )
}
