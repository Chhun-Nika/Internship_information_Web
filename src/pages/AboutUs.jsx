import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">About us page</h1>
        <p>Your journey to the perfect internship starts here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;