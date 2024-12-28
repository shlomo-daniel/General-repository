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

function getJWT() {
  return localStorage.getItem(TOKEN_KEY);
}

export function createUser(user) {
  return httpService.post("/users", user);
}

export async function login(credentials) {
  const response = await httpService.post("/auth", credentials);
  setToken(response.data.token);

  return response;
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
}

export function getMe() {
  return httpService.get("/users/me");
}

const usersService = {
  createUser,
  login,
  getUser,
  logout,
  getMe,
};

export default usersService;
