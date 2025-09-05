"use client";

import { useState } from "react";
import { MobileInput } from "../components/input/mobileInput";
import { Button } from "../components/button/button";

export function LoginTemplate() {
  const [loading, setLoading] = useState(false);
  const [mobileValue, setMobileValue] = useState("");

  return (
    <main className="flex justify-center items-center h-full w-full bg-[#11121f] overflow-hidden">
      <div className="relative w-full h-full flex justify-center items-center max-md:items-end">
        <div className="flex justify-center items-center absolute top-20 end-28">
          <div className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="374"
              height="374"
              viewBox="0 0 374 374"
              fill="none"
            >
              <g opacity="0.6" filter="url(#filter0_f_55_2109)">
                <circle cx="187" cy="187" r="67" fill=" #A8C3D1"></circle>
              </g>
              <defs>
                <filter
                  id="filter0_f_55_2109"
                  x="0"
                  y="0"
                  width="374"
                  height="374"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="60"
                    result="effect1_foregroundBlur_55_2109"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>{" "}
          <div className="absolute w-[300px] h-[300px] opacity-40 rounded-[300px] bg-[radial-gradient(37.67%_37.67%_at_50%_50%,#A8C3D1_0%,#A8C3D1_51.51%)] blur-[160px]"></div>
        </div>
        <div className="flex justify-center items-center absolute bottom-20 start-28">
          <div className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="374"
              height="374"
              viewBox="0 0 374 374"
              fill="none"
            >
              <g opacity="0.6" filter="url(#filter0_f_55_2109)">
                <circle cx="187" cy="187" r="67" fill="#A8C3D1"></circle>
              </g>
              <defs>
                <filter
                  id="filter0_f_55_2109"
                  x="0"
                  y="0"
                  width="374"
                  height="374"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="60"
                    result="effect1_foregroundBlur_55_2109"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>{" "}
          <div className="absolute w-[300px] h-[300px] opacity-40 rounded-[300px] bg-[radial-gradient(37.67%_37.67%_at_50%_50%,#A8C3D1_0%,#A8C3D1_51.51%)] blur-[160px]"></div>
        </div>
        <div className="flex flex-col justify-center items-center gap-12 max-md:h-[70%] max-md:bg-white max-md:w-full max-md:rounded-tl-[150px] max-md:gap-20 max-md:pt-14">
          <h1
            className="text-4xl font-medium text-white max-md:text-black"
            dir="ltr"
          >
            Yooo, welcome back!
          </h1>
          <div className="w-[500px] px-10 py-14 flex flex-col gap-7 border rounded-lg text-white max-md:border-none max-md:text-black max-md:w-full">
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
            >
              ورود
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
