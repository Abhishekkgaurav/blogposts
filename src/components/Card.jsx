import React from 'react'

export const Card = ({post}) => {
  return (
    <div className='flex  justify-center flex-col gap-2'>
        <p className='font-bold text-lg '>{post.title}</p>
        <p className='text-sm'>By <span className='italic'>{post.author}</span> on <span className='font-bold underline'>{post.category}</span></p>
        <p className='text-sm'>Posted on {post.date}</p>
        <p>{post.content}</p>
        <p className='flex gap-2'>
            {
                post.tags.map((tag)=>(
                    <span className='text-blue-500 text-xs underline font-bold '>#{tag} </span>
                ))
            }
        </p>
    </div>
  )
}
