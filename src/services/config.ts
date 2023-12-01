import axios, { AxiosInstance } from "axios";
import { localUserService } from "./localService";

// const API_URL = "http://localhost:8000"
const API_URL = "https://asm-web-503.vercel.app"
export const BASE_URL = API_URL;
const accessToken = localUserService.get()?.accessToken
const configHeadres  = {
  "Authorization": "Bearer " + (accessToken ? accessToken : ''),
}
export const https:AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: configHeadres
})