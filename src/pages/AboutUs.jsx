import Header from "../components/Header";
import Footer from "../components/Footer";
import img from "../assets/aboutUs.svg";
import Members from "../components/Members";
import MembersData from "../data/MembersData"

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="ml-15 mr-15 p-8 font-quicksand mb-40">

        <div>
          {/* left */}
          <div className="flex justify-between items-center">
            <div className="w-1/2 flex flex-col gap-8">
              <h1 className="main-color text-4xl font-semibold">About <span className="red-color">InterSphere</span></h1>
              <p className="text-[#606060] font-medium leading-relaxed">
                Welcome to InternSphere, your go-to platform for discovering internship opportunities and resources
                that will guide you through your career journey. Our mission is to empower students by providing accurate
                and up-to-date information about available internships, application processes, and industry insights.
                We are committed to helping you take the next step in your career and achieve your professional goals.
                With a team of passionate experts, InternSphere ensures you have access to everything you need for a successful future.
                Join us and start your internship journey with confidence.
              </p>
            </div>
            <img className="w-130" src={img} alt="A welcoming image of the aboutUs page" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 mt-30">
          <h2 className="main-color text-3xl font-semibold">Our <span className="red-color">Visions</span></h2>
          <p className="text-[#606060] text-center font-medium w-[1040px] ">
            At InternSphere, our vision is to become the leading platform for students seeking 
            internship opportunities and career resources. We aim to bridge the gap between students and 
            professional success by providing easy access to internship listings, industry insights, and application 
            guidance. Our goal is to inspire and support students in gaining valuable hands-on experience, fostering a 
            community where learning, growth, and career opportunities are within reach for all.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10 mt-30">
        <h2 className="main-color text-3xl font-semibold">Why choose us?</h2>
          <p className="text-[#606060] text-center font-medium w-[1040px] ">
            Choosing InternSphere means choosing a trusted partner in your career journey.
            We offer comprehensive, up-to-date information on internship opportunities, application processes, 
            and industry insights, all in one place. Our platform is designed to make your search for professional 
            success easier and more efficient, with user-friendly navigation and reliable resources. With a dedicated 
            team of experts committed to helping you achieve your goals, InternSphere is your ideal guide to unlocking a 
            world of career possibilities.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10 mt-30">
          <h2 className="main-color text-3xl font-semibold">InternSphere <span className="red-color">Members</span></h2>
          <div >
            <Members MembersData={MembersData} />
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;