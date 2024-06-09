import React from "react";
import Home from "../app/Data/homeData";
import { useStoreData } from "../app/Data/store/store";

const Data3 = () => {
  const increment = useStoreData((state) => state.increment);
  return (
    <>
      {Home.map((data) => {
        return (
          <>
            <div className="">
              <img src={data.image} alt="error" className="h-20 w-20" />
              <div className="font-medium my-10">
                <div className="text-xl font-bold">{data.title}</div>
                <div>{data.price}</div>
                <button
                  className="border-2 rounded-md px-2 bg-green-500 text-white"
                  onClick={()=>increment(data)}
                >
                  Add +
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Data3;
