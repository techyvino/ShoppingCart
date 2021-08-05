import React from 'react'

export default function Cart(props) {
  const {cartItems, onAdd, onRemove} = props;
  const itemsPrice = cartItems.reduce( ( a, c ) => a +c.price * c.qty, 0);
  const itemsTax = itemsPrice * 0.14;
  const shippingCharges = itemsPrice + itemsTax > 2000 ? 0 : 100;
  const totalPrice = itemsPrice + itemsTax + shippingCharges;
  
    return (
      <aside className="block col-1">
        <h2>Cart Items</h2>
        <div>
            {cartItems.length === 0 && <div>Cart is Empty Now!</div>}
        </div>
        {cartItems.map((item)=>(
          <div key={item.id} className="row">
            <div className="col-2">
              {item.name}
            </div>
            <div className="col-2">
              <button onClick= {()=> onAdd(item)} className="add">+</button>
              <button onClick= {()=> onRemove(item)} className="remove">-</button>
            </div>
            <div>
              {item.qty} x ₹{item.price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length >0 &&(
         <>
          <hr /><br />
          <div className="row">
            <div className="col-2"> Items Price </div> 
            <div className="col-1 text-right"> ₹{itemsPrice.toFixed(2)} </div> 
          </div>
            
          <div className="row">
            <div className="col-2"> Tax Price </div> 
            <div className="col-1 text-right"> ₹{itemsTax.toFixed(2)} </div> 
          </div> 

          <div className="row">
            <div className="col-2"> Shipping Price </div> 
            <div className="col-1 text-right"> {shippingCharges === 0 ? "Free" : `₹${shippingCharges.toFixed(2)}`} </div> 
          </div>  

          <strong className="row">
            <div className="col-2"> Total Price </div> 
            <div className="col-1 text-right"> ₹{totalPrice.toFixed(2)} </div> 
          </strong><br />

          <div className="row">
            <button onClick={()=>alert("Product Will Be Get You Soon!!!")}> Check Out</button>
          </div>

         </>
        )}
      </aside>
    )
}