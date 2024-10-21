import { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
    const [products, setProducts] = useState([]); //state var,fun = initial val
    const [searchParams,setSearchParams]=useSearchParams(); //to get url from search component 

    // Fetch products on component mount
    useEffect(() => {
        fetch( process.env.REACT_APP_API_URL + '/product?'+ searchParams) //.env should outside of src
            .then((res) => res.json())
            .then((data) => setProducts(data.products))
            .catch((err) => console.error('Error fetching products:', err));
    }, [searchParams]);

    return (
        <Fragment>
   

        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
            <div className="row">
              {products.map((product)=><ProductCard product={product}/>)}  
              
            </div>
        </section>

     

    </Fragment>
    );
}
