import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Add_Cart, Remove_Cart } from '../Redux/ReduxSlice'
const CartItem = () => {

let Data=useSelector((state)=>state.cart)
let {products}=Data.products[0]
let cartData = Data.cartData
let dispatch=useDispatch()
console.log(cartData);
let Incart =Data.Incart



let handleAdd=(id)=>{
    
   
        dispatch(Add_Cart(id))

  }

  let handleRemove=(id)=>{
    dispatch(Remove_Cart(id))
  
  }

  return (
    <>
    {
    products.map((product)=>(
      <div className="card mb-3" key={product.id} >
      <div className="row g-0">
        <div className="col-md-4">
          <img src="" className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <div>
              {Incart === true?<button className="btn btn-danger" onClick={()=>{handleRemove(product.id)}}>Remove</button>:<button className="btn btn-primary" onClick={()=>{handleAdd(product.id),console.log(cartData.Incart);
              }}>Add</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
    ))
}

    
    </>
  )
}

export default CartItem