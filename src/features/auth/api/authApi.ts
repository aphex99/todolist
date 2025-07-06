import { baseApi } from "@/app/baseApi.ts";
import type { BaseResponse } from "@/common/types";
import type { LoginInputs } from "@/features/auth/lib/schemas";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<BaseResponse<{ userId: number; token: string }>, LoginInputs>({
      query: (body) => ({
        method: "post", url: "auth/login",
        headers: { "Content-Type": "application/json" },
        body
      })
    }),
    logout: builder.mutation<BaseResponse, void>({
      query: () => ({ method: "delete", url: "auth/login" })
    }),
    me: builder.query<BaseResponse<{ id: number; email: string; login: string }>, void>({
      query: () => "auth/me"
    }),
    getCaptcha: builder.query<any, void>({
      query: () => ({
        url: "security/get-captcha-url",
        headers: { "Content-Type": "application/json" }
      }),
      invalidatesTags: ["Security"]
    })
  })
});

export const { useLoginMutation, useLogoutMutation, useMeQuery, useGetCaptchaQuery } = authApi;
