import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { categorie } from '../constans'
import { motion } from 'framer-motion';

import API from '../api';
import { Product } from './Product';
import { ShoppingProductContext } from '../App';
function ProductDetail() {
  const [ product , setProduct] = useContext(ShoppingProductContext);
  //const {categorie} = useParams();
   const [products,productError,productLoading] = useFetch(API[categorie])
  return (
    <motion.div>
      <Product/>
      ProductDetail
      
       
       {productLoading && <p>Loading...</p>}
      {productError && <p>Something went wrong...</p>}
      {products && (
        <>
          
           {products((product)=> {
             let img = null;
              try {
                 img = require(`../assets/img/${product.picture}`)
              } catch (error) {
                console.log(img);
              }
              
              
              return (
                                 
                    <li className='products-card'
                      intial={{width: 0}}
                      animate={{width: "100%"}}
                      exit={{x: window.innerWidth, transition: {duration: 0.5} }}
                      >
                      <img  className='products__card--foto' src={img} alt="" />
                      <h2 className='products__card--title'>{product.name}</h2>
                      <price className='products__card--price'>{product.price}</price>
                      <p>{product}</p>
                  </li>

              )
           
            })}
          
        </>
      )}
    </motion.div>
  )
}

export default ProductDetail