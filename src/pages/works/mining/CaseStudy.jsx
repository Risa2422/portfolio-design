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
    <div className="flex flex-col gap-6 pt-6 pb-8 pl-6 pr-4 md:pl-8 md:pr-8">
      <div className="flex flex-col gap-14">
        <CaseBox label={labels.background} line="connect">
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
        </CaseBox>
        {sections.map((section, index) => (
          <CaseSection
            key={index}
            section={section}
            line={
              index === sections.length - 1
                ? reflection
                  ? "reflection"
                  : "end"
                : "connect"
            }
          />
        ))}
      </div>
      {reflection && (
        <CaseBox label={labels.reflection} indent={false}>
          <div className="flex flex-col gap-2">
            <p className="text-[17px] font-bold leading-loose">
              {reflection.headline}
            </p>
            <div className="">
              {toParagraphs(reflection.text).map((paragraph, index) => (
                <p key={index} className="leading-loose">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </CaseBox>
      )}
    </div>
  );
}

export default CaseStudy;
