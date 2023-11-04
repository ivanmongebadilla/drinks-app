import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [type, setType] = useState(null)

  const searchType = (type) => {
    setType(type)
  }

  const router = createBrowserRouter([
    { path: '/', element: <MainPage searchTypeFunc={searchType}/> },
    { path: '/search', element: <SearchPage type={type}/> },
  ])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  );
}

export default App;
