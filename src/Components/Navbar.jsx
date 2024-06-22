import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <>
      <div className=" bg-[#102C57] p-7">
        <div className="main_manu container flex justify-between">
          <div className="logo">
            <h1 className="font-bold text-4xl text-white font-lato ml-[110px]">
              CPU hut
            </h1>
          </div>
          <div className="manu">
            <ul className="flex gap-4 font-poppins font-semibold text-white  text-[20px]">
              <li className=" hover:text-[#088395]">
                <Link to="/">Home</Link>
              </li>
              <li className=" hover:text-[#088395]  mr-[110px]">
                <Link to="/Buy">Buy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navber;