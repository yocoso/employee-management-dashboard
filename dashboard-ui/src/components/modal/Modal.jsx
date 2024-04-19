import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, isOpen, onClose }) => {
    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) {
        const newRoot = document.createElement("div");
        newRoot.setAttribute("id", "modal-root");
        document.body.appendChild(newRoot);
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return isOpen
        ? ReactDOM.createPortal(
              <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center">
                  <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full m-4">
                      {/* Close Button */}
                      <button
                          onClick={onClose}
                          className="absolute top-0 right-0 mt-2 mr-2 text-black text-sm p-1.5 leading-none"
                      >
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-4 h-4"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                              />
                          </svg>
                      </button>
                      {children}
                  </div>
              </div>,
              document.getElementById("modal-root")
          )
        : null;
};

export default Modal;
