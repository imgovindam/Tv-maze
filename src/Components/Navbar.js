import React from "react";
import LiveTvIcon from "@mui/icons-material/LiveTv";

const Navbar = () => {
  return (
    <div className="bg-red-400 flex A h-[45vh]">
      <div className="B w-full h-full flex text-center justify-center items-center">
        <div className="bg-white px-4 py-4 hover:font-mono rounded-lg items-center text-black flex">
          <span className="flex items-center bg-white">
            <LiveTvIcon
              fontSize="large"
              style={{
                color: "Red",
                font: 40,
                backgroundColor: "white",
              }}
            />
          </span>
          TV MAZE
        </div>
      </div>
    </div>
  );
};

export default Navbar;
