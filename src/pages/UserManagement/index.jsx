import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";

const UserManagementPage = () => {
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
          <Sidebar className="!sticky !w-[316px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <Img
              className="h-[173px] md:h-auto md:ml-[0] ml-[66px] mr-[83px] mt-2.5 object-cover w-[53%]"
              src="images/img_whatsappimage20231114.png"
              alt="whatsappimageTwenty"
            />
            <Menu
              menuItemStyles={{
                button: {
                  padding: "12px 12px 12px 46px",
                  gap: "11px",
                  color: "#4c535f",
                  fontSize: "18px",
                  [`&:hover, &.ps-active`]: { fontWeight: "400 !important" },
                },
              }}
              renderExpandIcon={() => (
                <Img
                  className="h-1.5 mt-[15px] w-2"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              )}
              className="flex flex-col items-center justify-start mb-[503px] mt-[22px] pt-0.5 w-full"
            >
              <SubMenu
                icon={
                  <Img
                    className="h-6 mt-[3px] w-6"
                    src="images/img_grid.svg"
                    alt="grid"
                  />
                }
                label={
                  <Text className="font-semibold mt-1.5 text-purple-700">
                    Management
                  </Text>
                }
              >
                <div className="flex flex-col gap-[1.39px] items-center justify-end w-full">
                  {sideBarMenu1?.map((menu, i) => (
                    <MenuItem key={`sideBarMenu1Item${i}`} {...menu}>
                      {menu.label}
                    </MenuItem>
                  ))}
                </div>
              </SubMenu>
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col font-proximasoft items-center justify-start md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row gap-[13px] items-center justify-center p-[7px] shadow-bs18 w-full">
              <div className="bg-white-A700 border border-gray-900_7f border-solid flex flex-col h-[41px] items-center justify-end mb-[26px] md:ml-[0] ml-[845px] md:mt-0 mt-[17px] p-[7px] rounded-[20px] w-[41px]">
                <div className="bg-white-A700 flex flex-col h-[25px] items-center justify-start rounded-[5px] w-[25px]">
                  <Img
                    className="h-[22px] w-[21px]"
                    src="images/img_user.svg"
                    alt="user"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-center mb-3 mr-10 p-2.5 w-auto">
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
            <div className="flex sm:flex-col flex-row font-poppins gap-[22px] items-center justify-end mt-[45px] w-[37%] md:w-full">
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
            <Text
              className="mt-[13px] sm:text-4xl md:text-[38px] text-[40px] text-black-900_01"
              size="txtProximaSoftSemiBold40Black90001"
            >
              Mentors
            </Text>
            <div className="flex flex-col items-start justify-start mt-[13px] w-[96%] md:w-full">
              <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start p-2 rounded-[24px] shadow-bs19 w-full">
                <div className="flex flex-col justify-start mb-[60px] mt-5 w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[121px] w-[71%] md:w-full">
                    <Text
                      className="text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Black90001"
                    >
                      Name
                    </Text>
                    <Text
                      className="mb-0.5 md:ml-[0] ml-[101px] text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Black90001"
                    >
                      Email
                    </Text>
                    <Text
                      className="mb-0.5 md:ml-[0] ml-[209px] text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Black90001"
                    >
                      Status
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[131px] md:mt-0 mt-0.5 text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Black90001"
                    >
                      Expertise
                    </Text>
                  </div>
                  <Line className="bg-red-800_19 h-px mt-[13px] w-full" />
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-7 md:ml-[0] mt-[33px] w-[95%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[5%] md:w-full">
                      <Img
                        className="h-12 md:h-auto object-cover rounded-bl-[23px] rounded-br-[23px] w-12"
                        src="images/img_unsplashzqv4fcmzkuq.png"
                        alt="unsplashzqv4fcm"
                      />
                      <Img
                        className="h-12 md:h-auto mt-12 rounded-[50%] w-12"
                        src="images/img_man1_48x48.png"
                        alt="manOne"
                      />
                      <Img
                        className="h-12 md:h-auto mt-[45px] rounded-[50%] w-12"
                        src="images/img_man2.png"
                        alt="manTwo"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start ml-11 md:ml-[0] md:mt-0 my-[3px]">
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Bisa
                      </Text>
                      <Text
                        className="mt-[81px] text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Juma
                      </Text>
                      <Text
                        className="mt-[77px] text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Denzel
                      </Text>
                    </div>
                    <div className="flex flex-col md:gap-10 gap-[78px] items-center justify-start md:ml-[0] ml-[97px] md:mt-0 mt-[5px] w-[18%] md:w-full">
                      <div className="flex flex-col md:gap-10 gap-[81px] items-start justify-start">
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
                      </div>
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        denzel@gmail.com
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start mb-[7px] md:ml-[0] ml-[109px]">
                      <Text
                        className="text-lg text-light_blue-800"
                        size="txtPoppinsRegular18Lightblue800"
                      >
                        Verified
                      </Text>
                      <Text
                        className="mt-[81px] text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Unverified
                      </Text>
                      <Text
                        className="mt-[78px] text-lg text-light_blue-800"
                        size="txtPoppinsRegular18Lightblue800"
                      >
                        Verified
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start ml-28 md:ml-[0]">
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Ui Design
                      </Text>
                      <Text
                        className="mt-[81px] text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Prototyping
                      </Text>
                      <Text
                        className="mt-[75px] text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Business
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[63px]">
                      <Text
                        className="text-base text-purple-700 underline"
                        size="txtPoppinsRegular16Purple700"
                      >
                        View Details
                      </Text>
                      <Text
                        className="mt-[86px] text-base text-purple-700 underline"
                        size="txtPoppinsRegular16Purple700"
                      >
                        View Details
                      </Text>
                      <Text
                        className="mt-[78px] text-base text-purple-700 underline"
                        size="txtPoppinsRegular16Purple700"
                      >
                        View Details
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="ml-2 md:ml-[0] mt-[25px] sm:text-4xl md:text-[38px] text-[40px] text-black-900_01"
                size="txtProximaSoftSemiBold40Black90001"
              >
                Mentees
              </Text>
              <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mt-[13px] p-2 rounded-[24px] shadow-bs19 w-full">
                <div className="flex flex-col justify-start mb-[60px] mt-5 w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[121px] w-[71%] md:w-full">
                    <Text
                      className="text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Black90001"
                    >
                      Name
                    </Text>
                    <Text
                      className="mb-0.5 md:ml-[0] ml-[101px] text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Black90001"
                    >
                      Email
                    </Text>
                    <Text
                      className="mb-0.5 md:ml-[0] ml-[209px] text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Black90001"
                    >
                      Status
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[131px] md:mt-0 mt-0.5 text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Black90001"
                    >
                      Expertise
                    </Text>
                  </div>
                  <Line className="bg-red-800_19 h-px mt-[13px] w-full" />
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-7 md:ml-[0] mt-[33px] w-[95%] md:w-full">
                    <div className="flex flex-col items-center justify-start md:mt-0 mt-2 w-[5%] md:w-full">
                      <Img
                        className="h-12 md:h-auto object-cover rounded-bl-[23px] rounded-br-[23px] w-12"
                        src="images/img_unsplashzqv4fcmzkuq.png"
                        alt="unsplashzqv4fcm_One"
                      />
                      <Img
                        className="h-12 md:h-auto mt-12 rounded-[50%] w-12"
                        src="images/img_man1_48x48.png"
                        alt="manOne_One"
                      />
                      <Img
                        className="h-12 md:h-auto mt-[45px] rounded-[50%] w-12"
                        src="images/img_man2.png"
                        alt="manTwo_One"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start ml-11 md:ml-[0]">
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Bisa
                      </Text>
                      <Text
                        className="mt-[81px] text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Juma
                      </Text>
                      <Text
                        className="mt-[76px] text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Denzel
                      </Text>
                    </div>
                    <div className="flex flex-col md:gap-10 gap-[74px] items-center justify-start md:ml-[0] ml-[97px] w-[18%] md:w-full">
                      <div className="flex flex-col md:gap-10 gap-[81px] items-start justify-start">
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
                      </div>
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        denzel@gmail.com
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start mb-[7px] md:ml-[0] ml-[109px]">
                      <Text
                        className="text-lg text-light_blue-800"
                        size="txtPoppinsRegular18Lightblue800"
                      >
                        Verified
                      </Text>
                      <Text
                        className="mt-[81px] text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Unverified
                      </Text>
                      <Text
                        className="mt-[77px] text-lg text-light_blue-800"
                        size="txtPoppinsRegular18Lightblue800"
                      >
                        Verified
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start mb-[7px] ml-28 md:ml-[0]">
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Student
                      </Text>
                      <Text
                        className="mt-[83px] text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Seeking Job
                      </Text>
                      <Text
                        className="mt-[75px] text-blue_gray-700 text-lg"
                        size="txtPoppinsRegular18Bluegray700"
                      >
                        Graduate
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[58px]">
                      <Text
                        className="text-base text-purple-700 underline"
                        size="txtPoppinsRegular16Purple700"
                      >
                        View Details
                      </Text>
                      <Text
                        className="mt-[86px] text-base text-purple-700 underline"
                        size="txtPoppinsRegular16Purple700"
                      >
                        View Details
                      </Text>
                      <Text
                        className="mt-[76px] text-base text-purple-700 underline"
                        size="txtPoppinsRegular16Purple700"
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

export default UserManagementPage;
