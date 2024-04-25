import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const variants = cva(
   "inline-flex flex justify-center items-center relative shadow transition outline-none disabled:cursor-not-allowed disabled:shadow ",
   {
      variants: {
         variant: {
            main:
               " rounded-3xl  focus:scale-95  disabled:bg-slate-500/50 font-semibold border border-slate-900",
            gray:
               "bg-[#726300] text-white rounded-3xl  disabled:bg-slate-500/50 font-semibold border border-slate-900",
            white:
               "bg-[#ffffff] text-[#000000] rounded-3xl  disabled:bg-slate-500/50 font-semibold border border-white",
            primary:
               "bg-indigo-500 text-white rounded-2xl ring-indigo-500/70 ring-offset-2 focus:ring-2 focus:focus-visible:ring-2 focus:scale-95 focus-visible:ring-2 disabled:bg-slate-500/50 font-semibold",
            secondary:
               "bg-red-500 text-white rounded-2xl ring-red-500/70 ring-offset-2 focus:ring-2 focus:focus-visible:ring-2 focus:scale-95 focus-visible:ring-2 disabled:bg-slate-500/50 font-semibold",
            destructive: [],
            link: [],
            ghost: [],
         },
         size: {
            default: "px-6 py-1.5 leading-6",
            small: "px-2 py-1.5 leading-6",
            medium: " px-8 lg:px-12 py-2.5",
         },

      },
      defaultVariants: {
         variant: "main",
         size: "medium",
      },
   }
);

const Loading = () => (
   <div className='absolute '>
      <div className='w-4 h-4 rounded-full border-2 border-b-transparent animate-spin border-[inherit] hover:bg-indigo-600 hover:shadow-md'></div>
   </div>
);


const Button = forwardRef(
   ({ className, variant, size, loading, children, ...rest }, ref) => {
      return (
         <button
            ref={ref}
            className={twMerge(variants({ variant, size, className }))}
            {...rest}
         >
            {loading && <Loading />}
            <span
               className={clsx("transition", {
                  "opacity-0": loading,
                  "opacity-100": !loading,
               })}
            >
               {children}
            </span>
         </button>
      );
   }
);

Button.displayName = "Button";

export { Button };
