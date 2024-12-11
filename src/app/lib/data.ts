// data for homepage

import apiBaseUrl from "@/util/api";

export const sectionTwoData = async () => {
  try {
    const response = await apiBaseUrl.get("/sectiontwo");
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const testimonialsData = async () => {
  try {
    const response = await apiBaseUrl.get("/testimonials");
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
//data for footer

export const footerData = async () => {
  try {
    const response = await apiBaseUrl.get("/footer");
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
