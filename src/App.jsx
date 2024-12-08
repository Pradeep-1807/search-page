import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import Filter from './components/Filter'
import ContentCard from './components/ContentCard'
import sampleDate from './sampleData'
import './App.css'
import FilterBox from './components/FilterBox'

function App() {
  const [ searchText, setSearchText ] = useState('')
  const [ dataSource, setDataSource ] = useState(sampleDate)
  const [ showFilterBox, setShowFilterBox ] = useState(false)

  const fetchSearchedContent = ()=>{
    if(!searchText) setDataSource(sampleDate)
    const resultData = sampleDate.slice(0,100).filter((currentValue)=>{
      const title = currentValue && String(currentValue.Series_Title).toLowerCase()
      return title.startsWith(searchText.toLowerCase())
    })
    setDataSource(resultData)
  }

  useEffect(()=>{
    fetchSearchedContent()
  },[searchText])

  return (
    <div className='relative bg-slate-800 min-h-screen min-w-full flex flex-col justify-center items-center px-5 overflow-x-hidden '>
      <div className='fixed top-16 sm:top-10 left-[50%] -translate-x-[50%] -translate-y-[50%] flex gap-1 justify-center items-center  w-full sm:w-[80%] m-auto px-2'>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <Filter setShowFilterBox={setShowFilterBox} />
        
      </div>
      <FilterBox showFilterBox={showFilterBox} setShowFilterBox={setShowFilterBox} />
      <div className='mt-24  lg:mt-10'>
      {
        dataSource.slice(0,100).map((content,index)=> <div key={index}><ContentCard content={content} /></div> )
      }
      </div>
    </div>

  )
}

export default App
