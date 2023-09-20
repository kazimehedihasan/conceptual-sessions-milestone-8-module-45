import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";


const ViweProductsDetiles = () => {
    // niyom - 2

    // console.log(products);
//     const data = useParams();
//     const [product, setProduct]= useState({});
// useEffect(() => {
// fetch(`https://dummyjson.com/products/${data.id}`)
// .then(response => response.json())
// .then(data => setProduct(data))
// },[data])

// GoBackHandle 
const navigate = useNavigate();
const GoBackHandle = () =>{
navigate(-1)
}

const products = useLoaderData();
const {title, description, price, brand, category, thumbnail, stock,} = products || {};
    return (
        <div className="flex h-screen justify-center items-center">
           <div className="w-full h-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="p-8 rounded-t-lg" src={thumbnail} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">brand :{brand}</h5>
        </a>
        <div>
           <h2>category: {category}</h2>
           <p> description: { description}</p>
           <h6>title: {title}</h6>
           <p>stock: {stock}</p>
            
        </div>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
           
                <Link>
                <button onClick={GoBackHandle} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Go Back
                </button>
                </Link>
        </div>
    </div>
</div>
        </div>
    );
};

export default ViweProductsDetiles;