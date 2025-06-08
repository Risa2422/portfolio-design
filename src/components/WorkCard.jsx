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
        className={`flex flex-col md:flex-row gap-2 md:gap-12 md:h-[300px] px-4  ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:w-1/2 overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="md:w-1/2 space-y-3 pt-2 hover:opacity-70 transition-opacity duration-200">
          <div className="space-y-2">
            <h3 className="font-base text-lg">{title}</h3>
            <p className="text-sm text-text-sub">{description}</p>
          </div>
          <ul className="flex gap-2 text-sm flex-wrap">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="flex items-center px-4 py-1.5 border border-[#F0EEEA] bg-[#F0EEEA] rounded-full"
              >
                <p className="text-xs md:text-sm">{tag}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default WorkCard;
