import React, { useState } from "react";

// Components
import Media from "./Media";

// React Icons
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";

function Videos(props) {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    setOpen(!open);
  };

  return (
    <>
      <li key={props.id}>
        <div
          className="w-full grid grid-cols-12 p-5 overflow-hidden border-y-4 border-gray-100 cursor-pointer "
          onClick={() => {
            handleClick(props);
          }}
        >
          <div className="col-span-2 md:col-span-1 flex justify-center items-center">
            {open ? (
              <MdOutlineKeyboardArrowDown className="w-8 h-8" />
            ) : (
              <MdOutlineKeyboardArrowRight className="w-8 h-8" />
            )}
          </div>
          <div className="col-span-2 hidden md:block">
            <div className="flex h-[200px] items-center justify-center bg-orange-500 rounded-lg">
              <BiCameraMovie className="text-white w-8 h-8" />
            </div>
          </div>
          <div className="col-span-10 md:col-span-9 flex flex-col justify-center p-5">
            <h5 className="font-bold mb-2">{props.title}</h5>
            <p className="text-sm text-gray-500">{props.description}</p>
          </div>
        </div>
      </li>
      {open ? <Media src={props.src} /> : null}
    </>
  );
}

export default Videos;
