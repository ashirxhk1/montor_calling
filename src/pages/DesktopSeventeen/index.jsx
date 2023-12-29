import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const DesktopSeventeenPage = () => {
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
        <div className="absolute bg-purple-700_63 flex flex-col h-full inset-[0] items-end justify-center m-auto p-7 sm:px-5 w-full">
          <div className="flex flex-col items-start justify-start mb-[157px] mt-[35px] md:px-5 w-[77%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[3px] w-[98%] md:w-full">
              <Text
                className="md:mt-0 mt-[3px] text-5xl sm:text-[38px] md:text-[44px] text-gray-900"
                size="txtProximaSoftSemiBold48"
              >
                Hello, Antonio
              </Text>
              <Button
                className="bg-gray-50 border border-purple-700 border-solid flex h-[51px] items-center justify-center md:ml-[0] ml-[601px] w-[51px]"
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
            <div className="flex flex-col font-poppins items-center justify-start md:ml-[0] ml-[3px] mt-5 w-[19%] md:w-full">
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
            <Text
              className="mt-[23px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
              size="txtProximaSoftSemiBold40"
            >
              Requests
            </Text>
            <div className="flex md:flex-col flex-row font-poppins md:gap-[58px] items-center justify-between mt-2.5 w-full">
              <div className="bg-white-A700 border border-gray-900_1e border-solid flex md:flex-1 flex-col items-center justify-end p-[11px] rounded-[14px] w-[56%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-between mt-2.5 w-[99%] md:w-full">
                  <Img
                    className="h-[87px] md:h-auto rounded-[50%] w-[87px]"
                    src="images/img_ellipse43.png"
                    alt="ellipseFortyThree"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="mt-1 text-[18.84px] text-black-900"
                        size="txtPoppinsSemiBold1884"
                      >
                        Product Designer Career Discussion
                      </Text>
                      <Text
                        className="text-[15.7px] text-blue_gray-700"
                        size="txtPoppinsMedium157"
                      >
                        3m
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[49px] items-start justify-between w-full">
                      <div className="flex flex-col mb-[15px] relative w-[68%] sm:w-full">
                        <Text
                          className="text-[18.84px] text-blue_gray-700"
                          size="txtPoppinsMedium1884"
                        >
                          Request By Dakarai
                        </Text>
                        <div className="flex flex-row gap-[5px] items-start justify-evenly ml-auto mt-[-NaNpx] w-[62%] z-[1]">
                          <Img
                            className="h-[17px] rounded-[3px] w-[17px]"
                            src="images/img_outlinetime.svg"
                            alt="outlinetime"
                          />
                          <Text
                            className="text-[14.68px] text-blue_gray-700"
                            size="txtPoppinsRegular1468"
                          >
                            Wednesday,3 October
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-evenly mt-[-0.32px] w-[35%] z-[1]">
                          <Img
                            className="h-[19px] w-[19px]"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-[14.68px] text-blue_gray-700"
                            size="txtPoppinsRegular1468"
                          >
                            30 minutes
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="sm:mt-0 mt-[43px] text-[15.7px] text-purple-700 underline"
                        size="txtPoppinsMedium157Purple700"
                      >
                        View Details
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-lime-700_75 flex md:flex-1 flex-col items-start justify-start md:mt-0 my-[5px] px-[3px] rounded-md w-2/5 md:w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-[58%] md:w-full">
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
            </div>
            <div className="flex flex-col font-poppins gap-3.5 items-start justify-start mt-[13px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="bg-white-A700 border border-gray-900_1e border-solid flex md:flex-1 flex-col items-center justify-end p-[11px] rounded-[14px] w-[56%] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-between mt-2.5 w-[99%] md:w-full">
                    <Img
                      className="h-[87px] md:h-auto rounded-[50%] w-[87px]"
                      src="images/img_ellipse43.png"
                      alt="ellipseFortyThree_One"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="mt-1 text-[18.84px] text-black-900"
                          size="txtPoppinsSemiBold1884"
                        >
                          Product Designer Career Discussion
                        </Text>
                        <Text
                          className="text-[15.7px] text-blue_gray-700"
                          size="txtPoppinsMedium157"
                        >
                          3m
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-[49px] items-start justify-between w-full">
                        <div className="flex flex-col mb-[15px] relative w-[68%] sm:w-full">
                          <Text
                            className="text-[18.84px] text-blue_gray-700"
                            size="txtPoppinsMedium1884"
                          >
                            Request By Dakarai
                          </Text>
                          <div className="flex flex-row gap-[5px] items-start justify-evenly ml-auto mt-[-NaNpx] w-[62%] z-[1]">
                            <Img
                              className="h-[17px] rounded-[3px] w-[17px]"
                              src="images/img_outlinetime.svg"
                              alt="outlinetime_One"
                            />
                            <Text
                              className="text-[14.68px] text-blue_gray-700"
                              size="txtPoppinsRegular1468"
                            >
                              Wednesday,3 October
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-evenly mt-[-0.32px] w-[35%] z-[1]">
                            <Img
                              className="h-[19px] w-[19px]"
                              src="images/img_clock.svg"
                              alt="clock_One"
                            />
                            <Text
                              className="text-[14.68px] text-blue_gray-700"
                              size="txtPoppinsRegular1468"
                            >
                              30 minutes
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="sm:mt-0 mt-[43px] text-[15.7px] text-purple-700 underline"
                          size="txtPoppinsMedium157Purple700"
                        >
                          View Details
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-lime-700_75 flex md:flex-1 flex-col items-start justify-start mb-[3px] md:mt-0 mt-[7px] px-[5px] rounded-md w-2/5 md:w-full">
                  <div className="flex flex-row gap-[22px] items-center justify-start w-[62%] md:w-full">
                    <Img
                      className="h-[122px]"
                      src="images/img_line3.svg"
                      alt="lineThree_One"
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
              </div>
              <div className="flex flex-col items-center justify-start w-[56%] md:w-full">
                <div className="bg-white-A700 border border-gray-900_1e border-solid flex flex-col items-center justify-end p-[11px] rounded-[14px] w-full">
                  <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-between mt-2.5 w-[99%] md:w-full">
                    <div className="h-[87px] relative w-[87px]">
                      <Img
                        className="h-[87px] m-auto rounded-[50%] w-[87px]"
                        src="images/img_ellipse43.png"
                        alt="ellipseFortyThree_Two"
                      />
                      <Img
                        className="absolute h-[87px] inset-[0] justify-center m-auto rounded-[50%] w-[87px]"
                        src="images/img_ellipse43.png"
                        alt="ellipseFortyThree_Three"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[82%] sm:w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col items-center justify-start mt-1">
                          <Text
                            className="text-[18.84px] text-black-900"
                            size="txtPoppinsSemiBold1884"
                          >
                            Product Designer Career Discussion
                          </Text>
                          <Text
                            className="text-[18.84px] text-black-900"
                            size="txtPoppinsSemiBold1884"
                          >
                            Product Designer Career Discussion
                          </Text>
                        </div>
                        <div className="h-6 relative w-[6%]">
                          <Text
                            className="m-auto text-[15.7px] text-blue_gray-700"
                            size="txtPoppinsMedium157"
                          >
                            3m
                          </Text>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-[15.7px] text-blue_gray-700 w-max"
                            size="txtPoppinsMedium157"
                          >
                            3m
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="text-[18.84px] text-blue_gray-700"
                        size="txtPoppinsMedium1884"
                      >
                        Request By Dakarai
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-[49px] items-start justify-between w-full">
                        <div className="flex flex-col mb-[15px] relative w-[68%] sm:w-full">
                          <Text
                            className="text-[18.84px] text-blue_gray-700"
                            size="txtPoppinsMedium1884"
                          >
                            Request By Dakarai
                          </Text>
                          <div className="flex flex-row gap-[5px] items-start justify-evenly ml-auto mt-[-NaNpx] w-[62%] z-[1]">
                            <Img
                              className="h-[17px] rounded-[3px] w-[17px]"
                              src="images/img_outlinetime.svg"
                              alt="outlinetime_Two"
                            />
                            <Text
                              className="text-[14.68px] text-blue_gray-700"
                              size="txtPoppinsRegular1468"
                            >
                              Wednesday,3 October
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-evenly mt-[-0.33px] w-[35%] z-[1]">
                            <Img
                              className="h-[19px] w-[19px]"
                              src="images/img_clock.svg"
                              alt="clock_Two"
                            />
                            <Text
                              className="text-[14.68px] text-blue_gray-700"
                              size="txtPoppinsRegular1468"
                            >
                              30 minutes
                            </Text>
                          </div>
                        </div>
                        <div className="h-6 md:h-[53px] sm:mt-0 mt-[29px] relative w-[22%] sm:w-full">
                          <Text
                            className="m-auto text-[15.7px] text-purple-700 underline"
                            size="txtPoppinsMedium157Purple700"
                          >
                            View Details
                          </Text>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-[15.7px] text-purple-700 underline w-max"
                            size="txtPoppinsMedium157Purple700"
                          >
                            View Details
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-poppins items-center justify-start mt-[13px] w-[56%] md:w-full">
              <div className="bg-white-A700 border border-gray-900_1e border-solid flex flex-col items-center justify-end p-[11px] rounded-[14px] w-full">
                <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-between mt-[9px] w-[99%] md:w-full">
                  <div className="h-[87px] relative w-[87px]">
                    <Img
                      className="h-[87px] m-auto rounded-[50%] w-[87px]"
                      src="images/img_ellipse43.png"
                      alt="ellipseFortyThree_Four"
                    />
                    <Img
                      className="absolute h-[87px] inset-[0] justify-center m-auto rounded-[50%] w-[87px]"
                      src="images/img_ellipse43.png"
                      alt="ellipseFortyThree_Five"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[82%] sm:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col items-center justify-start mt-1">
                        <Text
                          className="text-[18.84px] text-black-900"
                          size="txtPoppinsSemiBold1884"
                        >
                          Product Designer Career Discussion
                        </Text>
                        <Text
                          className="text-[18.84px] text-black-900"
                          size="txtPoppinsSemiBold1884"
                        >
                          Product Designer Career Discussion
                        </Text>
                      </div>
                      <div className="h-6 relative w-[6%]">
                        <Text
                          className="m-auto text-[15.7px] text-blue_gray-700"
                          size="txtPoppinsMedium157"
                        >
                          3m
                        </Text>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto text-[15.7px] text-blue_gray-700 w-max"
                          size="txtPoppinsMedium157"
                        >
                          3m
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[49px] items-start justify-between w-full">
                      <div className="md:h-[42px] h-[52px] mb-[15px] relative w-[68%] sm:w-full">
                        <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
                          <Text
                            className="text-[18.84px] text-blue_gray-700"
                            size="txtPoppinsMedium1884"
                          >
                            Request By Dakarai
                          </Text>
                          <div className="flex flex-row gap-[5px] items-start justify-evenly ml-auto mt-[-NaNpx] w-[62%] z-[1]">
                            <Img
                              className="h-[17px] rounded-[3px] w-[17px]"
                              src="images/img_outlinetime.svg"
                              alt="outlinetime_Three"
                            />
                            <Text
                              className="text-[14.68px] text-blue_gray-700"
                              size="txtPoppinsRegular1468"
                            >
                              Wednesday,3 October
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-evenly mt-[-0.34px] w-[35%] z-[1]">
                            <Img
                              className="h-[19px] w-[19px]"
                              src="images/img_clock.svg"
                              alt="clock_Three"
                            />
                            <Text
                              className="text-[14.68px] text-blue_gray-700"
                              size="txtPoppinsRegular1468"
                            >
                              30 minutes
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="absolute left-[0] text-[18.84px] text-blue_gray-700 top-[0]"
                          size="txtPoppinsMedium1884"
                        >
                          Request By Dakarai
                        </Text>
                      </div>
                      <div className="h-6 md:h-[68px] sm:mt-0 mt-11 relative w-[22%] sm:w-full">
                        <Text
                          className="m-auto text-[15.7px] text-purple-700 underline"
                          size="txtPoppinsMedium157Purple700"
                        >
                          View Details
                        </Text>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto text-[15.7px] text-purple-700 underline w-max"
                          size="txtPoppinsMedium157Purple700"
                        >
                          View Details
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar1 className="!sticky !w-[316px] bg-white-A700 flex font-poppins h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 shadow-bs1 top-[0]" />
        <Line className="absolute bg-blue_gray-700 bottom-[0] h-[768px] right-[33%] w-px" />
      </div>
    </>
  );
};

export default DesktopSeventeenPage;
