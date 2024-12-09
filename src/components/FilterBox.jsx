import React, { useEffect, useMemo, useState } from "react";
import filterOptions from "../FilterOptions";
import SingleFilterItem from "./SingleFilterItem";
import sampleDate from "../sampleData";

const FilterBox = ({
  showFilterBox,
  setShowFilterBox,
  filterValues,
  setFilterValues,
  setDataSource,
}) => {

  const filterDataSource = useMemo(() => {
    let tempDataSource = sampleDate.slice(0, 1000);

    filterValues.forEach((singleFilterObject) => {
      const { name, value } = singleFilterObject;

      if (value.length > 0) {
        if (name === "certificate") {
          tempDataSource = tempDataSource.filter((item) =>
            value.includes(item.Certificate)
          );
        } else if (name === "ratings") {
          const ratingsArray = value.map((r) => parseFloat(r.slice(1)));
          tempDataSource = tempDataSource.filter((item) =>
            ratingsArray.some((rating) => item.IMDB_Rating > rating)
          );
        } else if (name === "genre") {
          tempDataSource = tempDataSource.filter((item) =>
            value.some((genre) =>
              item.Genre.split(",").map((g) => g.trim()).includes(genre)
            )
          );
        } else if (name === "runtime") {
          const runtimeArray = value.map((r) => parseInt(r.slice(1), 10));
          console.log(runtimeArray)
          tempDataSource = tempDataSource.filter((item) =>
            runtimeArray.some((runtime) => parseInt(item.Runtime.split(0,3)) >= runtime)
          );
        } else if (name === "releasedYear") {
          const yearArray = value.map((year) => parseInt(year, 10));
          tempDataSource = tempDataSource.filter((item) =>
            yearArray.some((year)=> item.Released_Year >= year && item.Released_Year <= year + 9)
          );
        }
      }
    });

    return tempDataSource;
  }, [filterValues]);

  const handleApplyClick = () => {
    setDataSource(filterDataSource)
    setShowFilterBox(false);
  };

  // useEffect(() => {
  //   setFilteredDataSource(filterDataSource);
  // }, [filterDataSource]);

  console.log(filterDataSource.length)

  const position = showFilterBox ? "right-0 top-0" : "-right-[90%] top-0";

  return (
    <div
      className={`w-[90%] sm:w-[60%] md:w-[40%] h-screen   cursor-pointer bg-slate-300 fixed z-5 ${position} transition-all duration-300 p-5`}
    >
      <h3 className="text-center font-bold text-gray-950 text-xl">FILTER</h3>
      <div className="relative h-full overflow-y-scroll sm:overflow-y-hidden ">
        {filterOptions.map((filterOption) => (
          <SingleFilterItem
            key={filterOption.id}
            filterTitle={filterOption.filterTitle}
            options={filterOption.options}
            name={filterOption.name}
            setFilterValues={setFilterValues}
          />
        ))}

        <button
          onClick={handleApplyClick}
          className="absolute mb-5 mr-5 bottom-1 right-16 px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        >
          Apply
        </button>

        <button
          onClick={() => setShowFilterBox(false)}
          className="absolute mb-5 mr-5 bottom-1 -right-4 px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md sm:w-auto sm:mt-0 hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FilterBox;
