import React from 'react'
import Image from 'next/image'
import Styles from '../styles/Products.module.css'
import Link from 'next/link'

const Products = ({product}) => {

  //Destruct 
  const {id,title,price,image} = product;

  return (
    <div className="container">
       <div className={Styles.products}>
           <div>
             <Image src={image}  width="200px" height="200px" />
           </div>

           <ul>
              <li> {title} </li>
              <li className={Styles.price}> <h3>{price}DT</h3> </li>
           </ul>
           <br/>
           <Link href={`/products/${id}`}>
               <a className={Styles.button}>More Details</a>
           </Link>
           
       </div>
    </div>
  )
}

export default Products
