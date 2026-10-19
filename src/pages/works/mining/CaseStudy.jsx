import ZoomableImage from "../../../components/ZoomableImage";
import { useLanguage } from "../../../context/LanguageContext";
import { localizeImage } from "../../../utils/localizeImage";
import CaseSection, { CaseBox } from "./CaseSection";

const toParagraphs = (text) => (Array.isArray(text) ? text : [text]);

function CaseStudy({
  labels,
  background,
  backgroundFigure,
  sections,
  reflection,
}) {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col gap-12 pt-2 pl-6">
      <div className="flex flex-col gap-12">
        <CaseBox label={labels.background} line="connect">
          <div className="text-base leading-8 text-[#2e211a]">
            {toParagraphs(background).map((paragraph, index) => (
              <p key={index} className={index > 0 ? "mt-8" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
          {backgroundFigure && (
            <figure className="flex flex-col md:flex-row gap-6 md:gap-4">
              <figcaption className="flex-1 min-w-0 leading-[1.8]">
                {backgroundFigure.caption}
              </figcaption>
              <ZoomableImage
                src={localizeImage(backgroundFigure.image, language)}
                alt={backgroundFigure.alt}
                className="w-full md:w-1/2 md:shrink-0 max-w-[720px] object-contain self-center"
              />
            </figure>
          )}
        </CaseBox>
        {sections.map((section, index) => (
          <CaseSection
            key={index}
            section={section}
            line={
              index === sections.length - 1 && !reflection ? "end" : "connect"
            }
          />
        ))}
      </div>
      {reflection && (
        <CaseBox label={labels.reflection} indent={false}>
          <div className="flex flex-col gap-2">
            <p className="text-[17px] font-bold leading-[1.7]">
              {reflection.headline}
            </p>
            <div className="">
              {toParagraphs(reflection.text).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </CaseBox>
      )}
    </div>
  );
}

export default CaseStudy;
