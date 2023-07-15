import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/ourmenu'>Our Menu</Link></li>
        <li><Link to='/order/salads'>Order</Link></li>
        <li>
            <Link to="/dashboard/mycart">
                <button className="flex items-center gap-2">
                    <FaShoppingCart className="text-2xl" />
                    {/* <div className="badge badge-secondary">+{cart?.length || 0}</div> */}
                </button>
            </Link>
        </li>
    </>
    return (
        <div>
            <div className="navbar fixed bg-black text-white z-10 bg-opacity-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black text-xl">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Food Corner</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl font-semibold">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;