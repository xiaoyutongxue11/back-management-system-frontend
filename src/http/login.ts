import http from "./index";
import { Login } from "./interface/login";

export const loginAPI = (data: Login.LoginParams) => {
  return http({
    url: "/api/login",
    method: "post",
    data,
  });
};

export const registerAPI = (data: Login.LoginParams) => {
  return http({
    url: "/api/register",
    method: "post",
    data,
  });
};
