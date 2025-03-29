import { FaLaptopCode } from "react-icons/fa6";
import { IoIosCellular } from "react-icons/io";
import { FaBusinessTime } from "react-icons/fa6";

const DepartmentData = [
    {
        icon: <FaLaptopCode />,
        title: 'Computer Science',
        description: 'The Computer Science program emphasizes practical skills built on  theoretical foundations. Every course is designed to give students  hands-on practices with up-to-date tools and frameworks',
        link: '/internship/computer-science'
    },
    {
        icon:  <IoIosCellular />,
        title: "Telecome & Networking",
        description: 'The bachelor’s program in Telecoms and Networking is designed to provide students with a firmly-grounded, practical, and multidisciplinary training with effective learning resources.',
        link: '/internship/telecom-networking'
    },
    {
        icon: <FaBusinessTime />,
        title: 'Digital Business',
        description: 'Our Bachelor of E-commerce is a 3.5-year undergraduate program designed to prepare students for the global workforce, with a focus on emerging markets.',
        link: '/internship/digital-business'
    }  
]

export default DepartmentData;