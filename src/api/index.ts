import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
  baseUrl: "https://jsonplaceholder.typicode.com",
});


const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({

    todos: builder.query({
      query: () => '/todos',
    }),

  })
});

export const {
  useTodosQuery,
} = apiSlice;
