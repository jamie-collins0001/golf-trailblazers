import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './components/layout';
import Home from './pages/Home';
import Service from './pages/Service';
import Package from './pages/Package';
import Who from './pages/Who';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="package" element={<Package />} />
          <Route path="who" element={<Who />} />
          <Route path="contact" element={<Contact />} />
          {/*// <Route path="*" element={<NotFound />} />*/}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
