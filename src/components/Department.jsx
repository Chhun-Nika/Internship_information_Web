import { FaArrowRight } from "react-icons/fa";

const Department = ({ DepartmentData }) => {
    return (
        <div className="container mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DepartmentData.map((department, index) => (
              <div key={index} className="bg-[#E8F0FF] p-8 rounded-lg shadow-lg">
                <div className="text-start mb-4">
                  <div className="text-3xl mb-2 text-[#626262]">{department.icon}</div>
                  <h3 className="text-2xl text-[#4A74C9] font-semibold mt-5 mb-7">{department.title}</h3>
                </div>
                <p className="text-sm text-[#939393] font-medium">{department.description}</p>
                {/* <button 
                    className="rounded-full bg-[#133E87] text-white font-medium flex items-center p-4 pl-6 pr-6 gap-4 mt-10"
                >Learn more <FaArrowRight /></button> */}
                {/* <Link to={department.link} className="rounded-full bg-[#133E87] text-white font-medium flex items-center p-4 pl-6 pr-6 gap-4 mt-10">
                    Learn more <FaArrowRight />
                </Link> */}
                
              </div>
            ))}
          </div>
        </div>
    );
}

export default Department;