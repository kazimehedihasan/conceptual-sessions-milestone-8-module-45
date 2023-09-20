import { Link } from "react-router-dom";


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
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Products">Products</Link>   {/* About */}
                      
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </section>

        </div>
    );
};

export default Navbar;