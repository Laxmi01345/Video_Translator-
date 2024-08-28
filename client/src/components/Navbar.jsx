import logo from "../images/logo.png";

function Navbar() {
  return (
    <div className="bg-gradient-to-r bg-[#fdfff2] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-36 h-14" />
        
        <ul className="flex gap-10 font-semibold text-xl">
          <li className="cursor-pointer hover:text-orange-700 transition-colors duration-300 hover:underline underline-offset-8 decoration-sky-800 decoration-4">
            Home
          </li>
          <li className="cursor-pointer hover:text-orange-700 transition-colors duration-300 hover:underline underline-offset-8 decoration-sky-800 decoration-4">
            Our Services
          </li>
          <li className="cursor-pointer hover:text-orange-700 transition-colors duration-300 hover:underline underline-offset-8 decoration-sky-800 decoration-4">
            Translate
          </li>
        </ul>
        
        <ul className="flex gap-4">
          <li className="cursor-pointer bg-purple-800 text-white rounded-md px-4 py-2 hover:bg-violet-800 transition-transform duration-300 transform hover:scale-105">
            Login
          </li>
          <li className="cursor-pointer bg-purple-800 text-white rounded-md px-4 py-2 hover:bg-violet-800 transition-transform duration-300 transform hover:scale-105">
            Sign Up
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
