
import { Link } from 'react-router-dom'
import {categorie} from '../constans'
import "../components/categorie.css"
import { motion } from "framer-motion";
import Products from './Products';
const Home = () => {
  return (

    <motion.div 
    className='categorie'
    intial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.5} }}
    >
      <ul className='categorie--list'
      intial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: {duration: 0.5} }}
      >
      {categorie.map((e)=>{
        const img = require(`../assets/img/${e.img}`);
        return <li className='categorie--link'><img className='categorie--img' src={img} alt=""/><Link to={`/products/${e.slug}`}>{e.name}</Link></li>})}
      </ul>
     
    </motion.div>
  )
}

export {Home}