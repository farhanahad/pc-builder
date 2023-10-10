import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pc-builder-server-gray.vercel.app/api/v1",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (categoryName) => `/products?category=${categoryName}`,
    }),
  }),
});

export const { useGetProductsQuery } = api;
