import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdRemoveRedEye, MdShoppingBasket } from "react-icons/md";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/Reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
  const [items, setItems] = useState([]);
  const rowContainer = useRef();
  const [{ cartItems }, dispatch] = useStateValue();
  const addtoCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addtoCart();
  }, [items]);

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3 scroll-smooth my-12 ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-275 min-w-[275px] h-[175px] md:w-300 md:min-w-[300px] my-12 backdrop-blur-lg bg-cardOverlay px-4 py-2 hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-36 -mt-10 drop-shadow-2xl h-40"
              >
                <img
                  src={item?.imageURL}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="flex flex-row ">
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8 m-2"
                  onClick={() => {}}
                >
                  <MdRemoveRedEye className="text-white" />
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                  onClick={() => setItems([...cartItems, item])}
                >
                  <MdShoppingBasket className="text-white" />
                </motion.div>
              </div>
            </div>
            <div className="w-full flex flex-col items-end justify-end -mt-8">
              <p className="text-textColor font-semibold text-base ">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">{item?.calories} Pcs</p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-lg font-bold text-red-500">৳</span>
                  {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} alt="notfoundIMG" className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
