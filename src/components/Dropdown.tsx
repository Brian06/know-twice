import { useState, useRef, useEffect } from 'preact/hooks';

export interface Option {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: Option[];
  defaultValue?: string;
  id: string;
  className?: string;
  onChange?: (value: string) => void;
}
// TODO cuando se selecciona otro dropdown, el dropdown anterior no se cierra
export default function Dropdown({
  options,
  defaultValue = 'all',
  id,
  className = '',
  onChange,
}: DropdownProps) {
  const defaultOption = options.find(opt => opt.value === defaultValue) || options[0];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleToggle = (e: Event) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value);
    }
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`} data-dropdown={id}>
      <button
        type="button"
        className="w-full bg-white p-3 rounded-md border border-gray-300 flex items-center justify-between hover:border-apricot focus:outline-none focus:ring-2 focus:ring-apricot transition-colors cursor-pointer"
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{selectedOption.label}</span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto"
          role="listbox"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className="w-full text-left px-4 py-2 hover:bg-apricot transition-colors cursor-pointer border-b border-gray-100 last:border-b-0"
              onClick={() => handleOptionClick(option)}
              role="option"
              aria-selected={option.value === selectedOption.value}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

