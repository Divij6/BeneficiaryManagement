import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  // Check if the current path starts with "/admin"
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
