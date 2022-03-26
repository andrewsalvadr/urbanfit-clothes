import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify'
import { menClothings } from '../Data/Men/MenClothings';
import { menFootwears } from '../Data/Men/MenFootwears';
import { menAccessories } from '../Data/Men/MenAccessories';
import Menfeat from "../Asset/menfeature.png"
import Menfeat1 from "../Asset/menfeature1.png"
import Menfeat2 from "../Asset/menfeature2.png"
import Menfeat3 from "../Asset/menfeature3.png"
import ShopmenBanner from '../Asset/shopmen-banner.jpg'
import 'react-toastify/dist/ReactToastify.css'

function Men() {
  const dispatch = useDispatch();  
  const cart = useSelector((state) => state);
  console.log(cart);


  const [filterCloth, setFilterCloth,] = useState("");
  const [filteredCloth, setFilteredCloth] = useState(menClothings);

  const [filterFw, setFilterFw,] = useState("");
  const [filteredFw, setFilteredFw] = useState(menFootwears);

  const [filterAcc, setFilterAcc,] = useState("");
  const [filteredAcc, setFilteredAcc] = useState(menAccessories);
  

    ////////////////////Clothings/////////////////////

  useEffect(() => {
    setFilteredCloth(
      menClothings.filter((menClothing) =>
        Object.keys(menClothing).some((key) =>
          menClothing[key]
            .toString()
            .toLowerCase()
            .includes(filterCloth.toString().toLowerCase())
        )
      )
    );
  }, [filterCloth]);

  const searchMenClothings = (event) => {
    setFilterCloth(event.target.value);
};

function filterBackClothings() {
  setFilteredCloth(menClothings)
}


////////////////////Footwears/////////////////////

useEffect(() => {
  setFilteredFw(
    menFootwears.filter((menFootwear) =>
      Object.keys(menFootwear).some((key) =>
        menFootwear[key]
          .toString()
          .toLowerCase()
          .includes(filterFw.toString().toLowerCase())
      )
    )
  );
}, [filterFw]);

const searchMenFootwears = (event) => {
  setFilterFw(event.target.value);
};

function filterBackFootwears() {
  setFilteredFw(menFootwears)
}

////////////////////Accessories/////////////////////

useEffect(() => {
  setFilteredAcc(
    menAccessories.filter((menAccessory) =>
      Object.keys(menAccessory).some((key) =>
        menAccessory[key]
          .toString()
          .toLowerCase()
          .includes(filterAcc.toString().toLowerCase())
      )
    )
  );
}, [filterAcc]);

const searchMenAccessories = (event) => {
  setFilterAcc(event.target.value);
};

function filterBackAccessories() {
  setFilteredAcc(menAccessories)
}

const notify = ()=>{
   toast.success('Added to bag successfully') 
  }


      return (
      <main>
  <div className='shop-banner' id='menlink'>
        <img src={ShopmenBanner} alt="men-banner" className='shop-banner-men' id="bannermen"></img>
        </div>
        
        <h2 className='title-category2' id="mencategories">MEN'S SHOP</h2>
        <h2 className='title-category'>Categories</h2>
        <div className='men-featured-products'>
        <a href="#clothmen"><img src={Menfeat} alt="featured-products" className='men-featured-img'></img></a>
        <a href="#footmen"><img src={Menfeat1} alt="featured-products" className='men-featured-img'></img></a>
        <a href="#accmen"><img src={Menfeat2} alt="featured-products" className='men-featured-img'></img></a> 
        <a href="#accmen"><img src={Menfeat3} alt="featured-products" className='men-featured-img'></img></a>
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
className='form-control mx-1 mx-1' 
placeholder='Clothings'
type="text"
value={filterCloth}
onChange={searchMenClothings.bind(this)}
/>

</div>

  <h3 className='filter-text'>Clothing : Tags</h3>

  <h4 className='filter-text'>By Names</h4>
  <button className="tag-button" value="All" onClick={filterBackClothings}>All</button>
  <button className="tag-button" value="Crew neck"onClick={searchMenClothings}>Crew neck</button>
  <button className="tag-button" value="Hoodie"onClick={searchMenClothings}>Hoodie</button>
  <button className="tag-button" value="Lsleeve" onClick={searchMenClothings}>Long sleeve</button>
  <button className="tag-button" value="Polo" onClick={searchMenClothings}>Polo</button>
  <button className="tag-button" value="Pullover" onClick={searchMenClothings}>Pullover</button>
  <button className="tag-button" value="Tank top" onClick={searchMenClothings}>Tank top</button>
  <button className="tag-button" value="V-neck" onClick={searchMenClothings}>V-neck</button>
  <button className="tag-button" value="Wide neck" onClick={searchMenClothings}>Wide neck</button>
<h4 className='filter-text'>By $$$ </h4> 
  <button className="tag-button" value="19.99" onClick={searchMenClothings}>19.99</button>
  <button className="tag-button" value="29.99" onClick={searchMenClothings}>29.99</button>
  <button className="tag-button" value="39.99" onClick={searchMenClothings}>39.99</button>
</div>
<div className='product-container'>
 <h1 className='title-category' id="clothmen">Clothings</h1>
 <a href="#footmen"><div className='scroller'></div></a>

 <div className='container-list'>
        {filteredCloth.map((item) => {
          item.quantity = 1;
          return (
            <div className="product-container" key={item.id}>
            <img src={item.image} className="product-image" alt={item.name} />
              <div className='namebtn'>
              <h4 className='product-name-text'>{item.name}</h4>
              <div className='product-price-text'>$ {item.price}</div>
              <button className='add-cart-btn' onClick={() => {notify(); dispatch({ type: "ADD", payload: item})}}>
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
  placeholder='Footwears'
  type="text"
  value={filterFw}
  onChange={searchMenFootwears.bind(this)}
  />

  </div>

  <h2 className='filter-text'>Footwear : Tags</h2>
 
 <h4 className='filter-text'>By Names</h4>
 <button className="tag-button" value="All" onClick={filterBackFootwears}>All</button>
 <button className="tag-button" value="Walk hype"onClick={searchMenFootwears}>Walk hype</button>
 <button className="tag-button" value="Wolf grey" onClick={searchMenFootwears}>Wolf grey</button>
 <button className="tag-button" value="3stripes" onClick={searchMenFootwears}>3stripes</button>
 <button className="tag-button" value="Basketball" onClick={searchMenFootwears}>Basketball</button>
 <button className="tag-button" value="Formal" onClick={searchMenFootwears}>Formal</button>
<h4 className='filter-text'>By $$$ </h4> 
 <button className="tag-button" value="12.99" onClick={searchMenFootwears}>12.99</button>
 <button className="tag-button" value="14.99" onClick={searchMenFootwears}>14.99</button>
 <button className="tag-button" value="17.99" onClick={searchMenFootwears}>17.99</button>
</div>
<div className='product-container'>
 <h1 className='title-category' id="footmen">FOOTWEARS</h1>
 <a href="#accmen"><div className='scroller'></div></a>

 <div className='container-list'>        
 {filteredFw.map((item) => {
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
            <div className='scroll-top'><a href="#footmen">BACK TO TOP</a></div>
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
  onChange={searchMenAccessories.bind(this)}
  />

  </div>

  <h2 className='filter-text'>Accessory : Tags</h2>

 <h4 className='filter-text'>By Names</h4>
 <button className="tag-button" value="All" onClick={filterBackAccessories}>All</button>
 <button className="tag-button" value="Cap"onClick={searchMenAccessories}>Cap</button>
 <button className="tag-button" value="Sling bag"onClick={searchMenAccessories}>Sling bag</button>
 <button className="tag-button" value="Backpack" onClick={searchMenAccessories}>Backpack</button>
 <button className="tag-button" value="Wallet" onClick={searchMenAccessories}>Wallet</button>
 <button className="tag-button" value="Shades" onClick={searchMenAccessories}>Shades</button>
 <button className="tag-button" value="Eagle" onClick={searchMenAccessories}>Eagle</button>
 <button className="tag-button" value="Perfume" onClick={searchMenAccessories}>Perfume</button>
<h4 className='filter-text'>By $$$ </h4> 
 <button className="tag-button" value="4.99" onClick={searchMenAccessories}>4.99</button>
 <button className="tag-button" value="6.99" onClick={searchMenAccessories}>6.99</button>
 <button className="tag-button" value="9.99" onClick={searchMenAccessories}>9.99</button>
</div>
<div className='product-container'>
 <h1 className='title-category' id="accmen">ACCESSORIES</h1>

 <div className='container-list'>
        {filteredAcc.map((item) => {
          item.quantity = 1;
          return (
            <div className="product-container" key={item.id}>
            <img src={item.image} className="product-image" alt={item.name} />
              <div className='namebtn'>
              <h4 className='product-name-text'>{item.name}</h4>
              <div className='product-price-text'>$ {item.price}</div>
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
            
            <div className='scroll-top'><a href="#mencategories">BACK TO TOP</a></div>
        
      </main>
      )
}

export default Men
