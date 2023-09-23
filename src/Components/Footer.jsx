import React from "react";

function Footer() {
  return (
    <div className=" text-[#2D3748] bg-[#F7FAFC]">
      <div className="container flex justify-between items-center py-[40px] flex-wrap text-center md:text-left">
        <div className="flex flex-col gap-2 p-4 w-full lg:w-[calc(100%/4-16px)] md:w-[calc(100%/2-16px)]">
          <p className="mb-2 text-[18px] font-medium ">product</p>
          <a href="/" className=" hover:text-main-color duration-300">
            Overview
          </a>
          <a href="/" className=" hover:text-main-color duration-300">
            Features
          </a>
          <a href="/" className=" hover:text-main-color duration-300">
            Tutorials
          </a>
          <a href="/" className=" hover:text-main-color duration-300">
            Pricing
          </a>
          <a href="/" className=" hover:text-main-color duration-300">
            Releases
          </a>
        </div>
        <div className="flex flex-col gap-2 p-4 w-full lg:w-[calc(100%/4-16px)] md:w-[calc(100%/2-16px)]">
          <p className="mb-2 text-[18px] font-medium ">Company</p>
          <a href="/" className=" hover:text-main-color duration-300">
            About Us
          </a>
          <a href="/" className=" hover:text-main-color duration-300">
            Press
          </a>
          <a href="/" className=" hover:text-main-color duration-300">
            Careers
          </a>
          <a href="/" className=" hover:text-main-color duration-300">
            Contact Us
          </a>
          <a href="/" className=" hover:text-main-color duration-300">
            Partners
          </a>
        </div>
        <div className="flex flex-col gap-2 p-4 w-full lg:w-[calc(100%/4-16px)] md:w-[calc(100%/2-16px)]">
          <p className="mb-2 text-[18px] font-medium ">Legal</p>
          <a href="/" className=" hover:text-main-color duration-300">
            Cookies Policy
          </a>
          <a href="/" className=" hover:text-main-color duration-300">
            Privacy Policy
          </a>
          <a href="/" className=" hover:text-main-color duration-300">
            Terms of Service
          </a>
          <a href="/" className=" hover:text-main-color duration-300">
            Law Enforcement
          </a>
          <a href="/" className=" hover:text-main-color duration-300">
            Status
          </a>
        </div>
        <div className="flex flex-col gap-2 p-4 w-full lg:w-[calc(100%/4-16px)] md:w-[calc(100%/2-16px)]">
          <p className="mb-2 text-[18px] font-medium ">Follow Us</p>
          <a href="/" className=" hover:text-main-color duration-300">
            Facebook
          </a>
          <a href="/" className=" hover:text-main-color duration-300">
            Twitter
          </a>
          <a href="/" className=" hover:text-main-color duration-300">
            Dribbble
          </a>
          <a href="/" className=" hover:text-main-color duration-300">
            Instagram
          </a>
          <a href="/" className=" hover:text-main-color duration-300">
            Linkedin
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center py-5">
        <div className="">
          <img
            src="./assets/images/fitness logo.png"
            alt="fitness logo"
            className="h-[60px]"
          />
        </div>
        <p className="chakra-text css-1serrm7">
          © 2023 eng Saeed Ebrahim. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
