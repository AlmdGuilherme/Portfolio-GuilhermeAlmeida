import AboutMe from "./pages/AboutMe/AbouteMe";
import FormacaoAcademica from "./pages/FormacaoAcademica/FormacaoAcademica";
import RootLayout from "./pages/RootLayout";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: '/Portfolio-GuilhermeAlmeida/',
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <AboutMe/>
      },
      {
        path:'formacao-academica',
        element: <FormacaoAcademica/>
      }
    ]
  }
])

export default router