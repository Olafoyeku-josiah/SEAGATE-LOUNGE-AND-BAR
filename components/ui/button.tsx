import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer shadow-sm",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white font-bold hover:bg-slate-800 hover:shadow-md border border-slate-900/10",
        gold: "bg-slate-900 text-white font-bold hover:bg-slate-800 hover:shadow-md border border-slate-900/10",
        emerald:
          "bg-slate-800 text-white font-bold hover:bg-slate-900 hover:shadow-md border border-slate-800/10",
        gradient:
          "bg-slate-900 text-white font-bold hover:bg-slate-800 hover:shadow-md border border-slate-900/10",
        destructive:
          "bg-rose-600 text-white hover:bg-rose-700",
        outline:
          "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 hover:text-slate-950 font-medium",
        secondary:
          "bg-slate-200/80 text-slate-900 hover:bg-slate-300/80 font-medium",
        ghost: "hover:bg-slate-200/60 text-slate-700 hover:text-slate-950 font-medium",
        link: "text-slate-900 underline-offset-4 hover:underline font-semibold",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-13 rounded-2xl px-7 text-base font-bold tracking-wide",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
