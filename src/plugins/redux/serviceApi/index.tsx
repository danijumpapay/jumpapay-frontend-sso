import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export type TPrepareHeaders = (
  headers: Headers,
  api: {
    getState: () => any;
    extra: any;
    endpoint: string;
    type: "query" | "mutation";
    forced: boolean | undefined;
  },
) => Headers;

// Define a service using a base URL and expected endpoints
const baseUrl: string | undefined = import.meta.env
  .VITE_REACT_APP_BACKEND_API_URL;

const prepareHeaders: TPrepareHeaders = (headers, { getState }) => {
  const token = getState().userReducer.token;

  // Set Headers
  headers.set("Authorization", token);

  return headers;
};

export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders,
});
