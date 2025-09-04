"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

// Define button variants using class-variance-authority (cva)
// This helps to manage Tailwind classes in a clean and scalable way
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      // Different button styles
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      // Different button sizes
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
      // Loading state (when true, button looks disabled)
      loading: {
        true: "cursor-wait opacity-80",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
  }) {
  // Use Radix Slot if `asChild` is true, otherwise render a regular <button>
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      // Combine base styles + variant + size + loading + extra classes
      className={clsx(buttonVariants({ variant, size, loading, className }))}
      // Disable button if loading or explicitly disabled
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        // When loading, show the spinner instead of the button children
        <div className="flex items-center justify-center">
          <div className="container after:!bg-[#3538CD] before:!bg-[#3538CD]">
            <div className="dot !bg-[#3538CD]"></div>
          </div>
        </div>
      ) : (
        // Otherwise render button children normally
        children
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
