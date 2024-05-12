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
      <div className="p-4 grid grid-cols-10 gap-2 max-lg:grid-cols-6 max-md:grid-cols-3 max-md:p-2 max-[420px]:grid-cols-2">
        {data.data.data.map((res, i) => {
          return (
            <Link
              to={`sura/${res.number}`}
              key={i}
              className={`flex flex-col justify-center items-center gap-2 h-auto ${buttonVariants(
                { variant: "" }
              )}`}
            >
              <h1 className="text-2xl bg-black/30 h-12 w-12 rounded-full flex justify-center items-center">
                {res.number}
              </h1>{" "}
              <h3>{res.englishName}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Quran;
