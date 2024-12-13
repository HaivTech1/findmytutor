import axiosInstance from "@/api/axiosConfig";
import React from "react";



export default async function getAllTutors(token) {
    try {
      const response = await axiosInstance.get("/all/tutors", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      return response.data; 
    } catch (error) {
      console.error("Error getting user profile:", error);
      throw error;
    }
  };
  
