// Simple bulleted list of strings, styled like the research-study lists.
function DotList({ items, className = "" }) {
  return (
    <ul
      className={`flex flex-col gap-1.5 pl-6 list-disc marker:text-text ${className}`}
    >
      {items.map((item, index) => (
        <li key={index} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default DotList;
