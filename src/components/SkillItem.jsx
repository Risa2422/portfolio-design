const SkillItem = ({ icon, label, size = "w-1/2 h-1/2", cover = false }) => (
  <li className="flex min-w-0 flex-col items-center gap-2">
    <div className="w-full max-w-20 aspect-square rounded-full bg-[#f7f3e9] flex items-center justify-center overflow-hidden">
      <img
        src={icon}
        alt={label}
        className={`${size} ${cover ? "object-cover" : "object-contain"}`}
      />
    </div>
    <p className="w-full text-center text-xs sm:text-sm text-text-sub break-words">
      {label}
    </p>
  </li>
);

export default SkillItem;
