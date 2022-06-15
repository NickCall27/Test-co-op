import React from 'react'
import { useState } from 'react';
import { BsFillBasket2Fill } from "react-icons/bs";
import '../Checkout/Checkout.css'
function Checkout() {
    const [isOpen , setIsOpen ] = useState(false);
  return (
    
    <div className={`winkel ${isOpen ? "active": ''}`}>
          
              <button className='winkel--btn'  onClick={() => setIsOpen( !isOpen )}> <BsFillBasket2Fill/></button>
            <ul className='winkel__list'>
              <li className='winkel__li'>hem</li>
            </ul>
       
       </div>
  )
}

export default Checkout