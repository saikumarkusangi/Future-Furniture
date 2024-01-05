import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";
import CartColumnframe48095972 from "components/CartColumnframe48095972";
import CartNavbar from "components/CartNavbar";
import CartSectionfooter from "components/CartSectionfooter";
import TeamCardteam from "components/TeamCardteam";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const TeamPage = () => {
  const teamCardteamPropList = [

    {
      makejhane: "SAINI SAI SANATH KUMAR",
      rectangle1487: "images/sai_sanath.jpg",
      financemanager: "Social Media Strategist ",
      facebook: "images/img_facebook.svg",
      linkedin: "images/img_linkedin.svg",
      twitter: "images/img_twitter.svg",
    },
    {
      makejhane: "SAI KUMAR KUSANGI",
      rectangle1487: "images/saikumar.jpg",
      financemanager: "Full Stack Developer",
      facebook: "images/img_facebook.svg",
      linkedin: "images/img_linkedin.svg",
      twitter: "images/img_twitter.svg",
    },

    {
      makejhane: "ANVESH KUMAR DEVARAKONDA",
      rectangle1487: "images/anveesh.jpg",
      financemanager: "Java Developer",
      facebook: "images/img_facebook.svg",
      linkedin: "images/img_linkedin.svg",
      twitter: "images/img_twitter.svg",
    },
    {
      makejhane: "NAVEEN KUMAR KUSANGI",
      rectangle1487: "images/navven.jpg",
      financemanager: "FRONT END DEVELOPER",
      facebook: "images/img_facebook.svg",
      linkedin: "images/img_linkedin.svg",
      twitter: "images/img_twitter.svg",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 py-[35px] w-full " />
        <div className="flex flex-col items-start justify-center md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
                size="txtRalewayBold40"
              >
                Meet Our Team
              </Text>
              <Text
                className="leading-[35.00px] text-center text-gray-500 text-lg tracking-[-0.50px]"
                size="txtRubikRegular18Gray500"
              >
                <>
                  We write various things related to Future Furnitureure, from tips and
                  what things <br />I need to pay attention to when choosing
                  Future Furnitureure
                </>
              </Text>
            </div>
            <div className="gap-14 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center min-h-[auto] w-full">
              {teamCardteamPropList.map((props, index) => (
                <React.Fragment key={`TeamCardteam${index}`}>
                  <TeamCardteam
                    className="flex flex-1 flex-col gap-2 items-start justify-start w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <CartColumnframe48095972 className="bg-gradient  flex flex-col gap-2 items-start justify-start max-w-[1290px] mx-auto pl-[59px] md:px-5 py-[46px] w-full" />
        </div>
        <CartSectionfooter className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
      </div>
    </>
  );
};

export default TeamPage;
