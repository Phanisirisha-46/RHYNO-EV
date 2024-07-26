import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { userLoginContext } from "../../contexts/userLoginContext";
import { MdDelete } from "react-icons/md";
import "./Cart.css";

function Cart() {
  let { currentUser } = useContext(userLoginContext);
  let [cartItems, setCartItems] = useState([]);
  let [err, setErr] = useState("");
  // get products from cart
  async function getProductsOfUserCart() {
    try{
      let res = await fetch(
        `http://localhost:3000/user-cart?username=${currentUser.username}`
      );
      console.log(res);
      let cartItemsList = await res.json();
      setCartItems(cartItemsList);

    } catch(err)
    {
      console.log("err is ", err);
      setErr(err.message);
    }
  }
//delete product from cart
async function deletepro(proid)
{
  try{
    let res=await fetch(`http://localhost:3000/user-cart/${proid}`,{method:"DELETE"})
    console.log(res);
    getProductsOfUserCart()

  }
  catch(err)
  {
    console.log("err is ", err);
    setErr(err.message);
  }

}
  useEffect(() => {
    getProductsOfUserCart();
  }, []);

  return (
    <div>
      {cartItems.length === 0 ? (
        <p className="display-1 text-center text-danger">Cart is empty</p>
      ) : (
        <table className="table text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Brand</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem) => (
              <tr key={cartItem.id}>
                <td>{cartItem.id}</td>
                <td>{cartItem.title}</td>
                <td>{cartItem.price}</td>
                <td>{cartItem.brand}</td>
                <button className="btn" onClick={() => deletepro(cartItem.id)}>
                    <MdDelete />
                  </button>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Cart;