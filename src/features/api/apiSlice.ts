import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3500",
});


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({

    data: builder.query({
      query: ( id ) => '/data',
    }),

  })
});

export const {
  useDataQuery,
} = apiSlice;
