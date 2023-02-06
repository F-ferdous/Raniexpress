import React, { useState } from "react";
import Logo from "../img/logo.png";
import Avator from "../img/avatar.png";
import { MdShoppingBasket, MdAdd, MdLogout, MdPersonAdd } from "react-icons/md";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/Reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
  const [isMenu, setIsMenu] = useState(false);
  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
    setIsMenu(!isMenu);
  };

  return (
    <header className="fixed z-50 w-screen md:p-2 md:px-16 p-3 px-4 bg-primary">
      {/* Desktop and tablet */}
      <div className="hidden md:flex  h-full w-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-32 object-cover" />
          {/* <p className="text-headingClolor text-xl font-bold">Rani Express</p> */}
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <li
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
              onClick={() => setIsMenu(false)}
            >
              Categories
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
              onClick={() => setIsMenu(false)}
            >
              About Us
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
              onClick={() => setIsMenu(false)}
            >
              Home
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
              onClick={() => setIsMenu(false)}
            >
              Shop
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
              onClick={() => setIsMenu(false)}
            >
              Contact Us
            </li>
          </motion.ul>
          <div
            className="relative flex items-center justify-center"
            onClick={showCart}
          >
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>
          <div className="relative">
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={login}
              className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              {user ? user.displayName : "Login"}
            </motion.button>
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl flex-col absolute top-12 right-0 rounded-xl"
              >
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={() => setIsMenu(false)}
                >
                  Profile
                  <MdPersonAdd />
                </p>
                {user && (
                  <Link to="/createItem">
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                      onClick={() => setIsMenu(false)}
                    >
                      Add Item
                      <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  onClick={logout}
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                >
                  Logout
                  <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden  h-full w-full items-center justify-between">
        <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-16 object-cover" />
          {/* <p className="text-headingClolor text-xl font-bold">Rani Express</p> */}
        </Link>
        <div className="relative ">
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={() => setIsMenu(!isMenu)}
            className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Menu
          </motion.button>
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl flex-col absolute top-12 right-0 rounded-xl"
            >
              <ul className="flex flex-col ">
                <li className="text-base text-textColor hover:text-headingColor hover:bg-slate-200 px-4 py-2 duration-100 transition-all ease-in-out cursor-pointer">
                  Categories
                </li>
                <li className="text-base text-textColor hover:text-headingColor hover:bg-slate-200 px-4 py-2 duration-100 transition-all ease-in-out cursor-pointer">
                  About Us
                </li>
                <li className="text-base text-textColor hover:text-headingColor hover:bg-slate-200 px-4 py-2 duration-100 transition-all ease-in-out cursor-pointer">
                  Home
                </li>
                <li className="text-base text-textColor hover:text-headingColor hover:bg-slate-200 px-4 py-2 duration-100 transition-all ease-in-out cursor-pointer">
                  Shop
                </li>
                <li className="text-base text-textColor hover:text-headingColor hover:bg-slate-200 px-4 py-2 duration-100 transition-all ease-in-out cursor-pointer">
                  Contact Us
                </li>
              </ul>
              <hr />
              {user && (
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                  Profile
                  <MdPersonAdd />
                </p>
              )}
              {user && user.email == "fahimferdous119@gmail.com" && (
                <Link to="/createItem">
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                    Add Item
                    <MdAdd />
                  </p>
                </Link>
              )}
              <p
                onClick={user ? logout : login}
                className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
              >
                {user ? "Logout" : "Login"}

                <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
