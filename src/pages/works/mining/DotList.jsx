// Simple bulleted list of strings, indented under its heading.
function DotList({ items }) {
  return (
    <ul className="flex flex-col gap-1.5 pl-4">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 items-start">
          <img
            src="/mining/list-dot.svg"
            alt=""
            width="8"
            height="26.25"
            className="shrink-0"
          />
          <p className="flex-1 min-w-0 text-[15px] leading-[1.75]">{item}</p>
        </li>
      ))}
    </ul>
  );
}

export default DotList;
