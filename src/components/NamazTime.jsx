import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Loading } from "./Icons";
import { Link, useLocation } from "react-router-dom";

const NamazTime = () => {
  const loc = useLocation();

  const { data, isLoading } = useQuery(
    "vaqtlar",
    () => {
      return axios("https://islomapi.uz/api/present/day?region=Toshkent");
    },
    { refetchIntervalInBackground: 1800 }
  );

  if (isLoading)
    return (
      <div className="h-[90vh] w-full flex flex-col justify-center items-center gap-4 text-green-600 font-bold text-2xl">
        <Loading />
      </div>
    );

  const compareTime = function (tempTime, tempTime2, isHufton) {
    const date = new Date();
    const curTime = date.getHours() * 60 + date.getMinutes();
    const time = +(tempTime.split(":")[0] * 60) + +tempTime.split(":")[1];
    if (isHufton) {
      const time2 = +(tempTime2.split(":")[0] * 60) + +tempTime2.split(":")[1];
      return time < curTime || curTime < time2;
    } else {
      if (tempTime2) {
        const time2 =
          +(tempTime2.split(":")[0] * 60) + +tempTime2.split(":")[1];
        return time < curTime && curTime < time2;
      } else {
        return time < curTime;
      }
    }
  };

  const timeCom = (name, time1, time2, isHufton = false) => {
    return loc.pathname != "/vaqtlar" ? (
      <>
        <div
          className={`flex ${
            loc.pathname != "/vaqtlar" ? "sm:flex-col" : ""
          } items-center justify-between p-4 w-full h-full border-b-2 border-primary ${
            compareTime(time1, time2, isHufton)
              ? `bg-primary text-gray-900 font-bold`
              : `bg-accent/0 backdrop-blur-sm max-sm:hidden text-primary`
          }`}
        >
          <h1 className={`sm:hidden bg-accent text-primary px-2 rounded`}>
            Namoz Vaqtlari
          </h1>
          <div
            className={`flex items-center flex-col max-sm:bg-accent max-sm:text-primary max-sm:w-20 max-sm:h-20 justify-center rounded-full`}
          >
            <h1>{name}</h1> <p className="">{time1}</p>
          </div>
        </div>
      </>
    ) : (
      <>
        <div
          className={`flex ${
            loc.pathname != "/vaqtlar" ? "flex-col" : ""
          } items-center justify-between p-4 w-full h-full border-b-2 border-primary ${
            compareTime(time1, time2, isHufton)
              ? `bg-primary text-gray-900 font-bold`
              : `bg-accent/0 backdrop-blur-sm ${
                  loc.pathname != "/vaqtlar" ? "max-sm:hidden" : ""
                }`
          }`}
        >
          <h1>{name}</h1> <p>{time1}</p>
        </div>
      </>
    );
  };

  return loc.pathname != "/vaqtlar" ? (
    <Link
      to={"/vaqtlar"}
      className={`w-full ${loc.pathname != "/vaqtlar" ? "flex" : "grid"}`}
    >
      {timeCom("Бомдод", data.data.times.tong_saharlik, data.data.times.quyosh)}
      {timeCom("Қуёш", data.data.times.quyosh, data.data.times.peshin)}
      {timeCom("Пешин", data.data.times.peshin, data.data.times.asr)}
      {timeCom("Аср", data.data.times.asr, data.data.times.shom_iftor)}
      {timeCom("Шом", data.data.times.shom_iftor, data.data.times.hufton)}
      {timeCom("Ҳуфтон", data.data.times.hufton, data.data.times.quyosh, true)}
    </Link>
  ) : (
    <div className={`w-full ${loc.pathname != "/vaqtlar" ? "flex" : "grid"}`}>
      {timeCom("Бомдод", data.data.times.tong_saharlik, data.data.times.quyosh)}
      {timeCom("Қуёш", data.data.times.quyosh, data.data.times.peshin)}
      {timeCom("Пешин", data.data.times.peshin, data.data.times.asr)}
      {timeCom("Аср", data.data.times.asr, data.data.times.shom_iftor)}
      {timeCom("Шом", data.data.times.shom_iftor, data.data.times.hufton)}
      {timeCom("Ҳуфтон", data.data.times.hufton, data.data.times.quyosh, true)}
    </div>
  );
};

export default NamazTime;
