import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Project from "./Pages/Project";
import { PageTransition } from "./Components/Page-Transition";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <PageTransition>
            <Home />
          </PageTransition>
        )
      },
      {
        path: 'projetos',
        element: (
          <PageTransition>
            <Projects />
          </PageTransition>
        )
      }, 
      {
        path: 'projetos/:id',
        element: (
          <PageTransition>
            <Project />
          </PageTransition>
        )
      }
    ]
  }
])

export default router