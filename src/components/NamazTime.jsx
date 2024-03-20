import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const NamazTime = () => {
  const { data, isLoading } = useQuery("namaz-times",() => { return axios("https://islomapi.uz/api/present/day?region=Toshkent"); }, { refetchIntervalInBackground: 1800 });

  if (isLoading)
    return (
      <div className="h-[90vh] w-full flex flex-col justify-center items-center gap-4 text-green-600 font-bold text-2xl">
        <i className="fa-solid fa-spinner fa-spin-pulse fa-2xl"></i>
        <h1 className="">Loading...</h1>
      </div>
    );

  const compareTime = function (tempTime, tempTime2) {
    const date = new Date();
    const curTime = date.getHours() * 60 + date.getMinutes();
    const time = +(tempTime.split(":")[0] * 60) + +tempTime.split(":")[1];
    if (tempTime2) {
      const time2 = +(tempTime2.split(":")[0] * 60) + +tempTime2.split(":")[1];
      return time < curTime && curTime < time2;
    } else {
      return time < curTime;
    }
  };

  return (
    <div className="flex flex-wrap gap-2 items-center justify-center translate-y-[35vh] max-sm:gap-1">
      <div
        className={`flex flex-col items-center justify-center p-4 w-22 h-22 rounded-full ${
          compareTime(data.data.times.tong_saharlik, data.data.times.quyosh)
            ? "bg-primary text-gray-900"
            : ""
        }`}
      >
        <h1>Tong</h1> <p>{data.data.times.tong_saharlik}</p>
      </div>
      <div
        className={`flex flex-col items-center justify-center p-4 w-22 h-22 rounded-full ${
          compareTime(data.data.times.quyosh, data.data.times.peshin)
            ? "bg-primary text-gray-900"
            : ""
        }`}
      >
        <h1>Quyosh</h1> <p>{data.data.times.quyosh}</p>
      </div>
      <div
        className={`flex flex-col items-center justify-center p-4 w-22 h-22 rounded-full ${
          compareTime(data.data.times.peshin, data.data.times.asr)
            ? "bg-primary text-gray-900"
            : ""
        }`}
      >
        <h1>Peshin</h1> <p>{data.data.times.peshin}</p>
      </div>
      <div
        className={`flex flex-col items-center justify-center p-4 w-22 h-22 rounded-full ${
          compareTime(data.data.times.asr, data.data.times.shom_iftor)
            ? "bg-primary text-gray-900"
            : ""
        }`}
      >
        <h1>Asr</h1> <p>{data.data.times.asr}</p>
      </div>
      <div
        className={`flex flex-col items-center justify-center p-4 w-22 h-22 rounded-full ${
          compareTime(data.data.times.shom_iftor, data.data.times.hufton)
            ? "bg-primary text-gray-900"
            : ""
        }`}
      >
        <h1>Shom</h1> <p>{data.data.times.shom_iftor}</p>
      </div>
      <div
        className={`flex flex-col items-center justify-center p-4 w-22 h-22 rounded-full ${
          compareTime(data.data.times.hufton) ? "bg-primary text-gray-900" : ""
        }`}
      >
        <h1>Hufton</h1> <p>{data.data.times.hufton}</p>
      </div>
    </div>
  );
};

export default NamazTime;
