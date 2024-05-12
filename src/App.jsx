import { Route, Routes } from "react-router";
import "./App.css";
import "./App.less";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import Quran from "./components/Quran";
import React, { useContext, useState } from "react";
import NamazTime from "./components/NamazTime";
// import Sura from "./components/Sura";
const Sura = React.lazy(() => import("./components/Sura"));

import AudioPlayer from "react-h5-audio-player";
import { SuraName, SuraContext, AyatContext } from "./components/Ayats";
import { LineMdCloseCircleTwotone } from "./components/Icons";
// import "react-h5-audio-player/lib/styles.less";

function App() {
  const { sura, setSura } = useContext(SuraContext);
  const { ayat, setAyat } = useContext(AyatContext);
  const { suraName } = useContext(SuraName);

  return (
    <div className="pt-10 pb-6">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quran" element={<Quran />} />
        <Route
          path="/quran/sura/:number"
          element={
            <React.Suspense fallback={"Loading..."}>
              <Sura />
            </React.Suspense>
          }
        />
        <Route path="/namaz-times" element={<NamazTime />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <div
        className={`${
          sura.length == 0 || ayat == sura.length ? "hidden" : ""
        } mt-24`}
      ></div>
      <Footer />
      <div
        className={`fixed flex flex-col bottom-8 left-2 right-2 bg-green-900/50 backdrop-blur rounded-xl border-2 overflow-hidden transition-all ${
          sura.length == 0 || ayat == sura.length
            ? "opacity-0 translate-y-5 blur-3xl pointer-events-none"
            : ""
        }`}
      >
        <div className="flex justify-between p-1">
          <div className="flex flex-col text-green-400">
            <h1>{suraName}</h1>
            <h2>Ayah {ayat + 1}</h2>
          </div>
          <button
            className="text-green-400"
            onClick={() => {
              setSura([]);
            }}
          >
            {sura.length == 0 || ayat == sura.length ? null : (
              <LineMdCloseCircleTwotone />
            )}
          </button>
        </div>
        <AudioPlayer
          src={`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${sura[ayat]}.mp3`}
          className="bg-transparent shadow-none"
          showSkipControls
          onClickPrevious={() => {
            if (ayat > 0) setAyat(ayat - 1);
          }}
          onClickNext={() => {
            setAyat(ayat + 1);
          }}
          onEnded={() => {
            setAyat(ayat + 1);
          }}
        />
      </div>
    </div>
  );
}

export default App;
