import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const DesktopSixteenPage = () => {
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
      <div className="bg-white-A700 font-proximasoft h-[1024px] mx-auto relative w-full">
        <div className="absolute bg-purple-700_5e flex flex-col h-full inset-[0] items-end justify-center m-auto p-[47px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-start justify-start mt-[15px] w-[77%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Text
                className="md:mt-0 mt-[3px] text-5xl sm:text-[38px] md:text-[44px] text-gray-900"
                size="txtProximaSoftSemiBold48"
              >
                Hello, Imani
              </Text>
              <Button
                className="bg-gray-50 border border-purple-700 border-solid flex h-[51px] items-center justify-center md:ml-[0] ml-[656px] w-[51px]"
                shape="round"
                color="gray_50"
                size="md"
              >
                <Img
                  className="h-[31px]"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
              </Button>
              <div className="bg-white-A700 border border-purple-700 border-solid flex flex-col h-[51px] items-center justify-end ml-4 md:ml-[0] p-[9px] rounded-[25px] w-[51px]">
                <Button
                  className="flex h-[31px] items-center justify-center rounded-md w-[31px]"
                  color="white_A700"
                  size="xs"
                >
                  <Img src="images/img_user.svg" alt="user" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col font-poppins items-center justify-start mt-5 w-[19%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Input
                  name="inputfield"
                  placeholder="Update Profile"
                  className="leading-[normal] md:h-auto p-0 placeholder:text-purple-700 sm:h-auto text-base text-left w-full"
                  wrapClassName="flex rounded-[27px] w-full"
                  prefix={
                    <div className="mt-px mb-[5px] mr-[9px] sm:w-full sm:mx-0 w-[8%] bg-purple-700">
                      <Img
                        className="my-auto"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                    </div>
                  }
                  color="purple_700"
                  size="2xl"
                  variant="outline"
                ></Input>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row font-poppins gap-7 grid md:grid-cols-1 grid-cols-2 mt-[31px] w-[95%]"
              orientation="horizontal"
            >
              <div className="bg-lime-700_75 flex flex-col items-start justify-start px-[3px] rounded-md w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-[52%] md:w-full">
                  <Img
                    className="h-[122px]"
                    src="images/img_line3.svg"
                    alt="lineThree"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-[19.41px] text-purple-700"
                      size="txtPoppinsMedium1941"
                    >
                      Session for today
                    </Text>
                    <Text
                      className="text-[16.64px] text-black-900"
                      size="txtPoppinsRegular1664"
                    >
                      Session with Michael Scott
                    </Text>
                    <Text
                      className="text-[16.64px] text-black-900"
                      size="txtPoppinsRegular1664"
                    >
                      10:00 - 10:30am
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-lime-700_75 flex flex-col items-start justify-start px-[5px] rounded-md w-full">
                <div className="flex flex-row gap-[22px] items-center justify-start w-[52%] md:w-full">
                  <Img
                    className="h-[122px]"
                    src="images/img_line3.svg"
                    alt="lineThree"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-[19.41px] text-purple-700"
                      size="txtPoppinsMedium1941"
                    >
                      Session for tomorrow
                    </Text>
                    <Text
                      className="mt-0.5 text-[16.64px] text-black-900"
                      size="txtPoppinsRegular1664"
                    >
                      Session with Michael Scott
                    </Text>
                    <Text
                      className="text-[16.64px] text-black-900"
                      size="txtPoppinsRegular1664"
                    >
                      10:00 - 10:30am
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <Text
              className="mt-[33px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
              size="txtProximaSoftSemiBold40"
            >
              Top Mentors for you
            </Text>
            <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-center justify-between md:ml-[0] ml-[3px] mt-[18px] w-[99%] md:w-full">
              <div className="h-[255px] relative w-[23%] md:w-full">
                <div className="h-[255px] m-auto w-full">
                  <Img
                    className="h-[255px] m-auto object-cover rounded-[13px] w-full"
                    src="images/img_rectangle6.png"
                    alt="rectangleSix"
                  />
                  <Text
                    className="absolute bottom-[40%] left-[5%] text-[10.09px] text-white-A700 tracking-[0.10px]"
                    size="txtPoppinsMedium1009"
                  >
                    Adiel Omari
                  </Text>
                </div>
                <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[5%] w-[83%]">
                  <Text
                    className="text-[14.13px] text-white-A700"
                    size="txtPoppinsSemiBold1413"
                  >
                    Product Designer
                  </Text>
                  <div className="flex flex-row items-center justify-evenly w-full">
                    <Input
                      name="frameOne"
                      placeholder="Career Advice"
                      className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-black-900_01 sm:h-auto text-[10.09px] text-left w-full"
                      wrapClassName="w-[47%]"
                      shape="round"
                      color="blue_gray_100"
                      size="xs"
                      variant="fill"
                    ></Input>
                    <Text
                      className="bg-blue_gray-100 h-[19px] justify-center px-[7px] rounded-[9px] text-[10.09px] text-black-900_01 w-24"
                      size="txtPoppinsMedium1009Black90001"
                    >
                      College Queries
                    </Text>
                  </div>
                  <Text
                    className="bg-blue_gray-100 h-[19px] justify-center mt-1 px-2 rounded-[9px] text-[10.09px] text-black-900_01 w-[124px]"
                    size="txtPoppinsMedium1009Black90001"
                  >
                    Interview Techniques
                  </Text>
                  <Text
                    className="mt-[5px] text-[12.8px] text-lime-700 underline"
                    size="txtPoppinsSemiBold128"
                  >
                    Book Session
                  </Text>
                </div>
              </div>
              <div className="h-[255px] relative w-[23%] md:w-full">
                <Img
                  className="h-[255px] m-auto object-cover rounded-[13px] w-full"
                  src="images/img_rectangle6_255x229.png"
                  alt="rectangleSix_One"
                />
                <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[6%] w-[83%]">
                  <Text
                    className="text-[10.09px] text-white-A700 tracking-[0.10px]"
                    size="txtPoppinsMedium1009"
                  >
                    Faraji Mandla{" "}
                  </Text>
                  <Text
                    className="text-[14.13px] text-white-A700"
                    size="txtPoppinsSemiBold1413"
                  >
                    Product Developer
                  </Text>
                  <div className="flex flex-row items-center justify-evenly w-full">
                    <Input
                      name="frameOne_One"
                      placeholder="Career Advice"
                      className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-black-900_01 sm:h-auto text-[10.09px] text-left w-full"
                      wrapClassName="w-[47%]"
                      shape="round"
                      color="blue_gray_100"
                      size="xs"
                      variant="fill"
                    ></Input>
                    <Text
                      className="bg-blue_gray-100 h-[19px] justify-center px-[7px] rounded-[9px] text-[10.09px] text-black-900_01 w-24"
                      size="txtPoppinsMedium1009Black90001"
                    >
                      College Queries
                    </Text>
                  </div>
                  <Text
                    className="bg-blue_gray-100 h-[19px] justify-center mt-1 px-2 rounded-[9px] text-[10.09px] text-black-900_01 w-[124px]"
                    size="txtPoppinsMedium1009Black90001"
                  >
                    Interview Techniques
                  </Text>
                  <Text
                    className="mt-[5px] text-[12.8px] text-lime-700 underline"
                    size="txtPoppinsSemiBold128"
                  >
                    Book Session
                  </Text>
                </div>
              </div>
              <div className="h-[255px] relative w-[23%] md:w-full">
                <Img
                  className="h-[255px] m-auto object-cover rounded-[13px] w-full"
                  src="images/img_rectangle6_1.png"
                  alt="rectangleSix_Two"
                />
                <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[5%] w-[83%]">
                  <Text
                    className="text-[10.09px] text-white-A700 tracking-[0.10px]"
                    size="txtPoppinsMedium1009"
                  >
                    Zola Kwame
                  </Text>
                  <Text
                    className="text-[14.13px] text-white-A700"
                    size="txtPoppinsSemiBold1413"
                  >
                    Product Developer
                  </Text>
                  <div className="flex flex-row items-center justify-evenly w-full">
                    <Input
                      name="frameOne_Two"
                      placeholder="Career Advice"
                      className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-black-900_01 sm:h-auto text-[10.09px] text-left w-full"
                      wrapClassName="w-[47%]"
                      shape="round"
                      color="blue_gray_100"
                      size="xs"
                      variant="fill"
                    ></Input>
                    <Text
                      className="bg-blue_gray-100 h-[19px] justify-center px-[7px] rounded-[9px] text-[10.09px] text-black-900_01 w-24"
                      size="txtPoppinsMedium1009Black90001"
                    >
                      College Queries
                    </Text>
                  </div>
                  <Text
                    className="bg-blue_gray-100 h-[19px] justify-center mt-1 px-2 rounded-[9px] text-[10.09px] text-black-900_01 w-[124px]"
                    size="txtPoppinsMedium1009Black90001"
                  >
                    Interview Techniques
                  </Text>
                  <Text
                    className="mt-[5px] text-[12.8px] text-lime-700 underline"
                    size="txtPoppinsSemiBold128"
                  >
                    Book Session
                  </Text>
                </div>
              </div>
              <div className="h-[255px] relative w-[23%] md:w-full">
                <div className="h-[255px] m-auto w-full">
                  <Img
                    className="h-[255px] m-auto object-cover rounded-[13px] w-full"
                    src="images/img_rectangle6.png"
                    alt="rectangleSix_Three"
                  />
                  <Text
                    className="absolute bottom-[40%] left-[5%] text-[10.09px] text-white-A700 tracking-[0.10px]"
                    size="txtPoppinsMedium1009"
                  >
                    Adiel Omari
                  </Text>
                </div>
                <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[5%] w-[83%]">
                  <Text
                    className="text-[14.13px] text-white-A700"
                    size="txtPoppinsSemiBold1413"
                  >
                    Product Designer
                  </Text>
                  <div className="flex flex-row items-center justify-evenly w-full">
                    <Input
                      name="frameOne_Three"
                      placeholder="Career Advice"
                      className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-black-900_01 sm:h-auto text-[10.09px] text-left w-full"
                      wrapClassName="w-[47%]"
                      shape="round"
                      color="blue_gray_100"
                      size="xs"
                      variant="fill"
                    ></Input>
                    <Text
                      className="bg-blue_gray-100 h-[19px] justify-center px-[7px] rounded-[9px] text-[10.09px] text-black-900_01 w-24"
                      size="txtPoppinsMedium1009Black90001"
                    >
                      College Queries
                    </Text>
                  </div>
                  <Text
                    className="bg-blue_gray-100 h-[19px] justify-center mt-1 px-2 rounded-[9px] text-[10.09px] text-black-900_01 w-[124px]"
                    size="txtPoppinsMedium1009Black90001"
                  >
                    Interview Techniques
                  </Text>
                  <Text
                    className="mt-[5px] text-[12.8px] text-lime-700 underline"
                    size="txtPoppinsSemiBold128"
                  >
                    Book Session
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-center justify-between md:ml-[0] ml-[3px] mt-[31px] w-[99%] md:w-full">
              <div className="h-[255px] relative w-[23%] md:w-full">
                <div className="h-[255px] m-auto w-full">
                  <Img
                    className="h-[255px] m-auto object-cover rounded-[13px] w-full"
                    src="images/img_rectangle6.png"
                    alt="rectangleSix_Four"
                  />
                  <Text
                    className="absolute bottom-[40%] left-[5%] text-[10.09px] text-white-A700 tracking-[0.10px]"
                    size="txtPoppinsMedium1009"
                  >
                    Adiel Omari
                  </Text>
                </div>
                <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[5%] w-[83%]">
                  <Text
                    className="text-[14.13px] text-white-A700"
                    size="txtPoppinsSemiBold1413"
                  >
                    Product Designer
                  </Text>
                  <div className="flex flex-row items-center justify-evenly w-full">
                    <Input
                      name="frameOne_Four"
                      placeholder="Career Advice"
                      className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-black-900_01 sm:h-auto text-[10.09px] text-left w-full"
                      wrapClassName="w-[47%]"
                      shape="round"
                      color="blue_gray_100"
                      size="xs"
                      variant="fill"
                    ></Input>
                    <Text
                      className="bg-blue_gray-100 h-[19px] justify-center px-[7px] rounded-[9px] text-[10.09px] text-black-900_01 w-24"
                      size="txtPoppinsMedium1009Black90001"
                    >
                      College Queries
                    </Text>
                  </div>
                  <Text
                    className="bg-blue_gray-100 h-[19px] justify-center mt-1 px-2 rounded-[9px] text-[10.09px] text-black-900_01 w-[124px]"
                    size="txtPoppinsMedium1009Black90001"
                  >
                    Interview Techniques
                  </Text>
                  <Text
                    className="mt-[5px] text-[12.8px] text-lime-700 underline"
                    size="txtPoppinsSemiBold128"
                  >
                    Book Session
                  </Text>
                </div>
              </div>
              <div className="h-[255px] relative w-[23%] md:w-full">
                <Img
                  className="h-[255px] m-auto object-cover rounded-[13px] w-full"
                  src="images/img_rectangle6_255x229.png"
                  alt="rectangleSix_Five"
                />
                <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[6%] w-[83%]">
                  <Text
                    className="text-[10.09px] text-white-A700 tracking-[0.10px]"
                    size="txtPoppinsMedium1009"
                  >
                    Faraji Mandla{" "}
                  </Text>
                  <Text
                    className="text-[14.13px] text-white-A700"
                    size="txtPoppinsSemiBold1413"
                  >
                    Product Developer
                  </Text>
                  <div className="flex flex-row items-center justify-evenly w-full">
                    <Input
                      name="frameOne_Five"
                      placeholder="Career Advice"
                      className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-black-900_01 sm:h-auto text-[10.09px] text-left w-full"
                      wrapClassName="w-[47%]"
                      shape="round"
                      color="blue_gray_100"
                      size="xs"
                      variant="fill"
                    ></Input>
                    <Text
                      className="bg-blue_gray-100 h-[19px] justify-center px-[7px] rounded-[9px] text-[10.09px] text-black-900_01 w-24"
                      size="txtPoppinsMedium1009Black90001"
                    >
                      College Queries
                    </Text>
                  </div>
                  <Text
                    className="bg-blue_gray-100 h-[19px] justify-center mt-1 px-2 rounded-[9px] text-[10.09px] text-black-900_01 w-[124px]"
                    size="txtPoppinsMedium1009Black90001"
                  >
                    Interview Techniques
                  </Text>
                  <Text
                    className="mt-[5px] text-[12.8px] text-lime-700 underline"
                    size="txtPoppinsSemiBold128"
                  >
                    Book Session
                  </Text>
                </div>
              </div>
              <div className="h-[255px] relative w-[23%] md:w-full">
                <Img
                  className="h-[255px] m-auto object-cover rounded-[13px] w-full"
                  src="images/img_rectangle6_1.png"
                  alt="rectangleSix_Six"
                />
                <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[5%] w-[83%]">
                  <Text
                    className="text-[10.09px] text-white-A700 tracking-[0.10px]"
                    size="txtPoppinsMedium1009"
                  >
                    Zola Kwame
                  </Text>
                  <Text
                    className="text-[14.13px] text-white-A700"
                    size="txtPoppinsSemiBold1413"
                  >
                    Product Developer
                  </Text>
                  <div className="flex flex-row items-center justify-evenly w-full">
                    <Input
                      name="frameOne_Six"
                      placeholder="Career Advice"
                      className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-black-900_01 sm:h-auto text-[10.09px] text-left w-full"
                      wrapClassName="w-[47%]"
                      shape="round"
                      color="blue_gray_100"
                      size="xs"
                      variant="fill"
                    ></Input>
                    <Text
                      className="bg-blue_gray-100 h-[19px] justify-center px-[7px] rounded-[9px] text-[10.09px] text-black-900_01 w-24"
                      size="txtPoppinsMedium1009Black90001"
                    >
                      College Queries
                    </Text>
                  </div>
                  <Text
                    className="bg-blue_gray-100 h-[19px] justify-center mt-1 px-2 rounded-[9px] text-[10.09px] text-black-900_01 w-[124px]"
                    size="txtPoppinsMedium1009Black90001"
                  >
                    Interview Techniques
                  </Text>
                  <Text
                    className="mt-[5px] text-[12.8px] text-lime-700 underline"
                    size="txtPoppinsSemiBold128"
                  >
                    Book Session
                  </Text>
                </div>
              </div>
              <div className="h-[255px] relative w-[23%] md:w-full">
                <div className="h-[255px] m-auto w-full">
                  <Img
                    className="h-[255px] m-auto object-cover rounded-[13px] w-full"
                    src="images/img_rectangle6.png"
                    alt="rectangleSix_Seven"
                  />
                  <Text
                    className="absolute bottom-[40%] left-[5%] text-[10.09px] text-white-A700 tracking-[0.10px]"
                    size="txtPoppinsMedium1009"
                  >
                    Adiel Omari
                  </Text>
                </div>
                <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[5%] w-[83%]">
                  <Text
                    className="text-[14.13px] text-white-A700"
                    size="txtPoppinsSemiBold1413"
                  >
                    Product Designer
                  </Text>
                  <div className="flex flex-row items-center justify-evenly w-full">
                    <Input
                      name="frameOne_Seven"
                      placeholder="Career Advice"
                      className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-black-900_01 sm:h-auto text-[10.09px] text-left w-full"
                      wrapClassName="w-[47%]"
                      shape="round"
                      color="blue_gray_100"
                      size="xs"
                      variant="fill"
                    ></Input>
                    <Text
                      className="bg-blue_gray-100 h-[19px] justify-center px-[7px] rounded-[9px] text-[10.09px] text-black-900_01 w-24"
                      size="txtPoppinsMedium1009Black90001"
                    >
                      College Queries
                    </Text>
                  </div>
                  <Text
                    className="bg-blue_gray-100 h-[19px] justify-center mt-1 px-2 rounded-[9px] text-[10.09px] text-black-900_01 w-[124px]"
                    size="txtPoppinsMedium1009Black90001"
                  >
                    Interview Techniques
                  </Text>
                  <Text
                    className="mt-[5px] text-[12.8px] text-lime-700 underline"
                    size="txtPoppinsSemiBold128"
                  >
                    Book Session
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar1 className="!sticky !w-[316px] bg-white-A700 flex font-poppins h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 shadow-bs1 top-[0]" />
      </div>
    </>
  );
};

export default DesktopSixteenPage;
