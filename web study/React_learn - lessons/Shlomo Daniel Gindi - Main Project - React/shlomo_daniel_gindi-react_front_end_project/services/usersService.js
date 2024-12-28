import { toast } from "react-toastify";
import httpService, { setDefaultCommonHeaders } from "./httpService";
import { jwtDecode } from "jwt-decode";

const TOKEN_KEY = "token";

refreshToken();

function refreshToken() {
  setDefaultCommonHeaders("x-auth-token", getJWT());
}

function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
  refreshToken();
}

export function getJWT() {
  return localStorage.getItem(TOKEN_KEY);
}

export function createUser(user) {
  return httpService.post("/users", user);
}

export async function logIn(credentials) {
  try {
    const response = await httpService.post("/users/login", credentials);
    setToken(response.data);

    toast("Login successful", { type: "success" });

    return response;
  } catch {
    toast("Feild to log in", {
      type: "error",
    });
    return "error";
  }
}

export function getUser() {
  try {
    const token = getJWT();
    return jwtDecode(token);
  } catch {
    return null;
  }
}

export function logout() {
  setToken(null);
  toast("logged out successfuly", { type: "success" });
}

export function getMe() {
  return httpService.get("/users/", getJWT());
}

const usersService = {
  createUser,
  getUser,
  getMe,
  logIn,
  logout,
};

export default usersService;
