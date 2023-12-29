import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, CheckBox, Img, Line, Text } from "components";

const ContentManagementPage = () => {
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
        <div className="text-sm">
          <Text className="text-sm">User Management</Text>
        </div>
      ),
      href: "/usermanagement",
      active: window.location.pathname === "/usermanagement",
    },
    {
      label: (
        <div className="text-sm">
          <Text className="text-sm">Mentor Management</Text>
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
        <div className="font-semibold text-purple-700">
          <Text className="font-semibold text-purple-700">
            Content Management
          </Text>
        </div>
      ),
      href: "/contentmanagement",
      active: window.location.pathname === "/contentmanagement",
    },
  ];

  return (
    <>
      <div className="bg-blue_gray-100_01 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[316px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <Img
              className="h-[173px] md:h-auto md:ml-[0] ml-[70px] mr-[79px] object-cover w-[53%]"
              src="images/img_whatsappimage20231114.png"
              alt="whatsappimageTwenty"
            />
            <Menu
              menuItemStyles={{
                button: {
                  padding: "15px 15px 15px 46px",
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
                  className="h-1.5 w-2"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              )}
              className="flex flex-col items-center justify-start mb-[500px] mt-[35px] pt-0.5 w-full"
            >
              <SubMenu
                icon={
                  <Img
                    className="h-6 w-6"
                    src="images/img_grid.svg"
                    alt="grid"
                  />
                }
                label={<Text className="my-0.5 text-sm">Management</Text>}
              >
                <div className="flex flex-col gap-[-2.46px] items-center justify-end w-full">
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
          <div className="flex flex-1 flex-col font-proximasoft gap-[30px] items-center justify-start md:px-5 w-full">
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
            <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between w-[96%] md:w-full">
              <div className="md:h-[1253px] sm:h-[931px] h-[936px] relative w-[62%] md:w-full">
                <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto py-[30px] rounded-[26px] shadow-bs5 w-full">
                  <div className="flex flex-col gap-[23px] justify-start mb-[324px] w-full">
                    <Text
                      className="md:ml-[0] ml-[23px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
                      size="txtProximaSoftSemiBold30"
                    >
                      FAQ’s
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Line className="bg-black-900_4c h-px w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[26px] w-[91%] md:w-full">
                        <div className="border border-gray-900_1e border-solid h-5 rounded w-[4%]"></div>
                        <Text
                          className="ml-4 md:ml-[0] text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                          size="txtProximaSoftSemiBold22"
                        >
                          How does the app match mentors and mentees?
                        </Text>
                        <Button
                          className="flex h-5 items-center justify-center md:ml-[0] ml-[77px] rounded-[50%] w-5"
                          shape="circle"
                          size="sm"
                        >
                          <Img
                            className="h-[11px]"
                            src="images/img_letsiconseditfill.svg"
                            alt="letsiconseditfi"
                          />
                        </Button>
                      </div>
                      <div className="h-[70px] md:h-[77px] mt-[7px] relative w-[86%] sm:w-full">
                        <Text
                          className="m-auto text-black-900_01 text-lg w-[98%] sm:w-full"
                          size="txtProximaSoftRegular18"
                        >
                          The app uses a smart algorithm to match mentors and
                          mentees based on shared interests, expertise, and
                          goals, ensuring a compatible and fruitful mentorship.
                        </Text>
                        <div className="absolute border border-gray-900_1e border-solid h-[70px] inset-[0] justify-center m-auto rounded-[7px] w-full"></div>
                      </div>
                      <Line className="bg-black-900_4c h-px mt-3.5 w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[26px] w-[91%] md:w-full">
                        <div className="border border-gray-900_1e border-solid h-5 md:mt-0 mt-0.5 rounded w-[4%]"></div>
                        <Text
                          className="ml-4 md:ml-[0] md:mt-0 mt-[3px] text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                          size="txtProximaSoftSemiBold22"
                        >
                          Can I have multiple mentors or mentees?
                        </Text>
                        <Button
                          className="flex h-5 items-center justify-center mb-[5px] md:ml-[0] ml-[152px] rounded-[50%] w-5"
                          shape="circle"
                          size="sm"
                        >
                          <Img
                            className="h-[11px]"
                            src="images/img_letsiconseditfill.svg"
                            alt="letsiconseditfi_One"
                          />
                        </Button>
                      </div>
                      <div className="h-[70px] md:h-[72px] mt-0.5 relative w-[86%] sm:w-full">
                        <Text
                          className="m-auto text-black-900_01 text-lg w-[98%] sm:w-full"
                          size="txtProximaSoftRegular18"
                        >
                          Yes, the app allows users to have multiple mentors or
                          mentees simultaneously, providing a diverse range of
                          perspectives and guidance.
                        </Text>
                        <div className="absolute border border-gray-900_1e border-solid h-[70px] inset-[0] justify-center m-auto rounded-[7px] w-full"></div>
                      </div>
                      <Line className="bg-black-900_4c h-px mt-5 w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-7 w-[91%] md:w-full">
                        <div className="border border-gray-900_1e border-solid h-5 rounded w-[4%]"></div>
                        <Text
                          className="ml-4 md:ml-[0] text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                          size="txtProximaSoftSemiBold22"
                        >
                          How do I communicate with my mentor/mentee?
                        </Text>
                        <Button
                          className="flex h-5 items-center justify-center md:ml-[0] ml-[79px] rounded-[50%] w-5"
                          shape="circle"
                          size="sm"
                        >
                          <Img
                            className="h-[11px]"
                            src="images/img_letsiconseditfill.svg"
                            alt="letsiconseditfi_Two"
                          />
                        </Button>
                      </div>
                      <div className="h-[70px] md:h-[78px] mt-2 relative w-[86%] sm:w-full">
                        <Text
                          className="mt-1.5 mx-auto text-black-900_01 text-lg w-[98%] sm:w-full"
                          size="txtProximaSoftRegular18"
                        >
                          The app has an integrated messaging system, allowing
                          seamless communication between mentors and mentees.
                          You can schedule virtual sessions or chat within the
                          app.
                        </Text>
                        <div className="absolute border border-gray-900_1e border-solid h-[70px] inset-[0] justify-center m-auto rounded-[7px] w-full"></div>
                      </div>
                      <Line className="bg-black-900_4c h-px mt-[18px] w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[29px] w-[91%] md:w-full">
                        <div className="border border-gray-900_1e border-solid h-5 md:mt-0 mt-1 rounded w-[4%]"></div>
                        <Text
                          className="ml-4 md:ml-[0] md:mt-0 mt-[5px] text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                          size="txtProximaSoftSemiBold22"
                        >
                          How do I communicate with my mentor/mentee?
                        </Text>
                        <Button
                          className="flex h-[31px] items-center justify-center md:ml-[0] ml-[68px] rounded-[15px] w-[31px]"
                          size="sm"
                        >
                          <Img
                            className="h-[17px]"
                            src="images/img_fluentadd12regular.svg"
                            alt="fluentadd12regu"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="absolute bg-black-900_4c bottom-[35%] h-px inset-x-[0] mx-auto w-full" />
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start pl-1 py-1 rounded-[26px] shadow-bs5 w-[36%] md:w-full">
                <div className="flex flex-col gap-[22px] items-center justify-start mb-[487px] mt-[26px] w-full">
                  <div className="flex flex-row items-start justify-between w-[87%] md:w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
                      size="txtProximaSoftSemiBold30"
                    >
                      Announcements
                    </Text>
                    <Button
                      className="flex h-[31px] items-center justify-center rounded-[15px] w-[31px]"
                      size="sm"
                    >
                      <Img
                        className="h-[17px]"
                        src="images/img_fluentadd12regular.svg"
                        alt="fluentadd12regu_One"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Line className="bg-black-900_4c h-px w-full" />
                    <CheckBox
                      className="font-semibold leading-[normal] md:ml-[0] ml-[7px] mt-[13px] text-left text-lg"
                      inputClassName="h-5 mr-[5px] w-5"
                      name="excitingappupda_One"
                      id="excitingappupda_One"
                      label="Exciting App Update!"
                    ></CheckBox>
                    <Line className="bg-black-900_4c h-px mt-[75px] w-full" />
                    <CheckBox
                      className="font-semibold leading-[normal] md:ml-[0] ml-[7px] mt-[13px] text-left text-lg"
                      inputClassName="h-5 mr-[5px] w-5"
                      name="newmentorspotli_One"
                      id="newmentorspotli_One"
                      label="New Mentor Spotlight"
                    ></CheckBox>
                    <Line className="bg-black-900_4c h-px mt-[75px] w-full" />
                    <CheckBox
                      className="font-semibold leading-[normal] md:ml-[0] ml-[7px] mt-[13px] text-left text-lg"
                      inputClassName="h-5 mr-[5px] w-5"
                      name="usersuccessstor_One"
                      id="usersuccessstor_One"
                      label="User Success Story"
                    ></CheckBox>
                    <Line className="bg-black-900_4c h-px mt-[75px] w-full" />
                    <CheckBox
                      className="font-semibold leading-[normal] md:ml-[0] ml-[7px] mt-[13px] text-left text-lg"
                      inputClassName="h-5 mr-[5px] w-5"
                      name="mentorshipchall_One"
                      id="mentorshipchall_One"
                      label=" Mentorship Challenge"
                    ></CheckBox>
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

export default ContentManagementPage;
