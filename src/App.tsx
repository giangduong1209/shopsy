import { useEffect } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts";
import Banner from "./components/Banner";
import Subscrise from "./components/Subscrise";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white duration-200">
      <NavBar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscrise />
      <Products />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
