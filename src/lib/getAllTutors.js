// import axiosInstance from "@/api/axiosConfig";

// // Fetch All Tutors
// export default async function getAllTutors(access_token) {
//   try {
//     const response = await axiosInstance.get("/all/tutors", {
//       headers: {
//         Authorization: `Bearer ${access_token}`,
//       },
//     });

//     return response.data; 
//   } catch (error) {
   
//     if (error.response) {
//       console.error(
//         `Error: ${error.response.status} - ${error.response.data.message || "Unknown Error"}`
//       );
//     } else if (error.request) {
//       console.error("No response received from server:", error.request);
//     } else {
//       console.error("Error setting up the request:", error.message);
//     }

//     throw error; 
//   }
// }
