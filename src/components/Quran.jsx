import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { buttonVariants } from "@/components/ui/button";

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
      <div className="p-2 grid grid-cols-8 md:gap-2 max-lg:grid-cols-5 max-md:grid-cols-1 max-md:p-0">
        {data.data.data.map((res, i) => {
          return (
            <Link
              to={`sura/${res.number}`}
              key={i}
              className={`flex md:flex-col justify-center max-md:justify-between items-center max-md:border-x-0 max-md:border-b max-md:rounded-none h-auto ${buttonVariants(
                { variant: "" }
              )}`}
            >
              <h1 className="text-2xl bg-black/30 h-12 w-12 rounded-full flex justify-center items-center max-md:-order-2">
                {res.number}
              </h1>
              <h2 className="text-xl">{res.name}</h2>
              <div className="max-md:-order-1 flex flex-col items-center">
                <h3 className="text-lg">{res.englishName}</h3>
                <p className="text-xs mt-2">
                  {res.numberOfAyahs} ayatdan iborat
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Quran;
