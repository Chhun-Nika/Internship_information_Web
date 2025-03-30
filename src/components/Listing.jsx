import { FaCaretRight } from "react-icons/fa6";

const Listing = ({ DataList }) => {
    return (
        <div className="container">
            <div className="flex flex-col">
                {DataList.map((list, index) => (
                    <div key={index} className="flex items-center gap-3 mb-3">
                        <FaCaretRight className="main-color text-xl" />
                        <p className="darkgray-color font-medium text-lg">
                            {list.split(" ").map((word, i) => {
                                const targetWords = ["Java", "Python", "JavaScript", "databases", "(OOP)", "API", "web", "technologies"];
                                return targetWords.includes(word) ? (
                                        <span key={i} className="red-color">{word} </span>
                                    ) : (
                                        <span key={i}>{word} </span>
                                    );
                            })}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Listing;