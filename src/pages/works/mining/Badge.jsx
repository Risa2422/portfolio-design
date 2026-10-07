function Badge({ colorClass, children }) {
  return (
    <div
      className={`flex items-center gap-1 w-fit py-1 px-3 border text-white font-medium rounded-full ${colorClass}`}
    >
      {children}
    </div>
  );
}

export default Badge;
