function InfoList({ items }) {
  return (
    <div className="flex justify-start">
      <dl className="space-y-4">
        {items.map(({ title, value }, index) => (
          <div key={index} className="flex gap-10 text-sm">
            <dt className="w-24 font-medium">{title}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default InfoList;
