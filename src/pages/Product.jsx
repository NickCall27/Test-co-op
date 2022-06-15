import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import API from '../api';
import { categorie } from '../constans'
import useFetch from '../hooks/useFetch';
import '../components/Product/Product.css'
import { motion } from 'framer-motion';

import MiniCategorie from '../components/MiniMenu/MiniCategorie';
import Checkout from '../components/Checkout/Checkout';


export const Product = () => {
   const {categorie} = useParams();
   const [products,productError,productLoading] = useFetch(API[categorie])

   console.log(products);
  return (
    <motion.div className='products'>
     
    <MiniCategorie />
     <div className='products-c'>
       
       {productLoading && <p>Loading...</p>}
      {productError && <p>Something went wrong...</p>}
      {products &&  Object.keys(products).length &&(
        <>
        
           {Object.keys(products).map((name)=> {
             return (
              <>
               <h2 className='products-title'>
                 {name}
               </h2>
              <ul className='products-cards'>
                {
                 products[name].map(product=> {
                  let img = null;

                  try {
                     img = require(`../assets/img/${picture}`)
                     console.log(img);
                  } catch (error) {
                    console.log(img);
                  }
                  
                  return (
                    <Link className='products-link' to={
                      `/products/${categorie}/${product.id}`
                      
                      }>                  
                        <li className='products-card'
                          intial={{width: 0}}
                          animate={{width: "100%"}}
                          exit={{x: window.innerWidth, transition: {duration: 0.5} }}
                          >
                          <img  className='products__card--foto' src={img} alt="" />
                          <h2 className='products__card--title'>{product.name}</h2>
                          <price className='products__card--price'>{product.price}</price>
                      </li>
                    </Link>
    
                  )
                 })
               }
              </ul>
               
               </>
             )
            

              
           
            })}
          
        </>
      )}
      
       </div> 
       
       <Checkout/>
    </motion.div>
  )
}
