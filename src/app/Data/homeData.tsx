import React from "react";

type THome = {
    id: number;
  image: string;
  title: string;
  price: string;
 
};

const Home: THome[] = [
    {
        id: 18,
        image : "/homeAppliance/bedsheet.png",
        title: "Bed sheet",
        price: "Rs 500",
    },
    {
        id: 19,
        image : "/homeAppliance/lamp.png",
        title: "Lamp",
        price: "Rs 900",
    },
    {
        id: 20,
        image : "/homeAppliance/pillow.png",
        title: "Pillow",
        price: "Rs 1000",
    },
    {
        id: 21,
        image : "/homeAppliance/sofa.png",
        title: "Sofa",
        price: "Rs 25000",
    },
    {
        id: 22,
        image : "/homeAppliance/table.png",
        title: "table",
        price: "Rs 7500",
    },
    
    {
        id: 202,
        image : "/homeAppliance/chair.png",
        title: "Chair",
        price: "Rs 1500",
    },
    
    {
        id: 212,
        image : "/homeAppliance/mirror.png",
        title: "Mirror",
        price: "Rs 7500",
    },
    
    {
        id: 222,
        image : "/homeAppliance/refrigerator.png",
        title: "Refrigerator",
        price: "Rs 75000",
    },
    
  
    
]

export default Home;