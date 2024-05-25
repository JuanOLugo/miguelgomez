import React, { useEffect, useState } from "react";

function Navbar({ brandName, itemsToMap}) {
  const [isOpen, setIsOpen] = useState(false);

  const navStyle = {
    backgroundColor: "#1B1B1B",
  };

  const HandleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="flex py-3 z-40 justify-around items-center absolute w-full "
        style={navStyle}
      >
        <button onClick={HandleClick}>
          <svg
            class="icon icon-tabler icon-tabler-menu-2"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>
        <div className="" name="brand">
          <h1 className="font-bold text-4xl">{brandName}</h1>
        </div>
      </div>

      <div
        className={`w-full  py-4 transition-all duration-500 md:transition-none   absolute ${
          isOpen ? "top-11 md:top-16 " : "top-[-24rem]"
        } z-20 md:z-20`}
        style={navStyle}
      >
        {itemsToMap.map((item, i) => {
          return (
            <a href={item.link}
              key={i}
              className="flex flex-col py-2 hover:bg-gray-600 rounded-sm w-full transition-all duration-200 text-white text-xl font-light px-2 "
            >
              {item.name}
            </a >
          );
        })}
      </div>
    </>
  );
}

export default Navbar;
