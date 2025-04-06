import { useState } from "react";
import logo from "../../../assets/images/logo.png";
import avatar from "../../../assets/images/avatar.png";
import { IoSettingsOutline } from "react-icons/io5";
import { TbMessage2 } from "react-icons/tb";
import { GoBell } from "react-icons/go";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useOutsideClick } from "../../../hook/useOutSideClick";
import Dropdows from "../Dropdows/Dropdows";
import { FaRegUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

const itemMenu = [
  {
    icon: <FaRegUser className="min-w-[20px]" />,
    render: () => <p className="text-nowrap">Minh tuan</p>,
  },
  {
    icon: <IoSettingsOutline className="min-w-[20px]" />,
    render: () => <p className="text-nowrap">Cài đặt</p>,
    isMobile: true,
  },
  {
    icon: <FaRegQuestionCircle className="min-w-[20px]" />,
    render: () => <p className="text-nowrap">Trợ giúp</p>,
    isMobile: true,
  },
  {
    icon: <IoIosLogOut size={20} className="min-w-[20px]" />,
    render: () => <p className="text-nowrap text-red-custom">Logout</p>,
  },
];

export default function MainHeader() {
  const [isSearchMobileOpen, setIsSearchMobileOpen] = useState<boolean>(false);
  const closeSearch = () => setIsSearchMobileOpen(false);
  const wrapperRef = useOutsideClick({
    isOpen: isSearchMobileOpen,
    onClose: closeSearch,
    excludeClass: "search-container", // Tắt khi không chứa class này
  });
  return (
    <div className="w-full bg-blue-custom text-white flex items-center justify-between px-2 py-3  lg:py-5 lg:px-[48px]">
      <div className="flex items-center gap-x-6">
        <div className="w-[72.77px] h-[22px] md:w-[82.77px] md:h-[32px]">
          <img src={logo} alt="logo" className="w-full h-full object-cover" />
        </div>
        <ul className="flex items-center text-sm font-normal cursor-pointer hidden">
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
      <div className="flex items-center gap-x-4 md:gap-x-6">
        <div className="items-center gap-x-2 bg-white/10 rounded-lg p-[6px] hidden md:flex">
          <CiSearch size={16} className="min-w-4 text-white" />
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="bg-red-200 font-thin"
          />
        </div>
        <div className="flex items-center gap-4">
          <div ref={wrapperRef} className="block md:hidden">
            <CiSearch
              onClick={() => setIsSearchMobileOpen(true)}
              size={20}
              className="text-white min-w-5 cursor-pointer md:hidden"
            />
            <div className="block md:hidden z-[9999]">
              {isSearchMobileOpen && (
                <div className="flex items-center rounded-md p-2 fixed top-[70px] left-1/2 -translate-x-1/2  shadow-dropdow-custom w-[80%] border border-gray-500/30 animate-flip-down animate-duration-400 !z-[9999] bg-white">
                  <CiSearch size={16} className="min-w-4 text-gray-custom" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm"
                    className="bg-red-200 font-thin w-full text-gray-custom pl-1"
                  />
                </div>
              )}
            </div>
          </div>
          <IoSettingsOutline
            size={20}
            className="text-white min-w-5 cursor-pointer !hidden md:!block"
          />
          <IoSettingsOutline
            size={20}
            className="text-white min-w-5 cursor-pointer !hidden md:!block"
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
            className="text-white min-w-5 cursor-pointer !hidden"
          />
        </div>
        <Dropdows
          children={
            <div className="flex items-center gap-x-[4px] cursor-pointer">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden">
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-ful h-full object-cover"
                />
              </div>
              <IoChevronDownOutline className="min-w-3 md:min-w-5 text-white" />
            </div>
          }
          itemMenu={itemMenu}
        ></Dropdows>
      </div>
    </div>
  );
}
