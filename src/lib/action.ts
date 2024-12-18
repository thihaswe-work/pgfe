"use server";

import apiBaseUrl from "@/util/api";

export const handleContactData = async (
  previousState: unknown,
  formData: FormData
) => {
  try {
    // Await the API request and get the response
    const response = await apiBaseUrl.post(
      "/api/contactus/sectintwo",
      formData
    );

    // Handle the response (you can return it or process it as needed)
    return { success: "Message sent successfully!", data: response.data };
  } catch (error) {
    // Log the error for debugging (optional)

    // Return a user-friendly error message
    console.log(error);
    return { error: "Can't send message, please try again!" };
  }
};
