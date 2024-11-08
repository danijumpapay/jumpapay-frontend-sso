import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/plugins/redux/serviceApi";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery,
    endpoints: (builder) => ({
        authLoginWithUser: builder.mutation<any, BodyParam<AuthLoginWithUserForm>>({
            query: ({body}) => ({
                url: `/login/account`,
                method: "POST",
                body
            })
        }),
        signupWithUser: builder.mutation<any, BodyParam<SignupWithUser>>({
            query: ({body}) => ({
                url: "/register/register",
                method: "POST",
                body
            })
        })
    })
})


export const {useAuthLoginWithUserMutation, useSignupWithUserMutation} = authApi;