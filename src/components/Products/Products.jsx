import React from "react";
import Heading from "../Shared/Heading.jsx";
import ProductCard from "./ProductCard.jsx";


import Image1 from "../../assets/product/p-1.jpg";
import Image2 from "../../assets/product/p-2.jpg";
import Image3 from "../../assets/product/p-3.jpg";
import Image4 from "../../assets/product/p-4.jpg";
import Image5 from "../../assets/product/p-5.jpg";
import Image6 from "../../assets/product/p-9.jpg";
import Image7 from "../../assets/product/p-7.jpg";


const ProductsData=[
    {
        id:1,
        img:Image1,
        title: "Boat Headphone",
        price: "120",
        aosDelay:"0",
    },
    {
        id:2,
        img:Image2,
        title: "Rocky Mountain",
        price: "420",
        aosDelay:"200",
    },
    {
        id:3,
        img:Image3,
        title: "Goggles",
        price: "320",
        aosDelay:"400",
    },
    {
        id:4,
        img:Image4,
        title: "Printed",
        price: "220",
        aosDelay:"600",
    },
];

const ProductsData2= [
    {
        id:1,
        img:Image5,
        title: "Boat Headphone",
        price: "120",
        aosDelay:"0",
    },
    {
        id:2,
        img:Image6,
        title: "Rocky Mountain",
        price: "420",
        aosDelay:"200",
    },
    {
        id:3,
        img:Image7,
        title: "Googles",
        price: "320",
        aosDelay:"400",
    },
    {
        id:4,
        img:Image5,
        title: "Printed",
        price: "220",
        aosDelay:"600",
    },
];

const Products = () => {
  return (
    <div>
      <div className="container">

        {/* Header Section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />


        {/* Body Section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />

      </div>
    </div>
  );
};

export default Products;
