import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Project from "./Pages/Project";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'projetos',
        element: <Projects />
      }, {
        path: 'projetos/:id',
        element: <Project />
      }
    ]
  }
])

export default router