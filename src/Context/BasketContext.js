import { createContext, useEffect, useState } from "react";

export const Context=createContext();

export default function BasketProvider({children}) {
    const [basket,setBasket]=useState([])
    const[counter,setCounter]=useState(0)
    const [total,setTotal]=useState(0)
    useEffect(() => {
      const basketData = {
        basket,
        counter,
        total,
      };
  
      localStorage.setItem("basketData", JSON.stringify(basketData));
    }, [basket, counter, total]);
  
    useEffect(() => {
      const savedBasketDataJSON = localStorage.getItem("basketData");
      if (savedBasketDataJSON) {
        const savedBasketData = JSON.parse(savedBasketDataJSON);
        setBasket(savedBasketData.basket);
        setCounter(savedBasketData.counter);
        setTotal(savedBasketData.total);
      }
    }, []);

    const data={
        basket,setBasket,counter,setCounter,total,setTotal
    }
  return (
   <Context.Provider value={data}>{children}</Context.Provider>
  )
}
