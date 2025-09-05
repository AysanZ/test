"use client";

import { useState } from "react";
import { MobileInput } from "../components/input/mobileInput";
import { Button } from "../components/button/button";
import { LoginBG } from "./loginBG";
import { LoginProps } from "./types";

export function LoginTemplate({ loading, onLogin }: LoginProps) {
  const [mobileValue, setMobileValue] = useState("");

  return (
    <main className="flex justify-center items-center h-full w-full bg-[#11121f] overflow-hidden">
      <div className="relative w-full h-full flex justify-center items-center max-md:items-end">
        <LoginBG />
        <div className="flex flex-col justify-center items-center gap-12 max-md:h-[60dvh] max-md:bg-white max-md:w-full max-md:rounded-tl-[150px] max-md:gap-20 max-md:pt-14">
          <form className="w-[500px] z-50 px-10 py-14 flex flex-col gap-7 border rounded-lg text-white max-md:border-none max-md:text-black max-md:w-full">
            <MobileInput
              label="شماره موبایل"
              onChange={(value) => {
                setMobileValue(value);
              }}
            />
            <Button
              type="submit"
              loading={loading}
              className="w-full"
              disabled={mobileValue.length === 0}
              onClick={(e) => {
                e.preventDefault(); 
                onLogin();
              }}
            >
              ورود
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
