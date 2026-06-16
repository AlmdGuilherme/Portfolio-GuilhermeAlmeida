import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { useEffect } from 'react';

export default function RootLayout() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <main>
      <header className="w-full min-h-[4rem] flex sticky top-0 left-0 z-50">
        <Navbar />
      </header>
      <Outlet />
      <footer>

      </footer>
    </main>
  )
}