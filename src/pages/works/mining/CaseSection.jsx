import ZoomableImage from "../../../components/ZoomableImage";
import { useLanguage } from "../../../context/LanguageContext";
import { localizeImage } from "../../../utils/localizeImage";
import { caseThemes } from "./caseThemes";
import MarkerList from "./MarkerList";
import DotList from "./DotList";

const toParagraphs = (text) => (Array.isArray(text) ? text : [text]);

// Timeline item: a pill badge on the left rail with content beside it.
// line: "connect" runs the rail down to the next badge, "end" stops at the
// bottom of this item, and null draws no rail.
export function CaseBox({
  theme = "neutral",
  label,
  line = null,
  indent = true,
  children,
}) {
  const colors = caseThemes[theme];
  return (
    <div className="relative pt-2">
      <div
        className={`relative flex flex-col gap-6 pt-8 pb-6 pr-0 md:pr-6 ${
          indent ? "pl-4 md:pl-8" : ""
        }`}
      >
        <span
          className="absolute -left-[22px] -top-4 px-4 py-[2px] rounded-full font-semibold leading-7 whitespace-nowrap"
          style={{ backgroundColor: colors.badgeBg, color: colors.badgeText }}
        >
          {label}
        </span>
        {children}
      </div>
      {line && (
        <span
          aria-hidden="true"
          className={`absolute -left-1.5 top-6 w-[2px] ${
            line === "connect" ? "-bottom-10" : "bottom-1.5"
          }`}
          style={{ backgroundColor: `${colors.border}4D` }}
        />
      )}
    </div>
  );
}

function CaseSection({ section, line }) {
  const { language } = useLanguage();
  const colors = caseThemes[section.theme];
  const hasMessage = section.caption || section.headline || section.text;

  const media = (section.flowLabel || section.image) && (
    <div className="flex flex-col gap-4 items-start">
      {section.flowLabel && (
        <p
          className="px-3 py-1 rounded-full font-bold text-sm"
          style={{ backgroundColor: colors.pillBg, color: colors.pillText }}
        >
          {section.flowLabel}
        </p>
      )}
      {section.image && (
        <ZoomableImage
          src={localizeImage(section.image, language)}
          alt={section.alt}
          className={`${section.imageWidth ?? "w-full"} object-contain`}
        />
      )}
    </div>
  );

  // Findings: each thing learned paired with the decision it led to,
  // followed by a summary.
  if (section.pairs) {
    const { findingHeading, decisionHeading, items } = section.pairs;
    return (
      <CaseBox theme={section.theme} label={section.label} line={line}>
        <div className="flex flex-col gap-8 md:gap-12">
          {section.caption && (
            <p className="text-base leading-6">{section.caption}</p>
          )}
          <div>
            <div
              className="hidden md:flex gap-4 pb-2.5 border-b  font-bold"
              style={{ borderColor: colors.divider, color: colors.accent }}
            >
              <p className="flex-1">{findingHeading}</p>
              <span className="w-4 shrink-0" />
              <p className="flex-1">{decisionHeading}</p>
            </div>
            <ul>
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col md:flex-row gap-2 md:gap-4 py-[18px] border-b md:border-b-0 last:border-b-0 text-sm leading-[1.8]"
                  style={{ borderColor: colors.divider }}
                >
                  <div className="flex flex-1 gap-3 items-start min-w-0">
                    <p className="flex-1 min-w-0">{item.finding}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="pl-[30px] md:pl-0 text-base leading-normal shrink-0 rotate-90 md:rotate-0 self-start md:self-auto font-bold"
                  >
                    →
                  </span>
                  <p className="flex-1 min-w-0 pl-[30px] md:pl-0 font-bold">
                    {item.decision}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          {section.summary && (
            <div
              className="flex gap-2 items-start md:items-center px-5 py-4 rounded-[10px]"
              style={{ backgroundColor: colors.summaryBg }}
            >
              <img
                src="/mining/summary-dot.svg"
                alt=""
                width="10"
                height="10"
                className="shrink-0 mt-[9px] md:mt-0"
              />
              <p className="flex-1 min-w-0 text-[15px] font-medium leading-[1.8]">
                {section.summary}
              </p>
            </div>
          )}
        </div>
      </CaseBox>
    );
  }

  // Research: several studies, each with its source, what was learned and
  // an optional highlighted insight, separated by dashed rules.
  if (section.research) {
    return (
      <CaseBox theme={section.theme} label={section.label} line={line}>
        <div className="flex flex-col gap-6">
          {section.caption && (
            <p className="leading-[1.75]">{section.caption}</p>
          )}
          {section.research.map((study, index) => (
            <div key={index} className="flex flex-col gap-6">
              {index > 0 && (
                <hr className="border-0 border-t-2 border-dashed border-[#d1d5db]" />
              )}
              <div className="flex flex-col gap-8">
                <div>
                  <div className="flex gap-2 items-center">
                    <img
                      src="/mining/summary-dot.svg"
                      alt=""
                      width="10"
                      height="10"
                      className="shrink-0"
                    />
                    <p className="text-[17px] font-bold leading-[1.6]">
                      {study.title}
                    </p>
                  </div>
                  {study.description && (
                    <p className="text-sm pt-1 text-text-sub">
                      {study.description}
                    </p>
                  )}
                </div>
                <DotList items={study.items} />
                {study.insight && (
                  <div className="flex flex-col items-start gap-2">
                    {study.insightLabel && (
                      <span className="px-3 py-0.5 rounded-full border border-[#B37B19] bg-white text-[#B37B19] text-xs font-bold leading-[1.6]">
                        {study.insightLabel}
                      </span>
                    )}
                    <p className="text-[20px] font-bold leading-[1.65]">
                      <span className="box-decoration-clone px-1 -mx-1 rounded-[2px] bg-[linear-gradient(transparent_56%,rgba(245,223,168,0.7)_56%,rgba(245,223,168,0.7)_92%,transparent_92%)]">
                        {study.insight}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CaseBox>
    );
  }

  // Gallery: text beside a 2-column grid of reference screenshots.
  if (section.gallery) {
    return (
      <CaseBox theme={section.theme} label={section.label} line={line}>
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="flex-1 min-w-0 text-base leading-6">
            {toParagraphs(section.text).map((paragraph, index) => (
              <p key={index} className="pb-6">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-x-[7px] gap-y-[10px] w-full md:w-[505px] md:shrink-0">
            {section.gallery.map((image, index) => (
              <ZoomableImage
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-full object-cover object-top border"
              />
            ))}
          </div>
        </div>
      </CaseBox>
    );
  }

  const content = (
    <>
      {hasMessage && (
        <div className="flex flex-col gap-4">
          {section.caption && <p>{section.caption}</p>}
          {section.headline && (
            <p className="text-[20px] font-bold leading-[1.7] ">
              {section.headline}
            </p>
          )}
          {section.text && (
            <div className="leading-[1.8]">
              {toParagraphs(section.text).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      )}
      {section.list?.marker === "dot" && !section.list.heading ? (
        <DotList items={section.list.items.map((item) => item.text)} />
      ) : (
        section.list && (
          <MarkerList
            {...section.list}
            color={colors.accent}
            dividerColor={colors.divider}
          />
        )
      )}
      {section.footnote && (
        <p className="-mt-6 text-xs leading-normal">{section.footnote}</p>
      )}
    </>
  );

  // layout: "column" (default) stacks the image above the content;
  // "row" places them side by side on md and up.
  if (section.layout === "row") {
    return (
      <CaseBox theme={section.theme} label={section.label} line={line}>
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 md:items-start">
          {media && (
            <div className={`${section.mediaWidth ?? "md:w-1/2"} md:shrink-0`}>
              {media}
            </div>
          )}
          <div className="flex flex-col gap-12 flex-1 min-w-0">{content}</div>
        </div>
      </CaseBox>
    );
  }

  return (
    <CaseBox theme={section.theme} label={section.label} line={line}>
      {media}
      {content}
    </CaseBox>
  );
}

export default CaseSection;
