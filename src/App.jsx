import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Insights from "./pages/Insights";
import SingleInsight from "./pages/SingleInsight";
import Events from "./pages/Events";
import Reports from "./pages/Reports";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";
import About from "./pages/About";
import Team from "./pages/Team";


import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Runs whenever the pathname changes

  return null;
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<SingleInsight />} />
          <Route path="/events" element={<Events />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
