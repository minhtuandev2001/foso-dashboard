import { useEffect, useState } from "react";

type TDataChart = {
  inCompletePercent: number;
  inProgressPercent: number;
  finishedPercent: number;
};

interface IDataPieChart {
  inComplete: number;
  inProgress: number;
  finished: number;
}
export default function PieChart({
  data,
  dataExecution,
}: {
  data: IDataPieChart;
  dataExecution: number;
}) {
  const total = data.inComplete + data.inProgress + data.finished;
  const [dataChart, setDataChart] = useState<TDataChart>({
    inCompletePercent: 0,
    inProgressPercent: 0,
    finishedPercent: 0,
  });

  useEffect(() => {
    const percent1 = (data.inComplete / total) * 100;
    const percent2 = (data.inProgress / total) * 100;
    const percent3 = (data.finished / total) * 100;

    setDataChart({
      inCompletePercent: percent1,
      inProgressPercent: percent2,
      finishedPercent: percent3,
    });
  }, [data.finished, data.inComplete, data.inProgress, total]);

  return (
    <div className="w-full h-full  flex items-center justify-center py-[67px]">
      <div className="h-full relative">
        {/* hoàn thành */}
        {(data?.finished && data?.finished) > 0 && (
          <div className="absolute inline-block top-4 md:top-9 -right-8 md:-right-12">
            <div className="relative">
              <svg
                className="w-[60px] md:w-[99px]"
                height={22}
                viewBox="0 0 101 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 23L48.3478 1H100"
                  stroke="#1FC583"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute top-1 md:top-0 -translate-y-1/2 right-0 translate-x-1/2">
                <p className="text-sm md:text-base font-normal h-[28px] py-[2px] px-2 md:px-4 rounded-full bg-green-custom text-white flex items-center justify-center">
                  {dataChart?.finishedPercent}%
                </p>
              </div>
            </div>
          </div>
        )}
        {/* chưa hoàn thành */}
        {(data?.inProgress && data?.inProgress) > 0 && (
          <div className="absolute inline-block top-4 md:top-9 -left-8 md:-left-12">
            <div className="relative">
              <svg
                className="w-[60px] md:w-[99px]"
                height={22}
                viewBox="0 0 101 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 23L52.6522 1H0.999996"
                  stroke="#FF8F0D"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute top-1 md:top-0 -translate-y-1/2 left-0 -translate-x-1/2">
                <p className="text-sm md:text-base font-normal h-[28px] py-[2px] px-2 md:px-4 rounded-full bg-orange-custom text-white flex items-center justify-center">
                  {dataChart?.inCompletePercent}%
                </p>
              </div>
            </div>
          </div>
        )}
        {/* Đang thực hiện */}
        {(data?.inComplete && data?.inComplete) > 0 && (
          <div className="absolute inline-block bottom-4 -right-8 md:bottom-9 md:-right-12">
            <div className="relative">
              <svg
                className="w-[60px] md:w-[99px]"
                height={22}
                viewBox="0 0 101 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L48.3478 23H100"
                  stroke="#0375F3"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute bottom-0 translate-y-1/2 right-0 translate-x-1/2">
                <p className="text-sm md:text-base font-normal h-[28px] py-[2px] px-2 md:px-4 rounded-full bg-light-blue-custom text-white flex items-center justify-center">
                  {dataChart?.inProgressPercent}%
                </p>
              </div>
            </div>
          </div>
        )}
        {/* text chinhs giuaw */}
        <div className="absolute top-1/2 left-1/2 -translate-1/2">
          <p className="text-center !text-[26px] md:!text-[36px] !font-semibold text-black-custom">
            {dataExecution || 0}
          </p>
          <p className="!text-xs md:!text-base text-gray-custom !font-normal">
            Lệnh sản xuất
          </p>
        </div>
        <div>
          <svg
            className="w-[180px] h-[180px] md:w-[268px] md:h-[268px]"
            viewBox="0 0 36 36"
          >
            <circle
              className="text-gray-200"
              strokeWidth="6"
              fill="none"
              cx="18"
              cy="18"
              r="15"
            ></circle>
            <circle
              className={`${
                dataChart?.finishedPercent && dataChart?.finishedPercent > 0
                  ? "text-green-custom"
                  : "text-gray-custom/15"
              }`}
              strokeWidth="6"
              strokeDasharray="20, 70"
              strokeLinecap="round"
              fill="none"
              cx="18"
              cy="18"
              r="15"
              stroke="currentColor"
              transform="rotate(-85 18 18)"
            ></circle>
            <circle
              className={`${
                dataChart?.inProgressPercent && dataChart?.inProgressPercent > 0
                  ? "text-light-blue-custom"
                  : "text-gray-custom/40"
              }`}
              strokeWidth="6"
              strokeDasharray="32, 65"
              strokeLinecap="round"
              fill="none"
              cx="18"
              cy="18"
              r="15"
              stroke="currentColor"
              transform="rotate(17 18 18)"
            ></circle>
            <circle
              className={`${
                dataChart?.inProgressPercent && dataChart?.inProgressPercent > 0
                  ? "text-orange-custom"
                  : "text-gray-custom/25"
              }`}
              strokeWidth="6"
              strokeDasharray="18, 80"
              strokeLinecap="round"
              fill="none"
              cx="18"
              cy="18"
              r="15"
              stroke="currentColor"
              transform="rotate(165 18 18)"
            ></circle>
          </svg>
        </div>
      </div>
    </div>
  );
}
