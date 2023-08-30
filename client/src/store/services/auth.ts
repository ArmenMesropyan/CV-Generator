import { createApi } from "@reduxjs/toolkit/query/react";
import {
  GetUserResponseModel,
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
    getUser: builder.query<GetUserResponseModel, string>({
      query: (token) => ({
        url: "/user",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
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

export const { useLoginMutation, useRegisterMutation, useLazyGetUserQuery } =
  authApi;
