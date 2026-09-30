function Badge({ colorClass, children }) {
  return (
    <div
      className={`flex items-center gap-1 w-fit py-1 px-5 border text-white text-lg font-semibold rounded-full ${colorClass}`}
    >
      <span className="w-2 h-2 rounded-full bg-white shrink-0" />
      {children}
    </div>
  );
}

export default Badge;
