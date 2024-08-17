import axios from "axios";

export const geoApiInstance = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
    // Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

export async function getAllPoints() {
  try {
    return await geoApiInstance.get("/locations");
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getAllPolygons() {
  try {
    const response = await geoApiInstance.get("/geo-fences");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
