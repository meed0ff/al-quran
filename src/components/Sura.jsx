import axios from "axios";
import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "./ui/button";
import { FaLanguage, IonCaretBack, LineMdPlayTwotone } from "./Icons";
import { SuraContext, AyatContext } from "./Ayats";

const Sura = () => {
  const props = useParams();
  const langs = ["uz.sodik", "ru.kuliev"];
  const [langNum, setLangNum] = useState(0);
  const lang = langs[localStorage.getItem("lang")];

  const nav = useNavigate();

  const [ayats, setAyats] = useState([]);
  const suraCtx = useContext(SuraContext);
  const { ayat, setAyat } = useContext(AyatContext);

  const {
    data: sura,
    isLoading,
    isFetching,
  } = useQuery(
    "sura",
    () => {
      return axios(`https://api.alquran.cloud/v1/surah/${props.number}`);
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const {
    data: trans,
    isLoading: transLoading,
    isFetching: transFetching,
    refetch,
  } = useQuery(
    "sura-trans",
    () => {
      return axios(
        `https://api.alquran.cloud/v1/surah/${props.number}/${lang}`
      );
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const {
    data: suraAudio,
    isLoading: audioLoading,
    isFetching: audioFetching,
  } = useQuery(
    "sura-audio",
    () => {
      const fetch = axios(
        `https://api.alquran.cloud/v1/surah/${props.number}/ar.alafasy`
      );
      fetch.then((res) => {
        const tempayats = [];
        res.data.data.ayahs.map((ayat) => {
          // console.log(ayat.number);
          tempayats.push(ayat.number);
        });
        setAyats(tempayats);
      });
      return fetch;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const changeLang = function () {
    let langNumber = langNum + 1;
    setLangNum(langNumber >= langs.length ? 0 : langNumber);
    setTimeout(refetch, 10);
    localStorage.setItem("lang", langNum);
  };

  if (
    isLoading ||
    transLoading ||
    audioLoading ||
    isFetching ||
    audioFetching ||
    transFetching
  )
    return (
      <div className="h-[90vh] w-full flex flex-col justify-center items-center gap-4 text-green-600 font-bold text-2xl">
        <i className="fa-solid fa-spinner fa-spin-pulse fa-2xl"></i>
        <h1 className="">Loading...</h1>
      </div>
    );

  return (
    <div>
      <div className="flex justify-between p-4">
        <Button onClick={() => nav(-1)} className={"px-2"}>
          <IonCaretBack />
        </Button>
        <Button className={`flex gap-2`} onClick={changeLang}>
          <FaLanguage />
          <p>{lang.split(".")[0].toUpperCase()}</p>
        </Button>
      </div>

      <h1 className={`w-full text-center text-green-600 text-2xl mt-4 mb-4`}>
        {sura.data.data.englishName} - {sura.data.data.name}
      </h1>

      <div className="p-4 flex flex-col gap-4">
        {sura.data.data.ayahs.map((res, i) => {
          return (
            <div
              className="bg-green-600 p-2 mt-2 mb-2 flex flex-col items-center justify-center rounded text-gray-900"
              key={i}
            >
              <div className="text-green-600 bg-gray-900 w-6 h-6 rounded-full flex items-center justify-center">
                <h1>{res.numberInSurah}</h1>
              </div>
              <h1 className="text-2xl text-center m-4">
                {trans.data.data.ayahs[i].text}
              </h1>
              <h1 className="text-4xl text-center m-2">{res.text}</h1>
              {/* {console.log(suraAudio.data.data.ayahs[i].number)} */}
              <Button
                variant="secondary"
                onClick={() => {
                  suraCtx.setSura(ayats);
                  setAyat(i);
                }}
                className={"px-2 mt-2"}
              >
                <LineMdPlayTwotone />
              </Button>
              <img
                src="https://www.quronim.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg2.a8b3a2d7.png&w=640&q=75"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sura;
