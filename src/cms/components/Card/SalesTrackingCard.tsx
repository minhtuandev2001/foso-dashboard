import { twMerge } from "tailwind-merge";
import { IDataSaleTrackingCard } from "../../../shared/interface/card";
import { ArrowDown, ArrowUp } from "../iconSVG";

export default function SalesTrackingCard({
  data: { quantity = 0, label = "Chưa có mặt hàng", percent, colorQuantity },
  className,
}: {
  data: IDataSaleTrackingCard;
  className?: string;
}) {
  // const { quantity, label, percent } = data;
  return (
    <div
      className={twMerge(
        `shadow-dropdow-custom p-4 md:p-6 rounded-2xl w-full ${className}`
      )}
    >
      <div className="flex items-start justify-between">
        <h2
          style={{
            color: colorQuantity,
          }}
          className="!font-bold !text-2xl !leading-[32px] md:!text-[32px] text-light-blue-custom md:!leading-[48px]"
        >
          {quantity ?? 0}
        </h2>

        {percent && (
          <div className="flex gap-2 items-center">
            {percent > 0 ? <ArrowUp /> : <ArrowDown />}
            <p className="!font-medium !text-sm !leading-5">{percent}%</p>
          </div>
        )}
      </div>
      <p className="!text-sm !font-normal !leading-5 line-clamp-1">{label}</p>
    </div>
  );
}
