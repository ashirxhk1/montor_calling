import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import Sidebar5 from "components/Sidebar5";

const SettingsOnePage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[27px] w-[27px]"
          src="images/img_outlinemoney.svg"
          alt="outlinemoney"
        />
      ),
      label: "Finance",
      href: "/finance",
      active: window.location.pathname === "/finance",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_checkmark_blue_gray_300.svg"
          alt="checkmark"
        />
      ),
      label: "Analytics",
      href: "/analyticsandreporting",
      active: window.location.pathname === "/analyticsandreporting",
    },
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_vector_blue_gray_300.svg"
          alt="vector"
        />
      ),
      label: "Customer Services",
      href: "/customerservice",
      active: window.location.pathname === "/customerservice",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_search_purple_700_24x24.svg"
          alt="search"
        />
      ),
      label: "Settings",
      href: "/settingsone",
      active: window.location.pathname === "/settingsone",
    },
  ];

  return (
    <>
      <div className="bg-blue_gray-100_01 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar5 className="!sticky !w-[316px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col font-proximasoft gap-[42px] justify-start md:px-5 w-full">
            <div className="bg-white-A700 flex flex-row gap-10 items-center justify-end p-[13px] shadow-bs18 w-full">
              <div className="bg-white-A700 border border-gray-900_7f border-solid flex flex-col h-[41px] items-center justify-end mb-3.5 mt-[17px] p-[7px] rounded-[20px] w-[41px]">
                <div className="bg-white-A700 flex flex-col h-[25px] items-center justify-start rounded-[5px] w-[25px]">
                  <Img
                    className="h-[22px] w-[21px]"
                    src="images/img_user.svg"
                    alt="user"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-center mr-[27px] p-2.5 w-auto">
                <Img
                  className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                  src="images/img_profilepic2.png"
                  alt="profilepicTwo"
                />
                <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                  <Text
                    className="text-center text-gray-900 text-xl w-auto"
                    size="txtProximaSoftSemiBold20"
                  >
                    Antonio
                  </Text>
                  <Img
                    className="h-1.5 w-2"
                    src="images/img_arrowup.svg"
                    alt="arrowup"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[27px] w-[32%] md:w-full">
              <Text
                className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900_03"
                size="txtProximaSoftSemiBold35"
              >
                Account Settings
              </Text>
              <div className="flex sm:flex-col flex-row gap-[27px] items-start justify-between w-full">
                <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start p-7 sm:px-5 rounded-[30px]">
                  <div className="flex flex-col md:gap-10 gap-[143px] items-start justify-start my-[7px] pb-[62px] md:pr-10 sm:pr-5 pr-[62px] w-[91%] md:w-full">
                    <div className="flex flex-col gap-[12.74px] items-start justify-start w-auto">
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] min-w-[135px] rounded-[10px] shadow-bs23 sm:text-[16.38px] md:text-[18.38px] text-[20.38px] text-center"
                        size="lg"
                      >
                        My Profile
                      </Button>
                      <div className="flex flex-col items-center justify-center pl-[15.28px] pr-[19.11px] py-[12.74px] rounded-[10px] shadow-bs23 w-auto">
                        <Text
                          className="sm:text-[16.38px] md:text-[18.38px] text-[20.38px] text-gray-900_87 w-auto"
                          size="txtPoppinsSemiBold2038"
                        >
                          Security
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-center pl-[15.28px] pr-[19.11px] py-[12.74px] rounded-[10px] shadow-bs23 w-auto">
                        <Text
                          className="sm:text-[16.38px] md:text-[18.38px] text-[20.38px] text-gray-900_87 w-auto"
                          size="txtPoppinsSemiBold2038"
                        >
                          Notifications
                        </Text>
                      </div>
                    </div>
                    <div className="h-[49px] mb-[433px] rounded-[10px] shadow-bs23 w-full"></div>
                  </div>
                </div>
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900_02"
                  size="txtProximaSoftSemiBold30Gray90002"
                >
                  My Profile
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsOnePage;
