import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type dataType = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export const ProductsApi = createApi({
  reducerPath: "ProductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  tagTypes: ["ProductsApi"],
  endpoints: (builder) => ({
    FetchAllProducts: builder.query<dataType[], void>({
      query: () => "/products",
      providesTags: ["ProductsApi"]
    })
  })
})