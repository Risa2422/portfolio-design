const LETTERS = "ABCDEFGHIJ";

// marker: "letter" (A, B, C…), "number" (1, 2, 3…) or "dot"
function Marker({ marker, index, color }) {
  if (marker === "dot") {
    return (
      <span className="flex items-center justify-center size-7 shrink-0">
        <span
          className="size-2 rounded-full"
          style={{ backgroundColor: color }}
        />
      </span>
    );
  }
  return (
    <span
      className="flex items-center justify-center size-7 shrink-0 rounded-full text-sm font-bold leading-none text-white"
      style={{ backgroundColor: color }}
    >
      {marker === "letter" ? LETTERS[index] : index + 1}
    </span>
  );
}

function MarkerList({
  heading,
  note,
  items,
  marker = "number",
  color,
  dividerColor,
  size = "md",
}) {
  const small = size === "sm";
  return (
    <div className="flex flex-col gap-2">
      {heading && (
        <div className="flex flex-wrap items-center gap-x-2.5 leading-normal">
          <h4 className={`${small ? "text-lg" : "text-xl"} font-bold text-[#2e211a]`}>{heading}</h4>
          {note && <span className="text-xs text-[#7a6a5f]">{note}</span>}
        </div>
      )}
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-4 py-2"
            style={{ borderColor: dividerColor }}
          >
            <Marker marker={marker} index={index} color={color} />
            <div className="flex flex-col gap-1 min-w-0">
              {item.title && (
                <p
                  className={`${small ? "text-sm" : ""} font-bold leading-normal text-[#2e211a]`}
                >
                  {item.title}
                </p>
              )}
              <p
                className={`${small ? "text-sm" : ""} leading-[1.8] whitespace-pre-line text-[#5a4a40]`}
              >
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MarkerList;
