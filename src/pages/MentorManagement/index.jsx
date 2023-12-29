import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar4 from "components/Sidebar4";

const MentorManagementPage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[27px] mt-1.5 w-[27px]"
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
          src="images/img_search_blue_gray_300.svg"
          alt="search"
        />
      ),
      label: "Settings",
      href: "/settingsone",
      active: window.location.pathname === "/settingsone",
    },
  ];
  const sideBarMenu1 = [
    {
      label: (
        <div className="font-semibold text-purple-700">
          <Text className="font-semibold text-purple-700">User Management</Text>
        </div>
      ),
      href: "/usermanagement",
      active: window.location.pathname === "/usermanagement",
    },
    {
      label: (
        <div className="font-semibold text-purple-700">
          <Text className="font-semibold text-purple-700">
            Mentor Management
          </Text>
        </div>
      ),
      href: "/mentormanagement",
      active: window.location.pathname === "/mentormanagement",
    },
    {
      label: (
        <div className="text-sm">
          <Text className="text-sm">Session Management</Text>
        </div>
      ),
      href: "/sessionmanagement",
      active: window.location.pathname === "/sessionmanagement",
    },
    {
      label: (
        <div className="text-sm">
          <Text className="text-sm">Content Management</Text>
        </div>
      ),
      href: "/contentmanagement",
      active: window.location.pathname === "/contentmanagement",
    },
  ];

  return (
    <>
      <div className="bg-blue_gray-100_01 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar4 className="!sticky !w-[316px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
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
              <div className="flex flex-row gap-2.5 items-center justify-center mr-3 p-2.5 w-auto">
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
            <div className="flex sm:flex-col flex-row font-poppins gap-[22px] items-center justify-end mt-[33px] w-[33%] md:w-full">
              <Input
                name="group152"
                placeholder="Search"
                className="font-medium p-0 placeholder:text-blue_gray-700 text-[17.05px] text-left w-full"
                wrapClassName="border border-gray-900_1e border-solid flex rounded-[21px] w-[65%] sm:w-full"
                prefix={
                  <Img
                    className="mt-[5px] mb-1 mr-2.5"
                    src="images/img_rewind.svg"
                    alt="rewind"
                  />
                }
                color="white_A700"
                size="md"
                variant="fill"
              ></Input>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[125px] rounded-[20px]"
                leftIcon={
                  <div className="h-[19px] mt-[5px] mb-1 mr-2 w-[19px] rounded-[5px]">
                    <Img
                      className="h-[19px] rounded-[5px]"
                      src="images/img_outline_settings_fine_tuning_tuning.svg"
                      alt="Outline / Settings, Fine Tuning / Tuning "
                    />
                  </div>
                }
                size="sm"
              >
                <div className="font-medium text-[19.13px] text-left">
                  Filter
                </div>
              </Button>
            </div>
            <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mt-[18px] p-2 rounded-[24px] shadow-bs19 w-[97%] md:w-full">
              <div className="flex flex-col justify-start mb-[463px] mt-[27px] w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[78px] w-[78%] md:w-full">
                  <Text
                    className="mb-0.5 text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Black90001"
                  >
                    Name
                  </Text>
                  <Text
                    className="mb-[3px] md:ml-[0] ml-[55px] text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Black90001"
                  >
                    Email
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[157px] md:mt-0 mt-0.5 text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Black90001"
                  >
                    Expertise
                  </Text>
                  <Text
                    className="mb-0.5 md:ml-[0] ml-[68px] text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Black90001"
                  >
                    Rates
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[81px] md:mt-0 mt-0.5 text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Black90001"
                  >
                    Availabilty
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[61px] md:mt-0 mt-[3px] text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Black90001"
                  >
                    Approval
                  </Text>
                </div>
                <Line className="bg-red-800_19 h-px mt-4 w-full" />
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[9px] mt-[25px] w-[97%] md:w-full">
                  <List
                    className="flex flex-col gap-[29px] w-[70%]"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                      <div className="flex md:flex-1 flex-col gap-12 items-center justify-start w-[5%] md:w-full">
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
                      <div className="flex flex-col gap-[55px] items-start justify-start md:ml-[0] ml-[62px]">
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtPoppinsRegular18Bluegray700"
                        >
                          bisa@gmail.com
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtPoppinsRegular18Bluegray700"
                        >
                          juma@gmail.com
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtPoppinsRegular18Bluegray700"
                        >
                          denzel@gmail.com
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[43px]">
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
                        className="h-[181px] md:ml-[0] ml-[66px]"
                        src="images/img_group155.svg"
                        alt="group155"
                      />
                      <div className="flex flex-col gap-[55px] items-center justify-start md:ml-[0] ml-[95px]">
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtPoppinsRegular18Bluegray700"
                        >
                          Available
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtPoppinsRegular18Bluegray700"
                        >
                          Available
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtPoppinsRegular18Bluegray700"
                        >
                          Available
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                      <div className="flex md:flex-1 flex-col gap-12 items-center justify-start w-[5%] md:w-full">
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
                      <div className="flex flex-col gap-[55px] items-start justify-start md:ml-[0] ml-[62px]">
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtPoppinsRegular18Bluegray700"
                        >
                          bisa@gmail.com
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtPoppinsRegular18Bluegray700"
                        >
                          juma@gmail.com
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtPoppinsRegular18Bluegray700"
                        >
                          denzel@gmail.com
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[43px]">
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
                        className="h-[181px] md:ml-[0] ml-[66px]"
                        src="images/img_group155.svg"
                        alt="group161"
                      />
                      <div className="flex flex-col gap-[55px] items-center justify-start md:ml-[0] ml-[95px]">
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtPoppinsRegular18Bluegray700"
                        >
                          Available
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtPoppinsRegular18Bluegray700"
                        >
                          Available
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtPoppinsRegular18Bluegray700"
                        >
                          Available
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[84px] w-[11%] md:w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[34px] items-start justify-start p-[3px] w-[95%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_3dswitch.svg')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-start w-[94%] md:w-full">
                        <div className="bg-gradient1  h-[26px] rounded-[50%] w-[26px]"></div>
                        <Text
                          className="ml-[3px] text-black-900_02 text-xs"
                          size="txtPoppinsRegular12Black90002"
                        >
                          Disapprove
                        </Text>
                      </div>
                    </div>
                    <List
                      className="flex flex-col gap-11 items-center mt-[46px] w-full"
                      orientation="vertical"
                    >
                      <div
                        className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[35px] items-end justify-end p-[3px] w-[99%] md:w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_3dswitch_purple_700.svg')",
                        }}
                      >
                        <div className="flex flex-row gap-[11px] items-end justify-end w-[83%] md:w-full">
                          <Text
                            className="my-1 text-white-A700 text-xs"
                            size="txtPoppinsRegular12WhiteA700"
                          >
                            Approve
                          </Text>
                          <div className="bg-gradient1  h-[27px] rounded-[13px] w-[27px]"></div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[35px] items-end justify-end p-[3px] w-[99%] md:w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_3dswitch_purple_700.svg')",
                        }}
                      >
                        <div className="flex flex-row gap-[11px] items-end justify-end w-[83%] md:w-full">
                          <Text
                            className="my-1 text-white-A700 text-xs"
                            size="txtPoppinsRegular12WhiteA700"
                          >
                            Approve
                          </Text>
                          <div className="bg-gradient1  h-[27px] rounded-[13px] w-[27px]"></div>
                        </div>
                      </div>
                    </List>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[34px] items-start justify-start mt-[34px] p-[3px] w-[95%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_3dswitch.svg')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-start w-[94%] md:w-full">
                        <div className="bg-gradient1  h-[26px] rounded-[50%] w-[26px]"></div>
                        <Text
                          className="ml-[3px] text-black-900_02 text-xs"
                          size="txtPoppinsRegular12Black90002"
                        >
                          Disapprove
                        </Text>
                      </div>
                    </div>
                    <List
                      className="flex flex-col gap-11 items-center mt-[46px] w-full"
                      orientation="vertical"
                    >
                      <div
                        className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[35px] items-end justify-end p-[3px] w-[99%] md:w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_3dswitch_purple_700.svg')",
                        }}
                      >
                        <div className="flex flex-row gap-[11px] items-end justify-end w-[83%] md:w-full">
                          <Text
                            className="my-1 text-white-A700 text-xs"
                            size="txtPoppinsRegular12WhiteA700"
                          >
                            Approve
                          </Text>
                          <div className="bg-gradient1  h-[27px] rounded-[13px] w-[27px]"></div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[35px] items-end justify-end p-[3px] w-[99%] md:w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_3dswitch_purple_700.svg')",
                        }}
                      >
                        <div className="flex flex-row gap-[11px] items-end justify-end w-[83%] md:w-full">
                          <Text
                            className="my-1 text-white-A700 text-xs"
                            size="txtPoppinsRegular12WhiteA700"
                          >
                            Approve
                          </Text>
                          <div className="bg-gradient1  h-[27px] rounded-[13px] w-[27px]"></div>
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="flex flex-col gap-[35px] items-center justify-start md:ml-[0] ml-[59px] w-[8%] md:w-full">
                    <div className="flex flex-col md:gap-10 gap-[65px] items-center justify-start w-full">
                      <Text
                        className="text-purple-700 text-sm underline"
                        size="txtPoppinsRegular14Purple700"
                      >
                        View Details
                      </Text>
                      <Text
                        className="text-purple-700 text-sm underline"
                        size="txtPoppinsRegular14Purple700"
                      >
                        View Details
                      </Text>
                      <Text
                        className="text-purple-700 text-sm underline"
                        size="txtPoppinsRegular14Purple700"
                      >
                        View Details
                      </Text>
                    </div>
                    <div className="flex flex-col md:gap-10 gap-[65px] items-center justify-start w-full">
                      <Text
                        className="text-purple-700 text-sm underline"
                        size="txtPoppinsRegular14Purple700"
                      >
                        View Details
                      </Text>
                      <Text
                        className="text-purple-700 text-sm underline"
                        size="txtPoppinsRegular14Purple700"
                      >
                        View Details
                      </Text>
                      <Text
                        className="text-purple-700 text-sm underline"
                        size="txtPoppinsRegular14Purple700"
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
    </>
  );
};

export default MentorManagementPage;
