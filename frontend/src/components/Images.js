import React, { useState } from "react";

// Components
import Media from "./Media";

// React-icons
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

function Images(props) {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    setOpen(!open);
  };

  return (
    <>
      <li key={props.id}>
        <div
          className="grid grid-cols-12 p-5 overflow-hidden border-y-4 border-gray-100 cursor-pointer"
          onClick={() => {
            handleClick(props);
          }}
        >
          <div className="col-span-2 md:col-span-1 flex justify-center items-start md:items-center p-5">
            {open ? (
              <MdOutlineKeyboardArrowDown className="w-8 h-8" />
            ) : (
              <MdOutlineKeyboardArrowRight className="w-8 h-8" />
            )}
          </div>
          <div className="col-span-2 hidden md:block">
            <img
              className="object-cover w-full h-[200px] rounded-lg"
              src={props.thumbnail}
              alt={props.title}
            />
          </div>
          <div className="col-span-10 md:col-span-9 flex flex-col justify-center p-5">
            <div className="flex flex-col">
              <h5 className="font-bold mb-2">{props.title}</h5>
              <p className="text-sm text-gray-500">{props.description}</p>
            </div>
          </div>
        </div>
      </li>
      {open ? <Media src={props.thumbnail} /> : null}
    </>
  );
}

export default Images;
