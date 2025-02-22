import React, { ReactElement } from "react";
import { cn } from "@/lib/utils"; // Ensure cn utility function exists

interface Prop extends React.ComponentProps<"div"> {
  icon?: ReactElement;
  count: number;
  label: string;
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
        "w-full h-full pt-12 border-t border-b border-thirdBgColor pb-16",
        className
      )}
      {...props}
    >
      <h3 className={cn("font-bold text-xl mb-2", countClassName)}>{count}</h3>
      <div className="flex items-center gap-2">
        <span className={cn(labelClassName)}>{label}</span>
        {icon}
      </div>
    </div>
  );
};

export default ImpactCard;
