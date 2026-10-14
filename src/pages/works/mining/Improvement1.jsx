import ZoomableImage from "../../../components/ZoomableImage";
import { useLanguage } from "../../../context/LanguageContext";
import { localizeImage } from "../../../utils/localizeImage";
import ArrowDivider from "./ArrowDivider";
import Badge from "./Badge";
import DetailBox from "./DetailBox";

function FlowStep({ label, badgeClass, image, alt, heading, items, color }) {
  const { language } = useLanguage();
  return (
    <div className="space-y-6">
      <Badge colorClass={badgeClass}>{label}</Badge>
      <div className="space-y-16">
        <ZoomableImage
          src={localizeImage(image, language)}
          className="w-full h-full object-contain"
          alt={alt}
        />
        <DetailBox heading={heading} items={items} color={color} />
      </div>
    </div>
  );
}

function Improvement1({ before, after }) {
  return (
    <div className="space-y-12">
      <FlowStep {...before} badgeClass="text-[#5b544e]" color="#5b544e" />
      <ArrowDivider />
      <FlowStep {...after} badgeClass="text-[#4A5742]" color="#4A5742" />
    </div>
  );
}

export default Improvement1;
