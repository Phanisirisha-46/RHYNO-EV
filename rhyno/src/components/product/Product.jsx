import './Product.css';
import {useContext,useState} from 'react';
import {userLoginContext} from '../../contexts/userLoginContext'

function Product(props) {

  let productObj=props.productObj;
  let {currentUser}=useContext(userLoginContext)

  //error state
  let [err, setErr] = useState("");
  async function addProductToCart(productObj){
    //add current user data to productObj
    try{
      productObj.username=currentUser.username;
      let res=await fetch('http://localhost:3000/user-cart',{
        method:"POST",
        headers: { "Content-type": "application/json" },
        body:JSON.stringify(productObj)
      })
      
      console.log(res)
      if(res.status===201){
        console.log("product added to cart")
      }  

    }
    catch (err) {
      console.log("err is ", err);
      setErr(err.message);
    }
   
  }

  return (
    <div className='card text-center h-100 bg-light'>
    <div className="card-body d-flex flex-column justify-content-between">
      <p className="fs-4 text-secondary">{productObj.title}</p>
      <p className="fs-6 text-danger">{productObj.brand}</p>
      <p className="lead">{productObj.description}</p>
      <p className="fs-3 text-warning">${productObj.price}</p>
      <button className="btn btn-success" onClick={()=>addProductToCart(productObj)}>Add to cart</button>
    </div>

    </div>
  )
}

export default Product