import Header from "../components/Header";
import Footer from "../components/Footer";
import img from "../assets/homePic.png";
import { Link } from 'react-router-dom';
import Offers from "../components/Offers";
import OfferData from "../data/OfferData";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="ml-15 mr-15 p-8 font-quicksand mb-40">
        
        <div className="flex mt-5 mb-6 gap-12">
          {/* left side */}
          <div className="flex flex-col justify-center gap-10 w-2/3 pr-10 mr-8">
            <p className="text-[#A0A0A0] text-base">With us you</p>
            <h1 className="main-color leading-relaxed text-4xl font-semibold w-160">
              Step into your <span className="red-color">future</span> with the right internship, build skills and unlock your dream career.
            </h1>
            <p className="leading-relaxed text-[#A0A0A0] text-base w-170">
              Discover internship opportunities, explore different industries, and find valuable resources to support
              your career goals. Your path to professional success starts here, with the guidance to make every step
              count in securing the right internship.
            </p>
            <Link
              to="/internship"
              className="w-40 rounded-full bg-[#133E87] hover:bg-[#2E6BB7] transition-colors duration-300 ease-in-out text-base text-white font-semibold flex items-center justify-center p-4 pl-6 pr-6 "
            >Explore now</Link>
          </div>

          {/* right side */}
          <div >
            <img className="w-120" src={img} alt="A welcoming image of the homepage" />
          </div>
        </div>
        <div className="p-0 m-0 flex flex-col items-center mt-50">
          <div className="flex flex-col items-center gap-7 mb-20">
            <h2 className="main-color text-3xl font-semibold">Our offers</h2>
            <p className="text-[#A0A0A0] max-w-2xl text-center">
              We provide comprehensive information about internships, industries, and career resources, 
              helping you make informed decisions about your professional journey
            </p>
          </div>
          <div className="w-full">
            <Offers OfferData={OfferData}  />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;