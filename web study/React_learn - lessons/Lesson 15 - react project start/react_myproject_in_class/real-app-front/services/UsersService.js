import axios from "axios";
import httpService, { setCommonHeader } from "./httpService";
import { jwtDecode } from "jwt-decode";
import { func } from "joi";

const TOKEN_KEY = "token";

function getJWT() {
  return localStorage.getItem(TOKEN_KEY);
}

function refreshCommonHeader() {
  httpService.setCommonHeader("x-auth-token", getJWT);
}

export function createUser(user) {
  return httpService.post("/users", user);
}

export async function login(credentials) {
  const response = await httpService.post("/auth", credentials);
  localStorage.setItem(TOKEN_KEY, response.data.token);
  refreshCommonHeader();

  return response;
}
console.log(TOKEN_KEY);

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  refreshCommonHeader();
}

export function getUser() {
  try {
    const token = getJWT();
    return jwtDecode(token);
  } catch {
    return null;
  }
}

const usersService = {
  createUser,
  getUser,
  login,
  logout,
  getJWT,
};

export default usersService;
