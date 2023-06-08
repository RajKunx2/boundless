import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Help from "../components/Help";
import HomePage from "../components/HomePage";
import Features from "../components/Features";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      {/* <Hero />
      <Help /> */}
      <Features />
      <Footer />
    </div>
  );
}
