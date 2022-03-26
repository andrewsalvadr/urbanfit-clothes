import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import {  A11y, Autoplay} from 'swiper';
import 'swiper/css/autoplay'
import {  Link } from 'react-router-dom'
import Banner1 from "../Asset/banner1.jpg"
import Banner2 from "../Asset/banner2.jpg"
import Banner3 from "../Asset/banner3.jpg"
import Mencategory from "../Asset/shopmen.png"
import Womencategory from "../Asset/shopwomen.png"
import Kidscategory from "../Asset/shopkids.png"
import ShippingPromo from '../Asset/shipping-promo.png'
import ShopCares from '../Asset/shopcares.png'
import ShopKidsBanner from '../Asset/shopkidsbanner1.png'
import ShopMenBanner from '../Asset/menshopbanner1.png'
import ShopWomenBanner from '../Asset/womenshopbanner1.png'
import ShopCaresBanner from '../Asset/shopcaresbanner.png'

function Home () {
  return (
    <div className='App' id="home">
        <div className='swiper-section'>
        <Swiper
      // install Swiper modules
      modules={[ A11y, Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <div className='banner2-shopnowbtn'>
      <SwiperSlide>
      <img src={Banner2} alt="banner-logo" className='banner-img2'></img>
      <a href="#categoryhome"><button className='banner-quote3'>STYLE IN</button></a>
      <a href="#categoryhome"><button className='shopnow-btn2'>SHOP NOW</button></a>
      <a href="#categoryhome"><button className='banner-quote4'>EVERY</button></a>
      <a href="#categoryhome"><button className='banner-quote5'>STORY</button></a>
        </SwiperSlide>
        </div>

        <div className='banner3-shopnowbtn'>
      <SwiperSlide>
      <img src={Banner3} alt="banner-logo" className='banner-img3'></img>
      <a href="#categoryhome"><button className='banner-quote6'>SMART CLOTHING</button></a>
      <a href="#categoryhome"><button className='shopnow-btn3'>SHOP NOW</button></a>
      <a href="#categoryhome"><button className='banner-quote7'>EVERYDAY LIVING</button></a>
        </SwiperSlide>
        </div>

        <div className='banner2-shopnowbtn'>
      <SwiperSlide>
      <img src={Banner1} alt="banner-logo" className='banner-img'></img>
      <a href="#categoryhome"><button className='banner-quote'>INSPIRE STYLE</button></a>
      <a href="#categoryhome"><button className='shopnow-btn'>SHOP NOW</button></a>
      <a href="#categoryhome"><button className='banner-quote1'>BE BOLD</button></a>
      <a href="#categoryhome"><button className='banner-quote2'>BE YOU</button></a>
        </SwiperSlide>
        </div>


    </Swiper>
    </div>


    <div className='category-section2'>
      <main>
    <Link to="/cart"> <img src={ShippingPromo} alt="promo" className='category-img2'/></Link>
      <Link to="/men"> <img src={ShopMenBanner} alt="promo" className='category-img2'/></Link>
      <Link to="/women"> <img src={ShopWomenBanner} alt="promo" className='category-img2'/>   </Link>   
      <Link to="/kids">  <img src={ShopKidsBanner} alt="promo" className='category-img2'/></Link>
      <Link to="/shopcares">  <img src={ShopCaresBanner} alt="promo" className='category-img2'/></Link>
      </main>
    </div>


        <div className='category-section' id="categoryhome">
      <div>
    <Link to="/men"><img src={Mencategory} alt="product-category" className='category-img'/></Link>
    </div>
    <div>
    <Link to="/women"><img src={Womencategory} alt="product-category" className='category-img'/></Link>
    </div>
    <div>
    <Link to="/kids"><img src={Kidscategory} alt="product-category" className='category-img'/></Link>
    </div>
    <div>
    <Link to="/shopcares"><img src={ShopCares} alt="product-category" className='category-img'/></Link>
    </div>
    </div>

 </div>




  );
}

export default Home;
