import React from 'react'
//import {BetaalOpti} from './Optie-betaal/BetaalOpti'
import bancard from '../assets/img/foto/bancontact.png'
import mastercard from '../assets/img/foto/mastercard.png'
import paypal from '../assets/img/foto/paypal.jpg'
import visa from '../assets/img/foto/visa.png'
import '../components/Optie-betaal/betaal.css'
const Betaal = () => {
  return (
    <div className='betaal-flex'>
     <h1 className="title">Betaal</h1> 
     
     <div className='betaal'>
      <ul className='betaal-list'>
        <li className='betaal-lis'>
          <img src={visa} alt="" />
          <input type="radio" name="" id="" value=""/>
        </li>
        <li className='betaal-lis'>
          <img src={mastercard} alt="" />
          <input type="radio" name="" id="" value=""/>
        </li>
        <li className='betaal-lis'>
          <img src={bancard} alt="" />
          <input type="radio" name="" id="" value=""/>
        </li>
        <li className='betaal-lis'>
          <img src={paypal} alt="" />
          <input type="radio" name="" id="" value=""/>
        </li>
      </ul>
    </div>
     
    </div>
  )
}

export default Betaal
