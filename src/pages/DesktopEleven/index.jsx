import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Text } from "components";
import Sidebar11 from "components/Sidebar11";

const DesktopElevenPage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[26px] w-[26px]"
          src="images/img_vector.svg"
          alt="vector"
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
        <Img
          className="h-[29px] w-[29px]"
          src="images/img_thumbsup_purple_700.svg"
          alt="thumbsup"
        />
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
      <div className="bg-white-A700 font-poppins h-[1024px] mx-auto relative w-full">
        <Img
          className="absolute h-[29px] left-[3%] top-1/4 w-[29px]"
          src="images/img_profile.svg"
          alt="profile"
        />
        <div className="absolute bg-purple-700_63 h-[1024px] inset-[0] justify-center m-auto w-full"></div>
        <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-evenly mx-auto w-full">
          <Sidebar11 className="!sticky !w-[316px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs1 top-[0]" />
          <div className="flex-1 h-[1060px] md:h-[932px] sm:h-[996px] md:mt-0 mt-[7px] md:px-5 relative w-full">
            <div className="absolute bg-white-A700 bottom-[0] flex flex-col font-poppins gap-[21px] inset-x-[0] items-center justify-center mx-auto p-[30px] sm:px-5 rounded-[20px] shadow-bs3 w-[94%]">
              <div className="md:h-[129px] h-[130px] sm:h-[186px] relative w-[99%] md:w-full">
                <div className="flex flex-col h-full items-center justify-start ml-8 mt-[26px] w-[71px]">
                  <Img
                    className="h-[71px] md:h-auto rounded-[50%] w-[71px]"
                    src="images/img_ellipse10_71x71.png"
                    alt="ellipseTen"
                  />
                </div>
                <div className="absolute border border-gray-50 border-solid flex flex-col h-full inset-[0] items-end justify-center m-auto p-[21px] sm:px-5 rounded-[19px] w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 gap-[448px] items-start justify-end mb-1.5 mr-[3px] w-[89%] md:w-full">
                    <div className="flex flex-col items-start justify-start sm:mt-0 mt-1.5 w-[33%] sm:w-full">
                      <Text
                        className="text-[19.52px] text-black-900"
                        size="txtPoppinsMedium1952"
                      >
                        Product Design As A Career
                      </Text>
                      <Text
                        className="text-[12.83px] text-blue_gray-700 tracking-[0.13px]"
                        size="txtPoppinsMedium1283"
                      >
                        Session with James Charles
                      </Text>
                      <Input
                        name="groupTwentyNine"
                        placeholder="Join Now"
                        className="font-medium leading-[normal] p-0 placeholder:text-green-600 text-[12.83px] text-left w-full"
                        wrapClassName="mt-[3px] rounded-[13px] w-[32%]"
                        color="green_600_01"
                        size="sm"
                        variant="outline"
                      ></Input>
                    </div>
                    <Text
                      className="text-base text-green-600"
                      size="txtPoppinsMedium16Green600"
                    >
                      Starting in 1m
                    </Text>
                  </div>
                </div>
              </div>
              <div className="md:h-[110px] h-[130px] relative w-[99%] md:w-full">
                <div className="flex flex-col h-full items-center justify-start ml-[34px] my-auto w-[71px]">
                  <Img
                    className="h-[71px] md:h-auto rounded-[50%] w-[71px]"
                    src="images/img_ellipse10_71x71.png"
                    alt="ellipseTen_One"
                  />
                </div>
                <div className="absolute border border-gray-50 border-solid flex flex-col h-full inset-[0] justify-center m-auto p-[18px] rounded-[19px] w-full">
                  <Text
                    className="md:ml-[0] ml-[838px] text-base text-blue_gray-700"
                    size="txtPoppinsMedium16"
                  >
                    16 Out,2023
                  </Text>
                  <div className="h-[46px] md:h-[50px] mb-[22px] md:ml-[0] ml-[101px] mr-[564px] relative w-[29%]">
                    <Text
                      className="absolute bottom-[0] left-[0] text-[12.83px] text-blue_gray-700 tracking-[0.13px]"
                      size="txtPoppinsMedium1283"
                    >
                      Session with James Charles
                    </Text>
                    <Text
                      className="absolute inset-x-[0] mx-auto text-[19.52px] text-black-900 top-[0] w-max"
                      size="txtPoppinsMedium1952"
                    >
                      Product Design As A Career
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[130px] md:h-[591px] mb-[462px] relative w-[99%] md:w-full">
                <div className="flex flex-col h-full items-center justify-start ml-8 my-auto w-[71px]">
                  <Img
                    className="h-[71px] md:h-auto rounded-[50%] w-[71px]"
                    src="images/img_ellipse10_71x71.png"
                    alt="ellipseTen_Two"
                  />
                </div>
                <div className="absolute border border-gray-50 border-solid flex flex-col h-full inset-[0] items-end justify-center m-auto p-[25px] sm:px-5 rounded-[19px] w-full">
                  <div className="flex flex-col items-start justify-start mb-[19px] mt-1 w-[90%] md:w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                      <Text
                        className="mt-3 text-[19.52px] text-black-900"
                        size="txtPoppinsMedium1952"
                      >
                        Product Design As A Career
                      </Text>
                      <Text
                        className="text-base text-blue_gray-700"
                        size="txtPoppinsMedium16"
                      >
                        16 Out,2023
                      </Text>
                    </div>
                    <Text
                      className="text-[12.83px] text-blue_gray-700 tracking-[0.13px]"
                      size="txtPoppinsMedium1283"
                    >
                      Session with James Charles
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="ml-[42px] mt-[33px] text-5xl sm:text-[38px] md:text-[44px] text-black-900_01"
              size="txtProximaSoftSemiBold48Black90001"
            >
              Sessions
            </Text>
            <div className="absolute bg-gray-900_4c flex flex-col h-max inset-[0] items-center justify-center m-auto p-[167px] md:px-10 sm:px-5 w-full">
              <div className="bg-white-A700 flex flex-col items-start justify-end mb-[86px] p-[7px] rounded-[29px] w-[69%] md:w-full">
                <div className="flex flex-col font-proximasoft items-start justify-start md:ml-[0] ml-[38px] mt-[38px]">
                  <Text
                    className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
                    size="txtProximaSoftSemiBold30"
                  >
                    Review session
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-0.5 text-black-900_01 text-xl"
                    size="txtProximaSoftMedium20"
                  >
                    <span className="text-blue_gray-700 font-proximasoft text-left font-normal">
                      with
                    </span>
                    <span className="text-black-900 font-proximasoft text-left font-medium">
                      {" "}
                    </span>
                    <span className="text-black-900_01 font-proximasoft text-left font-normal">
                      Adiel Omari
                    </span>
                  </Text>
                </div>
                <Text
                  className="capitalize md:ml-[0] ml-[38px] mt-[21px] text-black-900 text-xl"
                  size="txtPoppinsMedium20"
                >
                  Please Provide your review on Adiel Omari
                </Text>
                <div className="font-poppins h-[49px] md:ml-[0] ml-[38px] mt-2.5 relative w-[21%]">
                  <Text
                    className="mb-[-0.68px] text-[18.6px] text-black-900 z-[1]"
                    size="txtPoppinsRegular186"
                  >
                    Rate{" "}
                  </Text>
                  <Img
                    className="h-[22px] mt-auto mx-auto"
                    src="images/img_group117.svg"
                    alt="group117"
                  />
                </div>
                <Text
                  className="lowercase ml-10 md:ml-[0] mt-[17px] text-[18.6px] text-black-900"
                  size="txtProximaSoftMedium186"
                >
                  <span className="text-black-900 font-poppins uppercase text-left font-normal">
                    P
                  </span>
                  <span className="text-black-900 font-poppins text-left font-normal">
                    rovide a review about the Session
                  </span>
                </Text>
                <Text
                  className="ml-10 md:ml-[0] mt-1.5 text-[13.29px] text-blue_gray-700 uppercase"
                  size="txtPoppinsRegular1329"
                >
                  <span className="text-blue_gray-700 font-poppins text-left font-normal">
                    Y
                  </span>
                  <span className="text-blue_gray-700 font-poppins lowercase text-left font-normal">
                    our answer will be posted on your behalf
                  </span>
                </Text>
                <div className="bg-gray-100_03 border border-gray-900_1e border-solid flex flex-col md:gap-10 gap-[117px] justify-end md:ml-[0] ml-[39px] mt-4 p-2.5 rounded-md">
                  <Text
                    className="mr-[419px] mt-0.5 text-black-900_01 text-xs"
                    size="txtInterRegular12"
                  >
                    |
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[401px] mr-[3px] text-[10px] text-gray-700_04"
                    size="txtProximaSoftRegular10"
                  >
                    250
                  </Text>
                </div>
                <Button
                  className="!text-gray-100 cursor-pointer font-poppins h-[54px] leading-[normal] md:ml-[0] ml-[59px] mt-9 rounded-[27px] shadow-bs5 text-center text-xl w-[366px]"
                  shape="round"
                  size="lg"
                >
                  Submit
                </Button>
                <Text
                  className="md:ml-[0] ml-[222px] mt-[21px] text-purple-700 text-xl underline"
                  size="txtPoppinsRegular20Purple700"
                >
                  Skip
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopElevenPage;
