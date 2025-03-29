import { FaSearch } from "react-icons/fa";

const Search = ({ title, description, placement, placeholder }) => {
    return (
        
        <div className={`relative flex flex-col ${placement} space-y-4 w-full`}>
            <h2 className="lightblue-color text-3xl font-semibold">{title}</h2>
            <p className="darkgray-color font-medium mb-10"> 
                {description}
            </p>
            <div className="relative w-1/2 mb-4 h-12">
                <input
                    type="text"
                    placeholder={placeholder}
                    className="border-2 border-[#1D4C9D] p-2 rounded-full w-full mb-4 pl-5 pr-10 h-12"
                />
                <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#1D4C9D]" />
            </div>
            
        </div>
    );
}


export default Search;