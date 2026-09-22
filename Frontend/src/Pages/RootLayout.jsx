import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { useEffect } from 'react';

export default function RootLayout() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <main className="relative min-h-screen">
      <div 
        id="page-wipe-curtain" 
        className="fixed top-0 left-0 w-full h-full z-[9999] translate-y-full"
      />
        <Navbar />
      <Outlet />
      <footer>

      </footer>
    </main>
  )
}