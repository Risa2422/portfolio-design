import ZoomableImage from "../../../components/ZoomableImage";
import { useLanguage } from "../../../context/LanguageContext";
import { localizeImage } from "../../../utils/localizeImage";
import CaseSection, { CaseRow } from "./CaseSection";

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
    <div className="case-study flex flex-col [&>*+*]:bg-[linear-gradient(to_right,#C2C2C2_6px,transparent_6px)] [&>*+*]:bg-[length:10px_1px] [&>*+*]:bg-repeat-x [&>*+*]:bg-top">
      <CaseRow eyebrow={labels.backgroundEyebrow} label={labels.background}>
        <div className="text-base leading-loose">
          {toParagraphs(background).map((paragraph, index) => (
            <p key={index} className={index > 0 ? "mt-8" : undefined}>
              {paragraph}
            </p>
          ))}
        </div>
        {backgroundFigure && (
          <figure className="flex flex-col md:flex-row gap-6 md:gap-4">
            <figcaption className="flex-1 min-w-0 leading-loose">
              {backgroundFigure.caption}
            </figcaption>
            <div className="flex flex-col gap-1 w-full md:w-1/2 md:shrink-0 max-w-[720px] self-center">
              <ZoomableImage
                src={localizeImage(backgroundFigure.image, language)}
                alt={backgroundFigure.alt}
                className="w-full object-contain"
              />
              {backgroundFigure.imageCaption && (
                <p className="text-xs text-text-sub py-1 text-center">
                  {backgroundFigure.imageCaption}
                </p>
              )}
            </div>
          </figure>
        )}
      </CaseRow>
      {sections.map((section, index) => (
        <CaseSection key={index} section={section} />
      ))}
      {reflection && (
        <CaseRow eyebrow={labels.reflectionEyebrow} label={labels.reflection}>
          <div className="flex flex-col gap-2">
            <p className="text-[17px] font-bold leading-loose">
              {reflection.headline}
            </p>
            <div>
              {toParagraphs(reflection.text).map((paragraph, index) => (
                <p key={index} className="leading-loose">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </CaseRow>
      )}
    </div>
  );
}

export default CaseStudy;
