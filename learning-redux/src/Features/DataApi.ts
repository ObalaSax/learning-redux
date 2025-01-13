import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BaseUrl = "https://dummyjson.com";

export const DataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
  }),
});

export const { useGetAllProductsQuery } = DataApi;
