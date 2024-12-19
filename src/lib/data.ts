import apiBaseUrl from "@/util/api";

// data for homepage
export const homeSectionTwoData = async () => {
  try {
    const response = await apiBaseUrl.get("/api/home/sectiontwo");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching homeSectionTwoData:", error);
    throw error;
  }
};

export const homeTestimonialsData = async () => {
  try {
    const response = await apiBaseUrl.get("/api/home/testimonials");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching homeTestimonialsData:", error);
    throw error;
  }
};

// data for aboutuspage

export const aboutSectionOneData = async () => {
  try {
    const response = await apiBaseUrl.get("/api/aboutus/sectionone");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching aboutSectionOneData:", error);
    throw error;
  }
};

export const aboutSectionTwoData = async () => {
  try {
    const response = await apiBaseUrl.get("/api/aboutus/sectiontwo");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching aboutSectionTwoData:", error);
    throw error;
  }
};

export const aboutSectionThreeData = async () => {
  try {
    const response = await apiBaseUrl.get("/api/aboutus/sectionthree");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching aboutSectionThreeData:", error);
    throw error;
  }
};

export const aboutIcons = async () => {
  try {
    const response = await apiBaseUrl.get("/api/aboutus/icons");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching aboutIcons:", error);
    throw error;
  }
};

export const aboutTestimonialsData = async () => {
  try {
    const response = await apiBaseUrl.get("/api/aboutus/testimonials");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching aboutTestimonialsData:", error);
    throw error;
  }
};

// data for contact page

export const contactSectionOneData = async () => {
  try {
    const response = await apiBaseUrl.get("/api/contactus/sectionone");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching aboutSectionOneData:", error);
    throw error;
  }
};

export const contactSectionTwoData = async () => {
  try {
    const response = await apiBaseUrl.get("/api/contactus/sectintwo");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching aboutSectionTwoData:", error);
    throw error;
  }
};

//data for footer

export const footerData = async () => {
  try {
    const response = await apiBaseUrl.get("/api/footer");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching footerData:", error);
    throw error;
  }
};
