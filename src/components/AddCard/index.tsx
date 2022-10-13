import { useState } from "react";
import icons from "../../outils/icons";
import Name from "../Name";
import Contact from "../Contact";
import SocialMedia from "../SocialMedia";
import ProfilePicture from "../ProfilePicture";
import profiles from "../../data/profiles.json";

const profileData = profiles.profiles;

function Card() {
  return (
    <>
      {profileData &&
        profileData.map(
          (item: {
            firstName: string;
            lastName: string;
            tel: string;
            adresseMail: string;
            photo: string;
            linkedin: string;
            behance: string;
            github: string;
          }) => (
            <div className="card ">
              <div className=" flex flex-col w-full justify-between bg-greenblue h-[130px] rounded-lg text-white shadow-el1 p-2.5 font-Filson">
                <div className="flex flex-row ">
                  <div className="pr-2">
                    <ProfilePicture profilePic={item.photo} />
                  </div>

                  <div className="flex flex-col w-2/3">
                    <Name firstName={item.firstName} lastName={item.lastName} />
                  </div>
                </div>
                <div className="flex flex-col text-xs ">
                  <Contact tel={item.tel} adressMail={item.adresseMail} />
                </div>
                <div className="flex flex-row items-start gap-x-3">
                  <SocialMedia
                    LinkedinLink={item.linkedin}
                    BehanceLink={item.behance}
                    GithubLink={item.github}
                  />
                </div>
              </div>
            </div>
          )
        )}
    </>
  );
}

export default Card;
