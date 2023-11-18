import './App.css'
import queryClient from "./services/queryClient.ts";
import {QueryClientProvider} from "react-query";
import {ThemeProvider} from "@material-tailwind/react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {MarketInsights} from "./pages/MarketInsights.tsx";

const theme = {
  navbar: {
    styles: {
      base: {
        navbar: {
          blurred: {
            borderWidth: '',
          },
        },
      },
    },
  },
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/insights/",
    element:<MarketInsights/>
  }
])

function App() {

  return <>
    <ThemeProvider value={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </>

}

export default App
