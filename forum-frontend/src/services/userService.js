import apiClient from "./api-client";
export async function register(user) {
  try {
    return await apiClient.post("/users", user);
  } catch (ex) {
    if (ex.response?.status === 400) {
      throw new Error("User already registered");
    }
  }
}
