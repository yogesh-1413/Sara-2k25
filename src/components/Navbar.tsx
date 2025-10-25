import { FC, useState } from "react";
import { Menu, X, UserCircle } from "lucide-react";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">

        <div className="text-2xl font-bold tracking-wide">Sara</div>

        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-gray-300 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Feature 1
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Feature 2
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Feature 3
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hover:opacity-80 transition">
            <UserCircle size={28} />
          </button>

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 text-sm font-medium">
          <a
            href="#"
            className="hover:text-gray-300 transition-colors border-b border-gray-700 pb-2"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition-colors border-b border-gray-700 pb-2"
          >
            Feature 1
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition-colors border-b border-gray-700 pb-2"
          >
            Feature 2
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition-colors border-b border-gray-700 pb-2"
          >
            Feature 3
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
