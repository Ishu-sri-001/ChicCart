import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import headphone from "./assets/hero/headphone.png";
import Products from "./components/Products/Products";
import SmartWatch2 from "./assets/category/SmartWatch2.png"
import Blog from "./components/Blog/Blog";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";


const BannerData=  {
    discount:"40% OFF",
    title: "Fine Smile",
    date: "15 July to 23 July",
    image: headphone,
    title2:"Air Solo Bass",
    title3: "Summer Sale",
    title4:"Experience unmatched sound quality with Air Solo Bass headphones. Don't miss our exclusive Summer Sale!",
    bgColor: "#f42c37",
  };

  const BannerData2= {
    discount:"30% OFF",
    title: "Happy Hours",
    date: "14 July to 18 July",
    image: SmartWatch2,
    title2:"Smart Solo",
    title3: "Summer Sale",
    title4:"Don't miss our exclusive Summer Sale from 14 July to 18 July. Experience the cutting-edge features of the Smart Solo Smartwatch at an unbeatable price!",
    bgColor: "#2dcc7f",
  };

const App = () => {

  const [orderPopup,setOrderPopup]= React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(()  => {
    AOS.init(
      { 
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      });
      AOS.refresh();
  }, []);

  return  (
   <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
    <Navbar handleOrderPopup={handleOrderPopup}/>
     <Hero handleOrderPopup={handleOrderPopup}/>
    <Category />
    <Category2/>
    <Services />
    <Banner data={BannerData} />
    <Products/>
    <Banner data={BannerData2} />
    <Blog />
    <Partners />
    <Footer />
    <Popup orderPopup={orderPopup}
        handleOrderPopup={handleOrderPopup}/>
  </div>
  );
};

export default App;

