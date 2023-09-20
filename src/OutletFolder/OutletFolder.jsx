import { Outlet, useNavigation,  } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const OutletFolder = () => {
    const navigation = useNavigation();
    return (
        <div>
            <section>
  <Navbar></Navbar>
  
</section>,
<div className="min-h-screen">
 {
       navigation.state === "loading" ?
       <p className="text-5xl text-green-400 text-center">Loading...</p> :
       <Outlet></Outlet>
 }

</div>
<Footer></Footer>
        </div>
    );
};

export default OutletFolder;