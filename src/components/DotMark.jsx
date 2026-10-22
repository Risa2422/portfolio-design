// Filled dot overlapped by an outlined dot, shown before short headings
const DotMark = ({ colorClass = "bg-primary" }) => {
  return (
    <span aria-hidden="true" className="relative block w-[14.5px] h-3 shrink-0">
      <span
        className={`absolute left-0 top-0 w-3 h-3 rounded-full ${colorClass}`}
      />
      <span className="absolute left-[2.5px] top-0 w-3 h-3 rounded-full border border-[#2E211A]" />
    </span>
  );
};

export default DotMark;
