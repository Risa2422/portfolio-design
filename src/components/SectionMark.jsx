// Decorative three-dot mark shown before section headings on works pages
const SectionMark = () => {
  return (
    <span aria-hidden="true" className="relative block w-4 h-7 shrink-0">
      <span className="absolute left-0 top-[5px] w-2.5 h-2.5 rounded-full bg-[#3B2707]" />
      <span className="absolute left-0 top-[15px] w-2.5 h-2.5 rounded-full bg-[#3B2707]" />
    </span>
  );
};

export default SectionMark;
