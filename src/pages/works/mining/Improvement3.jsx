import ZoomableImage from "../../../components/ZoomableImage";
import { useLanguage } from "../../../context/LanguageContext";
import { localizeImage } from "../../../utils/localizeImage";
import ArrowDivider from "./ArrowDivider";
import Badge from "./Badge";
import DetailBox from "./DetailBox";

function Improvement3({ steps }) {
  const { language } = useLanguage();
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={step.label}>
          {index > 0 && <ArrowDivider />}
          <div className="space-y-4">
            <Badge colorClass={step.badgeClass}>{step.label}</Badge>
            {step.intro && (
              <div className="space-y-3">
                <p>{step.intro}</p>
                <ul className="list-disc list-inside space-y-1 pl-1">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {step.text && (
              <div className="flex flex-col md:flex-row gap-4">
                <p>{step.text}</p>
                {step.image && (
                  <ZoomableImage
                    src={localizeImage(step.image, language)}
                    alt={step.alt}
                    className="w-1/2"
                  />
                )}
              </div>
            )}
            {step.heading && (
              <>
                {step.image && (
                  <ZoomableImage src={localizeImage(step.image, language)} alt={step.alt} />
                )}
                <DetailBox heading={step.heading} items={step.items} />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Improvement3;
