import { color } from "@mui/system";
import React from "react";
import xboxLogo from "../images/xbox.png";

const Navbar = () => {
  return (
    <div className=" min-h-screen text-2xl w-[70px] mx-2 rounded-t-full rounded-b-full fixed bg-[#080808] py-4">
      <button className=" px-4">
        <img src={xboxLogo} alt="xbox logo" className="w-10 h-9" />
      </button>
      <div className=" my-[190px] ml-[10.5px]">
        <button className=" my-3 rounded-full hover:bg-[#3DBDA7] focus:ring-2 focus:ring-[#3DBDA7] focus:shadow-lg focus:shadow-teal-400 transition duration-200 ease-in px-3 py-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 20V12.174C22.0001 11.6296 21.889 11.0908 21.6735 10.5908C21.458 10.0907 21.1428 9.63995 20.747 9.26603L13.374 2.29803C13.0027 1.94696 12.511 1.75134 12 1.75134C11.489 1.75134 10.9973 1.94696 10.626 2.29803L3.253 9.26603C2.85722 9.63995 2.54195 10.0907 2.3265 10.5908C2.11104 11.0908 1.99994 11.6296 2 12.174V20C2 20.5305 2.21071 21.0392 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H20C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0392 22 20.5305 22 20Z"
              stroke="white"
              stroke-width="2.17"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button className=" my-3 rounded-full hover:bg-[#3DBDA7] focus:ring-2 focus:ring-[#3DBDA7] focus:shadow-lg focus:shadow-teal-400 transition duration-200 ease-in px-3 py-4">
          <svg
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5.75C2 7.18222 2.64273 8.46983 3.64931 9.34166C1.7758 10.4194 0.5 12.4359 0.5 14.75V15H0.75H2.25H2.5V14.75C2.5 12.3951 4.39507 10.5 6.75 10.5C9.10493 10.5 11 12.3951 11 14.75V15H11.25H12.75H13V14.75C13 12.3951 14.8951 10.5 17.25 10.5C19.6049 10.5 21.5 12.3951 21.5 14.75V15H21.75H23.25H23.5V14.75C23.5 12.4355 22.2246 10.4199 20.3516 9.34215C20.817 8.9405 21.2012 8.45153 21.4815 7.90156C21.8211 7.23527 21.9987 6.49827 22 5.75042V5.75C22 3.13693 19.8631 1 17.25 1C14.6369 1 12.5 3.13693 12.5 5.75C12.5 7.18172 13.1423 8.46892 14.1482 9.34074C13.2821 9.83511 12.5458 10.5282 12 11.3625C11.4544 10.5285 10.7184 9.83557 9.85262 9.34123C10.3176 8.93976 10.7014 8.45111 10.9815 7.90156C11.3211 7.23527 11.4987 6.49827 11.5 5.75042V5.75C11.5 3.13693 9.36307 1 6.75 1C4.13693 1 2 3.13693 2 5.75ZM6.75 3C8.27918 3 9.5 4.22082 9.5 5.75C9.5 7.27918 8.27918 8.5 6.75 8.5C5.22082 8.5 4 7.27918 4 5.75C4 4.22082 5.22082 3 6.75 3ZM17.25 3C18.7792 3 20 4.22082 20 5.75C20 7.27918 18.7792 8.5 17.25 8.5C15.7208 8.5 14.5 7.27918 14.5 5.75C14.5 4.22082 15.7208 3 17.25 3Z"
              fill="white"
              stroke="white"
              stroke-width="0.5"
            />
          </svg>
        </button>
        <button className=" my-3 rounded-full hover:bg-[#3DBDA7] focus:ring-2 focus:ring-[#3DBDA7] focus:shadow-lg focus:shadow-teal-400 transition duration-200 ease-in px-3 py-3">
          <svg
            width="28"
            height="26"
            viewBox="0 0 36 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 14.4166H13.25M18 9.66663V14.4166V9.66663ZM18 14.4166V19.1666V14.4166ZM18 14.4166H22.75H18Z"
              stroke="white"
              stroke-width="3.16667"
              stroke-linecap="round"
            />
            <path
              d="M21.1667 27.0833C27.1374 27.0833 30.1236 27.0833 31.9777 25.2277C33.8333 23.3736 33.8333 20.3874 33.8333 14.4167C33.8333 8.44592 33.8333 5.45975 31.9777 3.60567C30.1236 1.75 27.1374 1.75 21.1667 1.75H14.8333C8.86257 1.75 5.87641 1.75 4.02232 3.60567C2.16666 5.45975 2.16666 8.44592 2.16666 14.4167C2.16666 20.3874 2.16666 23.3736 4.02232 25.2277C5.05624 26.2632 6.44166 26.7208 8.49999 26.9218"
              stroke="white"
              stroke-width="3.16667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.1667 27.0834C19.2097 27.0834 17.0532 27.875 15.0851 28.8963C11.9216 30.5382 10.3398 31.36 9.56082 30.8359C8.78182 30.3134 8.92907 28.6905 9.22515 25.4462L9.29165 24.7084"
              stroke="white"
              stroke-width="3.16667"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <button className=" my-3 rounded-full hover:bg-[#3DBDA7] focus:ring-2 focus:ring-[#3DBDA7] focus:shadow-lg focus:shadow-teal-400 transition duration-200 ease-in px-3 py-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.074 2.633C11.394 1.789 12.605 1.789 12.926 2.633L14.996 8.367C15.141 8.747 15.51 9 15.922 9H21.009C21.949 9 22.359 10.17 21.62 10.743L18 14C17.8378 14.1247 17.7193 14.2975 17.6615 14.4937C17.6036 14.6898 17.6094 14.8993 17.678 15.092L19 20.695C19.322 21.595 18.28 22.368 17.492 21.814L12.575 18.694C12.4066 18.5757 12.2058 18.5122 12 18.5122C11.7942 18.5122 11.5934 18.5757 11.425 18.694L6.508 21.814C5.721 22.368 4.678 21.594 5 20.695L6.322 15.092C6.39058 14.8993 6.39636 14.6898 6.33851 14.4937C6.28066 14.2975 6.16216 14.1247 6 14L2.38 10.743C1.64 10.17 2.052 9 2.99 9H8.077C8.27729 9.00067 8.47307 8.9405 8.63842 8.82747C8.80377 8.71444 8.9309 8.55387 9.003 8.367L11.073 2.633H11.074Z"
              stroke="white"
              stroke-width="2.17"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button className=" my-3 rounded-full hover:bg-[#3DBDA7] focus:ring-2 focus:ring-[#3DBDA7] focus:shadow-lg focus:shadow-teal-400 transition duration-200 ease-in px-3 py-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="white"
              stroke-width="2.17"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </button>

       
      </div>
    </div>
  );
};

export default Navbar;
