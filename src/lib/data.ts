// data for homepage

import apiBaseUrl from "@/util/api";

export const sectionTwoData = async () => {
  const response = await apiBaseUrl.get("/sectiontwo");
  const data = response.data;
  return data;
};

export const testimonialsData = async () => {
  const response = await apiBaseUrl.get("/testimonials");
  const data = response.data;
  return data;
};

//data for footer

export const footerData = async () => {
  const response = await apiBaseUrl.get("/footer");
  const data = response.data;
  return data;
};

// export const sectionTwoData = async () => {
//   const response = await apiBaseUrl.get("/sectiontwo");
//   const data = response.data;
// };
