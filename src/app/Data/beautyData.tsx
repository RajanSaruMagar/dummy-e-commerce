import React from "react";

type TBeauty = {
    id: number;
  image: string;
  title: string;
  price: string;
 
};

const Beauty: TBeauty[] = [
    {
        id: 1,
        image : "/beauty/cleanser.png",
        title: "Cleanser",
        price: "Rs 250",
    },
    {
        id: 2,
        image : "/beauty/facewash.png",
        title: "Facewash",
        price: "Rs 300",
    },
    {
        id: 3,
        image : "/beauty/hairoil.png",
        title: "Hair Oil",
        price: "Rs 250",
    },
    {
        id: 4,
        image : "/beauty/lipstick.png",
        title: "Lipstick",
        price: "Rs 100",
    },
    {
        id: 5,
        image : "/beauty/moisturizer.png",
        title: "Moisturizer",
        price: "Rs 250",
    },
    {
        id: 6,
        image : "/beauty/perfumes.png",
        title: "Perfume",
        price: "Rs 200",
    },
    {
        id: 7,
        image : "/beauty/rollers.png",
        title: "Roller",
        price: "Rs 300",
    },
    {
        id: 8,
        image : "/beauty/sunscreen.png",
        title: "Sunscreen",
        price: "Rs 250",
    },
    {
        id: 9,
        image : "/beauty/vitaminc.png",
        title: "Vitamin",
        price: "Rs 250",
    },
]

export default Beauty;