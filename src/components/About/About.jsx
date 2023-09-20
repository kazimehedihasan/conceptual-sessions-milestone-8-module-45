import { useLoaderData } from "react-router-dom";
import Products from "../Products/Products";

const About = () => {
    const {products} = useLoaderData();
    console.log(products);
    return (
        <div>
            <div>About page</div>
            <div className="grid grid-cols-3 px-16 py-4 gap-6">
            {
        products?.map((product, idx) => <Products key={idx} product={product}></Products>)
       }
            </div>
       
        </div>
    );
};

export default About;