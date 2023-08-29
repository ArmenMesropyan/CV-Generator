import { createApi } from "@reduxjs/toolkit/query/react";
import {
  LoginRequestModel,
  LoginResponseModel,
  RegisterRequestModel,
  RegisterResponseModel,
} from "../../models";
import { baseQuery } from "../baseQuery";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponseModel, LoginRequestModel>({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation<RegisterResponseModel, RegisterRequestModel>({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
