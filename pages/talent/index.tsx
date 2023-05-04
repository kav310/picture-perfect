import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFilteredPhotographers,
  fetchPhotographers,
} from "../../redux/services";

const index = () => {
  const dispatch = useDispatch<any>();
  const { photographers } = useSelector((state: any) => state.photographers);
  console.log(photographers);

  const handleChange = (event: any) => {
    console.log(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchPhotographers());
  }, [dispatch]);
  return (
    <div className="pt-6 pb-12">
      <h2 className="text-center uppercase text-4xl xl:text-5xl">Top 5</h2>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        id="countries"
        className="bg-gray-50 mx-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-min p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Filter by profession</option>
        <option value="wedding">Wedding</option>
        <option value="nature">Nature</option>
        <option value="modeling">Modeling</option>
        <option value="marketing">Marketing</option>
        <option value="wildlife">Wildlife</option>
      </select>

      <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
        {photographers.map((item: any, index: number) => (
          <div
            key={index + "-" + item.id}
            className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg b mt-4 w-100 mx-2  border-solid border-2 border-gray-100"
          >
            <div className="h-64 w-auto md:w-1/2">
              <img
                className="inset-0 h-full w-full object-cover object-center"
                src={item.photo}
              />
            </div>
            <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
              <div className="font-semibold text-lg leading-tight truncate">
                {item.name}
              </div>
              <div>{item.description}</div>
              <div className="text-sm text-gray-700 uppercase tracking-wide font-semibold">
                {item.loction}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
