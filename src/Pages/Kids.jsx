import { useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { kidsClothings } from '../Data/Kids/KidsClothings';
import { kidsFootwears } from '../Data/Kids/KidsFootwears';
import { kidsAccessories } from '../Data/Kids/KidsAccessories'
import ShopKidsBanner from '../Asset/shopkids-banner.jpg'
import Kidsfeat from "../Asset/kidsfeature.png"
import Kidsfeat1 from "../Asset/kidsfeature1.png"
import Kidsfeat2 from "../Asset/kidsfeature2.png"
import Kidsfeat3 from "../Asset/kidsfeature3.png"
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'


function Kids() {
  const dispatch = useDispatch();

  const [filterCloth, setFilterCloth,] = useState("");
  const [filteredCloth, setFilteredCloth] = useState(kidsClothings);

  const [filterFw, setFilterFw,] = useState("");
  const [filteredFw, setFilteredFw] = useState(kidsFootwears);

  const [filterAcc, setFilterAcc,] = useState("");
  const [filteredAcc, setFilteredAcc] = useState(kidsAccessories);
  
    ////////////////////Clothings/////////////////////

  useEffect(() => {
    setFilteredCloth(
      kidsClothings.filter((kidsClothing) =>
        Object.keys(kidsClothing).some((key) =>
          kidsClothing[key]
            .toString()
            .toLowerCase()
            .includes(filterCloth.toString().toLowerCase())
        )
      )
    );
  }, [filterCloth]);

  const searchKidsClothings = (event) => {
    setFilterCloth(event.target.value);
};

function filterBackClothings() {
  setFilteredCloth(kidsClothings)
}


////////////////////Footwears/////////////////////

useEffect(() => {
  setFilteredFw(
    kidsFootwears.filter((kidsFootwear) =>
      Object.keys(kidsFootwear).some((key) =>
        kidsFootwear[key]
          .toString()
          .toLowerCase()
          .includes(filterFw.toString().toLowerCase())
      )
    )
  );
}, [filterFw]);

const searchKidsFootwears = (event) => {
  setFilterFw(event.target.value);
};

function filterBackFootwears() {
  setFilteredFw(kidsFootwears)
}

////////////////////Accessories/////////////////////

useEffect(() => {
  setFilteredAcc(
    kidsAccessories.filter((kidsAccessory) =>
      Object.keys(kidsAccessory).some((key) =>
        kidsAccessory[key]
          .toString()
          .toLowerCase()
          .includes(filterAcc.toString().toLowerCase())
      )
    )
  );
}, [filterAcc]);

const searchKidsAccessories = (event) => {
  setFilterAcc(event.target.value);
};

function filterBackAccessories() {
  setFilteredAcc(kidsAccessories)
}

const notify = ()=>{
  toast.success('Added to bag successfully') 
 }

      return (
        <main id="home">
        <div className='shop-banner' id="bannerkids">
              <img src={ShopKidsBanner} alt="kids-banner" className='shop-banner-kids'></img>
              </div>
              
              <h1 className='title-category2' id="kidscategories">KID'S SHOP</h1>
              <div className='men-featured-products'>
              <a href="#clothkids"><img src={Kidsfeat} alt="featured-products" className='men-featured-img'></img></a>
              <a href="#footkids"><img src={Kidsfeat1} alt="featured-products" className='men-featured-img'></img></a>
              <a href="#acckids"><img src={Kidsfeat2} alt="featured-products" className='men-featured-img'></img></a>  
              <a href="#acckids"><img src={Kidsfeat3} alt="featured-products" className='men-featured-img'></img></a>
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
onChange={searchKidsClothings.bind(this)}
/>

</div>

  <h3 className='filter-text'>Clothing : Tags</h3>

  <h4 className='filter-text'>By Names</h4>
        <button className="tag-button" value="All" onClick={filterBackClothings}>All</button>
        <button className="tag-button" value="Crew neck"onClick={searchKidsClothings}>Crew neck</button>
        <button className="tag-button" value="Hoodie"onClick={searchKidsClothings}>Hoodie</button>
        <button className="tag-button" value="Polo" onClick={searchKidsClothings}>Polo</button>
        <button className="tag-button" value="Lsleeve" onClick={searchKidsClothings}>Long sleeve</button>
        <button className="tag-button" value="Tank top" onClick={searchKidsClothings}>Tank top</button>
        <button className="tag-button" value="V-neck" onClick={searchKidsClothings}>V-neck</button>
    <h4 className='filter-text'>By $$$ </h4> 
        <button className="tag-button" value="19.99" onClick={searchKidsClothings}>19.99</button>
        <button className="tag-button" value="29.99" onClick={searchKidsClothings}>29.99</button>
      </div>
<div className='product-container'>
<h1 className='title-category' id="clothmen">CLOTHINGS</h1>
<a href="#acckids"><div className='scroller'></div></a>

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
  onChange={searchKidsAccessories.bind(this)}
  />

  </div>

        <h2 className='filter-text'>Accessories: Tags</h2>
 
        <h4 className='filter-text'>By Names</h4>
        <button className="tag-button" value="All" onClick={filterBackAccessories}>All</button>
        <button className="tag-button" value="Bag"onClick={searchKidsAccessories}>Bag</button>
        <button className="tag-button" value="Quality" onClick={searchKidsAccessories}>Quality</button>
        <button className="tag-button" value="Stripe" onClick={searchKidsAccessories}>Stripe</button>

    <h4 className='filter-text'>By $$$ </h4> 
        <button className="tag-button" value="4.99" onClick={searchKidsAccessories}>4.99</button>
        <button className="tag-button" value="6.99" onClick={searchKidsAccessories}>6.99</button>
        <button className="tag-button" value="9.99" onClick={searchKidsAccessories}>9.99</button>
      </div>
      <div className='product-container'>
        <h1 className='title-category' id="acckids">ACCESSORIES</h1>
        <a href="#footkids"><div className='scroller'></div></a>

        <div className='container-list'>
        {filteredAcc.map((item) => {
          item.quantity = 1;
          return (
            <div className="product-container" key={item.id}>
            <img src={item.image} className="product-image" alt={item.name} />
              <div className='namebtn'>
              <h4 className='product-name-text'>{item.name}</h4>
              <div>$ {item.price}</div>
              <button className='add-cart-btn' onClick={() => {notify();dispatch({ type: "ADD", payload: item })}}>
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
            <div className='scroll-top'><a href="#acckids">BACK TO TOP</a></div>
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
  onChange={searchKidsFootwears.bind(this)}
  />

  </div>
  
        <h2 className='filter-text'>Footwears : Tags</h2>
 
        <h4 className='filter-text'>By Names</h4>
        <button className="tag-button" value="All" onClick={filterBackFootwears}>All</button>
        <button className="tag-button" value="Rubber"onClick={searchKidsFootwears}>Rubber</button>
        <button className="tag-button" value="Boots"onClick={searchKidsFootwears}>Boots</button>
        <button className="tag-button" value="Sandals" onClick={searchKidsFootwears}>Sandals</button>
        <button className="tag-button" value="Slipper" onClick={searchKidsFootwears}>Slipper</button>
    <h4 className='filter-text'>By $$$ </h4> 
    <button className="tag-button" value="4.99" onClick={searchKidsFootwears}>4.99</button>
        <button className="tag-button" value="6.99" onClick={searchKidsFootwears}>6.99</button>
        <button className="tag-button" value="9.99" onClick={searchKidsFootwears}>9.99</button>
      </div>
      <div className='product-container'>
        <h1 className='title-category' id="footkids">Footwears</h1>
       
        <div className='container-list'>
        {filteredFw.map((item) => {
          item.quantity = 1;
          return (
            <div className="product-container" key={item.id}>
            <img src={item.image} className="product-image" alt={item.name} />
              <div className='namebtn'>
              <h4 className='product-name-text'>{item.name}</h4>
              <div>$ {item.price}</div>
              <button className='add-cart-btn' onClick={() => {notify();dispatch({ type: "ADD", payload: item })}}>
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
            
            <div className='scroll-top'><a href="#kidscategories">BACK TO TOP</a></div>

   {/* --------------------------------------- */}
        
      </main>
      )

    
} 

export default Kids
