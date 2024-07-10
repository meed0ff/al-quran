import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { SuraName, SuraContext, AyatContext } from "./Ayats";
import { Loading } from "./Icons";

const Sura = () => {
  if (localStorage.getItem("lang") == null) {
    localStorage.setItem("lang", 0);
  }
  const props = useParams();
  const langs = ["uz.sodik", "ru.kuliev"];
  // const [langNum, setLangNum] = useState(0);
  const lang =
    langs[
      localStorage.getItem("lang") == null ? 0 : localStorage.getItem("lang")
    ];

  const nav = useNavigate();

  const [ayats, setAyats] = useState([]);
  const suraCtx = useContext(SuraContext);
  const { setSuraName } = useContext(SuraName);
  const { setAyat } = useContext(AyatContext);

  const {
    data: sura,
    isLoading,
    isFetching,
  } = useQuery(
    `sura${props.number}`,
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
    `sura-trans${props.number}`,
    () => {
      return axios(
        `https://api.alquran.cloud/v1/surah/${props.number}/${lang}`
      );
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    axios(`https://api.alquran.cloud/v1/surah/${props.number}/ar.alafasy`).then(
      (res) => {
        const tempayats = [];
        res.data.data.ayahs.map((ayat) => {
          // console.log(ayat.number);
          tempayats.push(ayat.number);
        });
        setAyats(tempayats);
      }
    );
  }, []);

  // const changeLang = function () {
  //   let langNumber = langNum + 1;
  //   setLangNum(langNumber >= langs.length ? 0 : langNumber);
  //   setTimeout(refetch, 10);
  //   localStorage.setItem("lang", langNum);
  // };

  if (
    isLoading ||
    transLoading
    // audioLoading ||
    // isFetching ||
    // audioFetching ||
    // transFetching
  )
    return (
      <div className="h-[90vh] w-full flex flex-col justify-center items-center gap-4 text-green-600 font-bold text-2xl">
        {/* <h1 className="">Loading...</h1> */}
        <Loading />
      </div>
    );

  return (
    <div>
      <h1 className={`bg-primary w-full text-center text-accent text-2xl py-1`}>
        {sura.data.data.englishName} - {sura.data.data.name}
      </h1>

      <div className="flex flex-col">
        {sura.data.data.ayahs.map((res, i) => {
          return (
            <div
              className="bg-accent text-primary border-b border-primary py-2 flex flex-col items-center justify-center cursor-pointer"
              key={i}
              onClick={() => {
                setSuraName(
                  `${sura.data.data.englishName} - ${sura.data.data.name}`
                );
                suraCtx.setSura(ayats);
                setAyat(null);
                setAyat(i);
              }}
            >
              <div className="text-green-600 bg-gray-900 w-6 h-6 rounded-full flex items-center justify-center">
                <h1>{res.numberInSurah}</h1>
              </div>
              <h1 className="text-4xl text-center m-2">{res.text}</h1>
              <h1 className="text-lg text-center m-4">
                {trans.data.data.ayahs[i].text}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sura;
