import React from "react";

type TDress= {
    id: number;
    image : string;
    title : string;
    price : string;
}

const Dress: TDress[] = [
    {
        id: 10,
        image: "/dress/jersey.png",
        title: "Jersey",
        price: "RS 4,999",
    },
    {
        id: 11,
        image: "/dress/coat.png",
        title: "COAT",
        price: "$ 1299",
    },
    {
        id: 12,
        image: "/dress/pant.png",
        title: "PANT",
        price: "RS 1299",
    },
    {
        id: 13,
        image: "/dress/shirt.png",
        title: "Shirt",
        price: "RS 999",
    },
    {
        id: 14,
        image: "/dress/shocks.png",
        title: "Shock",
        price: "RS 399",
    },
    {
        id: 15,
        image: "/dress/shoes.png",
        title: "Shoes",
        price: "RS 12,99,99",
    },
    {
        id: 16,
        image: "/dress/shorts.png",
        title: "Shorts",
        price: "RS 799",
    },
    {
        id: 17,
        image: "/dress/whoodie.png",
        title: "Whoodie",
        price: "RS 1799",
    },
]
export default Dress;