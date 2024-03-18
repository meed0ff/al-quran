import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { buttonVariants } from "@/components/ui/button"


const Quran = () => {
  const { data, isLoading, isFetching } = useQuery("suras", () => {
    return axios("https://api.alquran.cloud/v1/surah");
  });

  if (isLoading)
    return (
      <div className="h-[90vh] w-full flex flex-col justify-center items-center gap-4 text-green-600 font-bold text-2xl">
        <i className="fa-solid fa-spinner fa-spin-pulse fa-2xl"></i>
        <h1 className="">Loading...</h1>
      </div>
    );

  return (
    <div>
      <div className="p-4 grid grid-cols-4 gap-2">
        {data.data.data.map((res, i) => {
          return (
            <Link to={`sura/${res.number}`} key={i} className={`text-xl ${buttonVariants({variant:""})}`}>
              {res.number} {res.englishName}
            </Link>
          );
        })}
      </div>
    </div>
  );
  // return <>{console.log(data.data.data)}</>
};

export default Quran;
