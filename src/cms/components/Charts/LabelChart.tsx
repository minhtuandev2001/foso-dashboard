import { twMerge } from "tailwind-merge";
import { ILabelChart } from "../../../shared/interface/chart";

const LabelChart = ({ title, color }: ILabelChart) => {
  return (
    <div className="flex items-center gap-[10px]">
      <div
        style={{ backgroundColor: color }}
        className={twMerge(`w-[27px] h-[13px] rounded-full`)}
      ></div>
      <span className="text-sm font-medium leading-[20px]">{title}</span>
    </div>
  );
};
export default LabelChart;
