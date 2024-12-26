import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//My Base URL
const myURL = "https://dummyjson.com/";

//Data I expect from the Api
export interface ProductsData {
  id: number;
  title: string;
  price: number;
}

export interface fetchedProducts {
  products: ProductsData[];
}

const initialState: ProductsData = {
  id: 0,
  title: "Noma Sana",
  price: 0,
};

export const productsApi = createApi({
  reducerPath: "producerApi",
  baseQuery: fetchBaseQuery({ baseUrl: myURL }),
  endpoints: (builder) => ({
    //Ensure you add the <<ProductsData[], void>> part
    getAllProducts: builder.query<ProductsData[], void>({
      query: () => "products",
    }),
  }),
});

//================================
export const productSlices = createSlice({
  name: "productSlices",
  initialState,
  reducers: {
    addProductCart: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { addProductCart } = productSlices.actions;
export default productSlices.reducer;
export const { useGetAllProductsQuery } = productsApi;
