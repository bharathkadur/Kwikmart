import React, { useEffect, useState } from "react"
import SlideCard from "./SlideCard"
import Sdata from "./Sdata";
import SaleEndMessage from "./SaleEndMessage";

const SliderHome = () => {
    const [showSaleStartMessage, setShowSaleStartMessage] = useState(true);
  const [showProductCarousel, setShowProductCarousel] = useState(false);
  const [showSaleEndMessage, setShowSaleEndMessage] = useState(false);
  const [timer, setTimer] = useState(300); 

  useEffect(() => {

    const productCarouselTimeout = setTimeout(() => {
      setShowSaleStartMessage(false);
      setShowProductCarousel(true);
    }, 5 * 60 * 1000);

    const saleEndTimeout = setTimeout(() => {
      setShowProductCarousel(false);
      setShowSaleEndMessage(true);
    }, 30 * 60 * 1000);

    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearTimeout(productCarouselTimeout);
      clearTimeout(saleEndTimeout);
      clearInterval(timerInterval);
    };
  }, []);

    return (
        <>
        
        {showSaleStartMessage && (
        <p>
          Sale will start in {Math.floor(timer / 60)} minutes and {timer % 60} seconds
        </p>
      )}

            <section className='homeSlide contentWidth'>
                <div className='container'>
                {showProductCarousel && <SlideCard products={Sdata} />}
                    {/* <SlideCard /> */}
                </div>
            </section>
            {showSaleEndMessage && <SaleEndMessage />}
        </>
    )
}

export default SliderHome