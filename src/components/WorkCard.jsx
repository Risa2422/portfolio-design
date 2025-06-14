import { Link } from "react-router-dom";

function WorkCard({
  imageSrc,
  title,
  description,
  tags = [],
  reverse = false,
  to,
}) {
  return (
    <Link to={`/works/${to}`}>
      <div
        className={`flex flex-col md:flex-row gap-10 md:h-[300px] ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:w-1/2 overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="transition-transform duration-300 ease-in-out hover:scale-105 rounded"
          />
        </div>
        <div
          className={`md:w-1/2 space-y-3 hover:opacity-70 transition-opacity duration-200 ${
            reverse ? "pl-20" : "pr-20"
          }`}
        >
          <div className="space-y-2">
            <h3 className="md:text-lg font-semibold">{title}</h3>
            <p className="text-xs md:text-sm text-text-sub">{description}</p>
          </div>
          <ul className="flex gap-2 text-sm flex-wrap">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="flex items-center px-3 py-1.5 border border-[#F0EEEA] bg-[#F0EEEA] rounded-full"
              >
                <p className="text-xs">{tag}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default WorkCard;
