import React, { useContext, useEffect, useState } from 'react'
import './Add.scss';
import { useNavigate } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Context } from "../Context/BasketContext";
export default function Add() {
  const [products,setProducts]=useState([])
  const {basket,setBasket}=useContext(Context)
  const{counter,setCounter}=useContext(Context)
  const{total,setTotal}=useContext(Context)


  const navigate=useNavigate()


  const getProducts=()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=>setProducts(res.data))
  }

  useEffect(()=>{
    getProducts()
  },[])

  const handleDetail=(id)=>{
    navigate(`/detail/${id}`)

}
const handleBuy=(product)=>{
  
 
  if(basket.some((x)=>x.data.id===product.id)){
    basket.forEach(element => {
      if(element.data.id===product.id){
        element.count+=1
        setCounter(counter+1)
        setTotal((prevTotal) => prevTotal + product.price);
      }
      
      
    });
  }
  else{
    basket.push({ count:1, data:product})
    setBasket(basket)
    setTotal((prevTotal) => prevTotal + product.price);
    setCounter(counter+1)


  }

  
  
}
  return (
    
    <div className='add'>
         <div className="products">
                { 
                products.map((item) => (
                              <div className="geyim" key={item.id}>
                                <div className="item">
                                  <div className="pic">
                                    <img src={item.image} />
                                    <div
                                      className="icon"
                                     /* onClick={() => {
                                        handleFav(item);
                                      }}*/
                                    >
                                      <div className="favitem" ></div>
                                    </div>
                                    <ul>
                                      <li
                                      onClick={() => {
                                          handleBuy(item);
                                        }}
                                        className="active"
                                      >
                                        <a>
                                          <HiOutlineShoppingBag />
                                        </a>
                                      </li>
                                      <li className="quick-view">
                                        <a  onClick={()=>handleDetail(item.id)}>
                                          + Quick View
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
               
                                  <div className="text">
                                    <div className="catagory-name">{item.category}</div>
                                    <a href="#">
                                      {/* <h5>{item.name}</h5> */}
                                    </a>
                                    <div className="product-price">${item.price}</div>
                                  </div>
                                </div>
                              </div>
                            )
                            )
               
               

              
                }
              </div>
    </div>
  )
}
