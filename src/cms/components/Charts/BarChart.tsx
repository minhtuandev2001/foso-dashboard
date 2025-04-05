import { useEffect, useRef, useState } from "react";
import { IDataChart, ILabelChart } from "../../../shared/interface/chart";
import LabelChart from "./LabelChart";

type Props = {
  titleMinWidth?: number;
  labels: ILabelChart[];
  data: IDataChart[];
  step: number;
  max: number;
  chartHeight?: number;
  horizontal?: boolean;
  showLegend?: boolean;
  lableCategory: string;
  lableValue: string;
};

const Column = ({
  dimensions,
  color,
  horizontal = false,
}: {
  dimensions: number;
  color: string;
  horizontal?: boolean;
}) => {
  return (
    <div
      style={
        horizontal
          ? {
              height: 8,
              width: dimensions,
              backgroundColor: color,
              borderRadius: "0px 4px 4px 0px",
            }
          : {
              height: dimensions,
              width: 20,
              backgroundColor: color,
              borderRadius: "4px 4px 0px 0px",
            }
      }
    ></div>
  );
};

const Line = ({
  titleMinWidth,
  item,
  horizontal = false,
}: {
  titleMinWidth: number;
  item: number;
  horizontal?: boolean;
}) => {
  return (
    <div
      className={`flex ${
        horizontal ? "h-full flex-col w-fit items-center" : "w-full flex-row"
      }`}
    >
      <p
        style={{
          minWidth: titleMinWidth,
        }}
        className={`${
          horizontal ? "order-2 text-center translate-y-[16px]" : "text-end"
        }`}
      >
        {item}
      </p>
      <div
        className={`border-dashed border-gray-custom/20 ${
          horizontal ? "border-l-1 h-full w-1 mb-3" : "border-t-1 w-full ml-3"
        }`}
      ></div>
    </div>
  );
};

export default function BarChart({
  titleMinWidth = 56,
  labels,
  data,
  step = 20,
  max = 100,
  chartHeight = 316,
  horizontal = false,
  showLegend = true,
  lableCategory,
  lableValue,
}: Props) {
  chartHeight = chartHeight - 36;
  const numberLine = Math.ceil(max / step) + 1;
  const pointLine = Array(numberLine)
    .fill(0)
    .map((_item: number, index: number) =>
      index === numberLine ? max : index * step
    );
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [ChartWith, setChartWith] = useState<number>(
    chartRef?.current?.offsetWidth || 0
  );
  const handleChangeWidthChart = () => {
    if (chartRef) {
      const width = chartRef?.current?.getBoundingClientRect().width;
      setChartWith(width || 0);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleChangeWidthChart);
    handleChangeWidthChart(); // lấy kích thước lần đầu
    return () => window.removeEventListener("resize", handleChangeWidthChart);
  }, []);
  return (
    <div className="w-full h-full !text-xs min-w-[400px]">
      {showLegend && (
        <div className="flex justify-end items-center gap-4">
          {labels?.length > 0 &&
            labels.map((item: ILabelChart, index: number) => (
              <LabelChart key={index} {...item} />
            ))}
        </div>
      )}
      <div>
        {/* label 1 */}
        <p
          style={{
            width: horizontal ? titleMinWidth * 2 - 12 : titleMinWidth,
            marginBottom: horizontal ? 40 : 12,
          }}
          className="text-end text-gray-custom font-normal"
        >
          {horizontal ? lableCategory : lableValue}
        </p>
        <div
          style={{
            height: chartHeight,
          }}
          ref={chartRef}
          className="w-full !text-xs text-gray-custom relative"
        >
          <div
            style={
              horizontal
                ? {
                    width: `calc(100% - ${titleMinWidth * 2 - 12}px)`,
                    left: titleMinWidth + titleMinWidth / 2,
                  }
                : {
                    width: `100%`,
                  }
            }
            className="relative h-full top-0"
          >
            {pointLine?.length > 0 &&
              pointLine.reverse().map((item: number, index: number) => {
                const roll = horizontal
                  ? ChartWith - titleMinWidth * 2 - 12 || 0
                  : chartHeight - 16;
                return (
                  <div
                    className={`absolute ${horizontal ? "h-full" : "w-full"}`}
                    key={index}
                    style={
                      horizontal
                        ? {
                            left: (item / max) * roll + "px",
                          }
                        : {
                            bottom: (item / max) * roll + "px",
                          }
                    }
                  >
                    <Line
                      item={item}
                      titleMinWidth={titleMinWidth}
                      horizontal={horizontal}
                    />
                  </div>
                );
              })}
          </div>
          <div
            style={
              horizontal
                ? {
                    width: `100%`,
                  }
                : {
                    width: `calc(100% - ${titleMinWidth}px)`,
                  }
            }
            className={`h-full absolute top-0 right-0 flex items-end justify-between  ${
              horizontal ? "flex-col pt-5 pb-10" : "flex-row"
            }`}
          >
            {data?.length > 0 &&
              data.map((item: IDataChart, index: number) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    horizontal
                      ? "flex-row w-full gap-3"
                      : "flex-col w-[100px] translate-y-[20px]"
                  }`}
                >
                  <div
                    className={`flex gap-[2px] items-end ${
                      horizontal ? "order-2 flex flex-col items-start" : ""
                    }`}
                  >
                    {item?.colums?.length > 0 &&
                      item?.colums?.map((i, indexColumn: number) => {
                        const roll = horizontal
                          ? ChartWith - titleMinWidth * 2 - 12 || 0
                          : chartHeight - 16;
                        return (
                          <Column
                            color={labels[indexColumn]?.color}
                            key={indexColumn}
                            dimensions={(i?.data / max) * roll}
                            horizontal={horizontal}
                          />
                        );
                      })}
                  </div>
                  <p
                    style={{
                      maxWidth: horizontal
                        ? titleMinWidth * 2 - 12
                        : titleMinWidth,
                      minWidth: horizontal
                        ? titleMinWidth * 2 - 12
                        : titleMinWidth,
                    }}
                    className={`${
                      horizontal
                        ? "order-1 max-h-[36px] text-end line-clamp-2"
                        : "mt-5 translate-y-2 line-clamp-1 text-center"
                    }`}
                  >
                    {item?.label}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* label 1 */}
        <p
          style={{
            width: horizontal ? titleMinWidth * 2 - 12 : titleMinWidth,
            marginTop: horizontal ? 0 : 12,
          }}
          className="text-end text-gray-custom font-normal"
        >
          {horizontal ? lableValue : lableCategory}
        </p>
      </div>
    </div>
  );
}
