"use server";

import apiBaseUrl from "@/util/api";

export const handleContactData = async (
  previousState: unknown,
  formData: FormData
) => {
  try {
    // Await the API request and get the response
    const response = await apiBaseUrl.post("/api/contactus/inquiry", formData);

    return { success: "Message sent successfully!", data: response.data };
  } catch (error) {
    console.log(error);
    return { error: "Can't send message, please try again!" };
  }
};
