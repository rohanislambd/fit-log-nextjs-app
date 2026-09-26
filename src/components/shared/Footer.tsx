import React from "react";
import FooterLogo from "@/assets/logo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className=" bg-black border-t border-[#292d30]">
      <div className="flex justify-between  container mx-auto py-5">
        <div className="flex items-center space-x-2">
          <Image
            src={FooterLogo}
            alt="footerImage"
            width={20}
            height={20}
          ></Image>
          <h2 className="text-[14px] font-bold text-white ">FITLOG</h2>
        </div>
        <div>
          <p className="text-[12px] text-[#6B7280] ">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
