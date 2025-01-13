import { useDispatch, useSelector } from "react-redux";
import { myRootState } from "../Features/MainStore";
import { removeCart } from "../Features/cartSlice";

function CartList() {
  const mySelector = useSelector((state: myRootState) => state.cart.cartItems);

  const myDispatch = useDispatch();
  if (mySelector.length === 0) {
    return <h1>No Cart Items</h1>;
  }

  const handleRemove = (id) => {
    myDispatch(removeCart(id));
  };

  return (
    <div>
      <hr />
      <h1>CART LIST</h1>
      {mySelector.map((cart) => (
        <div className="cart" key={cart.id}>
          <h1>Cart:</h1>
          <h3>{cart.title}</h3>
          <button onClick={() => handleRemove(cart.id)}>Remove</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default CartList;
