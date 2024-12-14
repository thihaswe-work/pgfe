// data for homepage

import apiBaseUrl from "@/util/api";

export const homeSectionTwoData = async () => {
  const response = await apiBaseUrl.get("/home/sectiontwo");
  const data = response.data;
  return data;
};

export const homeTestimonialsData = async () => {
  const response = await apiBaseUrl.get("/home/testimonials");
  const data = response.data;
  return data;
};

// data for aboutuspage

export const aboutSectionOneData = async () => {
  const response = await apiBaseUrl.get("/aboutus/sectionone");
  const data = response.data;
  return data;
};
export const aboutSectionTwoData = async () => {
  const response = await apiBaseUrl.get("/aboutus/sectiontwo");
  const data = response.data;

  return data;
};

export const aboutSectionThreeData = async () => {
  const response = await apiBaseUrl.get("/aboutus/sectionthree");
  const data = response.data;

  return data;
};

export const aboutIcons = async () => {
  const response = await apiBaseUrl.get("/aboutus/icons");
  const data = response.data;
  return data;
};

export const aboutTestimonialsData = async () => {
  const response = await apiBaseUrl.get("/aboutus/testimonials");
  const data = response.data;
  return data;
};

//data for footer

export const footerData = async () => {
  const response = await apiBaseUrl.get("/footer");
  const data = response.data;
  return data;
};
