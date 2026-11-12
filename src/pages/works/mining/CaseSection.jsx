import ZoomableImage from "../../../components/ZoomableImage";
import { useLanguage } from "../../../context/LanguageContext";
import { localizeImage } from "../../../utils/localizeImage";
import { caseThemes } from "./caseThemes";
import DotList from "./DotList";
import MarkerList from "./MarkerList";

const toParagraphs = (text) => (Array.isArray(text) ? text : [text]);

// One row of a case study: an English eyebrow and the section title on the
// left, the content on the right (stacked on mobile). CaseStudy separates
// rows with horizontal rules.
export function CaseRow({ eyebrow, label, note, children }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 py-8">
      <div className="flex flex-col gap-0.5 md:w-[160px] md:shrink-0">
        {eyebrow && (
          <p className="text-[10.5px] font-bold tracking-wider text-primary uppercase leading-normal">
            {eyebrow}
          </p>
        )}
        <h3 className="text-[15px] font-bold text-[#222] leading-normal">
          {label}
        </h3>
        {note && <p className="pt-1 text-xs text-[#7a6a5f]">{note}</p>}
      </div>
      <div className="flex flex-col gap-6 flex-1 min-w-0">{children}</div>
    </div>
  );
}

function CaseSection({ section }) {
  const { language } = useLanguage();
  const colors = caseThemes[section.theme];
  const hasMessage = section.caption || section.headline || section.text;

  const media = (section.flowLabel || section.image) && (
    <div
      className={`flex flex-col items-start ${
        section.flowLabel ? "gap-2" : "gap-8"
      }`}
    >
      {section.flowLabel && (
        <p className="leading-loose">{section.flowLabel}</p>
      )}
      {section.imageLead && <p>{section.imageLead}</p>}
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
      <CaseRow eyebrow={section.eyebrow} label={section.label}>
        <div className="flex flex-col gap-8 md:gap-12">
          {section.caption && (
            <p className="text-base leading-loose">{section.caption}</p>
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
                  className="flex flex-col md:flex-row gap-2 md:gap-4 py-[18px] border-b md:border-b-0 last:border-b-0 text-sm leading-loose"
                  style={{ borderColor: colors.divider }}
                >
                  <div className="flex flex-1 gap-3 items-start min-w-0">
                    <img
                      src="/mining/list-dot.svg"
                      alt=""
                      width="8"
                      height="26.25"
                      className="shrink-0 mt-px"
                    />
                    <p className="flex-1 min-w-0">{item.finding}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="md:pl-0 text-base leading-normal shrink-0 rotate-90 md:rotate-0 self-start md:self-auto font-bold"
                  >
                    →
                  </span>
                  <p className="flex-1 min-w-0 md:pl-0 font-bold">
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
              <p className="flex-1 min-w-0 text-[15px] font-medium leading-loose">
                {section.summary}
              </p>
            </div>
          )}
        </div>
      </CaseRow>
    );
  }

  // Constraint: a problem statement followed by a solution that pairs a
  // screenshot with a numbered list of what was designed.
  if (section.constraint) {
    const { problem, solution } = section.constraint;
    return (
      <CaseRow eyebrow={section.eyebrow} label={section.label}>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-bold leading-loose">
              {problem.heading}
            </h4>
            <p className="leading-loose">{problem.text}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-bold leading-loose">
              {solution.heading}
            </h4>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="flex-1 min-w-0">
                <MarkerList
                  items={solution.items}
                  marker="letter"
                  color={colors.accent}
                  dividerColor={colors.divider}
                />
              </div>
              <ZoomableImage
                src={localizeImage(solution.image, language)}
                alt={solution.alt}
                className="w-full md:w-1/2 md:shrink-0  object-contain"
              />
            </div>
          </div>
        </div>
      </CaseRow>
    );
  }

  // Research: several studies, each with its source, what was learned and
  // an optional highlighted insight, separated by dashed rules.
  if (section.research) {
    return (
      <CaseRow eyebrow={section.eyebrow} label={section.label}>
        <div className="flex flex-col gap-6">
          {section.caption && (
            <p className="leading-loose">{section.caption}</p>
          )}
          {section.research.map((study, index) => (
            <div key={index} className="flex flex-col gap-10">
              {index > 0 && (
                <hr className="border-0 border-t-2 border-dashed border-[#d1d5db]" />
              )}
              <div className="flex flex-col gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex gap-2 items-center">
                      <p className="text-[16px] font-bold leading-loose">
                        {study.title}
                      </p>
                    </div>
                    {study.description && (
                      <p className="pt-2 leading-loose whitespace-pre-line">
                        {study.description}
                      </p>
                    )}
                  </div>
                  <DotList items={study.items} />
                </div>
                {study.insight && (
                  <div className="flex flex-col items-start gap-2">
                    {study.insightLabel && (
                      <span className="px-3 py-0.5 rounded-full border border-[#B37B19] bg-white text-[#B37B19] text-xs font-bold leading-[1.6]">
                        {study.insightLabel}
                      </span>
                    )}
                    <p className="text-[20px] font-bold leading-loose">
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
      </CaseRow>
    );
  }

  // Gallery: text above a single row of reference screenshots.
  if (section.gallery) {
    return (
      <CaseRow eyebrow={section.eyebrow} label={section.label}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 text-base leading-loose">
            {toParagraphs(section.text).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[7px] gap-y-[10px] w-full">
            {section.gallery.map((image, index) => (
              <figure key={index} className="flex flex-col gap-1">
                <ZoomableImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover object-top border"
                />
                {image.caption && (
                  <figcaption className="text-xs text-text-sub py-1">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      </CaseRow>
    );
  }

  // A column-layout section whose list has its own heading and eyebrow is
  // split into two rows: the flow/image first, then the list (e.g. BEFORE → ISSUES).
  const splitList =
    section.layout !== "row" && section.list?.heading && section.list?.eyebrow;

  const listNode =
    section.list &&
    (section.list.marker === "dot" && !section.list.heading ? (
      <DotList items={section.list.items.map((item) => item.text)} />
    ) : (
      <MarkerList
        {...section.list}
        heading={splitList ? undefined : section.list.heading}
        note={splitList ? undefined : section.list.note}
        color={colors.accent}
        dividerColor={colors.divider}
      />
    ));

  const content = (
    <>
      {hasMessage && (
        <div className="flex flex-col gap-4">
          {section.caption && <p>{section.caption}</p>}
          {section.headline && (
            <p className="text-[20px] font-bold leading-loose">
              {section.headline}
            </p>
          )}
          {section.text && (
            <div className="leading-loose">
              {toParagraphs(section.text).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      )}
      {!splitList && listNode}
      {section.footnote && (
        <p className="-mt-6 text-xs leading-normal">{section.footnote}</p>
      )}
    </>
  );

  // layout: "column" (default) stacks the image above the content;
  // "row" places them side by side on md and up.
  if (section.layout === "row") {
    return (
      <CaseRow eyebrow={section.eyebrow} label={section.label}>
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 md:items-start">
          {media && (
            <div className={`${section.mediaWidth ?? "md:w-1/2"} md:shrink-0`}>
              {media}
            </div>
          )}
          <div className="flex flex-col gap-12 flex-1 min-w-0">{content}</div>
        </div>
      </CaseRow>
    );
  }

  if (splitList) {
    return (
      <>
        <CaseRow eyebrow={section.eyebrow} label={section.label}>
          {media}
          {content}
        </CaseRow>
        <CaseRow
          eyebrow={section.list.eyebrow}
          label={section.list.heading}
          note={section.list.note}
        >
          {listNode}
        </CaseRow>
      </>
    );
  }

  return (
    <CaseRow eyebrow={section.eyebrow} label={section.label}>
      {media}
      {content}
    </CaseRow>
  );
}

export default CaseSection;
