import React from "react";
import ProfileSection from "./profileSection";
import YearSection from "./yearSection";

const ProfileAndYear = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <ProfileSection />
      </div>
      <div className="w-1/2">
        <YearSection />
      </div>
    </div>
  );
};

export default ProfileAndYear;
