function DetailBox({ heading, items }) {
  return (
    <div className="space-y-3 py-4 px-4 bg-[#f5f5f5] rounded-lg w-full">
      <div className="flex items-center gap-3">
        <h3 className="text-xl font-bold">{heading}</h3>
      </div>
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
    </div>
  );
}

export default DetailBox;
