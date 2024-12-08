import React from 'react'

const FilterBox = ({showFilterBox, setShowFilterBox}) => {

    const position = showFilterBox ? 'right-0 top-0' :  '-right-[80%] top-0'

  return (
    <div className={`w-[80%] sm:w-[60%] md:w-[50%] h-[100vh] bg-white fixed z-5 ${position} transition-all duration-300 p-5 `} onClick={()=>setShowFilterBox(false)}>
      <div className='h-full overflow-y-scroll sm:overflow-y-hidden bg-gray-400'>
          <div>
            <label htmlFor=""></label>
            <input type="checkbox" />
          </div>

          <div>
            <label htmlFor=""></label>
            <input type="checkbox" />
          </div>

          <div>
            <label htmlFor=""></label>
            <input type="checkbox" />
          </div>

          <div>
            <label htmlFor=""></label>
            <input type="checkbox" />
          </div>

          <div>
            <label htmlFor=""></label>
            <input type="checkbox" />
          </div>
      </div>
    </div>
  )
}

export default FilterBox
