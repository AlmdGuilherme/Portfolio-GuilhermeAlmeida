import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import Portfolio from "./Pages/Portfolio";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Portfolio/>,
      }
    ]
  }
])

export default router