import { FaSearch } from "react-icons/fa";
import type { ReactNode } from "react";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  icon,
  error,
  className = "",
  ...props
}) => (
  <div className="w-full">
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        className={`w-full px-4 py-2 ${
          icon ? "pl-10" : ""
        } border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-ring ${
          error ? "border-red-500" : ""
        } ${className}`}
        {...props}
      />
    </div>
    {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
  </div>
);

interface SearchInputProps extends Omit<InputProps, "type"> {
  onSearchChange: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  onSearchChange,
  ...props
}) => (
  <Input
    type="text"
    icon={<FaSearch />}
    onChange={(e) => onSearchChange(e.target.value)}
    {...props}
  />
);
