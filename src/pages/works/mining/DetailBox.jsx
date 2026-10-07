function DetailBox({ heading, items }) {
  return (
    <div className="space-y-2 py-3 px-4 border border-gray-600 rounded-lg w-full">
      <div className="flex items-center gap-1">
        <h3 className="text-lg font-bold">{heading}</h3>
      </div>
      <ul className="space-y-4 pl-1">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span
              aria-hidden="true"
              className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-current"
            />
            <div>{item}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetailBox;
