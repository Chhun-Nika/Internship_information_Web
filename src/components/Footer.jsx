
import facebookImg from '../assets/facebook.png';
import telegramImg from '../assets/telegram.png';
import instagramImg from '../assets/instagram.png';
import locationImg from '../assets/location.png';
import arrobaImg from '../assets/arroba.png';
import phoneImg from '../assets/phone.png';
const Footer = () => {
    return (
        <footer className="bg-[#C0C0C033] text-white p-8 mt-auto">
            <div className="container mx-auto flex justify-between items-start gap-10">
                {/* Left Side */}
                <div className="w-full sm:w-1/2 flex flex-col space-y-4">
                    <h1 className="main-color font-madimi text-3xl font-normal pb-2">innerSphere</h1>
                    <p className="text-sm text-[#A0A0A0] max-w-prose mx-auto sm:mx-0 text-left mb-8 leading-6">
                        This platform is designed to help students navigate their career journey. 
                        Here, you’ll find detailed information about available internships, 
                        explore various industries, and receive guidance on the application process. 
                        Whether you’re looking for internship opportunities or need help with your application, 
                        this website is your trusted companion to achieving your professional goals.
                    </p>
                    <div className="flex gap-4 mb-6">
                        <img src={facebookImg} alt="Facebook" className="w-8 h-8"/>
                        <img src={telegramImg} alt="Telegram" className="w-8 h-8"/>
                        <img src={instagramImg} alt="Instagram" className="w-8 h-8"/>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full sm:w-1/2 flex flex-col pl-10">
                    <h3 className="main-color font-madimi text-xl font-light mt-1 mb-7">Find us</h3>
                    <div className="text-[#A0A0A0] text-sm space-y-6">
                        <div className="flex items-center gap-4">
                            <img src={locationImg} alt="Location" className="w-8 h-8" />
                            <p className="leading-6">3rd floor, Exchange square, Preah Moha Ksatreiyani Kossamak Ave (106), Phnom Penh, Cambodia</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src={arrobaImg} alt="Email" className="w-7 h-7" />
                            <p>internsphere@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src={phoneImg} alt="Phone" className="w-7 h-7" />
                            <p>(855) 12 678 890</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;