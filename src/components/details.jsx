import React from "react";
import { TbClockHour8 } from "react-icons/tb";
import { BsCardText, BsShare } from "react-icons/bs";
const details = () => {
  return (
    <div className="flex lg:flex-row flex-col items-start gap-2 justify-between">
      <div className="flex items-center gap-1">
        <span>
          <TbClockHour8 size={18} />
        </span>
        <p className="flex gap-2">
          <span>2022-06-18 </span>
          <span>23:17</span>
        </p>
      </div>
      <div className="flex">
        <div className="flex gap-5">
          <button
            type="button"
            className="rounded-2xl capitalize text-sm bg-gray-100 flex px-2 py-1 gap-x-2 items-center "
          >
            <BsShare size={14} />
            <span>share</span>
          </button>
          <div className="bg-gray-100 py-1 px-2  rounded-2xl flex items-center gap-2">
            <button className="flex items-center gap-2 capitalize text-sm">
              <BsCardText /> enable reading mode
            </button>
            <div className="w-[1px] h-full bg-gray-600" />
            <div className="flex gap-3 lg:text-sm">
              <button className="flex items-center"> A-</button>
              <button>A</button>
              <button>A+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default details;
