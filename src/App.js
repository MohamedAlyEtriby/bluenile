import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import About from "./pages/About";
import Partitions from "./pages/Partitions";
import Login from "./pages/Login";
import PartitionDetails from "./components/PartitionDetails";
import Events from "./pages/Events";
import EventDetails from "./components/EventDetails";
import toast, { Toaster } from "react-hot-toast";
import ContactPage from "./pages/ContactPage";
import "./family.css";
import { useState } from "react";
function App() {
  const toastOptions = {
    className: "custom-toast-container",
    duration: 3000,
  };
  const myPath = useLocation();
  const [count, setcount] = useState(
    `${
      myPath.pathname === "/"
        ? "Home"
        : myPath.pathname.slice(1, myPath.pathname.length)
    }`
  );
  return (
    <div>
      <Layout count={count} setcount={setcount}>
        <Toaster gutter={6} toastOptions={toastOptions} />
        <Routes>
          <Route
            path="/"
            element={<Home count={count} setcount={setcount} />}
          />
          <Route path="/About" element={<About />} />
          <Route
            path="/Partitions"
            element={<Partitions count={count} setcount={setcount} />}
          />
          <Route path="/Account" element={<Login />} />
          <Route
            path="/Events"
            element={<Events count={count} setcount={setcount} />}
          />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Events/:id" element={<EventDetails count={count} setcount={setcount}/>} />
          <Route
            path="/Partitions/:id"
            element={<PartitionDetails count={count} setcount={setcount} />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
