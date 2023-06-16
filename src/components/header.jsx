import React from "react";

export default function Header() {
  return (
    <div className="flex flex-col gap-y-2 items-start">
      <h1 className="font-semibold text-lg">
        Lorem lpsum is imply dummy text of printing and typesetting industry .
      </h1>
      <div className="flex gap-3 text-sm">
        <button type="button" className="bg-red-800 text-white px-1">
          Lorem
        </button>
        <button type="button" className="bg-red-800 text-white px-1 capitalize">
          Lorem lorem
        </button>
        <button type="button" className="bg-red-800 text-white px-1">
          Loremmmm
        </button>
      </div>

      <div className="bg-gray-100 h-full w-full flex items-center justify-center mt-2 lg:h-[400px]">
        <img
          src={require("../assets/images/gallery-icon-removebg-preview.png")}
          alt=""
        />
      </div>
    </div>
  );
}
