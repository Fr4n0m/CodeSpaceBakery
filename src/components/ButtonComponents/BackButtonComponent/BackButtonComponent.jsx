import { Link } from "@mui/material";
import React from "react";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

const BackButton = () => {
  return (
    <>
      <div className="absolute mt-[40px] ml-[100px] hover:scale-95 transition-all hover:animate-pulse">
        <Link href="/">
          <div className="flex items-center justify-center gap-2 ">
            <KeyboardBackspaceRoundedIcon
              variant="plain"
              color="warning"
              sx={{ fontSize: 30 }}
            ></KeyboardBackspaceRoundedIcon>
            <div className="uppercase text-lg font-bold text-[#ED6C02] no-underline hover:underline">
              BACK HOME
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BackButton;
