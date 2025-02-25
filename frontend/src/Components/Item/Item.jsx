import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = (props) => {
    return (
        <div className="card">
            <Link to={`/product/${props.id}`}>
                <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" className="card-img-top" />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div className="card-prices">
                    <div className="card-price-new">
                        <span className="badge badge-success">${props.new_price}</span>
                    </div>
                    <div className="card-price-old">
                        <span className="badge badge-secondary">${props.old_price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;