// "use server";

// import apiBaseUrl from "@/util/api";

// export const handleContactData = async (
//   previousState: unknown,
//   formData: FormData
// ) => {
//   try {
//     const { fullname, email, message } = Object.fromEntries(formData);
//     fetch("http://localhost:5000/", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: formData,
//     });
//     // apiBaseUrl.post("/api/contact", formData);
//   } catch (error) {
//     return { error: "can't send message!!!" };
//   }
// };
