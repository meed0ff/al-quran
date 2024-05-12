import { createContext, useState } from "react";

export const SuraContext = createContext([]);
export const AyatContext = createContext(1);

export function AyatsProvider({ children }) {
  const [sura, setSura] = useState([]);
  const [ayat, setAyat] = useState(0);

  return (
    <>
      <SuraContext.Provider value={{ sura, setSura }}>
        <AyatContext.Provider value={{ ayat, setAyat }}>
          {children}
        </AyatContext.Provider>
      </SuraContext.Provider>
    </>
  );
}
