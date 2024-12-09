import React, { useState } from 'react';
import '../App.css'

const SingleFilterItem = ({ filterTitle, options, name, filterValues, setFilterValues }) => {
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterValues((prev)=>(
        prev.map((singleObj)=>{
            if (singleObj.name === name){
                const newValue = singleObj.value.includes(value) ?
                                singleObj.value.filter((item)=> item !== value) : [...singleObj.value, value]
                return {
                    ...singleObj,
                    value: newValue
                }
            }
            return singleObj
        })
    ))

    
    
  };

  return (
    <div className="flex flex-col justify-start items-start flex-wrap my-5 sm:my-10">
      <label htmlFor={filterTitle} className="text-gray-900 dark:text-gray-200">
        <span className="block text-gray-800 text-lg font-semibold">{filterTitle}</span>
        {options.map((cur, index) => (
          <label htmlFor={cur} key={index} className="mr-4 cursor-pointer ">
            <input
              type="checkbox"
              id={cur}
              name={name}
              value={cur}
              className="cursor-pointer relative"
              onChange={handleInputChange}         
            />
            <span className='text-gray-900 '>{cur}</span>
          </label>
        ))}
      </label>
    </div>
  );
};

export default SingleFilterItem;
