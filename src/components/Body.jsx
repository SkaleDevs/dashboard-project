import React from "react";

import Actions from "./Actions";
import SearchBar from "./SearchBar";

const Body = () => {
  return (
    <div className=" ml-[176px] pt-[39px]">
      <div className="flex flex-row ">
        <div>
          <SearchBar />
        </div>
        <div>
          <Actions />
        </div>
      </div>
      <div className="flex flex-row ">
        <div className=" w-[909px] h-[313px] mt-[54px] bg-white rounded-3xl" ></div>
        {/* <div classname=" bg-white"></div> */}
      </div>
        
    </div>
  );
};

export default Body;
