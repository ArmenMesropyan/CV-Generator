import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { RootState } from "./store";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://e30b-37-252-93-46.ngrok-free.app/api/",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).userSlice.user?.token || "";

    if (token) headers.set("Authorization", `Bearer ${token}`);

    return headers;
  },
});
