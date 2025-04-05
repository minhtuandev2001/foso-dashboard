import React from "react";
import logo from "../../../assets/images/logo.png";
import avatar from "../../../assets/images/avatar.png";
import { IoSettingsOutline } from "react-icons/io5";
import { TbMessage2 } from "react-icons/tb";
import { GoBell } from "react-icons/go";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

export default function MainHeader() {
  return (
    <div className="w-full bg-blue-custom text-white flex items-center justify-between py-5 px-[48px]">
      <div className="flex items-center gap-x-6">
        <div className="w-[82.77px] h-[32px]">
          <img src={logo} alt="logo" className="w-full h-full object-cover" />
        </div>
        <ul className="flex items-center text-sm font-normal cursor-pointer ">
          <li className="py-[4px] px-2 hover:text-white/70 transition-all ">
            Danh mục
          </li>
          <li className="py-[4px] px-2 hover:text-white/70 transition-all">
            Bán & xuất hàng
          </li>
          <li className="py-[4px] px-2 hover:text-white/70 transition-all">
            Mua & nhập hàng
          </li>
          <li className="py-[4px] px-2 hover:text-white/70 transition-all">
            Kho & sản xuất
          </li>
          <li className="py-[4px] px-2 hover:text-white/70 transition-all">
            Kế toán
          </li>
          <li className="py-[4px] px-2 hover:text-white/70 transition-all">
            Báo cáo & Thống kê
          </li>
          <li className="py-[4px] px-2 hover:text-white/70">Tiện ích</li>
        </ul>
      </div>
      <div className="flex items-center gap-x-6">
        <div className="flex items-center gap-x-2 bg-white/10 rounded-lg p-[6px]">
          <CiSearch size={16} className="min-w-4 text-white" />
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="bg-red-200 font-thin"
          />
        </div>
        <div className="flex items-center gap-4">
          <IoSettingsOutline
            size={20}
            className="text-white min-w-5 cursor-pointer"
          />
          <IoSettingsOutline
            size={20}
            className="text-white min-w-5 cursor-pointer"
          />
          <TbMessage2 size={20} className="text-white min-w-5 cursor-pointer" />
          <div className="relative flex items-center cursor-pointer">
            <div className="min-w-[13px] bg-red-custom rounded-full min-h-[18px] flex items-center justify-center absolute -top-[10px] -right-1 px-1">
              <p className="font-medium text-[8px]">1</p>
            </div>
            <GoBell size={20} className="text-white min-w-5" />
          </div>
          <FaRegQuestionCircle
            size={20}
            className="text-white min-w-5 cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-x-[4px] cursor-pointer">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={avatar}
              alt="avatar"
              className="w-ful h-full object-cover"
            />
          </div>
          <IoChevronDownOutline size={20} className="min-w-5" />
        </div>
      </div>
    </div>
  );
}
