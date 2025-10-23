import { useState, useRef, useEffect } from "preact/hooks";

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

export default function Dropdown({
  options,
  defaultValue = "all",
  id,
  className = "",
  onChange,
}: DropdownProps) {
  const defaultOption =
    options.find((opt) => opt.value === defaultValue) || options[0];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleOtherDropdownOpen = (event: CustomEvent) => {
      if (event.detail.dropdownId !== id) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener(
      "dropdown-opened",
      handleOtherDropdownOpen as EventListener,
    );

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener(
        "dropdown-opened",
        handleOtherDropdownOpen as EventListener,
      );
    };
  }, [id]);

  const handleToggle = (e: Event) => {
    e.stopPropagation();
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);

    if (newIsOpen) {
      const event = new CustomEvent("dropdown-opened", {
        detail: { dropdownId: id },
      });
      document.dispatchEvent(event);
    }
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative ${className}`}
      data-dropdown={id}
    >
      <button
        type="button"
        className="hover:border-apricot focus:ring-apricot flex w-full cursor-pointer items-center justify-between rounded-md border border-gray-300 bg-white p-3 transition-colors focus:ring-2 focus:outline-none"
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{selectedOption.label}</span>
        <svg
          className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg"
          role="listbox"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className="hover:bg-apricot w-full cursor-pointer border-b border-gray-100 px-4 py-2 text-left transition-colors last:border-b-0"
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
