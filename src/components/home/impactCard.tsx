import React, { ReactElement } from "react";
import { cn } from "@/lib/utils"; // Ensure cn utility function exists

interface Prop extends React.ComponentProps<"div"> {
  icon?: ReactElement;
  count: number | string;
  label?: string;
  className?: string; // Shared styles for h3 & span
  countClassName?: string; // Styles specific to h3 (count)
  labelClassName?: string; // Styles specific to span (label)
}

const ImpactCard = ({
  className,
  countClassName,
  labelClassName,
  label,
  count,
  icon,
  ...props
}: Prop) => {
  return (
    <div
      className={cn(
        "w-full h-full pt-10 border-t  border-thirdBgColor pb-14",
        className
      )}
      {...props}
    >
      <h3 className={cn("font-bold text-2xl mb-1", countClassName)}>
        {count} {typeof count === "number" && "+"}
      </h3>
      <div className="flex items-center gap-2">
        <span className={cn(labelClassName)}>{label && label}</span>
        {icon}
      </div>
    </div>
  );
};

export default ImpactCard;
