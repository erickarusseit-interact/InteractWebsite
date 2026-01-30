'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Globe, 
  DeviceMobile, 
  ShoppingCart, 
  PaintBrush, 
  ChartBar, 
  DotsThree,
  CaretDown,
  Check,
  Browser
} from 'phosphor-react';

interface DropdownOption {
  value: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface AnimatedDropdownProps {
  name: string;
  value: string;
  onChange: (event: { target: { name: string; value: string } }) => void;
  placeholder?: string;
  className?: string;
  hasError?: boolean;
}

const projectTypeOptions: DropdownOption[] = [
  { value: 'website', label: 'Website', icon: Globe },
  { value: 'webapp', label: 'Web-Applikation', icon: Browser },
  { value: 'ecommerce', label: 'E-Commerce', icon: ShoppingCart },
  { value: 'redesign', label: 'Redesign', icon: PaintBrush },
  { value: 'marktforschung', label: 'Marktforschung', icon: ChartBar },
  { value: 'other', label: 'Sonstiges', icon: DotsThree },
];

export default function AnimatedDropdown({
  name,
  value,
  onChange,
  placeholder = "Bitte wählen",
  className = "",
  hasError = false
}: AnimatedDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const selectedOption = projectTypeOptions.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && optionsRef.current) {
      const focusedElement = optionsRef.current.children[focusedIndex] as HTMLElement;
      if (focusedElement) {
        focusedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [focusedIndex, isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (isOpen && focusedIndex >= 0) {
          handleSelect(projectTypeOptions[focusedIndex].value);
        } else {
          setIsOpen(!isOpen);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else {
          setFocusedIndex(prev => 
            prev < projectTypeOptions.length - 1 ? prev + 1 : 0
          );
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(projectTypeOptions.length - 1);
        } else {
          setFocusedIndex(prev => 
            prev > 0 ? prev - 1 : projectTypeOptions.length - 1
          );
        }
        break;
    }
  };

  const handleSelect = (optionValue: string) => {
    onChange({
      target: {
        name,
        value: optionValue
      }
    });
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={`w-full bg-white/[0.03] border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/80 transition-all cursor-pointer flex items-center justify-between ${
          hasError ? 'border-red-500/50' : 'border-white/[0.08]'
        } ${className}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="dropdown-label"
      >
        <div className="flex items-center gap-3">
          {selectedOption ? (
            <>
              <selectedOption.icon size={20} className="text-neutral-50" />
              <span>{selectedOption.label}</span>
            </>
          ) : (
            <span className="text-neutral-600">{placeholder}</span>
          )}
        </div>
        <CaretDown 
          size={16} 
          className={`text-neutral-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`} 
        />
      </button>

      {/* Dropdown Options */}
      <div
        className={`absolute top-full left-0 right-0 z-50 mt-1 bg-neutral-900/95 backdrop-blur-sm border border-white/[0.08] rounded-md shadow-2xl transition-all duration-200 origin-top ${
          isOpen 
            ? 'opacity-100 scale-y-100 translate-y-0' 
            : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
        }`}
        role="listbox"
        ref={optionsRef}
      >
        <div className="py-2 max-h-60 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {projectTypeOptions.map((option, index) => {
            const Icon = option.icon;
            const isSelected = value === option.value;
            const isFocused = focusedIndex === index;
            
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                onMouseEnter={() => setFocusedIndex(index)}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all duration-150 ${
                  isFocused || isSelected
                    ? 'bg-neutral-50/5 text-white' 
                    : 'text-neutral-300 hover:bg-white/[0.05] hover:text-white'
                }`}
                role="option"
                aria-selected={isSelected}
              >
                <Icon 
                  size={20} 
                  className={`transition-colors duration-150 ${
                    isFocused || isSelected ? 'text-neutral-50' : 'text-neutral-500'
                  }`} 
                />
                <span className="flex-1">{option.label}</span>
                {isSelected && (
                  <Check 
                    size={16} 
                    className="text-green-500 animate-in fade-in duration-200" 
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
