import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import ArrowDivider from "./ArrowDivider";
import Badge from "./Badge";
import DetailBox from "./DetailBox";

function Improvement2({ before, hearing, after }) {
  return (
    <div>
      <div className="space-y-4">
        <Badge colorClass="bg-[#746B60]">{before.label}</Badge>
        <div className="flex gap-4">
          <img
            src={before.image}
            alt={before.alt}
            className="w-1/3 object-contain"
          />
          <div className="space-y-10">
            <p>{before.text}</p>
            <ul className="list-disc list-inside space-y-1 pl-1">
              {before.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <ArrowDivider />
        <div className="space-y-4">
          <h5>{hearing.heading}</h5>
          <div>
            {hearing.quotes.map((quote, index) => (
              <p
                key={index}
                className="flex text-xl items-center gap-2 italic text-gray-600"
              >
                <FaQuoteLeft className="w-3 h-3 shrink-0" />
                {quote}
                <FaQuoteRight className="w-3 h-3 shrink-0" />
              </p>
            ))}
          </div>
        </div>
      </div>
      <ArrowDivider />
      <div className="space-y-4 mt-6">
        <Badge colorClass="bg-[#4A5742]">{after.label}</Badge>
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <img src={after.image} className="w-2/3" alt={after.alt} />
          <DetailBox heading={after.heading} items={after.items} />
        </div>
      </div>
    </div>
  );
}

export default Improvement2;
