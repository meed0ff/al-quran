import React from "react";
import { Link } from "react-router-dom";

import { buttonVariants } from "@/components/ui/button";
import NamazTime from "./NamazTime";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-2  justify-center items-center">
      <NamazTime />
      {/* <img
        className="h-[30vh]"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shahadah-1.svg/1200px-Shahadah-1.svg.png"
        alt=""
      /> */}
      <div className="flex gap-2">
        <Link
          className={`${buttonVariants({
            variant: "",
          })} flex flex-col justify-between max-h-auto h-auto w-32`}
          to={"quran"}
        >
          <img src="/quran.svg" alt="" height={80} />
          Қуръон
        </Link>
        <Link
          className={`${buttonVariants({
            variant: "",
          })} flex flex-col justify-between max-h-auto h-auto w-32`}
          to={"alloh-ismlari"}
        >
          <img src="/allah-ismlari.png" alt="" height={80} />
          Аллоҳ исмлари
        </Link>
        {/* <Link className={`${buttonVariants({ variant: "" })}`} to={"vaqtlar"}>
          Namoz vaqtlari
        </Link> */}
      </div>
    </div>
  );
};

export default HomePage;
