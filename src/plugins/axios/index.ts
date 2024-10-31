import axios from "axios";
import errorResponseHandler from "@/plugins/axios/errorResponseHandler";

const useAxiosInstance = () => {
  const baseURL: string | undefined = import.meta.env.VITE_REACT_APP_BACKEND_API_URL;

  const instance = axios.create({
    baseURL,
  });

  instance.interceptors.response.use(
    (response) => response,
    errorResponseHandler
  );

  return instance;
};

export default useAxiosInstance;