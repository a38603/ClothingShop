import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import Swal from 'sweetalert2'
const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    const handleclick = () => {
        Swal.fire({
            title: "Thanks You!!!",
            text: "Order Success",
            icon: "success"
        });
    }

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt='' className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className='carticon-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt='' />
                        </div>
                        <hr />

                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="caritems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>

                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={handleclick}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-delivery">
                    <p>Fill in delivery information: </p>
                    <div className="cartitems-infobox">
                        <input type='name' placeholder='Your Name'></input>

                    </div>
                    <div className="cartitems-infobox">
                        <input type='address' placeholder='Your Address'></input>

                    </div>
                    <div className="cartitems-infobox">
                        <input type='number' placeholder='Your PhoneNumber'></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
