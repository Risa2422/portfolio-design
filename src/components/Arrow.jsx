import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

const Arrow = () => {
  return (
    <Link
      to="/"
      className="opacity-80 hover:opacity-100 hover:text-primary transition"
    >
      <div className="pt-16 md:pt-0 px-6 md:px-12 lg:px-24 xl:px-[154px] flex items-center gap-1">
        <span className="flex items-center justify-center rounded-full w-6 h-6 bg-white">
          <MdOutlineArrowBackIosNew width={10} className="w-5 h-3 text-current" />
        </span>
        <p className="pb-0.5 text-sm font-medium">Home</p>
      </div>
    </Link>
  );
};

export default Arrow;
