import React, { useState, useEffect, useRef } from "react";

const DataFilter = ({ filterId, placeholder, options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState("All"); // Use a new state to hold the label
    const ref = useRef(null);
    const toggleDropdown = () => setIsOpen(!isOpen);

    // Handle clicks outside of the component
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // Add when the dropdown is open and remove when closed
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]); // Only re-run the effect if `isOpen` changes

    const handleOptionClick = (value, label) => {
        onChange(value); // Call the onChange function passed in props with the selected value
        setSelectedLabel(label); // Update the label state with the selected label
        setIsOpen(false); // Close the dropdown after selection
    };

    return (
        <div ref={ref}>
            <span className="text-sm">{placeholder} :</span>
            <button
                id={`dropdown_btn_${filterId}`}
                data-dropdown-toggle="dropdown"
                className="text-blue-500 hover:text-blue-700 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:text-blue-600 dark:hover:text-blue-700"
                type="button"
                onClick={toggleDropdown}
            >
                {selectedLabel}{" "}
                {/* Display the selected label instead of the placeholder */}
                <svg
                    className={`w-2.5 h-2.5 ml-3 transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>
            {isOpen && (
                <div
                    id={`dropdown_${filterId}`}
                    className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    style={{ position: "absolute" }}
                >
                    <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby={`dropdown_btn_${filterId}`}
                    >
                        {options.map((option) => (
                            <li key={option.value}>
                                <button
                                    className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={() =>
                                        handleOptionClick(
                                            option.value,
                                            option.label
                                        )
                                    }
                                >
                                    {option.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DataFilter;
