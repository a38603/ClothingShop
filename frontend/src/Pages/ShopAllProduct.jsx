import React, { useContext } from 'react'
import './CSS/ShopAllProduct.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'

const ShopAllProduct = (props) => {
    const { all_product } = useContext(ShopContext);
    return (
        <div className='shop-allproduct'>
            <div className="shopallproduct-indexSort">
                <p>
                    <span>All Product</span>
                </p>

            </div>
            <div className="shopallproduct-products">
                {all_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
            <div className="shopallproduct-loadmore">
                Explore More
            </div>
        </div>
    )
}

export default ShopAllProduct
