import { IProgressItemProps } from "../../shared/interface/productProgress";

export default function ProgressItem({ data }: { data?: IProgressItemProps }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <p className="!font-medium !text-sm !leading-5">
          {data?.label ?? "Chưa có mặt hàng"}
        </p>
        {data?.quantity && data?.percent ? (
          <div className="flex items-center !text-sm !leading-[22px] gap-1">
            <p className="!font-semibold">
              {data?.quantity || 0} {data?.unit}
            </p>
            <p className="text-gray-custom/70">({data?.percent}%)</p>
          </div>
        ) : (
          <p className="text-gray-custom/70">-</p>
        )}
      </div>
      <div className="mt-2 relative">
        <div className="h-2 w-full bg-gray-custom/10 rounded-full"></div>
        <div
          style={{
            width: `${data?.percent ?? 0}%`,
          }}
          className="absolute top-0 h-2 w-full bg-green-custom rounded-full"
        ></div>
      </div>
    </div>
  );
}
