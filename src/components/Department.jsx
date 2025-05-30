import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Department = ({ DepartmentData }) => {
    return (
        <div className="container mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {DepartmentData.map((department, index) => (
              <div key={index} className="bg-[#E8F0FF] p-8 rounded-lg shadow-lg pb-11">
                <div className="text-start mb-4">
                  <div className="text-3xl mb-2 text-[#626262]">{department.icon}</div>
                  <h3 className="text-2xl text-[#4A74C9] font-semibold mt-5 mb-7">{department.title}</h3>
                </div>
                <p className="leading-normal text-sm text-[#939393] font-medium h-22">{department.description}</p>
                <Link 
                    to={department.link} 
                    className="w-1/2 rounded-full bg-[#133E87] hover:bg-[#2E6BB7] transition-colors duration-300 ease-in-out text-base text-white font-medium flex items-center p-4 pl-6 pr-6 gap-3 mt-10">
                    Learn more <FaArrowRight />
                </Link>
                
              </div>
            ))}
          </div>
        </div>
    );
}

export default Department;