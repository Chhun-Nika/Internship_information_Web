

const Members = ({ MembersData }) => {
    return (
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 p-5 ml-10 mr-10">
                {MembersData.map((member, index) => (
                    <div key={index} className="bg-[#F0F0F0] flex rounded-xl gap-4">
                        {/* left side for img */}
                        <div className="flex items-center p-4">
                            <img className="w-50 rounded-xl" src={member.img} alt={member.name} />
                        </div>

                        {/* right side for name and description */}
                        <div className="w-1/2 flex flex-col justify-center items-start gap-4 pt-4 pb-4">
                            <h3 className="text-2xl main-color font-semibold">{member.name}</h3>
                            <p className="text-[#60606099] text-xs leading-relaxed">{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Members;