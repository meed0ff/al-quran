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
import { SuraContext, AyatContext } from "./components/Ayats";
// import "react-h5-audio-player/lib/styles.less";

function App() {
  const { sura } = useContext(SuraContext);
  const { ayat, setAyat } = useContext(AyatContext);

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
        className={`fixed bottom-8 left-2 right-2 backdrop-blur rounded-xl border-2 overflow-hidden transition-all ${
          sura.length == 0 || ayat == sura.length
            ? "opacity-0 translate-y-5 blur-3xl pointer-events-none"
            : ""
        }`}
      >
        <AudioPlayer
          src={`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${sura[ayat]}.mp3`}
          className="bg-green-900/50"
          onEnded={() => {
            setAyat(ayat + 1);
          }}
        />
      </div>
    </div>
  );
}

export default App;
