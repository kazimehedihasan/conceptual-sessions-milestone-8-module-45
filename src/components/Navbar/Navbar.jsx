import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
        <section className="flex justify-between px-10 shadow-md py-7">
        <div>
        <h3 className=' text-2xl font-bold'>Amajhon </h3>
        </div>
        <div>
            <nav>
                <ul  className="flex gap-4 text-2xl">
                    <li>
                    <NavLink to="/" className={({isActive, isPending}) =>
                        isPending ? "pending" : isActive? "text-red-500" : ""}>Home</NavLink>
                    
                    </li>
                    <li>

                    <NavLink to="/Products" className={({isActive, isPending}) =>
                        isPending ? "pending" : isActive? "text-red-500" : ""}>Products</NavLink>  {/* About */}

                    </li>
                    
                        <NavLink to="/profile" className={({isActive, isPending}) =>
                        isPending ? "pending" : isActive? "text-red-500" : ""}>Profile</NavLink>

                </ul>
            </nav>
        </div>
        </section>

        </div>
    );
};

export default Navbar;