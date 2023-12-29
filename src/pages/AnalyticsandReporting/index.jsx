import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Img, Line, List, Text } from "components";

const AnalyticsandReportingPage = () => {
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
          src="images/img_checkmark_purple_700.svg"
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
          src="images/img_search_blue_gray_300.svg"
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
          <Sidebar className="!sticky !w-[316px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <Img
              className="h-[173px] md:h-auto md:ml-[0] ml-[65px] mr-[84px] object-cover w-[53%]"
              src="images/img_whatsappimage20231114.png"
              alt="whatsappimageTwenty"
            />
            <Menu
              menuItemStyles={{
                button: {
                  padding: "14px 14px 14px 46px",
                  gap: "11px",
                  color: "#4c535f",
                  fontSize: "18px",
                  [`&:hover, &.ps-active`]: {
                    color: "#743c95",
                    fontWeight: "600 !important",
                  },
                },
              }}
              renderExpandIcon={() => (
                <Img
                  className="h-1.5 mt-3 w-2"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              )}
              className="flex flex-col items-center justify-start mb-[640px] mt-9 pt-0.5 w-full"
            >
              <SubMenu
                icon={
                  <Img
                    className="h-6 w-6"
                    src="images/img_grid_blue_gray_300.svg"
                    alt="grid"
                  />
                }
                label={<Text className="mb-[5px] mt-0.5">Management</Text>}
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col font-proximasoft items-center justify-start md:px-5 w-full">
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
              <div className="flex flex-row gap-2.5 items-center justify-center mr-2 p-2.5 w-auto">
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
            <div className="flex md:flex-col flex-row gap-[39px] items-center justify-between mt-11 w-[93%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[38%] md:w-full">
                <div className="gap-6 grid grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-end p-[13px] rounded-[21px] w-full">
                    <div className="flex flex-col gap-[27px] items-start justify-start mt-[23px] pb-1.5 px-1.5 w-[97%] md:w-full">
                      <div className="flex flex-col font-poppins items-start justify-start w-auto">
                        <Text
                          className="text-black-900_b2 text-sm tracking-[-0.17px] w-auto"
                          size="txtPoppinsMedium14Black900b2"
                        >
                          Registered Mentors
                        </Text>
                      </div>
                      <Text
                        className="mb-7 sm:text-[22.03px] md:text-[24.03px] text-[26.03px] text-black-900_01"
                        size="txtInterBold2603"
                      >
                        100
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-end p-[13px] rounded-[21px] w-full">
                    <div className="flex flex-col gap-[27px] items-start justify-start mt-[23px] pb-1.5 px-1.5 w-[97%] md:w-full">
                      <div className="flex flex-col font-poppins items-start justify-start w-auto">
                        <Text
                          className="text-black-900_b2 text-sm tracking-[-0.17px] w-auto"
                          size="txtPoppinsMedium14Black900b2"
                        >
                          Registered Mentees
                        </Text>
                      </div>
                      <Text
                        className="mb-7 sm:text-[22.03px] md:text-[24.03px] text-[26.03px] text-black-900_01"
                        size="txtInterBold2603"
                      >
                        105
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-end p-[15px] rounded-[21px] w-full">
                    <div className="flex flex-col gap-[34px] items-start justify-start mb-1 mt-[13px] pb-1.5 px-1.5 w-[99%] md:w-full">
                      <div className="flex flex-col font-poppins items-start justify-start w-auto">
                        <Text
                          className="text-black-900_b2 text-sm tracking-[-0.17px] w-auto"
                          size="txtPoppinsMedium14Black900b2"
                        >
                          Active Users
                        </Text>
                      </div>
                      <Text
                        className="mb-5 sm:text-[22.03px] md:text-[24.03px] text-[26.03px] text-black-900_01"
                        size="txtInterBold2603"
                      >
                        <span className="text-black-900_01 font-inter text-left font-bold">
                          150
                        </span>
                        <span className="text-black-900_7f font-inter text-left text-[18.44px] font-semibold">
                          /205
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-end p-[13px] rounded-[21px] w-full">
                    <div className="flex flex-col gap-[27px] items-start justify-start mt-[23px] pb-1.5 px-1.5 w-[97%] md:w-full">
                      <div className="flex flex-col font-poppins items-start justify-start w-auto">
                        <Text
                          className="text-black-900_b2 text-sm tracking-[-0.17px] w-auto"
                          size="txtPoppinsMedium14Black900b2"
                        >
                          Av. Session Length
                        </Text>
                      </div>
                      <Text
                        className="mb-7 sm:text-[22.03px] md:text-[24.03px] text-[26.03px] text-black-900_01"
                        size="txtInterBold2603"
                      >
                        30m 34s
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col gap-[26px] items-start justify-start p-[17px] rounded-[20px] shadow-bs20 w-[59%] md:w-full">
                <Text
                  className="text-black-900_01 text-xl"
                  size="txtProximaSoftSemiBold20Black90001"
                >
                  Activity
                </Text>
                <div className="flex flex-col font-inter items-center justify-start mb-[7px] w-full">
                  <div className="flex flex-col gap-[15px] justify-start w-full">
                    <div className="flex flex-row items-center justify-between mr-1.5 w-[99%] md:w-full">
                      <div className="flex flex-col gap-[37px] items-start justify-start">
                        <Text
                          className="text-[11.08px] text-black-900_01 text-right"
                          size="txtInterSemiBold1108"
                        >
                          400
                        </Text>
                        <Text
                          className="text-[11.08px] text-black-900_01 text-right"
                          size="txtInterSemiBold1108"
                        >
                          300
                        </Text>
                        <Text
                          className="text-[11.08px] text-black-900_01 text-right"
                          size="txtInterSemiBold1108"
                        >
                          200
                        </Text>
                        <Text
                          className="ml-0.5 md:ml-[0] text-[11.08px] text-black-900_01 text-right"
                          size="txtInterSemiBold1108"
                        >
                          100
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[13px] text-[11.08px] text-black-900_01 text-right"
                          size="txtInterSemiBold1108"
                        >
                          0
                        </Text>
                      </div>
                      <div className="md:h-[226px] h-[227px] relative w-[2%]">
                        <Img
                          className="absolute h-[226px] inset-[0] justify-center m-auto rounded-[5px]"
                          src="images/img_rectangle188.svg"
                          alt="rectangle188"
                        />
                        <Img
                          className="absolute bottom-[0] h-[68px] inset-x-[0] mx-auto rounded-[5px]"
                          src="images/img_settings_purple_700_68x11.svg"
                          alt="settings_One"
                        />
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-[35px] grid grid-cols-2"
                        orientation="horizontal"
                      >
                        <div className="md:h-[226px] h-[227px] relative w-full">
                          <Img
                            className="absolute h-[226px] inset-[0] justify-center m-auto rounded-[5px]"
                            src="images/img_rectangle188.svg"
                            alt="rectangle190"
                          />
                          <Img
                            className="absolute bottom-[0] h-[86px] inset-x-[0] mx-auto rounded-[5px]"
                            src="images/img_settings_purple_700_68x11.svg"
                            alt="settings"
                          />
                        </div>
                        <div className="md:h-[226px] h-[227px] relative w-full">
                          <Img
                            className="absolute h-[226px] inset-[0] justify-center m-auto rounded-[5px]"
                            src="images/img_rectangle188.svg"
                            alt="rectangle192"
                          />
                          <Img
                            className="absolute bottom-[0] h-[86px] inset-x-[0] mx-auto rounded-[5px]"
                            src="images/img_settings_purple_700_68x11.svg"
                            alt="settings"
                          />
                        </div>
                      </List>
                      <div className="md:h-[226px] h-[227px] relative w-[2%]">
                        <Img
                          className="absolute h-[226px] inset-[0] justify-center m-auto rounded-[5px]"
                          src="images/img_rectangle188.svg"
                          alt="rectangle194"
                        />
                        <Img
                          className="absolute bottom-[0] h-[138px] inset-x-[0] mx-auto rounded-[5px]"
                          src="images/img_rectangle195.svg"
                          alt="rectangle195"
                        />
                      </div>
                      <div className="md:h-[226px] h-[227px] relative w-[2%]">
                        <Img
                          className="absolute h-[226px] inset-[0] justify-center m-auto rounded-[5px]"
                          src="images/img_rectangle188.svg"
                          alt="rectangle196"
                        />
                        <Img
                          className="absolute bottom-[0] h-[156px] inset-x-[0] mx-auto rounded-[5px]"
                          src="images/img_rectangle195.svg"
                          alt="rectangle197"
                        />
                      </div>
                      <div className="md:h-[226px] h-[227px] relative w-[2%]">
                        <Img
                          className="absolute h-[226px] inset-[0] justify-center m-auto rounded-[5px]"
                          src="images/img_rectangle188.svg"
                          alt="rectangle198"
                        />
                        <Img
                          className="absolute bottom-[0] h-[120px] inset-x-[0] mx-auto rounded-[5px]"
                          src="images/img_rectangle195.svg"
                          alt="rectangle199"
                        />
                      </div>
                      <div className="md:h-[226px] h-[227px] relative w-[3%]">
                        <Img
                          className="absolute h-[226px] inset-y-[0] my-auto right-[0] rounded-[5px]"
                          src="images/img_rectangle188.svg"
                          alt="rectangle200"
                        />
                        <Img
                          className="absolute bottom-[0] h-[139px] left-[0] rounded-md"
                          src="images/img_rectangle195.svg"
                          alt="rectangle201"
                        />
                      </div>
                      <div className="md:h-[226px] h-[227px] relative w-[2%]">
                        <Img
                          className="absolute h-[226px] inset-[0] justify-center m-auto rounded-[5px]"
                          src="images/img_rectangle188.svg"
                          alt="rectangle202"
                        />
                        <Img
                          className="absolute bottom-[0] h-[68px] inset-x-[0] mx-auto rounded-[5px]"
                          src="images/img_settings_purple_700_68x11.svg"
                          alt="settings_Two"
                        />
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-9 grid grid-cols-3"
                        orientation="horizontal"
                      >
                        <div className="md:h-[226px] h-[227px] relative w-full">
                          <Img
                            className="absolute h-[226px] inset-[0] justify-center m-auto rounded-[5px]"
                            src="images/img_rectangle188.svg"
                            alt="rectangle204"
                          />
                          <Img
                            className="absolute bottom-[0] h-[156px] inset-x-[0] mx-auto rounded-[5px]"
                            src="images/img_rectangle195.svg"
                            alt="rectangle205"
                          />
                        </div>
                        <div className="md:h-[226px] h-[227px] relative w-full">
                          <Img
                            className="absolute h-[226px] inset-[0] justify-center m-auto rounded-[5px]"
                            src="images/img_rectangle188.svg"
                            alt="rectangle206"
                          />
                          <Img
                            className="absolute bottom-[0] h-[188px] inset-x-[0] mx-auto rounded-[5px]"
                            src="images/img_rectangle195.svg"
                            alt="rectangle207"
                          />
                        </div>
                        <div className="md:h-[226px] h-[227px] relative w-full">
                          <Img
                            className="absolute h-[226px] inset-[0] justify-center m-auto rounded-[5px]"
                            src="images/img_rectangle188.svg"
                            alt="rectangle208"
                          />
                          <Img
                            className="absolute bottom-[0] h-[206px] inset-x-[0] mx-auto rounded-[5px]"
                            src="images/img_rectangle195.svg"
                            alt="rectangle209"
                          />
                        </div>
                      </List>
                      <Img
                        className="h-[227px] rounded-[5px]"
                        src="images/img_rectangle195.svg"
                        alt="rectangle186"
                      />
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-end md:ml-[0] ml-[34px] w-[94%] md:w-full">
                      <Text
                        className="text-[10.23px] text-center text-gray-600_01"
                        size="txtInterMedium1023"
                      >
                        JAN
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[26px] text-[10.23px] text-center text-gray-600_01"
                        size="txtInterMedium1023"
                      >
                        FEB
                      </Text>
                      <Text
                        className="ml-6 sm:ml-[0] text-[10.23px] text-center text-gray-600_01"
                        size="txtInterMedium1023"
                      >
                        MAR
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[25px] text-[10.23px] text-center text-gray-600_01"
                        size="txtInterMedium1023"
                      >
                        APR
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[25px] text-[10.23px] text-center text-gray-600_01"
                        size="txtInterMedium1023"
                      >
                        MAY
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[25px] text-[10.23px] text-center text-gray-600_01"
                        size="txtInterMedium1023"
                      >
                        JUN
                      </Text>
                      <Text
                        className="ml-6 sm:ml-[0] text-[10.23px] text-center text-gray-600_01"
                        size="txtInterMedium1023"
                      >
                        JUL
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[27px] text-[10.23px] text-center text-gray-600_01"
                        size="txtInterMedium1023"
                      >
                        AUG
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[26px] text-[10.23px] text-center text-gray-600_01"
                        size="txtInterMedium1023"
                      >
                        SEP
                      </Text>
                      <Text
                        className="ml-7 sm:ml-[0] text-[10.23px] text-center text-gray-600_01"
                        size="txtInterMedium1023"
                      >
                        OCT
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[26px] text-[10.23px] text-center text-gray-600_01"
                        size="txtInterMedium1023"
                      >
                        NOV
                      </Text>
                      <Text
                        className="ml-6 sm:ml-[0] text-[10.23px] text-center text-gray-600_01"
                        size="txtInterMedium1023"
                      >
                        DEC
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mt-6 pl-2 py-2 rounded-[24px] shadow-bs19 w-[93%] md:w-full">
              <div className="flex flex-col items-center justify-start mb-[463px] mt-[27px] w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[85%] md:w-full">
                  <Text
                    className="text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Black90001"
                  >
                    Name
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[110px] md:mt-0 mt-0.5 text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Black90001"
                  >
                    Expertise
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[110px] text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Black90001"
                  >
                    Rates
                  </Text>
                  <Text
                    className="mb-0.5 md:ml-[0] ml-[83px] text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Black90001"
                  >
                    Av.Session len
                  </Text>
                  <Text
                    className="mb-0.5 md:ml-[0] ml-[47px] text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Black90001"
                  >
                    Performance
                  </Text>
                </div>
                <Line className="bg-red-800_19 h-px mt-[17px] w-full" />
                <List
                  className="flex flex-col gap-[29px] mt-[25px] w-[93%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <div className="flex md:flex-1 flex-col gap-12 items-center justify-start w-[4%] md:w-full">
                      <Img
                        className="h-[34px] md:h-auto object-cover rounded-bl-[50%] rounded-br-[50%] w-[34px]"
                        src="images/img_unsplashzqv4fcmzkuq_34x34.png"
                        alt="unsplashzqv4fcm"
                      />
                      <Img
                        className="h-[34px] md:h-auto rounded-[50%] w-[34px]"
                        src="images/img_man1_34x34.png"
                        alt="manOne"
                      />
                      <Img
                        className="h-[34px] md:h-auto rounded-[50%] w-[34px]"
                        src="images/img_man2_34x34.png"
                        alt="manTwo"
                      />
                    </div>
                    <div className="flex flex-col gap-[55px] items-start justify-start ml-8 md:ml-[0]">
                      <Text
                        className="ml-0.5 md:ml-[0] text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Bisa
                      </Text>
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Juma
                      </Text>
                      <Text
                        className="ml-0.5 md:ml-[0] text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Denzel
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[117px]">
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Ui Design
                      </Text>
                      <Text
                        className="mt-[55px] text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Prototyping
                      </Text>
                      <Text
                        className="ml-0.5 md:ml-[0] mt-[52px] text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Business
                      </Text>
                    </div>
                    <Img
                      className="h-[181px] md:ml-[0] ml-[108px]"
                      src="images/img_group155.svg"
                      alt="group155"
                    />
                    <div className="flex flex-col gap-[55px] items-center justify-start md:ml-[0] ml-[95px]">
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        1 hr 20 mins
                      </Text>
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        1 hr 20 mins
                      </Text>
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        1 hr 20 mins
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col font-inter items-center justify-start md:ml-[0] ml-[98px] w-[18%] md:w-full">
                      <div className="flex flex-row gap-3 items-center justify-between w-[99%] md:w-full">
                        <div className="bg-lime-700_6c flex flex-col items-start justify-start my-[3px] rounded-[5px]">
                          <Img
                            className="h-2.5"
                            src="images/img_user_purple_700_10x99.svg"
                            alt="user"
                          />
                        </div>
                        <Text
                          className="text-black-900_b2 text-sm"
                          size="txtInterSemiBold14"
                        >
                          95%{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-between mt-[62px] w-[99%] md:w-full">
                        <div className="bg-lime-700_6c flex flex-col items-start justify-start my-[3px] rounded-[5px]">
                          <Img
                            className="h-2.5"
                            src="images/img_user_purple_700_10x99.svg"
                            alt="user_One"
                          />
                        </div>
                        <Text
                          className="text-black-900_b2 text-sm"
                          size="txtInterSemiBold14"
                        >
                          95%{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-between mt-[65px] w-[99%] md:w-full">
                        <div className="bg-lime-700_6c flex flex-col items-start justify-start my-[3px] rounded-[5px]">
                          <Img
                            className="h-2.5"
                            src="images/img_user_purple_700_10x99.svg"
                            alt="user_Two"
                          />
                        </div>
                        <Text
                          className="text-black-900_b2 text-sm"
                          size="txtInterSemiBold14"
                        >
                          95%{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <div className="flex md:flex-1 flex-col gap-12 items-center justify-start w-[4%] md:w-full">
                      <Img
                        className="h-[34px] md:h-auto object-cover rounded-bl-[50%] rounded-br-[50%] w-[34px]"
                        src="images/img_unsplashzqv4fcmzkuq_34x34.png"
                        alt="unsplashzqv4fcm"
                      />
                      <Img
                        className="h-[34px] md:h-auto rounded-[50%] w-[34px]"
                        src="images/img_man1_34x34.png"
                        alt="manOne"
                      />
                      <Img
                        className="h-[34px] md:h-auto rounded-[50%] w-[34px]"
                        src="images/img_man2_34x34.png"
                        alt="manTwo"
                      />
                    </div>
                    <div className="flex flex-col gap-[55px] items-start justify-start ml-8 md:ml-[0] md:mt-0 mt-0.5">
                      <Text
                        className="ml-0.5 md:ml-[0] text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Bisa
                      </Text>
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Juma
                      </Text>
                      <Text
                        className="ml-0.5 md:ml-[0] text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Denzel
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[117px] md:mt-0 mt-[5px]">
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Ui Design
                      </Text>
                      <Text
                        className="mt-[55px] text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Prototyping
                      </Text>
                      <Text
                        className="ml-0.5 md:ml-[0] mt-[52px] text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Business
                      </Text>
                    </div>
                    <Img
                      className="h-[181px] md:ml-[0] ml-[108px] md:mt-0 mt-1.5"
                      src="images/img_group155.svg"
                      alt="group161"
                    />
                    <div className="flex flex-col gap-[55px] items-center justify-start md:ml-[0] ml-[95px] md:mt-0 mt-0.5">
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        1 hr 20 mins
                      </Text>
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        1 hr 20 mins
                      </Text>
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        1 hr 20 mins
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col font-inter md:gap-10 gap-[65px] items-center justify-start md:ml-[0] ml-[98px] md:mt-0 mt-[3px] w-[18%] md:w-full">
                      <div className="flex flex-row gap-3 items-center justify-between w-[99%] md:w-full">
                        <div className="bg-lime-700_6c flex flex-col items-start justify-start my-[3px] rounded-[5px]">
                          <Img
                            className="h-2.5"
                            src="images/img_user_purple_700_10x99.svg"
                            alt="user"
                          />
                        </div>
                        <Text
                          className="text-black-900_b2 text-sm"
                          size="txtInterSemiBold14"
                        >
                          95%{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-between w-[99%] md:w-full">
                        <div className="bg-lime-700_6c flex flex-col items-start justify-start my-[3px] rounded-[5px]">
                          <Img
                            className="h-2.5"
                            src="images/img_user_purple_700_10x99.svg"
                            alt="user_One"
                          />
                        </div>
                        <Text
                          className="text-black-900_b2 text-sm"
                          size="txtInterSemiBold14"
                        >
                          95%{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-between w-[99%] md:w-full">
                        <div className="bg-lime-700_6c flex flex-col items-start justify-start my-[3px] rounded-[5px]">
                          <Img
                            className="h-2.5"
                            src="images/img_user_purple_700_10x99.svg"
                            alt="user_Two"
                          />
                        </div>
                        <Text
                          className="text-black-900_b2 text-sm"
                          size="txtInterSemiBold14"
                        >
                          95%{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsandReportingPage;
