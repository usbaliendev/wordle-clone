import React from "react";

import { IconContext } from "react-icons";
import { FaCircleInfo, FaCirclePlus } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineChartBar } from "react-icons/hi";

function Navbar() {
  return (
    <IconContext.Provider value={{ size: "22px" }}>
      <nav>
        <a className='lang mini_modal_link' data-modal-id='#modal_languages'>
          PT-BR
        </a>
        <button type='button' className='button generator'>
          <FaCirclePlus />
        </button>
        <button type='button' className='button give_up'>
          Me rendo
        </button>
        <div className='buttons flex'>
          <button type='button' className='button mini_modal_link'>
            <HiOutlineChartBar />
          </button>
          <button type='button' className='button mini_modal_link'>
            <IoSettingsOutline />
          </button>
          <button type='button' className='button mini_modal_link'>
            <FaCircleInfo />
          </button>
        </div>
      </nav>
    </IconContext.Provider>
  );
}

export default Navbar;
