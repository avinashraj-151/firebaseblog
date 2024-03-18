import { Link } from "react-router-dom";
import logo from "../../assets/logo2_1.png";
import { nav as navbardata } from "../../data.js";
const Navbar = () => {
  return (
    <header className="border-b border-black sticky top-0 z-50 bg-[rgb(255, 255, 255)]">
      <div className="size h-[70px] flex items-center justify-between">
        <Link to="/">
          <img className="h-9" src={logo} alt="logo"></img>
        </Link>
        <div className="flex items-center gap-5">
          <div className="hidden text-sm sm:flex items-center gap-5">
            {navbardata.map((link, i) => {
              return (
                <Link key={i} to={link.path}>
                  {link.title}
                </Link>
              );
            })}
          </div>
          <div className="relative">
            <button className="hidden text-sm sm:flex items-center gap-5">
              Sign In
            </button>
          </div>
          <button className="bg-black text-white rounded-full px-3 py-2 text-sm font-medium">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
