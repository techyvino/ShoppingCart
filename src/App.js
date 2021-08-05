import React, { useState } from "react";
import Cart from "./components/Cart";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import data from "./data";

function App() {
  const { products } = data;
  const [cartItems, setCartItem] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItem(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItem([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItem(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItem(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div>
      <NavBar countCartItems={cartItems.length} />
      <div className="row">
        <Main onAdd={onAdd} products={products} />
        <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
