import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import ZoomableImage from "../../../components/ZoomableImage";
import { useLanguage } from "../../../context/LanguageContext";
import { localizeImage } from "../../../utils/localizeImage";
import ArrowDivider from "./ArrowDivider";
import Badge from "./Badge";
import DetailBox from "./DetailBox";

function Improvement2({ before, hearing, after }) {
  const { language } = useLanguage();
  return (
    <div>
      <div className="space-y-4">
        <Badge colorClass="bg-[#746B60]">{before.label}</Badge>
        <div className="flex gap-4">
          <div className="flex flex-col md:flex-row w-full gap-4">
            <div className="md:w-1/2 space-y-1">
              <p className="font-medium text-sm">{before.imageCaption}</p>
              <ZoomableImage
                src={localizeImage(before.image, language)}
                alt={before.alt}
                className="object-contain"
              />
            </div>
            <div className="md:w-1/2 space-y-4 pt-7">
              <p className="text-lg font-medium">【{before.text}】</p>
              <ul className="list-disc list-outside space-y-3 pl-5">
                {before.items.map((item, index) => (
                  <li key={index}>
                    <p className="font-medium">{before.itemTitles?.[index]}</p>
                    <p className="text-gray-600">{item}</p>
                  </li>
                ))}
              </ul>
              <p className="pt-4">{before.note}</p>
            </div>
          </div>
        </div>
        <ArrowDivider />
        <div className="space-y-10 py-6">
          <h5 className="text-xl md:text-2xl text-center font-semibold">
            {hearing.heading}
          </h5>
          <div className="flex flex-col gap-6 px-12">
            {hearing.quotes.map((quote, index) => (
              <p key={index} className="flex text-lg gap-1 italic ">
                <FaQuoteLeft className="w-2.5 h-2.5 shrink-0 text-gray-600" />
                {quote}
                <FaQuoteRight className="w-2.5 h-2.5 shrink-0 text-gray-600" />
              </p>
            ))}
          </div>
        </div>
      </div>
      <ArrowDivider />
      <div className="space-y-4 mt-6">
        <Badge colorClass="bg-[#4A5742]">{after.label}</Badge>
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <div className="flex flex-col md:flex-row w-full gap-4">
            <ZoomableImage
              src={localizeImage(after.image, language)}
              className="md:w-1/2"
              alt={after.alt}
            />
            <div className="space-y-4">
              <p className="text-lg font-medium">【{after.text}】</p>
              <ul className="list-disc list-outside space-y-3 pl-7">
                {after.items.map((item, index) => (
                  <li key={index}>
                    <p className="font-medium">{after.itemTitles?.[index]}</p>
                    <p className="text-gray-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {after.details && (
            <DetailBox heading={after.heading} items={after.details} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Improvement2;
