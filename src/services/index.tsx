
import {
    BaseQueryFn,
    FetchArgs,
    createApi,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

// import { setTwoStep } from '../store/twostep';
// import { setCpf, setCredentials, setSignedOut } from "../store/auth";

// import type { ApiResponse } from "../models/Common";
import type { RootState } from '../store';
import { setSignOut } from '../store/Auth';

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.API_URL,
    prepareHeaders: (headers: Headers, { getState }) => {
        const { token } = (getState() as RootState).auth;

        headers.set("Content-type", "application/json");
        headers.set('Authorization', `${process.env.API_TOKEN_BASE_TYPE} ${process.env.API_TOKEN_BASE}`);

        if (token != "") {
            headers.set('Authorization', token);
        }

        return headers;
    },
});

const baseQueryWithInterceptor: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const response = await baseQuery(args, api, extraOptions);
    // const data = response.data as ApiResponse<any>;
    const data: any = response.data;
    const error = response.error as FetchBaseQueryError;

    if (error && [401, 403].includes(error.status as number)) {
        const { isSign } = (api.getState() as RootState).auth;
        if (isSign) {
            api.dispatch(setSignOut());
        }
    }
    if (data && data.status == 302) {
        const { id: operacaoId, opcoes, key, cpf } = data.result;
        const { password } = (args as FetchArgs).body;
        // api.dispatch(
        //     setTwoStep({
        //         operacaoId,
        //         opcoes,
        //         key
        //     })
        // );
        if (cpf) {
            if (password) {
                // api.dispatch(
                //     setCredentials({
                //         cpf,
                //         password
                //     })
                // );
            } else {
                // api.dispatch(
                //     setCpf(cpf)
                // );
            }
        }
    }
    return response;
};

export const api = createApi({
    baseQuery: baseQueryWithInterceptor,
    endpoints: () => ({}),
    refetchOnReconnect: true
});