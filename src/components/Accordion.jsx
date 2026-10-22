import { FaMinus, FaPlus } from "react-icons/fa";

function Accordion({ number, title, summary, isOpen, onToggle, children }) {
  return (
    <div className="w-full bg-white border border-[#C2BCBE] rounded-lg p-5">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group w-full flex justify-between items-center gap-4 cursor-pointer"
      >
        <div className="flex flex-col items-start justify-start transition-opacity duration-200 group-hover:opacity-90">
          <h2 className="flex items-baseline gap-1 text-lg md:text-lg font-semibold text-left">
            {number && (
              <span className="font-bold tabular-nums text-xl tracking-wider">
                {number}.
              </span>
            )}
            {title}
          </h2>
          <p className="text-text-sub text-sm p-1 text-left">{summary}</p>
        </div>
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#4A3540] shrink-0 transition-opacity duration-200 group-hover:opacity-90">
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
