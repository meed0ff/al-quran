import React, { useEffect } from "react";
import { allohNames } from "./AllohNames";
import { useParams } from "react-router-dom";

const AllohName = () => {
  const props = useParams();

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container py-2 flex flex-col justify-center items-center gap-4">
        <img
          src={`/AllohNames/${+props.number + 1}.jpg`}
          className="rounded-xl max-h-[70vh] max-sm:h-[40vh] w-[60%] max-md:w-[90%] object-cover object-bottom"
          alt="preview"
        />
        <h1 className="flex justify-center items-center gap-2 text-4xl font-bold text-primary mt-2">
          <h1 className="text-2xl bg-primary text-accent h-12 w-12 rounded-full flex justify-center items-center max-md:-order-2">
            {+props.number + 1}
          </h1>
          <span className="text-6xl">{allohNames[props.number].arabic}</span> -{" "}
          <span>{allohNames[props.number].name}</span>
        </h1>
        <p className="text-2xl opacity-80">{allohNames[props.number].desc}</p>
      </div>
    </>
  );
};

export default AllohName;
