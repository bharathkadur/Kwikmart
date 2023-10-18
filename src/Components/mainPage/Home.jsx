// src/Components/mainPage/Home.jsx

import React from "react";
import SliderHome from "./Slider"; // Corrected import path
import ProductCard from "../product/ProductCard"; // Corrected import path
import "./Home.css";

const Home = () => {
    return (
        <>
            <section className='home'>
                <div className='container d_flex'>
                    <SliderHome />
                </div>
            </section>
            <ProductCard />
        </>
    );
};

export default Home;
