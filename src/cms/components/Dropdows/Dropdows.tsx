import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useOutsideClick } from "../../../hook/useOutSideClick";

interface IItem {
  render: () => React.ReactElement;
  icon: React.ReactElement;
  isMobile?: boolean;
}
interface Props {
  children: React.ReactNode;
  itemMenu?: IItem[];
}
export default function Dropdows({ children, itemMenu }: Props) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const closeDropdow = () => setShowMenu(false);
  const wrapperRef = useOutsideClick({
    isOpen: showMenu,
    onClose: closeDropdow,
    excludeClass: "dropdow-avatar-container", // Tắt khi không chứa class này
  });
  return (
    <div
      ref={wrapperRef}
      onClick={() => setShowMenu(true)}
      className="group/show text-gray-custom w-full relative text-sm"
    >
      {children}
      <div
        className={twMerge(
          `hidden absolute top-full right-0 z-[9999] pt-2 animate-fade animate-duration-200 group-hover/show:block ${
            showMenu ? "block" : ""
          }`
        )}
      >
        <div className="p-[5px] bg-white shadow-dropdow-custom w-full min-w-[200px] rounded-md">
          {(itemMenu?.length ?? 0) > 0 &&
            itemMenu?.map((item: IItem, index: number) => (
              <li
                key={index}
                className={`flex items-center flex-nowrap gap-2 w-full cursor-pointer px-3 py-2 hover:bg-gray-custom/10 rounded-md transition-all ${
                  item?.isMobile ? "block md:hidden" : "block"
                }`}
              >
                {item?.icon}
                {item.render()}
              </li>
            ))}
        </div>
      </div>
    </div>
  );
}
