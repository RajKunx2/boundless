import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Help from "../components/Help";
import HomePage from "../components/HomePage";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Pad from "../components/Pad"
import Test from "../components/Test"
export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <HomePage />
      {/* <Hero />
      <Help /> */}
      <Features />
      <Pad />
      <Test />
      <Footer />
    </div>
  );
}
