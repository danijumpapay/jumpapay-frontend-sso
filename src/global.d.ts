import { AxiosError } from "axios";

declare global {
  type AxiosErrorResponse = AxiosError<any>;
};