import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // CLOSE DROPDOWN
    setIsOpen(false);
    //WHAT OPTION DID THE USER CLICK ON?
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="cursor-pointer rounded p-1 hover:bg-sky-100"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="relative w-48">
      <div
        className="rounder flex w-full cursor-pointer items-center justify-between border bg-white p-3 shadow"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-xl" />
      </div>
      {isOpen && (
        <div className="absolute top-full w-full rounded border bg-white p-3 shadow">
          {renderedOptions}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
