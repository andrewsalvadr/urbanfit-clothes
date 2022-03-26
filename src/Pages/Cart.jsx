import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from 'react-icons/fa'
import UrbanBag from '../Asset/urban-shoppingbag.png'
import { toast } from 'react-toastify'
import {  Link, useNavigate} from 'react-router-dom'
import { getAuth } from 'firebase/auth'

function Cart() {
  const cart = useSelector((state) => state);
  console.log(cart);  
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);

const taxPrice = total * 0.12;
const shippingPrice = total > 500 ? 0 : 10;
const totalPrice = total + taxPrice + shippingPrice 

 const notifyCoupon = ()=>{
  toast.error('Coupon is not yet available') 
 }

 const notifyDelete = ()=>{
  toast.success('Item removed from bag') 
 }

 const auth = getAuth()
 const navigate = useNavigate()
 let user = auth.currentUser

 const ordered = () => {
  navigate('/logout')
  window.location.reload();
}

  return (
    <main>
          <div>
        <img src={UrbanBag} alt="men-banner" className='shop-banner-cart' id="bannermen"></img>
        </div>
        <h1 className="bag-title">YOUR BAG</h1>
         <div className="cart">
         <section>

                <div class="container px-4 px-lg-5 my-3">
                <div className="two-btn-container">
                <a href="/"><button className="btn-continue-shopping">CONTINUE SHOPPING</button></a>
           </div>
                <div class="cart-container row">
                <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                    <div class="table-responsive bg-white">
                    <table class="table bg-white">
                        <thead class="bg-white">
                        <tr>

                            <th scope="col" class="border-0 bg-white">
                            <div class="p-2 px-3 d-flex justify-content-center text-uppercase bg-white">Product</div>
                            </th>
                            <th scope="col" class="border-0 bg-white">
                            <div class="py-2 d-flex justify-content-center text-uppercase bg-white">Price</div>
                            </th>
                            <th scope="col" class="border-0 bg-white">
                            <div class="cart-qty py-2 d-flex justify-content-center text-uppercase bg-white">Qty</div>
                            </th>
                            <th scope="col" class="border-0 bg-white">
                            <div class="py-2 d-flex justify-content-center text-uppercase bg-white">Subtotal</div>
                            </th>
                            <th scope="col" class="border-0 bg-white">
                            </th>
           
                        </tr>
                        {cart.length === 0 && <div className="cart-empty-text bg-white">Bag is empty.</div>}
                        </thead>
                        {cart.map((item) => {
                      return (
                        <tbody className="cart-details">
                        <tr class="bg-white">
                            <th scope="row" class="border-0 bg-white">
                            <div class="p-1 bg-white">
                            <img src={item.image} className="product-image-cart bg-white" alt={item.name} />
                                <div class="ms-3 d-inline-block align-middle bg-white">
                                <h5 class="mb-0 bg-white"> <div href="#" class="text-dark d-inline-block align-middle bg-white">{item.name}</div></h5>
                                </div>
                            </div>
                            </th>
                            <td class="border-0 align-middle bg-white"><strong class="bg-white">{item.price}</strong></td>
                            <td class="border-0 align-middle bg-white">
                            <button className="btn-decrease-cart bg-white" onClick={() => { if (item.quantity > 1) { dispatch({ type: "DECREASE", payload: item }); } else { dispatch({ type: "REMOVE", payload: item }); } }}> - </button>
                              <strong className="qty-cart bg-white">{item.quantity}</strong>
                            <button className="btn-increase-cart bg-white" onClick={() => dispatch({ type: "INCREASE", payload: item })}>+</button>
                              </td>
                            <td class="border-0 align-middle bg-white">
                            <strong class="bg-white">$ {(item.price * item.quantity).toFixed(2)}</strong>
                            </td>
                            <td class="border-0 align-middle bg-white"> <FaTrash className="btn-remove-cart bg-white" onClick={() =>  {notifyDelete(); dispatch({ type: "REMOVE", payload: item })}}/></td>
                        </tr>
                       </tbody>
                                     );
                                    })}
                        </table>

                        </div>
                        </div>
                </div>
                <div class="row py-5 p-4 rounded shadow-sm bg-light mb-5">
                <div class="col-lg-6">
                    <div class="px-4 py-3 text-uppercase text-white fw-bold bg-dark">Coupon code</div>
                    <div class="p-4">
                    <p class="mb-4"><em>If you have a coupon code, please enter it in the box below</em></p>
                    <div class="input-group mb-4 border rounded-pill p-2">
                        <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" class="form-control border-0 bg-light" />
                        <div class="input-group-append border-0">
                        <button id="button-addon3" type="button" class="btn btn-dark px-4 rounded-pill" onClick={notifyCoupon}><i class="fa fa-gift mr-2"></i>Apply coupon</button>
                        </div>
                    </div>
                    </div>
                    <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Instructions for seller</div>
                    <div class="p-4">
                    <p class="mb-4"><em>If you have some information for the seller you can leave them in the box below</em></p>
                    <textarea name="" cols="30" rows="2" class="form-control bg-light"></textarea>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="px-4 py-3 text-uppercase text-white fw-bold bg-dark">Order summary </div>
                    <div class="p-4">
                    <p class="mb-4"><em>Shipping and additional costs are calculated based on values you have entered.</em></p>
                    <p class="mb-4"><strong>PROMO ALERT:</strong><em> No shipping cost for every 500 usd purchase (tax excl.)</em></p>
                    <ul class="list-unstyled mb-4">
                        <li class="d-flex justify-content-between py-3 border-bottom" ><strong class="text-muted">Order Subtotal </strong><strong > {total.toFixed(2)}</strong></li>
                        <li class="d-flex justify-content-between py-3 border-bottom" ><strong class="text-muted">Shipping and handling</strong><strong >$ {shippingPrice}</strong></li>
                        <li class="d-flex justify-content-between py-3 border-bottom" ><strong class="text-muted">E-Tax(12%)</strong><strong >$ {taxPrice.toFixed(2)}</strong></li>
                        <li class="d-flex justify-content-between py-3 border-bottom" ><strong class="text-muted">Total Amount</strong><strong >{totalPrice > 0 && <strong>Total: ${totalPrice.toFixed(2)}</strong>}</strong>
                        </li>
                    </ul>{user ? <button class="btn btn-dark rounded-pill py-2 d-md-block" onClick={ordered}>Proceed to checkout</button> : <p className="userBadge" id="foo">Please Login an Account</p>}
                    </div>
                    </div>
                    </div>
                    </div>
          </section>
       </div>
       </main>

  );
};



export default Cart

