import RootLayout from "./pages/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormacaoCertificado from "./pages/FormacaoPage";
import CertificationPage from "./pages/CertificationPage";
import Skills from "./pages/Skills";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'formacao-academica',
        element: <FormacaoCertificado />,
      },
      {
        path: 'habilidades',
        element: <Skills />
      }
    ]
  },
  {
    path: 'formacao-academica/certificado/:certId',
    element: <CertificationPage />
  }
])

export default router