import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
const Arrow = () => {
  return (
    <Link to="/" className=" hover:opacity-80">
      <div className="px-6 md:px-16 lg:px-32 xl:px-[218px] flex items-center gap-1 pb-6">
        <MdOutlineArrowBackIosNew width={10} className="w-5 h-3" />
        <p className="pb-0.5 text-sm underline">Home</p>
      </div>
    </Link>
  );
};

export default Arrow;
