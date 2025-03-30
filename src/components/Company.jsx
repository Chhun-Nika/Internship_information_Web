
const Company = ({ CompanyData }) => {
    return (
        <div className="container mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {CompanyData.map((company, index)=> (
                    <a key={index} 
                        href={company.link}
                        target="_blank" 
                    >
                        <div className="flex border-2 border-[#C0C0C0] rounded-2xl p-1 gap-5">
                            <div className="flex rounded-xl items-center w-1/2 bg-[#F0F0F0]">
                                <img className="w-30 h-auto" src={company.logo} alt={company.title} />
                            </div>
                            <div className="flex flex-col justify-center w-full pr-1 pl-2 gap-2">
                                <h3 className="text-lg text-[#626262] font-semibold">{company.title}</h3>
                                <p className="leading-normal text-[#ABABAB] text-xs font-medium">{company.description}</p>
                            </div>                       
                        </div>
                    </a>                
                ))}
            </div>

        </div>
    );
}

export default Company;