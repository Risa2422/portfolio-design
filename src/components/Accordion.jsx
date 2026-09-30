import { FaMinus, FaPlus } from "react-icons/fa";

function Accordion({ title, summary, isOpen, onToggle, children }) {
  return (
    <div className="w-full bg-white border rounded-lg p-6">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center gap-4 cursor-pointer"
      >
        <div className="flex flex-col items-start">
          <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
          <p className="text-gray-600 text-sm p-1">{summary}</p>
        </div>
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#5C554C] shrink-0">
          {isOpen ? (
            <FaMinus className="w-4 h-4 text-white" />
          ) : (
            <FaPlus className="w-4 h-4 text-white" />
          )}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <hr className="border-t-2 border-dotted border-gray-300 my-4" />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
