import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { womenClothings } from '../Data/Women/WomenClothings';
import { womenAccessories } from '../Data/Women/WomenAccessories';
import { womenFootwears } from '../Data/Women/WomenFootwears';
import Shopwomen from '../Asset/shopwomen-banner.jpg'
import Womenfeat from "../Asset/womenfeature.png";
import Womenfeat1 from "../Asset/womenfeature1.png";
import Womenfeat2 from "../Asset/womenfeature2.png";
import Womenfeat3 from "../Asset/womenfeature3.png";
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'


function Women() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state);
  console.log(cart);
  const [filterCloth, setFilterCloth,] = useState("");
  const [filteredCloth, setFilteredCloth] = useState(womenClothings);

  const [filterFw, setFilterFw,] = useState("");
  const [filteredFw, setFilteredFw] = useState(womenFootwears);

  const [filterAcc, setFilterAcc,] = useState("");
  const [filteredAcc, setFilteredAcc] = useState(womenAccessories);

    ////////////////////Clothings/////////////////////

  useEffect(() => {
    setFilteredCloth(
      womenClothings.filter((womenClothing) =>
        Object.keys(womenClothing).some((key) =>
          womenClothing[key]
            .toString()
            .toLowerCase()
            .includes(filterCloth.toString().toLowerCase())
        )
      )
    );
  }, [filterCloth]);

  const searchWomenClothings = (event) => {
    setFilterCloth(event.target.value);
};

function filterBackClothings() {
  setFilteredCloth(womenClothings)
}


////////////////////Footwears/////////////////////

useEffect(() => {
  setFilteredFw(
    womenFootwears.filter((womenFootwear) =>
      Object.keys(womenFootwear).some((key) =>
        womenFootwear[key]
          .toString()
          .toLowerCase()
          .includes(filterFw.toString().toLowerCase())
      )
    )
  );
}, [filterFw]);

const searchWomenFootwears = (event) => {
  setFilterFw(event.target.value);
};

function filterBackFootwears() {
  setFilteredFw(womenFootwears)
}

////////////////////Accessories/////////////////////

useEffect(() => {
  setFilteredAcc(
    womenAccessories.filter((womenAccessory) =>
      Object.keys(womenAccessory).some((key) =>
        womenAccessory[key]
          .toString()
          .toLowerCase()
          .includes(filterAcc.toString().toLowerCase())
      )
    )
  );
}, [filterAcc]);

const searchWomenAccessories = (event) => {
  setFilterAcc(event.target.value);
};

function filterBackAccessories() {
  setFilteredAcc(womenAccessories)
}

const notify = ()=>{
  toast.success('Added to bag successfully') 
 }


      return (
      <main id="home">
  <div className='shop-banner' id="bannerwomen">
      <img src={Shopwomen} alt="men-banner" className='shop-banner-women'></img>
      </div>
  
      
      <h1 className='title-category2' id="womencategories">WOMEN'S SHOP</h1>
      <h1 className='title-category'>Categories</h1>
      <div className='men-featured-products'>
      <a href="#clothwomen"><img src={Womenfeat} alt="featured-products" className='men-featured-img'></img></a>
      <a href="#accwomen"> <img src={Womenfeat2} alt="featured-products" className='men-featured-img'></img></a>   
      <a href="#footwomen"><img src={Womenfeat1} alt="featured-products" className='men-featured-img'></img></a>
      <a href="#footwomen"><img src={Womenfeat3} alt="featured-products" className='men-featured-img'></img></a>
 </div>

   <br className='men-br'></br>
            <br className='men-br'></br>
            <br className='men-br'></br>
        <hr className='men-br'></hr>
  
        <div className='shop-container'>
        <div className='btn-tags'>

<div className='filter-products'>
<label className='filter-text2 form-lable h4'>Search</label>
<input id="search-input"
className='form-control mx-1' 
placeholder='Clothings'
type="text"
value={filterCloth}
onChange={searchWomenClothings.bind(this)}
/>

</div>

  <h3 className='filter-text'>Clothing : Tags</h3>

  <h4 className='filter-text'>By Names</h4>
        <button className="tag-button" value="All" onClick={filterBackClothings}>All</button>
        <button className="tag-button" value="Crew neck"onClick={searchWomenClothings}>Crew neck</button>
        <button className="tag-button" value="Hoodie"onClick={searchWomenClothings}>Hoodie</button>
        <button className="tag-button" value="Lsleeve" onClick={searchWomenClothings}>Long sleeve</button>
        <button className="tag-button" value="Polo" onClick={searchWomenClothings}>Polo</button>
        <button className="tag-button" value="Tank top" onClick={searchWomenClothings}>Tank top</button>
        <button className="tag-button" value="Dress" onClick={searchWomenClothings}>Dress</button>
        <button className="tag-button" value="Wide neck" onClick={searchWomenClothings}>Wide neck</button>

    <h4 className='filter-text'>By $$$ </h4> 
        <button className="tag-button" value="19.99" onClick={searchWomenClothings}>19.99</button>
        <button className="tag-button" value="29.99" onClick={searchWomenClothings}>29.99</button>
        <button className="tag-button" value="39.99" onClick={searchWomenClothings}>39.99</button>
      </div>

<div className='product-container'>
<h1 className='title-category' id="clothmen">CLOTHINGS</h1>
<a href="#accwomen"><div className='scroller'></div></a>

<div className='container-list'>
        {filteredCloth.map((item) => {
          item.quantity = 1;
          return (
            <div className="product-container" key={item.id}>
            <img src={item.image} className="product-image" alt={item.name} />
              <div className='namebtn'>
              <h4 className='product-name-text'>{item.name}</h4>
              <div>$ {item.price}</div>
              <button className='add-cart-btn' onClick={() => {notify(); dispatch({ type: "ADD", payload: item })}}>
                add to cart
              </button>
            </div>
            </div>
          );
        })}
    </div>
    </div>
    </div> 
  
         

            <br></br>
            <br></br>
            <br></br>
            <div className='scroll-top'><a href="#clothmen">BACK TO TOP</a></div>
        <hr></hr>

        {/* --------------------------------------- */}



        <div className='shop-container'>
      <div className='btn-tags'>

      <div className='filter-products'>
  <label className='filter-text2 form-lable h4'>Search</label>
  <input id="search-input"
  className='form-control mx-1' 
  placeholder='Accessories'
  type="text"
  value={filterAcc}
  onChange={searchWomenFootwears.bind(this)}
  />

  </div>

  <h2 className='filter-text'>Accessories : Tags</h2>
 
 <h4 className='filter-text'>By Names</h4>
 <button className="tag-button" value="All" onClick={filterBackAccessories}>All</button>
 <button className="tag-button" value="Fashion"onClick={searchWomenAccessories}>Fashion</button>
 <button className="tag-button" value="Alligator" onClick={searchWomenAccessories}>Alligator</button>
 <button className="tag-button" value="Wallet" onClick={searchWomenAccessories}>Wallet</button>
 <button className="tag-button" value="Shades" onClick={searchWomenAccessories}>Shades</button>
 <button className="tag-button" value="Korean" onClick={searchWomenAccessories}>Korean</button>
 <button className="tag-button" value="Perfume" onClick={searchWomenAccessories}>Perfume</button>
<h4 className='filter-text'>By $$$ </h4> 
 <button className="tag-button" value="12.99" onClick={searchWomenAccessories}>12.99</button>
 <button className="tag-button" value="14.99" onClick={searchWomenAccessories}>14.99</button>
 <button className="tag-button" value="17.99" onClick={searchWomenAccessories}>17.99</button>
</div>

<div className='product-container'>
<h1 className='title-category' id="accwomen">ACCESSORIES</h1>
 <a href="#footwomen"><div className='scroller'></div></a>


 <div className='container-list'>
        {filteredAcc.map((item) => {
          item.quantity = 1;
          return (
            <div className="product-container" key={item.id}>
            <img src={item.image} className="product-image" alt={item.name} />
              <div className='namebtn'>
              <h4 className='product-name-text'>{item.name}</h4>
              <div className='product-price-text'>$ {item.price}</div>
              <button className='add-cart-btn' onClick={() => {notify(); dispatch({ type: "ADD", payload: item })}}>
                add to cart
              </button>
            </div>
            </div>
          );
        })}
    </div>
    </div>
    </div>
    
         

            <br></br>
            <br></br>
            <br></br>
            
            <div className='scroll-top'><a href="#accwomen">BACK TO TOP</a></div>
        <hr></hr>

        {/* --------------------------------------- */}


        <div className='shop-container'>
      <div className='btn-tags'>

      <div className='filter-products'>
  <label className='filter-text2 form-lable h4'>Search</label>
  <input id="search-input"
  className='form-control mx-1' 
  placeholder='Footwears'
  type="text"
  value={filterFw}
  onChange={searchWomenAccessories.bind(this)}
  />

  </div>

  <h2 className='filter-text'> Footwears: Tags</h2>
 

<h4 className='filter-text'>By Names</h4>
 <button className="tag-button" value="All" onClick={filterBackFootwears}>All</button>
 <button className="tag-button" value="Twinkle"onClick={searchWomenFootwears}>Twinkle</button>
 <button className="tag-button" value="Half"onClick={searchWomenFootwears}>Half</button>
 <button className="tag-button" value="Korean" onClick={searchWomenFootwears}>Korean</button>
 <button className="tag-button" value="Sandals" onClick={searchWomenFootwears}>Sandals</button>
 <button className="tag-button" value="Fashion" onClick={searchWomenFootwears}>Fashion</button>
<h4 className='filter-text'>By $$$ </h4> 
<button className="tag-button" value="12.99" onClick={searchWomenFootwears}>12.99</button>
 <button className="tag-button" value="14.99" onClick={searchWomenFootwears}>14.99</button>
 <button className="tag-button" value="17.99" onClick={searchWomenFootwears}>17.99</button>
</div>
<div className='product-container'>
 <h1 className='title-category' id="footwomen">FOOTWEARS</h1>

 <div className='container-list'>
        {filteredFw.map((item) => {
          item.quantity = 1;
          return (
            <div className="product-container" key={item.id}>
            <img src={item.image} className="product-image" alt={item.name} />
              <div className='namebtn'>
              <h4 className='product-name-text'>{item.name}</h4>
              <div>$ {item.price}</div>
              <button className='add-cart-btn' onClick={() => {notify(); dispatch({ type: "ADD", payload: item })}}>
                add to cart
              </button>
            </div>
            </div>
          );
        })}
    </div>
    </div>
    </div>
            <br></br>
            <br></br>
            <br></br>
            
            <div className='scroll-top'><a href="#womencategories">BACK TO TOP</a></div>

   {/* --------------------------------------- */}

        
      </main>
      )

  
} 

export default Women
