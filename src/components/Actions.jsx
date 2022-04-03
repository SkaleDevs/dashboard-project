import React from 'react'
import profile from "../images/profile.png";

const Actions = () => {
  return (
    <div className=" ml-[630px] mb-[100]">
          <button className=" rounded-full hover:bg-[#3DBDA7] focus:ring-2 focus:ring-[#3DBDA7] focus:shadow-lg focus:shadow-teal-400 transition duration-200 ease-in px-4 py-3.5 bg-gradient-to-r from-[#1D1E22] to-[#1D1E22]">
            <svg
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.72099 4.00302L8.25499 4.00002C4.91099 3.99202 2.00799 6.70902 1.98499 10V13.79C1.98499 14.58 1.88499 15.351 1.45399 16.008L1.16699 16.446C0.729988 17.11 1.19999 18 1.98499 18H16.015C16.8 18 17.269 17.11 16.833 16.446L16.546 16.008C16.116 15.351 16.015 14.579 16.015 13.789V10.001C15.975 6.70902 13.065 4.01102 9.72099 4.00302V4.00302Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 18C12 18.7956 11.6839 19.5587 11.1213 20.1213C10.5587 20.6839 9.79565 21 9 21C8.20435 21 7.44129 20.6839 6.87868 20.1213C6.31607 19.5587 6 18.7956 6 18"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 1C9.53043 1 10.0391 1.21071 10.4142 1.58579C10.7893 1.96086 11 2.46957 11 3V4H7V3C7 2.46957 7.21071 1.96086 7.58579 1.58579C7.96086 1.21071 8.46957 1 9 1Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className=" ml-[23px] rounded-full hover:bg-[#3DBDA7] focus:ring-2 focus:ring-[#3DBDA7] focus:shadow-lg focus:shadow-teal-400 transition duration-200 ease-in px-4 py-3.5 bg-gradient-to-r from-[#1D1E22] to-[#1D1E22]">
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.2396 0.93077C21.1006 0.815358 20.9316 0.741828 20.7524 0.718748C20.5732 0.695668 20.3912 0.723989 20.2274 0.800411L0.581421 10.0218V11.8062L8.83315 15.1068L14.1261 23.25H15.9108L21.5499 1.9031C21.5956 1.72828 21.5907 1.54407 21.5358 1.37192C21.4808 1.19977 21.3781 1.04678 21.2396 0.93077ZM14.8089 21.5481L10.2594 14.5486L17.2603 6.88066L16.1526 5.86929L9.09687 13.597L2.2933 10.8755L19.7984 2.65872L14.8089 21.5481Z"
                fill="white"
              />
            </svg>
          </button>
          <button className=" ml-[23px] rounded-full hover:bg-[#3DBDA7] w-[50px] h-[50px] focus:ring-2 focus:ring-[#3DBDA7] focus:shadow-lg focus:shadow-teal-400 transition duration-200 ease-in px-3 bg-gradient-to-r from-[#1D1E22] to-[#1D1E22]">
            <img src={profile} alt="profile" className="" />
          </button>
        </div>

  )
}

export default Actions