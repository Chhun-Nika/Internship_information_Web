import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/Search";
import Department from "../components/Department";
import DepartmentData from "../data/DepartmentData";
import Company from "../components/Company";
import CompanyData from "../data/CompanyData";

const Internship = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="p-8 font-quicksand pt-15 pl-25 mb-40">

        {/* search */}
        <div>
      
          <SearchBar 
            title="Find great career opportunities" 
            description="Explore internships that match your passion."
            placement="items-start"
            placeholder="search company name or job tittle" 
          />

        </div>

        {/* department */}
        <div className="mt-15 font-quicksand mb-20">
          <h2 className="main-color text-2xl font-medium mb-12">Browse jobs by your department</h2>
          <Department DepartmentData={DepartmentData}/>
        </div>
        

        {/* companies */}
        <div className="mt-30 font-quicksand">
          <h2 className="main-color text-2xl font-medium mb-12">Popular Companies</h2>
          <Company CompanyData={CompanyData}/>
          <Company CompanyData={CompanyData}/>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Internship;