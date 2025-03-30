import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState } from "react";
import SearchBar from "../components/Search";
import ItemBox from "../components/ItemBox"; 
import BusinessData from "../data/BusinessData";

const Business = () => {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

 
  const filteredData = (BusinessData || []).filter((job) => {
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
            title="Digital Business" 
            description="Unlock diverse internship opportunities in Digital Business, developing expertise in e-commerce, digital marketing, fintech, and data-driven business strategies."
            placement="items-center text-center"
            placeholder="Search company name or job title"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="main-color text-2xl font-semibold font-quicksand pt-15 pb-5">
          <h1>Based on your Specialization</h1>
        </div>

        <div className="flex space-x-4 justify-start my-4 font-quicksand pb-10">
            <button className="px-4 py-2 rounded bg-[#628ace] text-white font-medium shadow-[0px_2px_6px_rgba(0,0,0,0.3)]" > 
              e-commerce
            </button>
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

export default Business;
