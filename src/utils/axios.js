import axios from "axios";
/*
  This is for creating a universal instance of axios
*/

const baseURL = process.env.BASE_API_URL // Not Working so abort

const axiosInstance = axios.create({
  baseURL: 'https://engineering-task.elancoapps.com/api',
});

export default axiosInstance