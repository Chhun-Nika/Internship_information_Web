

const Offers = ({ OfferData }) => {
    return (
        <div className="container w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {OfferData.map((offer, index) => (
                    <div key={index} className="flex flex-col items-center gap-5">
                        <div className="flex flex-col items-center justify-center gap-3">
                            <div className="h-30 flex items-center">
                                <img className="w-20" src={offer.logo} alt={offer.title} />
                            </div>
                            <h3 className="text-[#404040] text-lg font-semibold">{offer.title}</h3>
                        </div>
                        
                        <p className="text-[#A0A0A0] text-center text-sm max-w-sm">{offer.description}</p>
                    </div>
                ))}

            </div>

        </div>
    );
}

export default Offers;