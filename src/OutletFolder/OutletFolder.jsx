import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const OutletFolder = () => {
    return (
        <div>
            <section>
  <Navbar></Navbar>
  
</section>,
<div className="min-h-screen">
<Outlet></Outlet>
</div>
<Footer></Footer>
        </div>
    );
};

export default OutletFolder;