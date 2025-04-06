import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const Column = ({
  dimensions,
  color,
  horizontal = false,
  value,
}: {
  dimensions: number;
  color: string;
  horizontal?: boolean;
  value: number;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [widthDivValue, setWidthDivValue] = useState<number>(0);
  useEffect(() => {
    if (ref) {
      const width = ref?.current?.getBoundingClientRect();
      setWidthDivValue(width?.width ?? 0);
    }
  }, [value]);
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
      className="relative group/tooltip cursor-pointer"
    >
      <div
        style={{
          transform: horizontal
            ? `translateX(${widthDivValue + 6}px)`
            : `translateX(-${widthDivValue / 2 - 10}px)`,
        }}
        ref={ref}
        className={twMerge(
          `absolute opacity-0 group-hover/tooltip:opacity-100 transition-all
          before:absolute before:content-[''] before:w-2 before:h-2 before:bg-black before:rotate-45 before:-translate-x-1/2
          ${
            horizontal
              ? "right-0 -translate-y-1/2 before:top-1/2 before:-translate-y-1/2 mt-[4px]"
              : "left-0 top-0 -translate-y-[38px] before:-bottom-1 before:left-1/2"
          }`
        )}
      >
        <div className="py-2 px-4 text-white bg-black-custom text-xs font-medium inline-block rounded-md">
          <p>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default Column;
