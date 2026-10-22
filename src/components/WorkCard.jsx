import { Link } from "react-router-dom";

function WorkCard({ imageSrc, title, date, description, tags = [], to }) {
  return (
    <Link
      to={`/works/${to}`}
      onClick={() => {
        sessionStorage.setItem("scrollPosition", window.scrollY.toString());
      }}
      className="group block h-full"
    >
      <div className="flex flex-col gap-8 h-full">
        <div className="overflow-hidden rounded">
          <img
            src={imageSrc}
            alt={title}
            width={560}
            height={560}
            className="w-full h-auto transition-transform duration-300 ease-in-out rounded group-hover:scale-105"
          />
        </div>

        <div className="space-y-2 px-4 md:px-0 hover:opacity-70 transition-opacity duration-200">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="pt-3 leading-loose">{description}</p>
          </div>
          <ul className="flex gap-2 pt-5 flex-wrap">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="flex items-center justify-center px-3 py-1.5 
                border-[1px] border-[#351E28] rounded-full"
              >
                <span className="text-xs text-text">{tag}</span>
              </li>
            ))}
          </ul>
          <p className="pt-2 text-sm">{date}</p>
        </div>
      </div>
    </Link>
  );
}

export default WorkCard;
