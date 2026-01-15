import RootLayout from "./pages/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CertificationPage from "./pages/subpages/CertificationPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  },
  {
    path: 'formacao-academica/certificado/:certId',
    element: <CertificationPage />
  }
])

export default router