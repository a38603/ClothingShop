import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import person_icon from '../Assets/person.png'
import seach_cicon from '../Assets/search_icon.png'
const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <h1>Wellcome to </h1>
                <p>MSHOP</p>
            </div>
            <ul className='nav-menu'>
                {/* Khởi tạo onclic cho các button shop,mens,women, kid*/}
                <li onClick={() => { setMenu('shop') }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('allproduct') }}><Link style={{ textDecoration: 'none' }} to='/allproduct'>All Product</Link> {menu === "allproduct" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('mens') }}><Link style={{ textDecoration: 'none' }} to="/mens">Men</Link> {menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('womens') }}><Link style={{ textDecoration: 'none' }} to="/womens">Women</Link> {menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('kids') }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kid</Link> {menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to="/search"><button><img src={seach_cicon} alt=''></img></button></Link>
                <Link to="/login"><button><img src={person_icon} alt=''></img></button></Link>
                <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar

