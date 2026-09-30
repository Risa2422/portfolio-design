function DetailBox({ heading, items }) {
  return (
    <div className="space-y-3 p-4 border border-gray-600 rounded-lg w-full">
      <div className="flex items-center gap-1">
        <h3 className="text-xl font-bold">{heading}</h3>
      </div>
      <ul className="list-disc list-inside space-y-1 pl-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DetailBox;
