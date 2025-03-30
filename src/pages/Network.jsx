import Header from "../components/Header";
import Footer from "../components/Footer";
import React, {useState} from "react";
import SearchBar from '../components/Search'
import ItemBox from "../components/ItemBox"; 
import NetworkData from "../data/NetworkData";

const Network = () => {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = NetworkData.filter((job) => {
    const matchesCategory = category === "All" || job.category === category;
    const matchesSearch =
      searchTerm === "" ||
      job.tittle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="p-8">
        {/* Search Bar */}
        <div>
          <SearchBar 
            title="Telecom & Networking" 
            description="Explore cutting-edge internship opportunities in Telecommunications and Networking, gaining practical experience in network infrastructure, cybersecurity, and wireless communications."
            placement="items-center text-center"
            placeholder="Search company name or job title"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

        </div>

        <div className=" main-color text-2xl font-semibold font-quicksand pt-15 pb-5">
          <h1>Base on your Specialization</h1>
        </div>

        {/* Category Filters */}
        <div className="flex space-x-4 justify-start my-4 font-quicksand pb-10">
          {["All", "Telecom & NetWorking", "Cyber Security"].map((cat) => (
            <button 
              key={cat} 
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded ${category === cat ? 
                "bg-[#628ace] text-white font-medium shadow-[0px_2px_6px_rgba(0,0,0,0.3)]" : " text-[#606060] font-medium "
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Internship Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.length > 0 ? (
            filteredData.map((job, index) => (
              <ItemBox
                key={index}
                logo={job.logo}
                company={job.company}
                picture={job.picture}
                title={job.tittle}
                description={job.desciption}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">No internships found.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Network;