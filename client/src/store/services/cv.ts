import { createApi } from "@reduxjs/toolkit/query/react";
import { GetCVSResponseModel } from "../../models";
import { baseQuery } from "../baseQuery";

export const cvApi = createApi({
  reducerPath: "cvApi",
  tagTypes: ["CVList"],
  baseQuery,
  endpoints: (builder) => ({
    addCV: builder.mutation<void, string>({
      query: (name) => ({
        url: "/cv",
        method: "POST",
        body: { name },
      }),
      invalidatesTags: ["CVList"],
    }),
    getCVS: builder.query<GetCVSResponseModel[], void>({
      query: () => ({
        url: "/cv",
        method: "GET",
      }),
      providesTags: ["CVList"],
    }),
  }),
});

export const { useAddCVMutation, useGetCVSQuery } = cvApi;
