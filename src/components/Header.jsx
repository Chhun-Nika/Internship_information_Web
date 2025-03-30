import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header className="sticky top-0 bg-white text-white p-7 shadow-lg z-10 flex justify-center">
      <div className="container ml-10 mr-10 flex justify-between items-center">
        <h1 className="main-color font-madimi text-4xl font-normal">innerSphere</h1>
        <NavLink
          to="/"
          className="main-color font-madimi text-4xl font-normal"
          >internSphere</NavLink>
        <nav className="flex space-x-17 text-base font-quicksand font-semibold">
          <NavLink
            to="/" 
            exact
            className={({ isActive }) => 
              `${isActive ? 'main-color' : 'gray-color'} hover:text-yellow-500`
            }
          >HOME</NavLink>

          <NavLink
            to="/internship"
            className={({ isActive }) => 
              `${isActive ? 'main-color' : 'gray-color'} hover:text-yellow-500`
            }
          >INTERNSHIP</NavLink>

          <NavLink
            to="/about-us"
            className={({ isActive }) => 
              `${isActive ? 'main-color' : 'gray-color'} hover:text-yellow-500`
            }
          >ABOUT US</NavLink>

          <NavLink
            to="/contact-us"
            className={({ isActive }) => 
              `${isActive ? 'main-color' : 'gray-color'} hover:text-yellow-500`
            }
          >CONTACT US</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;