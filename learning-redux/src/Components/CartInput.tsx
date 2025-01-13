import { useDispatch } from "react-redux";

import { addToCart } from "../Features/cartSlice";
import { useState } from "react";

function CartInput() {
  const [newCart, setCart] = useState("");

  const myDispatch = useDispatch();

  const handleAddCart = () => {
    if (newCart) {
      myDispatch(addToCart(newCart));
      setCart("");
    }
  };

  return (
    <div>
      <label htmlFor="">Cart Name</label>
      <input
        type="text"
        placeholder="Cart Name"
        value={newCart}
        onChange={(event) => setCart(event.target.value)}
      />
      <br />
      <button onClick={handleAddCart}>Add Cart</button>
    </div>
  );
}

export default CartInput;
