function DetailList({ items }) {
  return (
    <ul className="space-y-6 pl-1">
      {items.map((item, index) => (
        <li key={index} className="flex gap-4">
          <span
            aria-hidden="true"
            className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-current"
          />
          <div>{item}</div>
        </li>
      ))}
    </ul>
  );
}

function DetailBox({ heading, items, color = "#746B60" }) {
  return (
    <div
      className="relative mt-5 pt-10 pb-6 px-4 md:px-6 border rounded-lg w-full"
      style={{ borderColor: color, backgroundColor: `${color}05` }}
    >
      <h3
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-1.5 text-white text-lg font-bold whitespace-nowrap rounded-full"
        style={{ backgroundColor: color }}
      >
        {heading}
      </h3>
      <DetailList items={items} />
    </div>
  );
}

export default DetailBox;
