import { Suspense } from "react";
import Loader from './Componentes/Loader/Loader'
import loadFormation from "./Loader/loadFormation";
import RootLayout from "./pages/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/AboutMe/HomePage";
import FormacaoCertificado from "./pages/FormacaoPage/FormacaoPage";
import CertificationPage from "./pages/CertificationPage/CertificationPage";
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
        element: (
          <Suspense fallback={<Loader />}>
            <FormacaoCertificado />
          </Suspense>
        ),
        loader: loadFormation
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