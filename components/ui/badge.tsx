import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200",
        gold: "border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200",
        emerald:
          "border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200",
        secondary:
          "border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200",
        destructive:
          "border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100",
        outline: "text-slate-700 border-slate-300 bg-white",
        gradient:
          "border-slate-300 bg-slate-100 text-slate-800 shadow-sm",
        glow: "border-slate-300 bg-slate-100 text-slate-800 shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
