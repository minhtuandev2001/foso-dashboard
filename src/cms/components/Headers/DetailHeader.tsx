import { twMerge } from "tailwind-merge";
import React from "react";

interface IProps {
  title: string;
  filter: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}
export default function DetailHeader({
  title,
  filter,
  children,
  className,
}: IProps) {
  return (
    <div
      className={twMerge(
        `p-2 pr-2 md:p-6 md:pr-4 w-full h-full rounded-2xl ${className}`
      )}
    >
      <div className="flex items-center justify-between w-full gap-5 pb-6 h-full">
        <h2 className="text-lg font-medium leading-[28px] text-black-custom line-clamp-2 max-w-[250px] md:max-w-full">
          {title}
        </h2>
        <div>{filter}</div>
      </div>
      <div className="w-full h-full">{children}</div>
    </div>
  );
}
