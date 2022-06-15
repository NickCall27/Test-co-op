import React from 'react'
import "../MiniMenu/MiniCategorie.css"
import Products from '../../pages/Products';
import { Link } from 'react-router-dom'
import {categorie} from '../../constans'
import { motion } from 'framer-motion';
function MiniCategorie() {
  return (
   
       <motion.div className='mini-categorie'intial={{width: 0}}animate={{width: "100%"}}exit={{x: window.innerWidth, transition: {duration: 0.5} }}>
      <ul className='mini-categorie--list'
      intial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: {duration: 0.5} }}
      >
      {categorie.map((e)=>{
        const img = require(`../../assets/img/${e.img}`);
        return <Link className='mini__categorie--lin active' to={`/products/${e.slug}`}>
                <li className='mini__categorie--link'><img className='mini__categorie--img' src={img} alt=""/>
                   {e.name}
                </li>
            </Link>})}
      </ul>
     
    </motion.div>
    
  )
}

export default MiniCategorie