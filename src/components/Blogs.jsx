import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Card } from './Card';

export const Blogs = () => {
    const {loading,posts}=useContext(AppContext);
  return (
    <div className='mt-[72px] mb-[60px] w-10/12 max-w-[700px] flex flex-col justify-center mx-auto my-2 items-center min-h-screen gap-8'>
    {loading?(
        <div className='custom-loader'></div>
    ):(
        posts.map(
            (post)=>{
                return(
                    <Card post={post}/>
                )
            }
        )
    )}
    </div>
  )
}
