import { CiCalendar } from "react-icons/ci";
import { IItemDropDown } from "../../../shared/interface/itemDropdown";
import Dropdows from "../Dropdows/Dropdows";
import { IoChevronDownOutline } from "react-icons/io5";

const SelectDateFilter = (itemMenu: IItemDropDown[]) => {
  return (
    <Dropdows
      children={
        <div className=" flex items-center gap-1 p-2 md:p-3 max-h-[40px] md:gap-2 rounded-[8px] border-[0.5px] border-gray-custom">
          <CiCalendar />
          <p className="!text-xs md:!text-base font-normal text-black-custom text-nowrap">
            Quy nay
          </p>
          <IoChevronDownOutline
            size={16}
            className="min-w-4 text-gray-custom"
          />
        </div>
      }
      itemMenu={itemMenu}
    />
  );
};

export default SelectDateFilter;
