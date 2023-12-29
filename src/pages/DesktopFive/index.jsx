import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const DesktopFivePage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

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
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="bg-purple-700_63 flex flex-col items-center justify-end pb-1 px-1 w-full">
          <div className="flex md:flex-col flex-row md:gap-[45px] items-start justify-between mb-[19px] mx-auto md:px-5 w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[316px] flex h-screen md:hidden justify-start overflow-auto top-[0]"
            >
              <Img
                className="h-[3px] ml-[38px] mr-[248px] mt-[47px]"
                src="images/img_arrow1.svg"
                alt="arrowOne"
              />
              <Img
                className="h-[173px] md:h-auto ml-[66px] mr-[83px] mt-[47px] object-cover w-[53%]"
                src="images/img_whatsappimage20231114.png"
                alt="whatsappimageTwenty"
              />
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "21px 21px 21px 45px",
                    gap: "26px",
                    marginTop: "10px",
                    color: "#535353",
                    fontSize: "20px",
                    [`&:hover, &.ps-active`]: {
                      color: "#743c95",
                      fontWeight: "500 !important",
                    },
                  },
                }}
                className="flex flex-col items-center justify-end mb-[1313px] mt-[30px] pr-1 w-full"
              >
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-[37px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-col font-proximasoft items-start justify-start">
                  <Text
                    className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900_01"
                    size="txtProximaSoftSemiBold48Black90001"
                  >
                    Book a session
                  </Text>
                  <Text
                    className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900_01"
                    size="txtProximaSoftMedium35"
                  >
                    <span className="text-blue_gray-700 font-proximasoft text-left font-normal">
                      with{" "}
                    </span>
                    <span className="text-black-900_01 font-proximasoft text-left font-normal">
                      Adiel Omari
                    </span>
                  </Text>
                </div>
                <Button
                  className="!text-black-900 cursor-pointer font-poppins h-[61px] leading-[normal] md:ml-[0] ml-[259px] md:mt-0 mt-[17px] rounded-[30px] shadow-bs6 sm:text-[16.77px] md:text-[18.77px] text-[20.77px] text-center w-[207px]"
                  variant="outline"
                >
                  Edit Details
                </Button>
                <Button className="border border-purple-700 border-solid cursor-pointer font-poppins h-[61px] leading-[normal] mb-[5px] ml-7 md:ml-[0] md:mt-0 mt-[17px] rounded-[30px] shadow-bs5 sm:text-[16.77px] md:text-[18.77px] text-[20.77px] text-center w-[207px]">
                  Book Session
                </Button>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start p-[51px] md:px-10 sm:px-5 rounded-[19px] shadow-bs3 w-full">
                <div className="flex flex-col items-start justify-start mb-[71px] mt-[3px] w-[61%] md:w-full">
                  <Text
                    className="capitalize sm:text-[25px] md:text-[27px] text-[29px] text-black-900_01"
                    size="txtProximaSoftMedium29"
                  >
                    Choose session duration
                  </Text>
                  <div className="flex sm:flex-col flex-row font-poppins sm:gap-5 items-center justify-start mt-[15px] w-full">
                    <div className="border border-black-900_01 border-solid h-[25px] rounded-[12px] w-[25px]"></div>
                    <Text
                      className="sm:ml-[0] ml-[18px] sm:text-[16.67px] md:text-[18.67px] text-[20.67px] text-black-900_01"
                      size="txtPoppinsRegular2067"
                    >
                      20 minutes
                    </Text>
                    <div className="border-[7px] border-purple-700 border-solid h-[25px] sm:ml-[0] ml-[45px] rounded-[12px] w-[25px]"></div>
                    <Text
                      className="sm:ml-[0] ml-[18px] sm:text-[16.67px] md:text-[18.67px] text-[20.67px] text-black-900_01"
                      size="txtPoppinsRegular2067"
                    >
                      30 minutes
                    </Text>
                    <div className="border border-black-900_01 border-solid h-[25px] sm:ml-[0] ml-[45px] rounded-[12px] w-[25px]"></div>
                    <Text
                      className="sm:ml-[0] ml-[18px] sm:text-[16.67px] md:text-[18.67px] text-[20.67px] text-black-900_01"
                      size="txtPoppinsRegular2067"
                    >
                      40 minutes
                    </Text>
                  </div>
                  <Text
                    className="capitalize mt-[47px] sm:text-[25px] md:text-[27px] text-[29px] text-black-900_01"
                    size="txtProximaSoftMedium29"
                  >
                    Choose Date
                  </Text>
                  <div className="flex flex-col font-proximasoft items-center justify-start mt-7 w-full">
                    <div className="bg-gray-200 flex flex-col items-center justify-start rounded-[39px] shadow-bs7 w-full">
                      <div className="flex flex-col items-center justify-start mb-[23px] mt-[17px] w-full">
                        <div className="bg-blue_gray-100 flex sm:flex-col flex-row sm:gap-5 items-start justify-start p-[19px] rounded-[18px] w-full">
                          <Img
                            className="h-[17px] sm:ml-[0] ml-[125px] sm:mt-0 mt-[7px]"
                            src="images/img_arrowleft.svg"
                            alt="arrowleft"
                          />
                          <Img
                            className="h-[17px] sm:mt-0 mt-[7px]"
                            src="images/img_arrowleft.svg"
                            alt="arrowleft_One"
                          />
                          <Text
                            className="sm:ml-[0] ml-[53px] sm:mt-0 mt-[3px] sm:text-[18.13px] md:text-[20.13px] text-[22.13px] text-black-900_01 text-center"
                            size="txtProximaSoftRegular2213"
                          >
                            October 2023
                          </Text>
                          <Img
                            className="h-[17px] sm:ml-[0] ml-[53px] sm:mt-0 mt-[7px]"
                            src="images/img_arrowright.svg"
                            alt="arrowright"
                          />
                          <Img
                            className="h-[17px] sm:mt-0 mt-[7px]"
                            src="images/img_arrowright.svg"
                            alt="arrowright_One"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                          <div className="flex sm:flex-1 flex-col items-center justify-start w-[15%] sm:w-full">
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[80px] text-[17.7px] text-center"
                              shape="square"
                              color="gray_200"
                              size="3xl"
                            >
                              Mo
                            </Button>
                            <Text
                              className="bg-gray-200 h-16 justify-center pb-[35px] pl-8 pr-[35px] pt-[7px] sm:px-5 text-[17.7px] text-black-900_01 text-center w-20"
                              size="txtProximaSoftRegular177"
                            >
                              1
                            </Text>
                            <div className="flex flex-col relative w-full">
                              <Text
                                className="bg-gray-200 h-16 justify-center mx-auto pb-[35px] pl-[31px] pr-[35px] pt-[7px] sm:px-5 text-[17.7px] text-black-900_01 text-center w-20"
                                size="txtProximaSoftRegular177"
                              >
                                8
                              </Text>
                              <Button
                                className="cursor-pointer leading-[normal] mb-auto min-w-[80px] mt-[-0.01px] mx-auto text-[17.7px] text-center z-[1]"
                                shape="square"
                                color="gray_200"
                                size="3xl"
                              >
                                15
                              </Button>
                              <Button
                                className="cursor-pointer leading-[normal] min-w-[80px] mt-[-NaNpx] mx-auto text-[17.7px] text-center z-[1]"
                                shape="square"
                                color="gray_200"
                                size="3xl"
                              >
                                22
                              </Button>
                            </div>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[80px] text-[17.7px] text-center"
                              shape="square"
                              color="gray_200"
                              size="3xl"
                            >
                              29
                            </Button>
                          </div>
                          <div className="md:h-[317px] h-[385px] relative w-[43%] sm:w-full">
                            <div className="flex m-auto w-full">
                              <div className="md:h-[189px] h-[385px] my-auto w-[67%]">
                                <div className="md:h-[189px] h-[385px] m-auto w-full">
                                  <div className="absolute flex flex-col left-[0] top-[0] w-[51%]">
                                    <div className="flex flex-col items-center justify-start mx-auto w-full">
                                      <div className="flex flex-col items-center justify-start w-full">
                                        <div className="flex flex-col items-center justify-start w-full">
                                          <div className="bg-gray-200 flex flex-col items-center justify-start p-5 w-full">
                                            <Text
                                              className="mb-1 text-[17.7px] text-black-900_01 text-center"
                                              size="txtProximaSoftRegular177"
                                            >
                                              Tue
                                            </Text>
                                          </div>
                                          <div className="bg-gray-200 flex flex-col items-start justify-start p-[7px] w-full">
                                            <Text
                                              className="mb-8 ml-6 md:ml-[0] text-[17.7px] text-black-900_01 text-center"
                                              size="txtProximaSoftRegular177"
                                            >
                                              2
                                            </Text>
                                          </div>
                                        </div>
                                        <div className="bg-gray-200 flex flex-col items-start justify-start p-[7px] w-full">
                                          <Text
                                            className="mb-[31px] ml-6 md:ml-[0] text-[17.7px] text-black-900_01 text-center"
                                            size="txtProximaSoftRegular177"
                                          >
                                            9
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="bg-gray-200 flex flex-col items-start justify-start mb-16 mt-[-0.01px] mx-auto p-[7px] w-full z-[1]">
                                      <Text
                                        className="mb-[31px] md:ml-[0] ml-[21px] text-[17.7px] text-black-900_01 text-center"
                                        size="txtProximaSoftRegular177"
                                      >
                                        16
                                      </Text>
                                    </div>
                                    <div className="bg-gray-200 flex flex-col items-center justify-start mt-[-NaNpx] mx-auto p-[7px] w-full z-[1]">
                                      <Text
                                        className="mb-[31px] text-[17.7px] text-black-900_01 text-center"
                                        size="txtProximaSoftRegular177"
                                      >
                                        23
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute bg-gray-200 bottom-[0] flex flex-col items-start justify-start left-[0] p-[7px]">
                                    <Text
                                      className="mb-[31px] md:ml-[0] ml-[19px] text-[17.7px] text-black-900_01 text-center"
                                      size="txtProximaSoftRegular177"
                                    >
                                      30
                                    </Text>
                                  </div>
                                  <div className="absolute bg-gray-200 h-16 right-[0] top-[17%] w-1/2"></div>
                                  <Button
                                    className="absolute cursor-pointer leading-[normal] min-w-[80px] right-[0] text-[17.7px] text-center top-[0]"
                                    shape="square"
                                    color="gray_200"
                                    size="3xl"
                                  >
                                    Wed
                                  </Button>
                                  <div className="absolute bg-gray-200 h-16 right-[0] top-[33%] w-1/2"></div>
                                </div>
                                <div className="absolute bg-gray-200 bottom-[33%] h-16 right-[0] w-1/2"></div>
                                <div className="absolute bg-gray-200 bottom-[17%] h-16 right-[0] w-1/2"></div>
                              </div>
                              <Text
                                className="bg-gray-200 h-16 justify-center ml-[undefinedpx] mr-auto mt-auto pb-[35px] pl-[29px] pr-[35px] pt-[7px] sm:px-5 text-[17.7px] text-black-900_01 text-center w-20 z-[1]"
                                size="txtProximaSoftRegular177"
                              >
                                31
                              </Text>
                              <div className="flex flex-col items-center justify-start ml-[undefinedpx] mt-auto w-[34%] z-[1]">
                                <Text
                                  className="bg-gray-200 h-16 justify-center pb-[35px] pl-[31px] pr-[35px] pt-[7px] sm:px-5 text-[17.7px] text-black-900_01 text-center w-20"
                                  size="txtProximaSoftRegular177"
                                >
                                  4
                                </Text>
                                <div className="bg-gray-200 flex flex-col items-end justify-start p-[7px] w-full">
                                  <Text
                                    className="mr-[30px] text-[17.7px] text-black-900_01 text-center"
                                    size="txtProximaSoftRegular177"
                                  >
                                    11
                                  </Text>
                                  <div className="bg-lime-700 h-0.5 mb-[27px] mr-[33px] rounded-[50%] w-0.5"></div>
                                </div>
                                <Text
                                  className="bg-gray-200 h-16 justify-center mt-32 pb-[35px] pt-[7px] sm:px-5 px-[34px] text-[17.7px] text-center text-gray-500 w-20"
                                  size="txtProximaSoftRegular177Gray500"
                                >
                                  1
                                </Text>
                              </div>
                              <Button
                                className="cursor-pointer leading-[normal] min-w-[80px] ml-[-0.21px] text-[17.7px] text-center z-[1]"
                                shape="square"
                                color="gray_200"
                                size="3xl"
                              >
                                Thu
                              </Button>
                            </div>
                            <Button
                              className="absolute bottom-[33%] cursor-pointer leading-[normal] min-w-[80px] right-[0] text-[17.7px] text-center"
                              shape="square"
                              color="gray_200"
                              size="2xl"
                            >
                              18
                            </Button>
                            <Button
                              className="absolute bottom-[17%] cursor-pointer leading-[normal] min-w-[80px] right-[0] text-[17.7px] text-center"
                              shape="square"
                              color="gray_200"
                              size="3xl"
                            >
                              25
                            </Button>
                            <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[15%] w-[22%]">
                              <Button
                                className="cursor-pointer leading-[normal] rounded-[23px] text-[17.7px] text-center w-12"
                                shape="round"
                                color="lime_700"
                              >
                                3
                              </Button>
                              <Button
                                className="!text-black-900_01 cursor-pointer leading-[normal] min-w-[48px] mt-3.5 rounded-[24px] text-[17.7px] text-center"
                                shape="round"
                                color="lime_700"
                                variant="outline"
                              >
                                10
                              </Button>
                              <Button
                                className="!text-black-900_01 cursor-pointer h-[47px] leading-[normal] ml-0.5 md:ml-[0] mt-3.5 rounded-[23px] text-[17.7px] text-center w-12"
                                shape="round"
                                color="lime_700"
                                variant="outline"
                              >
                                17
                              </Button>
                              <Button
                                className="!text-black-900_01 cursor-pointer leading-[normal] min-w-[48px] ml-0.5 md:ml-[0] mt-[17px] rounded-[22px] text-[17.7px] text-center"
                                shape="round"
                                color="lime_700"
                                variant="outline"
                              >
                                24
                              </Button>
                            </div>
                          </div>
                          <div className="flex sm:flex-1 flex-col items-center justify-start w-[43%] sm:w-full">
                            <div className="flex flex-row items-center justify-evenly w-full">
                              <Button
                                className="cursor-pointer leading-[normal] min-w-[80px] text-[17.7px] text-center"
                                shape="square"
                                color="gray_200"
                                size="3xl"
                              >
                                Fri
                              </Button>
                              <div className="flex relative w-[67%]">
                                <Button
                                  className="cursor-pointer leading-[normal] min-w-[80px] my-auto text-[17.7px] text-center"
                                  shape="square"
                                  color="gray_200"
                                  size="3xl"
                                >
                                  Sat
                                </Button>
                                <Button
                                  className="cursor-pointer leading-[normal] min-w-[80px] ml-[-1.05px] my-auto text-[17.7px] text-center z-[1]"
                                  shape="square"
                                  color="gray_200"
                                  size="3xl"
                                >
                                  Sun
                                </Button>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-evenly w-full">
                              <Text
                                className="bg-gray-200 h-16 justify-center pb-[35px] pl-[31px] pr-[35px] pt-[7px] sm:px-5 text-[17.7px] text-black-900_01 text-center w-20"
                                size="txtProximaSoftRegular177"
                              >
                                5
                              </Text>
                              <div className="h-16 relative w-[67%]">
                                <Text
                                  className="absolute bg-gray-200 h-full inset-y-[0] justify-center left-[0] my-auto pb-[35px] pl-[31px] pr-[35px] pt-[7px] sm:px-5 text-[17.7px] text-black-900_01 text-center w-20"
                                  size="txtProximaSoftRegular177"
                                >
                                  6
                                </Text>
                                <Button
                                  className="absolute cursor-pointer h-full inset-y-[0] leading-[normal] min-w-[80px] my-auto right-[0] text-[17.7px] text-center"
                                  shape="square"
                                  color="gray_200"
                                  size="3xl"
                                >
                                  7
                                </Button>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-evenly w-full">
                              <div className="flex flex-col relative w-[34%]">
                                <div className="bg-gray-200 flex flex-col items-center justify-start mx-auto p-[7px] w-full">
                                  <Text
                                    className="text-[17.7px] text-black-900_01 text-center"
                                    size="txtProximaSoftRegular177"
                                  >
                                    12
                                  </Text>
                                  <div className="bg-lime-700 h-0.5 mb-[29px] rounded-[50%] w-0.5"></div>
                                </div>
                                <Text
                                  className="bg-gray-200 h-16 justify-center mb-auto mt-[-0.01px] mx-auto pb-[35px] pl-[29px] pr-[34px] pt-[7px] sm:px-5 text-[17.7px] text-black-900_01 text-center w-20 z-[1]"
                                  size="txtProximaSoftRegular177"
                                >
                                  19
                                </Text>
                                <Button
                                  className="cursor-pointer leading-[normal] min-w-[80px] mt-[-NaNpx] mx-auto text-[17.7px] text-center z-[1]"
                                  shape="square"
                                  color="gray_200"
                                  size="3xl"
                                >
                                  26
                                </Button>
                              </div>
                              <div className="md:h-16 h-48 relative w-[67%]">
                                <div className="md:h-16 h-48 m-auto w-full">
                                  <div className="absolute flex flex-col inset-y-[0] left-[0] my-auto w-1/2">
                                    <Text
                                      className="bg-gray-200 h-16 justify-center mx-auto pb-[35px] pl-[29px] pr-[34px] pt-[7px] sm:px-5 text-[17.7px] text-black-900_01 text-center w-20"
                                      size="txtProximaSoftRegular177"
                                    >
                                      13
                                    </Text>
                                    <Button
                                      className="cursor-pointer leading-[normal] mb-auto min-w-[80px] mt-[-0.01px] mx-auto text-[17.7px] text-center z-[1]"
                                      shape="square"
                                      color="gray_200"
                                      size="3xl"
                                    >
                                      20
                                    </Button>
                                    <Button
                                      className="cursor-pointer leading-[normal] min-w-[80px] mt-[-NaNpx] mx-auto text-[17.7px] text-center z-[1]"
                                      shape="square"
                                      color="gray_200"
                                      size="3xl"
                                    >
                                      27
                                    </Button>
                                  </div>
                                  <Text
                                    className="absolute bg-gray-200 h-16 justify-center pb-[35px] pl-[29px] pr-[34px] pt-[7px] sm:px-5 right-[0] text-[17.7px] text-black-900_01 text-center top-[0] w-20"
                                    size="txtProximaSoftRegular177"
                                  >
                                    14
                                  </Text>
                                </div>
                                <Button
                                  className="absolute cursor-pointer h-max inset-y-[0] leading-[normal] min-w-[80px] my-auto right-[0] text-[17.7px] text-center"
                                  shape="square"
                                  color="gray_200"
                                  size="3xl"
                                >
                                  21
                                </Button>
                                <Button
                                  className="absolute bottom-[0] cursor-pointer leading-[normal] min-w-[80px] right-[0] text-[17.7px] text-center"
                                  shape="square"
                                  color="gray_200"
                                  size="3xl"
                                >
                                  28
                                </Button>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-evenly w-full">
                              <Text
                                className="bg-gray-200 h-16 justify-center pb-[35px] pl-[31px] pr-[35px] pt-[7px] sm:px-5 text-[17.7px] text-center text-gray-500 w-20"
                                size="txtProximaSoftRegular177Gray500"
                              >
                                2
                              </Text>
                              <div className="h-16 relative w-[67%]">
                                <Text
                                  className="absolute bg-gray-200 h-full inset-y-[0] justify-center left-[0] my-auto pb-[35px] pl-[31px] pr-[35px] pt-[7px] sm:px-5 text-[17.7px] text-center text-gray-500 w-20"
                                  size="txtProximaSoftRegular177Gray500"
                                >
                                  3
                                </Text>
                                <Text
                                  className="absolute bg-gray-200 h-full inset-y-[0] justify-center my-auto pb-[35px] pl-[31px] pr-[35px] pt-[7px] sm:px-5 right-[0] text-[17.7px] text-center text-gray-500 w-20"
                                  size="txtProximaSoftRegular177Gray500"
                                >
                                  4
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="mt-[49px] sm:text-[25px] md:text-[27px] text-[29px] text-black-900_01 text-center"
                    size="txtPoppinsMedium29"
                  >
                    Answer few questions
                  </Text>
                  <Text
                    className="text-gray-700_01 text-xl"
                    size="txtPoppinsRegular20Gray70001"
                  >
                    For the mentor to know you better
                  </Text>
                  <div className="flex sm:flex-col flex-row font-poppins gap-[7px] items-center justify-start mt-[26px] w-[77%] md:w-full">
                    <div className="border border-purple-700 border-solid h-3.5 rounded-[7px] w-[13px]"></div>
                    <Text
                      className="text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                      size="txtPoppinsRegular22Black90001"
                    >
                      What do you expect from the session?
                    </Text>
                  </div>
                  <Text
                    className="mt-2 text-gray-700_01 text-xl"
                    size="txtPoppinsRegular20Gray70001"
                  >
                    Choose all that apply
                  </Text>
                  <div className="flex flex-col font-poppins items-center justify-start mt-4 w-[79%] md:w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-between w-full">
                        <Button
                          className="!text-black-900_01 cursor-pointer leading-[normal] min-w-[123px] rounded-[10px] text-[13.6px] text-center"
                          size="sm"
                          variant="outline"
                        >
                          SOP Review
                        </Button>
                        <Button
                          className="!text-black-900_01 cursor-pointer leading-[normal] min-w-[156px] rounded-[10px] text-[14.03px] text-center"
                          size="sm"
                          variant="outline"
                        >
                          College queries
                        </Button>
                        <Button
                          className="!text-black-900_01 cursor-pointer leading-[normal] min-w-[146px] rounded-[10px] text-center text-sm"
                          size="sm"
                          variant="outline"
                        >
                          Career advice
                        </Button>
                      </div>
                      <Button
                        className="border border-purple-700 border-solid cursor-pointer leading-[normal] min-w-[184px] rounded-[10px] text-[14.15px] text-center"
                        size="sm"
                      >
                        Interview questions
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row font-poppins gap-2 items-center justify-start mt-[43px] w-[65%] md:w-full">
                    <div className="border border-purple-700 border-solid h-3.5 rounded-[50%] w-3.5"></div>
                    <Text
                      className="text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                      size="txtPoppinsRegular22Black90001"
                    >
                      Ask James anything related to?
                    </Text>
                  </div>
                  <Text
                    className="mt-[3px] text-gray-700_01 text-xl"
                    size="txtPoppinsRegular20Gray70001"
                  >
                    Choose all that apply
                  </Text>
                  <div className="flex flex-row font-poppins gap-[11px] items-center justify-start mt-[5px] w-[65%] md:w-full">
                    <Button
                      className="border border-purple-700 border-solid cursor-pointer leading-[normal] min-w-[106px] rounded-[9px] text-[12.84px] text-center"
                      size="sm"
                    >
                      UX Design
                    </Button>
                    <Button
                      className="!text-black-900_01 cursor-pointer h-8 leading-[normal] min-w-[100px] rounded-[10px] text-center text-sm"
                      size="sm"
                      variant="outline"
                    >
                      College
                    </Button>
                    <Text
                      className="border border-purple-700 border-solid h-8 pb-0.5 pt-[5px] sm:px-5 px-[26px] rounded-[12px] text-base text-black-900_01 w-auto"
                      size="txtPoppinsRegular16"
                    >
                      Leadership
                    </Text>
                  </div>
                  <div className="flex flex-col font-poppins gap-2 items-start justify-start mt-[52px] w-[91%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                      <div className="border border-purple-700 border-solid h-3.5 rounded-[50%] w-3.5"></div>
                      <Text
                        className="text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                        size="txtPoppinsRegular22Black90001"
                      >
                        What do you expect to achieve from session?
                      </Text>
                    </div>
                    <Text
                      className="text-gray-700_01 text-xl"
                      size="txtPoppinsRegular20Gray70001"
                    >
                      This helps the mentor to better prepare
                    </Text>
                  </div>
                  <div className="border border-gray-900_1e border-solid flex flex-col font-poppins items-end justify-end mt-[11px] p-1.5 rounded-[10px]">
                    <Text
                      className="mr-[5px] mt-[200px] text-blue_gray-700 text-sm"
                      size="txtPoppinsMedium14Bluegray700"
                    >
                      11/100
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFivePage;
