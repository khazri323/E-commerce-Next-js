import React from 'react'
import Image from 'next/image'
import Styles from '../../styles/OneProduct.module.css'
const oneProduct = ({product}) => {

  //Destruct 
  const {id , title , price , image , description , category } = product
  return (
   
    <div className={Styles.oneProduct + " container"}>
        <h2>{title}</h2>
        <h4>{category}</h4>
        <div>
           <Image src={image} width="500px" height="500px"/> 
        </div>
        
        <h4>{price}</h4>
        <p>{description}</p>
    </div>

  )

}

export default oneProduct


//API 
//getStaticPaths
export const getStaticPaths = async () => {

    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    const paths =  products.map( (product) => {
        return{
            params : {id: product.id.toString()},
            
        };
    });

    return{
        paths,
        fallback:false
    };
}

//getStaticProps
export const getStaticProps = async (context) => {
    const id = context.params.id;

    const res = await fetch("https://fakestoreapi.com/products/"+ id);

    const product = await res.json();

    return{
        props : {product}
    }

}