"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { validateIranianMobile } from "@/app/lib/validation";
import { MobileInputProps } from "./types";

/**
 * A controlled input component for Iranian mobile numbers.
 * Includes:
 * - Label (optional)
 * - Client-side validation (Iran mobile formats only)
 * - Error state (with ARIA support)
 * - Focus-visible styles
 */
export function MobileInput({ label, className, onChange }: MobileInputProps) {
  // Local state to manage the input value
  const [value, setValue] = useState("");
  // Local state to manage error message when validation fails
  const [error, setError] = useState<string | null>(null);

  /**
   * Handle input changes:
   * - Update local value state
   * - Trigger parent onChange if provided
   * - Run validation against Iranian mobile number format
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (onChange) onChange(inputValue);

    if (inputValue === "" || validateIranianMobile(inputValue)) {
      setError(null); // valid input or empty -> clear error
    } else {
      setError("شماره موبایل معتبر نیست (فرمت: 09xxxxxxxxx)"); // invalid format
    }
  };

  return (
    <div className="w-full">
      {/* Optional label above the input */}
      {label && (
        <label
          htmlFor="mobile"
          className="mb-1 block text-sm font-medium text-foreground"
        >
          {label}
        </label>
      )}

      {/* Input field with ARIA attributes for accessibility */}
      <input
        id="mobile"
        type="tel"
        value={value}
        onChange={handleChange}
        placeholder="مثال: 09123456789"
        aria-invalid={!!error}
        aria-describedby={error ? "mobile-error" : undefined}
        className={clsx(
          "border-input flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-sm outline-none transition-[color,box-shadow] placeholder:text-muted-foreground md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/40 focus-visible:ring-[3px]",
          error &&
            "border-destructive ring-destructive/20 focus-visible:ring-destructive/40",
          className
        )}
      />

      {/* Error message shown only when validation fails */}
      {error && (
        <p id="mobile-error" className="mt-1 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
