import Products from "../components/Products";

export default function Home({products}) {
  return (
  
    <main className="container">
      <div className="main">
        {
        products.map(product => <Products  kay={product.id} product={product}/>)
        }
      </div>
     
    </main>
  )
}
//API 
//getStaticProps
export const getStaticProps = async () => {

  const res = await fetch("https://fakestoreapi.com/products");

  const data = await res.json();

  return{
    props : {products : data}
  };
 };


