import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, Input, Text } from "components";
import Sidebar2 from "components/Sidebar2";

const DesktopTwelvePage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[29px] w-[29px]"
          src="images/img_profile.svg"
          alt="profile"
        />
      ),
      label: "Home",
    },
    {
      icon: (
        <Img
          className="h-[26px] w-[26px]"
          src="images/img_rewind.svg"
          alt="rewind"
        />
      ),
      label: "Search",
    },
    {
      icon: (
        <Img className="h-[26px] w-[26px]" src="images/img_bag.svg" alt="bag" />
      ),
      label: "Sessions",
    },
    {
      icon: (
        <Img
          className="h-[26px] w-[26px]"
          src="images/img_search.svg"
          alt="search_One"
        />
      ),
      label: "Settings",
      href: "/settingsone",
      active: window.location.pathname === "/settingsone",
    },
  ];

  return (
    <>
      <div className="bg-purple-700_63 flex flex-col font-poppins items-center justify-end mx-auto sm:pr-5 pr-[31px] w-full">
        <div className="flex flex-col items-center justify-end mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-[45px] items-start justify-between w-full">
            <Sidebar2 className="!sticky !w-[316px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto shadow-bs1 top-[0]" />
            <div className="flex flex-1 flex-col font-proximasoft gap-[21px] justify-start w-full">
              <Text
                className="ml-3 md:ml-[0] text-5xl sm:text-[38px] md:text-[44px] text-black-900_01"
                size="txtProximaSoftMedium48Black90001"
              >
                Refer
              </Text>
              <div className="bg-white-A700 flex flex-col items-start justify-start p-[45px] md:px-10 sm:px-5 rounded-[20px] shadow-bs3 w-full">
                <Text
                  className="md:ml-[0] ml-[5px] sm:text-[34.47px] md:text-[36.47px] text-[38.47px] text-black-900_01"
                  size="txtProximaSoftMedium3847"
                >
                  Refer to your friends to get{" "}
                </Text>
                <Text
                  className="md:ml-[0] ml-[5px] mt-2.5 sm:text-[38.09px] md:text-[44.09px] text-[48.09px] text-black-900_01"
                  size="txtProximaSoftMedium4809"
                >
                  5% commission
                </Text>
                <div className="border-gray-300 border-solid border-t-2 border-x-2 flex flex-row font-poppins gap-[26px] items-center justify-start md:ml-[0] ml-[5px] mt-[59px] p-7 sm:px-5 rounded-tl-[36px] rounded-tr-[36px] w-[90%] md:w-full">
                  <Img
                    className="h-12 ml-0.5"
                    src="images/img_lock.svg"
                    alt="lock"
                  />
                  <Text
                    className="sm:text-[24.86px] md:text-[26.86px] text-[28.86px] text-black-900_01"
                    size="txtPoppinsRegular2886"
                  >
                    Invite via email
                  </Text>
                </div>
                <Input
                  name="copylink"
                  placeholder="Copy link to invite"
                  className="font-poppins leading-[normal] md:text-[26.86px] p-0 placeholder:text-black-900_01 sm:px-5 sm:text-[24.86px] text-[28.86px] text-left w-full"
                  wrapClassName="md:ml-[0] ml-[5px] pl-[31px] pr-[35px] py-[27px] w-[90%]"
                  type="password"
                  shape="square"
                  color="gray_300"
                  variant="outline"
                ></Input>
                <div className="border-b-2 border-gray-300 border-solid border-x-2 flex flex-row font-poppins gap-7 items-center justify-start md:ml-[0] ml-[5px] p-7 sm:px-5 w-[90%] md:w-full">
                  <Img
                    className="h-12 ml-0.5 w-12"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                  <Text
                    className="sm:text-[24.86px] md:text-[26.86px] text-[28.86px] text-black-900_01"
                    size="txtPoppinsRegular2886"
                  >
                    Share on Facebook
                  </Text>
                </div>
                <div className="border-b-2 border-gray-300 border-solid border-x-2 flex flex-row font-poppins gap-7 items-center justify-start md:ml-[0] ml-[5px] p-[27px] sm:px-5 rounded-bl-[36px] rounded-br-[36px] w-[90%] md:w-full">
                  <Img
                    className="h-12 ml-[3px] w-12"
                    src="images/img_volume.svg"
                    alt="volume"
                  />
                  <Text
                    className="sm:text-[24.86px] md:text-[26.86px] text-[28.86px] text-black-900_01"
                    size="txtPoppinsRegular2886"
                  >
                    Share on Whatsapp
                  </Text>
                </div>
                <Text
                  className="mb-[181px] md:ml-[0] ml-[19px] mt-7 sm:text-[20.05px] md:text-[22.05px] text-[24.05px] text-black-900_01"
                  size="txtPoppinsRegular2405"
                >
                  <>
                    Guide your referrals through their few days on thumbtack.
                    You can help
                    <br />
                    them get started by sharing tips on way to be competitive.
                  </>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwelvePage;
