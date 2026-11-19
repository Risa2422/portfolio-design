import { useState } from "react";
import ZoomableImage from "../../../components/ZoomableImage";
import PinnedScroll from "./PinnedScroll";
import { useLanguage } from "../../../context/LanguageContext";
import { localizeImage } from "../../../utils/localizeImage";
import { caseThemes } from "./caseThemes";
import DotList from "./DotList";
import MarkerList from "./MarkerList";

const toParagraphs = (text) => (Array.isArray(text) ? text : [text]);

// One row of a case study: an English eyebrow and the section title above
// the content. CaseStudy separates rows with horizontal rules; a `joined`
// row continues the previous one without a rule.
export function CaseRow({
  eyebrow,
  label,
  note,
  joined,
  className = "",
  children,
}) {
  return (
    <div
      className={`flex flex-col gap-4 py-12 px-6 ${
        joined ? "!bg-none !pt-0" : ""
      } ${className}`}
    >
      {(eyebrow || label || note) && (
        <div className="flex flex-col">
          {eyebrow && (
            <p className="text-xs font-semibold text-[#005989] uppercase">
              {eyebrow}
            </p>
          )}
          {label && (
            <h3
              className={`font-bold ${
                joined ? "text-lg" : "text-xl case-row-title"
              }`}
            >
              {label}
            </h3>
          )}
          {note && <p className="pt-1 text-xs text-[#7a6a5f]">{note}</p>}
        </div>
      )}
      <div className="flex flex-col flex-1 min-w-0">{children}</div>
    </div>
  );
}

// A step screenshot. Shows a placeholder until the file exists, so steps
// can point at images that haven't been added yet. Every step is shown at
// the same 1305:854 ratio, top-aligned, so screenshots exported with extra
// blank space at the bottom (e.g. 1305x904) line up with the others.
function StepImage({ src, alt }) {
  const [failedSrc, setFailedSrc] = useState(null);
  if (!src || failedSrc === src) {
    return (
      <div className="flex items-center justify-center w-full aspect-[1305/854] border border-dashed border-[#c9c9c9] bg-[#f5f5f5] text-xs text-text-sub">
        Image
      </div>
    );
  }
  return (
    <ZoomableImage
      src={src}
      alt={alt}
      className="w-full aspect-[1305/854] object-cover object-top"
      onError={() => setFailedSrc(src)}
    />
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
      {section.imageLead && (
        <p className="leading-loose">{section.imageLead}</p>
      )}
      {section.image &&
        (section.imageCaption ? (
          <figure
            className={`${section.imageWidth ?? "w-full"} flex flex-col gap-1`}
          >
            <ZoomableImage
              src={localizeImage(section.image, language)}
              alt={section.alt}
              className="w-full object-contain"
            />
            <figcaption className="text-xs text-text-sub py-1 text-center">
              {section.imageCaption}
            </figcaption>
          </figure>
        ) : section.imageScrollHeight ? (
          // Tall images sit in a fixed-height frame; PinnedScroll scrolls
          // them with the page while the section is pinned
          <div
            data-pin-frame
            className={`${section.imageWidth ?? "w-full"} ${section.imageScrollHeight} overflow-hidden rounded-lg border border-[#C2C2C2] bg-white`}
          >
            <div data-pin-content className="will-change-transform">
              <ZoomableImage
                src={localizeImage(section.image, language)}
                alt={section.alt}
                className="block w-full h-auto"
              />
            </div>
          </div>
        ) : (
          <ZoomableImage
            src={localizeImage(section.image, language)}
            alt={section.alt}
            className={`${section.imageWidth ?? "w-full"} object-contain`}
          />
        ))}
    </div>
  );

  // Findings: each thing learned paired with the decision it led to,
  // followed by a summary.
  if (section.pairs) {
    const { findingHeading, decisionHeading, items } = section.pairs;
    return (
      <CaseRow
        eyebrow={section.eyebrow}
        label={section.label}
        joined={section.joinPrevious}
      >
        <div className="flex flex-col gap-4 md:gap-6">
          {section.caption && (
            <p className="text-base leading-loose">{section.caption}</p>
          )}
          {/* Same table style as the client challenges table on the page */}
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[560px] table-fixed border-collapse text-left">
              <colgroup>
                <col className="w-1/2" />
                <col className="w-1/2" />
              </colgroup>
              <thead>
                <tr className="h-[48px] border-b-[1px] border-[#8a8a8a]">
                  {[findingHeading, decisionHeading].map((header, i) => (
                    <th key={header} scope="col" className="pb-4">
                      <span
                        className={`items-center justify-center px-3 py-1 rounded-full border text-xs font-bold text-white whitespace-nowrap ${
                          i < 1 ? "bg-[#7e8284]" : "bg-[#005989]"
                        }`}
                      >
                        {header}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr
                    key={i}
                    className={`h-[70px] ${
                      i < items.length - 1
                        ? "border-b border-dashed border-[#8a8a8a]"
                        : ""
                    }`}
                  >
                    <th
                      scope="row"
                      className="py-4 pr-6 text-sm font-normal leading-relaxed align-top"
                    >
                      {item.finding}
                    </th>
                    <td className="py-4 font-semibold text-sm align-middle">
                      {item.decision}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
      <CaseRow
        eyebrow={section.eyebrow}
        label={section.label}
        joined={section.joinPrevious}
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <h4 className="text-base font-bold leading-normal">
              {problem.heading}
            </h4>
            <p className="leading-loose">{problem.text}</p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-base font-bold leading-normal">
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
      <CaseRow
        eyebrow={section.eyebrow}
        label={section.label}
        joined={section.joinPrevious}
      >
        <div className="flex flex-col gap-6">
          {section.caption && (
            <p className="leading-loose">{section.caption}</p>
          )}
          {section.research.map((study, index) => (
            <div key={index} className="flex flex-col gap-10">
              {index > 0 && <hr className="border-[0.5px] border-[#d1d5db]" />}
              <div className="flex flex-col gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex gap-2 items-center">
                      <p className="font-bold leading-normal">{study.title}</p>
                    </div>
                    {study.description && (
                      <p className="pt-1 leading-loose whitespace-pre-line">
                        {study.description}
                      </p>
                    )}
                  </div>
                  <div
                    className={
                      study.image
                        ? "flex flex-col md:flex-row gap-6 md:items-start"
                        : ""
                    }
                  >
                    {study.image && (
                      <figure
                        className={`${study.imageWidth ?? "w-full md:w-1/2"} md:shrink-0 flex flex-col gap-1`}
                      >
                        <ZoomableImage
                          src={study.image}
                          alt={study.alt}
                          className="w-full h-auto block border border-[#98999b]"
                        />
                        {study.imageCaption && (
                          <figcaption className="text-xs text-text-sub py-1">
                            {study.imageCaption}
                          </figcaption>
                        )}
                      </figure>
                    )}
                    <div className="flex-1 min-w-0">
                      {study.itemsImage ? (
                        <img
                          src={study.itemsImage}
                          alt={study.items.join("\n")}
                          className="w-full h-auto"
                        />
                      ) : (
                        <ul className="flex flex-col gap-4 pl-6 list-disc marker:text-text">
                          {study.items.map((item, index) => (
                            <li key={index} className="leading-relaxed">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {study.insight && (
                        <div className="flex flex-col items-start gap-2 mt-8">
                          {study.insightLabel && (
                            <span className="shrink-0 px-3 py-0.5 rounded-full border border-primary bg-white text-primary text-xs font-bold leading-[1.6]">
                              {study.insightLabel}
                            </span>
                          )}
                          <p className="text-lg font-bold leading-loose">
                            <span className="box-decoration-clone px-1 -mx-1 rounded-[2px] bg-[linear-gradient(transparent_56%,rgba(229,76,48,0.2)_56%,rgba(229,76,48,0.2)_92%,transparent_92%)]">
                              {study.insight}
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CaseRow>
    );
  }

  // Steps: a scenario walked through in screenshots, laid out two per row
  // in a zigzag (→ across a row, ↙ down to the next row). Steps without an
  // image show a placeholder. On mobile the steps stack with ↓ between.
  if (section.steps) {
    const rows = [];
    for (let i = 0; i < section.steps.length; i += 2) {
      rows.push(section.steps.slice(i, i + 2));
    }
    const downArrow = (
      <img
        src="/mining/step-arrow-dash.svg"
        alt=""
        aria-hidden="true"
        width="117"
        height="14.7279"
        className="md:hidden self-center justify-self-center rotate-90 w-12 h-auto my-8"
      />
    );
    // Each step is split into title / image / caption cells so that, on md
    // and up, a row's two steps share grid rows: their images start at the
    // same height even when one title wraps. On mobile the cells simply
    // stack in DOM order.
    const placement = [
      [
        "md:col-start-1 md:row-start-1",
        "md:col-start-1 md:row-start-2",
        "md:col-start-1 md:row-start-3",
      ],
      [
        "md:col-start-3 md:row-start-1",
        "md:col-start-3 md:row-start-2",
        "md:col-start-3 md:row-start-3",
      ],
    ];
    const renderStep = (step, col) => [
      <p key="title" className={`font-bold leading-loose ${placement[col][0]}`}>
        {step.title}
      </p>,
      <div key="image" className={placement[col][1]}>
        <StepImage
          src={step.image && localizeImage(step.image, language)}
          alt={step.alt}
        />
      </div>,
      <div key="caption" className={`pt-2 ${placement[col][2]}`}>
        {step.caption && (
          <div className="flex items-start gap-2">
            {step.caption.marker && (
              <span className="flex items-center justify-center size-[18px] shrink-0 mt-0.5 rounded-full bg-primary text-white text-[10px] font-bold leading-none">
                {step.caption.marker}
              </span>
            )}
            <p className="flex-1 min-w-0 text-sm leading-relaxed">
              {step.caption.text}
            </p>
          </div>
        )}
      </div>,
    ];
    return (
      <CaseRow
        eyebrow={section.eyebrow}
        label={section.label}
        joined={section.joinPrevious}
      >
        <div className="flex flex-col gap-10">
          {section.flowLabel && (
            <p className="leading-loose">{section.flowLabel}</p>
          )}
          <div className="flex flex-col">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-col">
                {rowIndex > 0 && (
                  <>
                    <img
                      src="/mining/step-arrow-dash.svg"
                      alt=""
                      aria-hidden="true"
                      width="117"
                      height="14.7279"
                      className="hidden md:block self-center w-16 h-auto my-4 rotate-[165deg]"
                    />
                    {downArrow}
                  </>
                )}
                <div className="grid grid-cols-1 md:grid-cols-[45%_1fr_45%]">
                  {renderStep(row[0], 0)}
                  {row[1] && (
                    <>
                      <img
                        src="/mining/step-arrow-dash.svg"
                        alt=""
                        aria-hidden="true"
                        width="117"
                        height="14.7279"
                        className="hidden md:block md:col-start-2 md:row-start-2 self-center justify-self-center w-16 h-auto"
                      />
                      {downArrow}
                      {renderStep(row[1], 1)}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CaseRow>
    );
  }

  // Gallery: text above a single row of reference screenshots.
  if (section.gallery) {
    return (
      <CaseRow
        eyebrow={section.eyebrow}
        label={section.label}
        joined={section.joinPrevious}
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col text-base leading-loose">
            {toParagraphs(section.text).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[7px] gap-y-[10px] w-full">
            {section.gallery.map((image, index) => {
              const figure = (
                <figure
                  key={image.points ? undefined : index}
                  className={`flex flex-col gap-1 ${
                    image.points ? "w-full md:flex-1 md:min-w-0" : ""
                  }`}
                >
                  {image.title && (
                    <p className="font-medium leading-normal pb-1">
                      {image.title}
                    </p>
                  )}
                  <div className="relative">
                    <ZoomableImage
                      src={image.src}
                      alt={image.alt}
                      className="w-full object-cover object-top border"
                    />
                    {image.points?.items.map(
                      (point, i) =>
                        point.highlight && (
                          <div
                            key={i}
                            aria-hidden="true"
                            className="absolute right-0 pointer-events-none border-2 border-primary rounded-[3px]"
                            style={{
                              top: point.highlight.top,
                              height: point.highlight.height,
                              left: point.highlight.left,
                            }}
                          >
                            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-1.5 flex items-center justify-center size-5 md:size-6 rounded-full bg-primary text-white text-xs font-bold leading-none">
                              {i + 1}
                            </span>
                          </div>
                        ),
                    )}
                  </div>
                  {image.caption && (
                    <figcaption className="text-xs text-text-sub py-1">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              );
              if (!image.points) return figure;
              // An image with numbered points spans the full row: the
              // annotated screenshot on the left, what was taken from each
              // numbered spot on the right.
              return (
                <div
                  key={index}
                  className="col-span-2 md:col-span-3 flex flex-col md:flex-row gap-6 md:gap-10 md:items-start"
                >
                  {figure}
                  <div className="flex flex-col items-start gap-4 flex-1 min-w-0">
                    <span className="px-3 py-0.5 rounded-full border border-primary bg-white text-primary text-xs font-bold leading-[1.6]">
                      {image.points.label}
                    </span>
                    {image.points.items.map((point, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <span className="flex items-center justify-center size-6 shrink-0 rounded-full bg-primary text-white text-sm font-bold leading-none">
                            {i + 1}
                          </span>
                          <p className="text-lg font-bold leading-normal">
                            {point.title}
                          </p>
                        </div>
                        <p className="leading-loose">{point.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CaseRow>
    );
  }

  // A column-layout section whose list has its own heading and eyebrow is
  // split into two rows: the flow/image first, then the list (e.g. BEFORE → ISSUES).
  const splitList =
    section.layout !== "row" &&
    section.list?.heading &&
    (section.list?.eyebrow || section.list?.joinPrevious);

  const listNode =
    section.list &&
    (section.list.itemsImage ? (
      <img
        src={section.list.itemsImage}
        alt={section.list.items.map((item) => item.text).join("\n")}
        className={`w-full h-auto ${hasMessage ? "mt-6" : ""}`}
      />
    ) : section.list.marker === "dot" &&
      !section.list.items.some((item) => item.title) ? (
      <DotList
        items={section.list.items.map((item) => item.text)}
        className={hasMessage ? "mt-6" : ""}
      />
    ) : (
      <MarkerList
        {...section.list}
        // With hideHeading the list keeps its title inside the list itself
        // (no separate numbered row title)
        heading={
          splitList && !section.list.hideHeading
            ? undefined
            : section.list.heading
        }
        note={
          splitList && !section.list.hideHeading ? undefined : section.list.note
        }
        color={colors.accent}
        dividerColor={colors.divider}
      />
    ));

  const content = (
    <>
      {hasMessage && (
        <div
          className={`flex flex-col gap-4 ${
            media && section.layout !== "row" && !section.textFirst
              ? "mt-8"
              : ""
          }`}
        >
          {section.caption && (
            <p className="leading-loose">{section.caption}</p>
          )}
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
      <CaseRow
        eyebrow={section.eyebrow}
        label={section.label}
        joined={section.joinPrevious}
      >
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
    const mainRow = (
      <CaseRow
        eyebrow={section.eyebrow}
        label={section.label}
        joined={section.joinPrevious}
      >
        {media}
        {content}
      </CaseRow>
    );
    return (
      <>
        {section.imageScrollHeight ? (
          <PinnedScroll>{mainRow}</PinnedScroll>
        ) : (
          mainRow
        )}
        <CaseRow
          eyebrow={section.list.hideHeading ? undefined : section.list.eyebrow}
          label={section.list.hideHeading ? undefined : section.list.heading}
          note={section.list.hideHeading ? undefined : section.list.note}
          joined={section.list.joinPrevious || section.list.hideHeading}
        >
          {listNode}
        </CaseRow>
      </>
    );
  }

  return (
    <CaseRow
      eyebrow={section.eyebrow}
      label={section.label}
      joined={section.joinPrevious}
    >
      {section.textFirst ? (
        <>
          {content}
          {media && <div className="mt-8">{media}</div>}
        </>
      ) : (
        <>
          {media}
          {content}
        </>
      )}
    </CaseRow>
  );
}

export default CaseSection;
