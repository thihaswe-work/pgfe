import React from "react";
import ProfileSection from "./profileSection";
import YearSection from "./yearSection";

const ProfileAndYear = () => {
  return (
    <div className="flex px-[45px] justify-between flex-wrap ">
      <div className="h-[240px] flex flex-col w-full lg:w-[556px] flex-shrink-0">
        <ProfileSection />
      </div>
      <div className="flex flex-col-reverse w-full xl:w-[444px] lg:h-[600px] flex-shrink-0 justify-end ">
        <YearSection />
      </div>
    </div>
  );
};

export default ProfileAndYear;
