import React, { useState } from 'react'
import { categorie } from '../constans'
import useFetch from '../hooks/useFetch';
import { Product } from './Product';
//import { API_FOOD_URL } from '../api';
import List from '../components/List';
import helper from '../helper'


 const Products = () => {
     
    return (
      <div>
          <List/>
          <Product/>
      </div>
    )
}
export default Products;