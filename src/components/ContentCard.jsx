import React from 'react'

const ContentCard = ({content}) => {

  const imageUrl = content && content.Poster_Link || 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80'
  return (
    <div className="w-full max-w-md md:max-w-4xl px-8 sm:px-24 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-zinc-800">
        <div className="flex justify-center -mt-16 md:justify-end">
            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Poster image" src={imageUrl} />
        </div>

        <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0 inline-block">{content.Series_Title}</h2>
        <span className='font-semibold ml-2 text-white'>({content.Certificate})</span>
        <span className='font-semibold ml-2 text-red-600'>{content.IMDB_Rating}</span>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">{content.Overview}</p>
        <p className='mt-4 text-sm text-gray-400 dark:text-gray-200 font-bold inline-block w-auto'>{content.Genre}</p>
        <span className='ml-2 text-white font-bold'>|</span>
        <p className='text-sm text-gray-400 dark:text-gray-200 font-bold inline-block w-auto ml-2'>{content.Runtime}</p>

        <div className="flex justify-end mt-4">
        <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" tabIndex="0" role="link">{content.Released_Year}</a>
        </div>
</div>
  )
}

export default ContentCard
