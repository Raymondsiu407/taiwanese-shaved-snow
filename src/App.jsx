import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;