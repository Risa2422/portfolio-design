const SkillItem = ({ icon, label, size = "w-10 h-10", cover = false }) => (
  <li className="flex flex-col items-center gap-2">
    <div className="w-20 h-20 border-[0.5px] border-border rounded-md bg-white flex items-center justify-center overflow-hidden">
      <img
        src={icon}
        alt={label}
        className={`${size} ${cover ? "object-cover" : ""}`}
      />
    </div>
    <p className="text-sm text-text-sub">{label}</p>
  </li>
);

export default SkillItem;
