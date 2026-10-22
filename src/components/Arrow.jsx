import { Link } from "react-router-dom";
import ArrowLeftIcon from "./ArrowLeftIcon";

const Arrow = () => {
  return (
    <Link
      to="/"
      className="opacity-80 hover:opacity-100 hover:text-primary transition"
    >
      <div className="pt-16 md:pt-0 px-6 md:px-12 lg:px-24 xl:px-[154px] flex items-center">
        <span className="flex items-center justify-center rounded-full w-[35px] h-10 ">
          <ArrowLeftIcon className="w-[35px]" />
        </span>
        <p className="pb-0.5 text-base font-medium tracking-wider">Home</p>
      </div>
    </Link>
  );
};

export default Arrow;
