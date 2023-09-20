import { useLoaderData } from "react-router-dom";
import Products from "../Products/Products";

const About = () => {
    const {products} = useLoaderData();
    console.log(products);
    return (
        <div>
            <div>About page</div>
       {
        products.map((product, idx) => <Products key={idx} product={product}></Products>)
       }
        </div>
    );
};

export default About;