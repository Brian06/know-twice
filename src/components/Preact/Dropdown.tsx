import { useState, useRef, useEffect } from 'preact/hooks'

export interface Option {
  value: string
  label: string
}

export interface DropdownProps {
  options: Option[]
  defaultValue?: string
  id: string
  className?: string
  onChange?: (value: string) => void
}

export default function Dropdown({
  options,
  defaultValue = 'all',
  id,
  className = '',
  onChange,
}: DropdownProps) {
  const defaultOption = options.find((opt) => opt.value === defaultValue) || options[0]
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(defaultOption)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const newOption = options.find((opt) => opt.value === defaultValue) || options[0]
    setSelectedOption(newOption)
  }, [defaultValue, options])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleOtherDropdownOpen = (event: CustomEvent) => {
      if (event.detail.dropdownId !== id) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    document.addEventListener('dropdown-opened', handleOtherDropdownOpen as EventListener)

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('dropdown-opened', handleOtherDropdownOpen as EventListener)
    }
  }, [id])

  const handleToggle = (e: Event) => {
    e.stopPropagation()
    const newIsOpen = !isOpen
    setIsOpen(newIsOpen)

    if (newIsOpen) {
      const event = new CustomEvent('dropdown-opened', {
        detail: { dropdownId: id },
      })
      document.dispatchEvent(event)
    }
  }

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option)
    setIsOpen(false)
    if (onChange) {
      onChange(option.value)
    }
  }

  return (
    <div ref={dropdownRef} className={`relative ${className}`} data-dropdown={id} data-testid={id}>
      <button
        type="button"
        className="shadow-card flex w-full cursor-pointer items-center justify-between rounded-xl border border-charcoal/10 bg-white/80 px-4 py-3 text-sm font-medium text-charcoal transition-all duration-200 hover:border-magenta/50 hover:bg-white focus:ring-2 focus:ring-magenta/30 focus:outline-none"
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{selectedOption.label}</span>
        <svg
          className={`h-4 w-4 text-charcoal/40 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div
          className="shadow-card-hover absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-charcoal/10 bg-white"
          role="listbox"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className="w-full cursor-pointer px-4 py-3 text-left text-sm font-medium text-charcoal transition-colors duration-150 hover:bg-apricot-lightest hover:text-magenta"
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
  )
}
