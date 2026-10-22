// Decorative two-dot mark (filled dots overlapped by outlined dots) shown before section headings on works pages
const SectionMark = () => {
  return (
    <span aria-hidden="true" className="relative block w-4 h-7 shrink-0">
      <span className="absolute left-0 top-[5px] w-2.5 h-2.5 rounded-full bg-text" />
      <span className="absolute left-1 top-[5px] w-2.5 h-2.5 rounded-full border border-text" />
      <span className="absolute left-0 top-[15px] w-2.5 h-2.5 rounded-full bg-text" />
      <span className="absolute left-1 top-[15px] w-2.5 h-2.5 rounded-full border border-text" />
    </span>
  );
};

export default SectionMark;
