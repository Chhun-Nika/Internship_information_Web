import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/Search";
import Department from "../components/Department";
import DepartmentData from "../data/DepartmentData";
const Internship = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="p-8 font-quicksand pt-15 pl-25 ">

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
        <div className="font-quicksand">
          <h2 className="main-color text-2xl font-medium">Browse jobs by your department</h2>
          <Department DepartmentData={DepartmentData}  />
        </div>
        

        {/* companies */}
        <div>

        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Internship;