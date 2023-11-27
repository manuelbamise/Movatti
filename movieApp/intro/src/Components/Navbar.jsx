import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [display, setDisplay] = useState("hidden");
  const [isopen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="w-full text-white py-3 bg-primary sticky top-0">
        <div className="flex justify-between items-center px-4 container mx-auto">
          <Link to="/" className="text-xl font-semibold">
            Mov<span className="text-secondary">Atti</span>
          </Link>

          <div className="space-x-10 hidden lg:flex">
            <NavLink to="/" activeClassName="active">
              Discover
            </NavLink>
            <NavLink to="/popularpage" activeClassName="active">
              Popular
            </NavLink>
            <NavLink to="/toprated" activeClassName="active">
              Top Rated
            </NavLink>
            <NavLink to="/favorite" activeClassName="active">
              Favorite
            </NavLink>
          </div>

          {/* Mobile Navbar Starts */}
          <button
            onClick={() => {
              if (!isopen) {
                setDisplay("block");
                setIsOpen(true);
              } else if (isopen) {
                setDisplay("hidden");
                setIsOpen(false);
              }
            }}
            className="text-2xl lg:hidden"
          >
            <AiOutlineMenu />
          </button>

          {/* Mobile Navbar Ends */}
        </div>
      </nav>
      <div
        className={`fixed ${display} bg-primary text-white top-12 w-full z-40 border-b border-secondary lg:hidden`}
      >
        <div className="space-y-7 flex justify-center items-center flex-col py-10">
          <NavLink to="/" activeClassName="active" className="text-lg">
            Discover
          </NavLink>
          <NavLink
            to="/popularpage"
            activeClassName="active"
            className="text-lg"
          >
            Popular
          </NavLink>
          <NavLink to="/toprated" activeClassName="active" className="text-lg">
            Top Rated
          </NavLink>
          <NavLink to="/favorite" activeClassName="active" className="text-lg">
            Favorite
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
