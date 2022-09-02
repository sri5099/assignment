// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org' }),
  endpoints: (builder) => ({
    // getNews: builder.query({
    //   query: (name) => `q/${name}`,
    // }),
    getNews: builder.query({
        query: (body) => {
          return {
            url: `/v2/everything?apiKey=c1e02e46e5aa42ed9ea69c26c78bc23e&q=keyword`,
            method: "GET",
            body: body,
            responseHandler: async (response) => {
                // console.log(response);
              const data = await response.json();
              const headers = response.headers;
              return { data, headers };
            },
          };
        }
       

  }),
}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNewsQuery } = newsApi

