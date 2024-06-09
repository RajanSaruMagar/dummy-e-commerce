"use client";
import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { RxAvatar } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import Data1 from "../components/data1";
import Data2 from "../components/data2";
import Data3 from "../components/data3";
import Data4 from "../components/data4";
import { useStoreData } from "./Data/store/store";
import { Button, Modal } from "flowbite-react";
import { useModalStore } from "./Data/store/model";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";
import { Footers } from "../components/footer";

const Landing = () => {
  const count = useStoreData((state) => state.count);
  const { openModal, setOpenModal } = useModalStore();
  const productsInCart = useStoreData((state) => state.products);
  const decrement = useStoreData((state) => state.decrement);

  return (
    <>
      <div className="h-full w-full bg-slate-500 ">
        <div className=" flex justify-between mx-60 py-5">
          <img src="/logo.png" alt=".." className=" w-12" />
          <div className=" border-2 rounded-md ">
            <label htmlFor="search">
              <input
                type="search"
                id="search"
                className="w-[400px] p-2"
                placeholder="Search..."
              />
            </label>
          </div>
          <div className="flex  gap-10">
            <div onClick={() => setOpenModal(true)}>
              <div className="flex  text-[30px] ">
                <TiShoppingCart />
                <sup className=" text-[15px]">{count}</sup>
              </div>
            </div>
          </div>
          <div className="text-[30px]">
            <div className="flex">
              <RxAvatar />
              <RiArrowDropDownLine />
            </div>
          </div>
        </div>
        <div className="text-black">
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <div className="font-semibold text-3xl mx-40 mt-10">My Cart</div>
            <div className="h-auto ">
              <div className="mx-40 pt-4 flex font-semibold gap-40">
                <p>Product img</p>
                <p>Product Name</p>
                <p>Price</p>
                <p>Status</p>
                <p>Payment</p>
                <p>Remove</p>
              </div>
              <div className=" ">
                {productsInCart.map(
                  (data: {
                    id: number;
                    image: string;
                    title: string;
                    price: string;
                  }) => {
                    return (
                      <>
                        <div
                          key={data.id}
                          className="mx-40 pt-4 flex font-semibold gap-44 border-y"
                        >
                          <img
                            src={data.image}
                            alt="error"
                            className="h-20 w-20"
                          />
                          <p>{data.title}</p>
                          <p>{data.price}</p>

                          <p className="text-red-500">undelivered</p>
                          <Link href="/payment" target="_blank">
                            <p className="text-red-500 px-2">not paid</p>
                          </Link>
                          <div
                            onClick={() => {
                              decrement(data);
                            }}
                          >
                            <AiOutlineDelete />
                          </div>
                        </div>
                      </>
                    );
                  }
                )}
              </div>
            </div>
            <Button onClick={() => setOpenModal(false)} className="text-black">
              close
            </Button>
          </Modal>
        </div>
        {/* ? */}
        <div className="flex gap-1 mx-60">
          <div>
            <img src="/carosuel/carosuel1.jpg" alt="error" className="h-80 " />
          </div>
          <div className="flex flex-col gap-1">
            <img src="/carosuel/carosuel2.jpg" alt="error" className="h-40 " />
            <img src="/carosuel/carosuel3.jpg" alt="error"  className="h-40 "/>
          </div>
          <div>
            <img src="/carosuel/carosuel4.jpg" alt="error" className="h-80" />
          </div>
        </div>
        {/* ? */}
        <div className="flex flex-col text-white gap-10 mx-60 my-10">
          <p className="text-3xl  font-bold ">Beauty Products</p>
          <div className="flex justify-between border-2 p-10 rounded-md bg-[#7e7474f5]">
            {" "}
            <Data1 />
          </div>
          <p className="text-3xl font-bold ">Dress</p>
          <div className="flex justify-between border-2 p-10 rounded-md bg-[#7e7474f5]">
            <Data2 />
          </div>
          <p className="text-3xl font-bold ">Home Appliance</p>
          <div className="flex gap-20 border-2 p-10 rounded-md bg-[#7e7474f5]">
            <Data3 />
          </div>
          <p className="text-3xl font-bold ">Tech</p>
          <div className="flex gap-20 border-2 p-10 rounded-md bg-[#7e7474f5]">
            <Data4 />
          </div>
        </div>
        <div className="mx-40">
          <Footers />
        </div>
      </div>
    </>
  );
};

export default Landing;
