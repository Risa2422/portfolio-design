function Badge({ colorClass, children }) {
  return (
    <div
      className={`flex gap-1 items-center w-fit text-xl font-semibold ${colorClass}`}
    >
      <span className="w-3 h-3 shrink-0 rounded-full bg-current" />
      {children}
    </div>
  );
}

export default Badge;
