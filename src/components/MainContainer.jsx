import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";
const MainContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full ">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-4">
        <div className="flex items-center gap-2 justify-center bg-orange-100 p-2 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Best Products
          </p>
          <div className="w-6 h-6 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              className="w-full h-full object-contain"
              src={Delivery}
              alt=""
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
          {" "}
          The Premier Place For Your{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Home Decor
          </span>
        </p>
        <p className="text-base text-justify md:text-justify text-textColor md:w-[80%]">
          Welcome to Rani Express,Our extensive collection of stylish and
          affordable products will help you transform any room into a beautiful
          and inviting space. From wall art to throw pillows, we have everything
          you need to add a personal touch to your home. Plus, with our fast and
          reliable shipping, you can get your order delivered straight to your
          door in no time.
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 font-semibold text-white"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          className="ml-auto h-400 w-full lg:w-auto lg:h-650"
          src={HeroBg}
          alt="hero Image"
        />
        <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full lg:px-32 px-0  py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md lg:rounded-3xl rounded-xl flex flex-col items-center justify-center "
              >
                <img
                  src={n.imageSrc}
                  className="lg:w-44 w-24  -mt-10 lg:-mt-20"
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>
                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MainContainer;
