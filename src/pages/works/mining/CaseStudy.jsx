import ZoomableImage from "../../../components/ZoomableImage";
import { useLanguage } from "../../../context/LanguageContext";
import { localizeImage } from "../../../utils/localizeImage";
import CaseSection, { CaseRow } from "./CaseSection";

const toParagraphs = (text) => (Array.isArray(text) ? text : [text]);

// A schematic of the steps users had to go through before reaching the goal:
// outlined step cards joined by arrows, ending in a filled goal card. On
// mobile the cards stack and the arrows point down.
function BeforeSteps({ heading, steps, goal, note }) {
  const arrow = (
    <img
      src="/mining/step-arrow-small.svg"
      alt=""
      aria-hidden="true"
      width="22"
      height="22"
      className="shrink-0 self-center rotate-90 md:rotate-0"
    />
  );
  return (
    <div className="flex flex-col gap-3.5 mt-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold">{heading}</p>
        <ol className="flex flex-col md:flex-row gap-2.5">
          {steps.map((step) => (
            <li key={step.title} className="contents">
              <div className="flex flex-col gap-1 flex-1 min-w-0 px-4 py-3.5 rounded-lg border-[1.5px] border-text bg-white">
                <p className="text-[11px] font-medium text-[#545353]">
                  {step.label}
                </p>
                <p className="text-[15px] font-bold">{step.title}</p>
                <p className="text-xs">{step.text}</p>
              </div>
              {arrow}
            </li>
          ))}
          <li className="flex items-center justify-center flex-1 min-w-0 px-4 py-3.5 rounded-lg bg-text text-[15px] font-bold text-white">
            {goal}
          </li>
        </ol>
      </div>
      {note && (
        <p className="text-[13px] leading-[1.8] text-[#6b6b6b]">{note}</p>
      )}
    </div>
  );
}

// Glossary note explaining "project" vs "program", shown at the bottom of
// the background section.
function TermNote({ parts }) {
  return (
    <div className="flex items-start gap-[4px] mt-6 px-6 py-3 rounded-lg bg-[rgba(28,99,138,0.06)]">
      <img
        src="/mining/icon-warning-circle.svg"
        alt=""
        aria-hidden="true"
        width="20"
        height="20"
        className="shrink-0 mt-[3px]"
      />
      <p className="flex-1 min-w-0 text-sm leading-[1.9]">
        {parts.map((part, index) =>
          part.bold ? (
            <strong key={index} className="font-bold">
              {part.text}
            </strong>
          ) : (
            <span key={index}>{part.text}</span>
          ),
        )}
      </p>
    </div>
  );
}

function CaseStudy({
  labels,
  background,
  backgroundFigure,
  backgroundSteps,
  sections,
  reflection,
}) {
  const { language } = useLanguage();

  return (
    <div className="case-study flex flex-col">
      <CaseRow
        eyebrow={labels.backgroundEyebrow}
        label={labels.background}
        className="!pt-6"
      >
        <div className="flex flex-col gap-2">
          <div className="text-base leading-loose">
            {toParagraphs(background).map((paragraph, index) => (
              <p key={index} className={index > 0 ? "mt-8" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
          {backgroundSteps && <BeforeSteps {...backgroundSteps} />}
          {backgroundFigure && !backgroundFigure.hidden && (
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
          {backgroundSteps?.termNote && (
            <TermNote parts={backgroundSteps.termNote} />
          )}
        </div>
      </CaseRow>
      {sections
        .filter((section) => !section.hidden)
        .map((section, index) => (
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
