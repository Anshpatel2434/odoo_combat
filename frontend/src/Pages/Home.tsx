import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import HomeCards from "../Components/HomeCards";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      <Navbar />
      <Hero />
      <HomeCards />
      <Footer />
    </div>
  );
};

export default Home;
