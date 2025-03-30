import Header from "../components/Header";
import Footer from "../components/Footer";
import smartImg from "../assets/smart.png";
import Listing from "../components/Listing";
import JobDescription from "../data/JobDescription";
import JobRequirement from "../data/JobRequirement";


const SoftwareDeveloper = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="font-quicksand mb-40">
        <div className="container max-w-full mt-15 h-60">
            <div className="bg-[#C0C0C024] h-full flex justify-between items-center p-23">
                <h1 className="main-color text-[40px] font-semibold"><span className="red-color">Software</span> Developer</h1>
                <div className="flex items-center gap-8">
                    <img className="w-50" src={smartImg} alt="Smart logo" />
                    <p className="text-2xl text-[#626262] font-semibold">Smart Anxiata</p>
                </div>
            </div>
        </div>

        {/* job purpose */}
        <div className="p-8 pt-15 pl-25 ">

            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-10">
                    <h2 className="main-color text-3xl font-semibold">Job Purpose</h2>
                    <p className="darkgray-color font-medium text-lg leading-relaxed w-6/7">
                        The Software Developer Intern will work closely with the Technology & Digital Innovation team to design, 
                        develop, and maintain software applications that support Smart Axiata’s digital services. This role provides 
                        an opportunity to work with experienced professionals on real-world telecom projects, gaining hands-on 
                        experience in backend development, cloud computing, and mobile applications.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="https://maps.app.goo.gl/NxQFume764vYLhNT7" target="_blank">
                        <button 
                            className="bg-[#133E87] hover:bg-[#2E6BB7] transition-colors duration-300 ease-in-out text-white font-semibold hover:cursor-pointer w-35 h-13 rounded-lg"
                        >Location</button>
                    </a>
                    <a href="https://www.smart.com.kh/careers/1270/product-development-intern?trid=2d92f286-613b-4daf-9dfa-6340ffbecf73" target="_blank">
                        <button 
                            className="bg-[#9B1B30E6] hover:bg-[#A94C5FE6] transition-colors duration-300 ease-in-out text-white font-semibold hover:cursor-pointer w-35 h-13 rounded-lg"
                        >Apply now</button>
                    </a>
                </div>
            </div>

            {/* job description */}
            <div className="mt-20">
                <h2 className="main-color text-3xl font-semibold mb-10">Job Description</h2>
                <p className="text-lg darkgray-color font-medium mb-6">As a Software Developer Intern at Smart Axiata, you will be responsible for : </p>
                <Listing DataList={JobDescription} />
            </div>

            {/* job requirements */}
            <div className="mt-20">
                <h2 className="main-color text-3xl font-semibold mb-10">Job Requirements</h2>
                <p className="text-lg darkgray-color font-medium mb-6"><span className="red-color">Education:</span> Currently pursuing a Bachelor’s degree in Computer Science, Software Engineering, or a related field. </p>
                <Listing DataList={JobRequirement} />
            </div>

            {/* compnany information */}
            <div className="container mt-20">
                <a 
                    href="https://www.smart.com.kh/"
                    target="_blank">
                    <div className="bg-white shadow-[0_4px_10px_rgba(0,0,0,0.20)] flex flex-col w-250 rounded-lg">
                        <div className="flex items-center h-full p-6 pl-10 pr-10">
                            <h2 className="darkgray-color font-semibold">About the company</h2>
                        </div>
                        <hr className="border-t-2 border-gray-200 shadow-md" />
                        <div className="pr-10 pb-10">
                            <div className="flex items-center pl-7 gap-4">
                                <img className="w-40" src={smartImg} alt="Smart logo" />
                                <div className="flex flex-col gap-1 darkgray-color">
                                    <h3 className="text-2xl font-semibold">Smart Anxiata</h3>
                                    <p className="text-lg font-medium">29,977 Followers</p>
                                </div>
                            </div>
                            <p className="pl-10 text-[#ABABAB] font-medium w-[900px]">
                                Smart Axiata Co., Ltd., Cambodia’s leading mobile telecommunications operator,
                                currently serves 8 million subscribers under the ‘Smart’ brand. Smart Axiata is part of
                                Axiata Group Berhad, one of Asia’s largest telecommunications groups.
                            </p>
                        </div>
                        <hr className="border-t-2 border-gray-200 shadow-md" />
                        <div className="flex items-center justify-center h-full p-6 pl-10 pr-10">
                            <h2 className="darkgray-color font-semibold">Show more</h2>
                        </div>
                    </div>
                </a>
            </div>

        </div>


        

      </main>
      <Footer />
    </div>
  );
};

export default SoftwareDeveloper;