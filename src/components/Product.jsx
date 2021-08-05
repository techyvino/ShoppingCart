import React from 'react'

export default function Product(props) {
    const{product, onAdd} = props;
    return (
        <div>
            <img className="small" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div>
                <h4> ₹ {product.price} </h4>
            </div>
            <div>
                <button onClick= {()=> onAdd(product)}> Add to Cart </button>
            </div>
        </div>
    )
}
