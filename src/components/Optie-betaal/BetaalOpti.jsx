
import React from 'react'
import bancard from '../assets/img/foto/bancontact.png'
import mastercard from '../assets/img/foto/mastercard.png'
import paypal from '../assets/img/foto/paypal.jpg'
import visa from '../assets/img/foto/visa.png'
function BetaalOpti() {
  return (
    
    <div className='betaal'>
      <ul className='betaal-list'>
        <li className='betaal-lis'>
          <img src={visa} alt="" />
          <input type="radio" name="" id="" value=""/>
        </li>
        <li>
          <img src={mastercard} alt="" />
          <input type="radio" name="" id="" value=""/>
        </li>
        <li>
          <img src={bancard} alt="" />
          <input type="radio" name="" id="" value=""/>
        </li>
        <li>
          <img src={paypal} alt="" />
          <input type="radio" name="" id="" value=""/>
        </li>
      </ul>
      <div className='betaal-form'>

      </div>
    </div>
  )
}


export  {BetaalOpti} ;