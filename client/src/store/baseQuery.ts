import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://e30b-37-252-93-46.ngrok-free.app/api/",
});
