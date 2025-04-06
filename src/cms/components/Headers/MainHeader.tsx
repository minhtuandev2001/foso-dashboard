import { useEffect, useState } from "react";
import logo from "../../../assets/images/logo.png";
import logoDark from "../../../assets/images/logoDark.png";
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
import { IoList } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

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

  const [isSideBarMobileOpen, setIsSideBarMobileOpen] =
    useState<boolean>(false);
  const closeSideBar = () => setIsSideBarMobileOpen(false);
  const wrapperSideBarRef = useOutsideClick({
    isOpen: isSideBarMobileOpen,
    onClose: closeSideBar,
    excludeClass: "side-bar-container", // Tắt khi không chứa class này
  });

  useEffect(() => {
    const handleCheckMobile = () => {
      console.log("check ", 1);
      if (isSideBarMobileOpen === true) {
        if (window.innerWidth > 1024) {
          setIsSideBarMobileOpen(false);
        }
      }
    };
    window.addEventListener("resize", handleCheckMobile);
    return () => window.removeEventListener("resize", handleCheckMobile);
  }, [isSideBarMobileOpen]);
  return (
    <>
      <div className="w-full bg-blue-custom text-white flex items-center justify-between px-2 py-3 lg:py-5 lg:px-[48px] fixed top-0 z-[9999]">
        <div className="flex items-center gap-x-6">
          <div className="w-[72.77px] h-[22px] md:w-[82.77px] md:h-[32px]">
            <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </div>
          <ul className="items-center text-sm font-normal cursor-pointer hidden lg:flex">
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
              className="bg-red-200 !font-light"
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
                      className="bg-red-200 !font-light w-full text-gray-custom pl-1"
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
            <TbMessage2
              size={20}
              className="text-white min-w-5 cursor-pointer"
            />
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

      {/* navigate mobile */}
      <div
        ref={wrapperSideBarRef}
        className={twMerge(
          `h-screen fixed top-0 z-[9999] bg-white px-4 animate-fade-right animate-duration-300 ${
            isSideBarMobileOpen
              ? "translate-x-0 block"
              : "-translate-x-full hidden opacity-0 transition-all"
          }`
        )}
      >
        <div className="py-[25px]">
          <img
            className="w-[120px] h-full object-cover mx-auto"
            src={logoDark}
            alt=""
          />
        </div>
        <ul className="px-2 space-y-[4px]">
          <li className="transition-all px-3 p-2 hover:bg-gray-custom/10 rounded-[5px] cursor-pointer">
            Danh mục
          </li>
          <li className="transition-all px-3 p-2 hover:bg-gray-custom/10 rounded-[5px] cursor-pointer">
            Bán & xuất hàng
          </li>
          <li className="transition-all px-3 p-2 hover:bg-gray-custom/10 rounded-[5px] cursor-pointer">
            Mua & nhập hàng
          </li>
          <li className="transition-all px-3 p-2 hover:bg-gray-custom/10 rounded-[5px] cursor-pointer">
            Kho & sản xuất
          </li>
          <li className="transition-all px-3 p-2 hover:bg-gray-custom/10 rounded-[5px] cursor-pointer">
            Kế toán
          </li>
          <li className="transition-all px-3 p-2 hover:bg-gray-custom/10 rounded-[5px] cursor-pointer">
            Báo cáo & Thống kê
          </li>
          <li className="transition-all px-3 p-2 hover:bg-gray-custom/10 rounded-[5px] cursor-pointer">
            Tiện ích
          </li>
        </ul>
      </div>

      <div
        onClick={() => setIsSideBarMobileOpen(true)}
        className="side-bar-container fixed bottom-[50px] right-[15px] w-10 h-10 bg-blue-custom rounded-full flex items-center justify-center text-white shadow-dropdow-custom z-[9999] cursor-pointer md:hidden"
      >
        <IoList size={20} />
      </div>
    </>
  );
}
