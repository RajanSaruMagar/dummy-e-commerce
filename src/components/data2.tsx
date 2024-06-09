import React from "react";
import Dress from "../app/Data/dressData";
import { useStoreData } from "../app/Data/store/store";


const Data2 = () => {
  const increment = useStoreData((state) => state.increment);
  return (
    <>
      {Dress.map((data) => {
        return (
          <>
            <div className="">
              <img src={data.image} alt="error" className="h-20 w-20" />
              <div className="font-medium my-10">
                <div className="text-xl font-bold">{data.title}</div>
                <div>{data.price}</div>
                <button className="border-2 rounded-md px-2 bg-green-500 text-white" onClick={()=>increment(data)} >Add +</button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Data2;
