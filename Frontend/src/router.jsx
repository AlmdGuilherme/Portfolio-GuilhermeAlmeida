import { Suspense } from "react";
import Loader from './Componentes/Loader/Loader'
import loadFormation from "./Loader/loadFormation";
import FormacaoAcademica from "./pages/FormacaoAcademica/FormacaoAcademica";
import RootLayout from "./pages/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/AboutMe/HomePage";


const router = createBrowserRouter([
  {
    path: '/Portfolio-GuilhermeAlmeida/',
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'formacao-academica',
        element: (
          <Suspense fallback={<Loader/>}>
            <FormacaoAcademica/>
          </Suspense>
        ),
        loader: loadFormation,
      }
    ]
  }
])

export default router