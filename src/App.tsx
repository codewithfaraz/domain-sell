import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Update these imports to match your exact file names and paths
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import SellDomain from "./components/pages/SellDomain";
import Contact from "./components/pages/Contact";
import DomainsManagement from "./components/pages/DomainsManagement";
import FAQ from "./components/pages/FAQ";
import Terms from "./components/pages/Terms";
import Privacy from "./components/pages/Privacy";
import BuyDomain from "./components/pages/BuyDomain";
import Test from "./components/Test";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy-domain" element={<BuyDomain />} />
            <Route path="/sell-domain" element={<SellDomain />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/domains" element={<DomainsManagement />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
          <Test />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
