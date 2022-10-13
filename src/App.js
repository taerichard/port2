import Header from "./components/work/Header";
import { Routes, Route, useRoutes } from "react-router-dom";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Work from "./pages/Work";
import Konbini from "./pages/Konbini";
import NorthCreek from "./pages/NorthCreek";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="konbini" element={<Konbini />} />
        <Route path="northcreek" element={<NorthCreek />} />
      </Routes>
    </div>
  );
}

// const App = () =>
//   useRoutes([

//     { path: "/konbini", element: <Konbini /> },
//     { path: "/northcreek", element: <NorthCreek /> },
//     { path: "/about", element: <About /> },
//     { path: "/contact", element: <Contact /> },
//     { path: "/", element: <Work /> },
//   ]);

export default App;
