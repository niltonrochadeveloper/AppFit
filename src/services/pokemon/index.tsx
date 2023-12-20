import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints


import { api } from '../index';
// import type {
//     AuthWithPasswordPayload,
//     SuccessfulLogin,
//     ResetPasswordGetTokenPayload,
//     ResetPasswordPayload
// } from '../../models/Auth';
// import { storeItem } from '../../helpers/util/asyncStorage';
// import { setToken, setSignedInStatusChange } from '../../store/auth';
// import type { ApiResponse } from '../../models/Common';

export const pokemonApi = api.injectEndpoints({
    endpoints: build => ({
        getPokemonByName: build.query<any, string>({
            query: (name) => ({
                url: `https://pokeapi.co/api/v2/pokemon/${name}`,
                method: 'GET',
            }),
            onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
                const { data, meta } = await queryFulfilled;
                if (data.result && data.status == 200) {
                   
                }
            }
        }),
        getPokemons: build.query<any, string>({
            query: (name) => ({
                url: `https://pokeapi.co/api/v2`,
                method: 'GET',
            }),
            onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
                const { data, meta } = await queryFulfilled;
                if (data.result && data.status == 200) {
                   
                }
            }
        }),
    }),
    overrideExisting: false
});

export const { useGetPokemonByNameQuery, useLazyGetPokemonByNameQuery, useLazyGetPokemonsQuery } = pokemonApi