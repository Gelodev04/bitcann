import React from "react";

export const Copy = ({size = "23"} :{size?: string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M26.1999 10.8H13.6006C12.0543 10.8 10.8008 12.0536 10.8008 13.6V26.2C10.8008 27.7464 12.0543 29 13.6006 29H26.1999C27.7463 29 28.9998 27.7464 28.9998 26.2V13.6C28.9998 12.0536 27.7463 10.8 26.1999 10.8Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.19977 19.2H3.79985C3.05728 19.2 2.34513 18.905 1.82006 18.3799C1.29498 17.8548 1 17.1426 1 16.4V3.79999C1 3.05739 1.29498 2.3452 1.82006 1.8201C2.34513 1.295 3.05728 1 3.79985 1H16.3992C17.1417 1 17.8539 1.295 18.3789 1.8201C18.904 2.3452 19.199 3.05739 19.199 3.79999V5.19999"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
