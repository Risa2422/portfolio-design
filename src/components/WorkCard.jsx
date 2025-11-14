// import { Link } from "react-router-dom";

// function WorkCard({
//   imageSrc,
//   title,
//   description,
//   tags = [],
//   reverse = false,
//   to,
// }) {
//   return (
//     <Link
//       to={`/works/${to}`}
//       onClick={() => {
//         sessionStorage.setItem("scrollPosition", window.scrollY.toString());
//       }}
//     >
//       <div
//         className={`flex flex-col md:flex-row gap-10 md:h-[300px] ${
//           reverse ? "md:flex-row-reverse" : ""
//         }`}
//       >
//         <div className="md:w-1/2 overflow-hidden">
//           <img
//             src={imageSrc}
//             alt={title}
//             width={560}
//             height={560}
//             className="transition-transform duration-300 ease-in-out hover:scale-105 rounded"
//           />
//         </div>
//         <div
//           className={`md:w-1/2 space-y-3 hover:opacity-70 transition-opacity duration-200 ${
//             reverse ? "md:pl-14" : "md:pr-20"
//           }`}
//         >
//           <div className="space-y-3">
//             <h3 className="text-2xl font-semibold">{title}</h3>
//             <p className="text-md  text-text-sub">{description}</p>
//           </div>
//           <ul className="flex gap-2 text-sm flex-wrap">
//             {tags.map((tag, index) => (
//               <li
//                 key={index}
//                 className="flex items-center justify-center px-3 py-1.5
//                  bg-[#F0EEEA] border border-[#F0EEEA] rounded-full"
//               >
//                 <span className="text-xs">{tag}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default WorkCard;
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
    <Link
      to={`/works/${to}`}
      onClick={() => {
        sessionStorage.setItem("scrollPosition", window.scrollY.toString());
      }}
      className="group"
    >
      <div
        className={`flex flex-col md:flex-row gap-10 md:h-[300px] ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:w-1/2 overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            width={560}
            height={560}
            className="transition-transform duration-300 ease-in-out rounded group-hover:scale-105"
          />
        </div>

        <div
          className={`md:w-1/2 space-y-3 hover:opacity-70 transition-opacity duration-200 ${
            reverse ? "md:pl-14" : "md:pr-14"
          }`}
        >
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-md text-text-sub">{description}</p>
          </div>

          <ul className="flex gap-2 text-sm flex-wrap">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="flex items-center justify-center px-3 py-1.5 
                 bg-[#F0EEEA] border border-[#F0EEEA] rounded-full"
              >
                <span className="text-xs">{tag}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default WorkCard;
