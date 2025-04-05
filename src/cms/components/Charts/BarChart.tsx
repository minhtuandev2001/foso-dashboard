import { twMerge } from "tailwind-merge";
import { dataChart, ILabelChart } from "../../../shared/interface/chart";
import LabelChart from "./LabelChart";

type Props = {
  titleMinWidth?: number;
  labels: ILabelChart[];
  data: dataChart[];
  step: number;
  max: number;
  chartHeight?: number;
};

const Column = ({ height, color }: { height: number; color: string }) => {
  return (
    <div
      style={{
        height: height,
        backgroundColor: color,
      }}
      className="w-5 rounded-t-[4px]"
    ></div>
  );
};

const Line = ({
  titleMinWidth,
  item,
}: {
  titleMinWidth: number;
  item: number;
}) => {
  return (
    <div className="flex w-full">
      <p className={twMerge(`min-w-[${titleMinWidth}px] text-end`)}>{item}</p>
      <div className="border-t-1 border-dashed border-gray-custom/20 w-full ml-3"></div>
    </div>
  );
};

export default function BarChart({
  titleMinWidth = 56,
  labels,
  data,
  step = 20,
  max = 100,
  chartHeight = 300,
}: Props) {
  chartHeight = chartHeight - 36;
  const numberLine = Math.ceil(max / step) + 1;
  const pointLine = Array(numberLine)
    .fill(0)
    .map((_item: number, index: number) =>
      index === numberLine ? max : index * step
    );
  return (
    <div className="w-full h-full !text-xs">
      <div className="flex justify-end items-center gap-4">
        {labels?.length > 0 &&
          labels.map((item: ILabelChart, index: number) => (
            <LabelChart key={index} {...item} />
          ))}
      </div>
      <div>
        <p
          className={twMerge(
            `w-[${56}px] text-end mb-3 text-gray-custom font-normal`
          )}
        >
          Cái
        </p>
        <div
          style={{
            height: chartHeight,
          }}
          className="w-full !text-xs text-gray-custom relative"
        >
          <div className="relative w-full h-full top-0">
            {pointLine?.length > 0 &&
              pointLine.reverse().map((item: number, index: number) => (
                <div
                  className="absolute w-full"
                  key={index}
                  style={{
                    bottom: (item / max) * chartHeight - 16 + "px",
                  }}
                >
                  <Line item={item} titleMinWidth={titleMinWidth} />
                </div>
              ))}
          </div>
          <div
            className={twMerge(
              `w-[calc(100%-${titleMinWidth}px)] h-full absolute top-0 right-0 flex items-end  justify-between`
            )}
          >
            {data?.length > 0 &&
              data.map((item: dataChart, index: number) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-[100px] translate-y-[36px]"
                >
                  <div className="flex gap-[2px] items-end">
                    {item?.colums?.length > 0 &&
                      item?.colums?.map((i, indexColumn: number) => (
                        <Column
                          color={labels[indexColumn]?.color}
                          key={indexColumn}
                          height={(i?.data / max) * chartHeight}
                        />
                      ))}
                  </div>
                  <p className="inline-block line-clamp-1 mt-5">
                    {item?.label}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <p
          className={twMerge(
            `w-[${56}px] text-end mt-[20px] text-gray-custom font-normal`
          )}
        >
          Mặt hàng
        </p>
      </div>
    </div>
  );
}
