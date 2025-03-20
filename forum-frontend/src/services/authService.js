import apiClient from "./api-client";
import { jwtDecode } from "jwt-decode";

const TOKEN_KEY = "FORUM_TOKEN";

async function login(creds) {
  try {
    const { data: jwt } = await apiClient.post("/logins", creds);
    localStorage.setItem(TOKEN_KEY, jwt);
  } catch (ex) {
    if (ex.response?.status === 400) {
      throw new Error("Invalid Credentials!");
    }
  }
}

function loginWithJWT(jwt) {
  localStorage.setItem(TOKEN_KEY, jwt);
}

function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(TOKEN_KEY);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}
export default { login, loginWithJWT, logout, getCurrentUser };
