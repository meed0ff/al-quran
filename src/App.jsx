import { Route, Routes } from "react-router";
import "./App.css";
import { Button } from "@/components/ui/button";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import Quran from "./components/Quran";
import React from "react";
import NamazTime from "./components/NamazTime";
// import Sura from "./components/Sura";
const Sura = React.lazy(() => import("./components/Sura"));

function App() {
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
      <Footer />
    </div>
  );
}

export default App;
