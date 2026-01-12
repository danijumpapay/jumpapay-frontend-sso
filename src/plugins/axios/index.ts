import axios from "axios";
import { getAccessToken, setAccessToken } from "@/services/authToken";

const useAxiosInstance = () => {
  const baseURL = import.meta.env.VITE_REACT_APP_BACKEND_API_URL;

  const instance = axios.create({
    baseURL,
    withCredentials: true
  });

  instance.interceptors.request.use(config => {
    const token = getAccessToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  instance.interceptors.response.use(
    res => res,
    async err => {
      const original = err.config;

      if (err.response?.status === 401 && !original._retry) {
        original._retry = true;

        try {
          const r = await instance.post("/auth/refresh");
          setAccessToken(r.data.data.accessToken);

          original.headers.Authorization = `Bearer ${getAccessToken()}`;
          return instance(original);
        } catch (error) {
          console.log("ACCESS TOKEN NOT FOUND ======>", error);
          setAccessToken(null);
          window.location.href = "/login";
        }
      }

      return Promise.reject(err);
    }
  );

  return instance;
};

export default useAxiosInstance;
