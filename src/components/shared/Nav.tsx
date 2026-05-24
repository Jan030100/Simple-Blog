import { FaUserCircle } from "react-icons/fa";
import { SearchInput } from "../shared/FormComponents";

const Nav: React.FC = () => {
  return (
    <nav className="border-b border-gray-200 bg-white p-4 sticky top-0 z-40">
      <div className="flex justify-between items-center gap-4 max-w-full mx-auto px-4">
        <h1 className="text-2xl font-bold text-black hidden sm:block">Blog</h1>

        <div className="flex-1 max-w-md">
          <SearchInput
            placeholder="Search blogs..."
            onSearchChange={()=>{}}
          />
        </div>

        <button
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          title="Profile"
        >
          <FaUserCircle className="text-2xl text-gray-600 hover:text-gray-800" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
