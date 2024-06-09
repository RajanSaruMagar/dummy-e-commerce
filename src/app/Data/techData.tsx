import React from "react";

type TTech = {
  id: number;
  image: string;
  title: string;
  price: string;
};

const Tech: TTech[] = [
  {
    id: 23,
    image: "/tech/airpod.png",
    title: "Air Pod",
    price: "Rs 899",
  },
  {
    id: 24,
    image: "/tech/gimbal.png",
    title: "Gimbal",
    price: "Rs 9,999",
  },
  {
    id: 25,
    image: "/tech/gopro.png",
    title: "Go Pro",
    price: "Rs 35,999",
  },
  {
    id: 26,
    image: "/tech/ps5.png",
    title: "PS5",
    price: "Rs 79,999",
  },
  {
    id: 206,
    image: "/tech/camera.png",
    title: "Camera",
    price: "Rs 1,79,999",
  },
  {
    id: 216,
    image: "/tech/iphone.png",
    title: "Iphone",
    price: "Rs 81,999",
  },
  {
    id: 226,
    image: "/tech/smartwatche.png",
    title: "Smart-Watch",
    price: "Rs 3,999",
  },
  {
    id: 236,
    image: "/tech/laptop.png",
    title: "Laptop",
    price: "Rs 73,999",
  },
];

export default Tech;
