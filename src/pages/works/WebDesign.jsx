import { useEffect } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import Arrow from "../../components/Arrow";
import FadeInPageWrapper from "../../components/FadeInPageWrapper";
import InfoList from "../../components/InfoList";
import { useLanguage } from "../../context/LanguageContext";

const ImagePlaceholder = ({ label, className = "" }) => (
  <div
    className={`flex items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white text-center text-xs md:text-sm text-gray-400 ${className}`}
  >
    {label}
  </div>
);

const content = {
  ja: {
    infoLabels: [
      {
        title: "担当範囲",
        value:
          "派生画面のUIデザイン設計、コンポーネント展開、デザインガイドラインの適用",
      },
      { title: "使用ツール", value: "Figma" },
      { title: "制作期間", value: "3ヶ月（2026年10月〜12月）" },
      {
        title: "チーム構成",
        value:
          "リードデザイナー1名、Webデザイナー（自身）1名、エンジニア1名",
      },
    ],
    title: "Fill",
    subtitle: "自社Webサイト",
    overviewTitle: "プロジェクト概要",
    overviewText:
      "自社Webサイトのリニューアルプロジェクト。インターン生としてプロジェクトに参画し、リードデザイナーが定義した基本デザインシステムおよびメインページをベースに、多数の派生画面・管理画面のデザイン展開を担当しました。メインページのトーン＆マナーや主要なデザインルールは決定していたものの、事業展開に伴い、詳細設定・データ管理・編集フローといった複雑な派生画面を大量に作成する必要がありました。",
    overviewImageLabel: "Webサイトの画像（準備中）",
    outputTitle: "成果物",
    outputImageLabels: [
      "デザインしたページのスクリーンショット①（準備中）",
      "デザインしたページのスクリーンショット②（準備中）",
      "デザインしたページのスクリーンショット③（準備中）",
    ],
    processTitle: "デザインプロセスと意識したこと",
    process: [
      {
        number: "①",
        title: "デザインルール・システムのキャッチアップと厳格な適用",
        paragraphs: [
          "既存のFigmaライブラリ（カラー・タイポグラフィ・余白ルール・共通コンポーネント）の構造を深く理解した上でデザインに着手しました。単にパーツを配置するだけでなく、状態変化（Hover, Active, Disabledなど）やレスポンシブ時の挙動も含めて、ルールから外れない一貫性のあるUI設計を徹底しました。",
        ],
      },
      {
        number: "②",
        title:
          "メンターレビューにおける自発的な取り組み（コミュニケーションの工夫）",
        intro:
          "デザインの品質と制作スピードを両立させるため、レビューの受け方や意思疎通において以下の点に注力しました。",
        points: [
          {
            heading: "意思・仮説を持って相談する（A/B案の提示）",
            text: "指示待ちではなく、自分なりの意図と根拠を持ってレビューに臨みました。「メインページのルールを踏襲したA案」と「派生画面特有の情報密度に最適化したB案」のように複数パターンを作成し、「この画面の目的からはA案が適していると考えていますが、いかがでしょうか？」という形式で提案を行いました。",
          },
          {
            heading: "フィードバックの抽象化と他画面への即時展開",
            text: "1つの画面で受けた修正指示やアドバイスについて、「なぜその指摘を受けたのか」という本質的な理由・原則を言語化して理解しました。それにより、残り数十画面の制作にも即座にその考え方を横展開し、同じ指摘を繰り返さない再現性を意識しました。",
          },
        ],
      },
      {
        number: "③",
        title: "派生画面特有のUI/UXレイアウトの考案",
        paragraphs: [
          "メインページにはない複雑なデータ表示（テーブル、フィルタリング機能、入力フォームなど）が必要な画面では、既存のトーン＆マナーを崩さない範囲で情報設計を工夫し、直感的に操作できるレイアウトを構成しました。また、CMSとの連携制約の確認もしました。",
        ],
      },
    ],
    resultsTitle: "成果と学び",
    resultsText:
      "実務におけるデザインシステムの運用・理解が深まっただけでなく、「チームで働くデザイナー」として、仮説を持ったコミュニケーションや効率的なレビュープロセスの重要性を身をもって学ぶことができました。",
    home: "ホーム",
  },
  en: {
    infoLabels: [
      {
        title: "Scope of Work",
        value:
          "UI design for derivative screens, component rollout, and application of design guidelines",
      },
      { title: "Tools Used", value: "Figma" },
      { title: "Duration", value: "3 months (Oct - Dec 2026)" },
      {
        title: "Team",
        value: "1 Lead Designer, 1 Web Designer (myself), 1 Engineer",
      },
    ],
    title: "Fill",
    subtitle: "Corporate Website",
    overviewTitle: "Project Overview",
    overviewText:
      "A renewal project for our company website. I joined as an intern and, building on the core design system and main page already defined by the lead designer, took charge of designing a large number of derivative and admin screens. While the tone and manner and the key design rules had already been set on the main page, the growth of the business meant we needed to produce a large volume of complex derivative screens covering detailed settings, data management, and editing flows.",
    overviewImageLabel: "Website image (coming soon)",
    outputTitle: "Deliverables",
    outputImageLabels: [
      "Screenshot of a designed page ① (coming soon)",
      "Screenshot of a designed page ② (coming soon)",
      "Screenshot of a designed page ③ (coming soon)",
    ],
    processTitle: "Design Process & What I Focused On",
    process: [
      {
        number: "1.",
        title: "Thoroughly learning and applying the design rules and system",
        paragraphs: [
          "Before starting any design work, I made sure to deeply understand the structure of the existing Figma library (colors, typography, spacing rules, and shared components). Rather than simply placing parts, I made sure the UI stayed consistent with the rules, including state changes (hover, active, disabled, etc.) and responsive behavior.",
        ],
      },
      {
        number: "2.",
        title:
          "Being proactive in mentor reviews (communication approach)",
        intro:
          "To keep both quality and speed high, I focused on the following when receiving reviews and communicating with the team.",
        points: [
          {
            heading:
              "Bringing an opinion and a hypothesis to every discussion (proposing A/B options)",
            text: "Instead of waiting for instructions, I brought my own reasoning to reviews. I would create multiple patterns — for example, “Option A, which follows the main page's rules” and “Option B, optimized for this derivative screen's information density” — and propose them with a framing such as “Given the purpose of this screen, I think Option A is more suitable — what do you think?”",
          },
          {
            heading:
              "Abstracting feedback and applying it immediately to other screens",
            text: "For any correction or advice I received on one screen, I made sure to articulate the underlying reason or principle behind it. This let me immediately apply that thinking across the dozens of remaining screens, avoiding repeat feedback on the same issue.",
          },
        ],
      },
      {
        number: "3.",
        title: "Designing UI/UX layouts specific to derivative screens",
        paragraphs: [
          "For screens that needed complex data displays not found on the main page (tables, filtering, input forms, etc.), I devised information architecture that stayed within the existing tone and manner while remaining intuitive to use. I also confirmed constraints around CMS integration.",
        ],
      },
    ],
    resultsTitle: "Results & Learnings",
    resultsText:
      "Beyond deepening my practical understanding of operating a design system, I learned firsthand — as a designer working within a team — the importance of hypothesis-driven communication and an efficient review process.",
    home: "Home",
  },
};

const WebDesign = () => {
  const { language } = useLanguage();
  const t = content[language];
  const infoItems = t.infoLabels.map((label) => ({
    title: label.title,
    value: label.value,
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FadeInPageWrapper>
      <section className="space-y-10 md:space-y-4">
        <Arrow />
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-6 md:px-16 lg:px-32 xl:px-56 md:pt-12">
          <div className="md:w-1/2 flex-1 mb-4 md:mb-20 h-[300px]">
            <ImagePlaceholder
              label={t.subtitle}
              className="w-full h-full"
            />
          </div>
          <div className="space-y-4 flex-1">
            <div className="space-y-3">
              <h1 className="text-2xl font-semibold">{t.title}</h1>
              <div className="h-[0.8px] bg-border mt-4" />
            </div>
            <InfoList items={infoItems} />
          </div>
        </div>
        {/* Overview Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="flex items-stretch gap-3 text-lg md:text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.overviewTitle}
          </h2>
          <div className="flex flex-col gap-8 justify-center items-center">
            <p className="text-base leading-relaxed text-gray-700">
              {t.overviewText}
            </p>
            <ImagePlaceholder
              label={t.overviewImageLabel}
              className="w-full md:w-2/3 aspect-video"
            />
          </div>
        </div>
        {/* Output Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20">
          <h2 className="flex items-stretch gap-3 text-lg md:text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.outputTitle}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {t.outputImageLabels.map((label) => (
              <ImagePlaceholder key={label} label={label} className="aspect-video" />
            ))}
          </div>
        </div>
        {/* Design Process Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="flex items-stretch gap-3 text-lg md:text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.processTitle}
          </h2>
          <div className="space-y-12">
            {t.process.map((item) => (
              <div key={item.number} className="space-y-4">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  <span className="mr-2">{item.number}</span>
                  {item.title}
                </h3>
                {item.paragraphs?.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-base leading-relaxed text-gray-700"
                  >
                    {paragraph}
                  </p>
                ))}
                {item.intro && (
                  <p className="text-base leading-relaxed text-gray-700">
                    {item.intro}
                  </p>
                )}
                {item.points && (
                  <div className="space-y-6 pl-4 border-l-2 border-border">
                    {item.points.map((point) => (
                      <div key={point.heading} className="space-y-1">
                        <p className="text-sm md:text-base font-semibold text-gray-900">
                          {point.heading}
                        </p>
                        <p className="text-base leading-relaxed text-gray-700">
                          {point.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Results & Learnings Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20">
          <h2 className="flex items-stretch gap-3 text-lg md:text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.resultsTitle}
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            {t.resultsText}
          </p>
          <Link to="/" className="hover:opacity-80 pt-10">
            <div className="flex items-center gap-1">
              <span
                className="flex items-center justify-center rounded-full w-6 h-6"
                style={{ backgroundColor: "#746B60" }}
              >
                <MdOutlineArrowBackIosNew className="w-5 h-3 text-white" />
              </span>
              <p className="text-sm">{t.home}</p>
            </div>
          </Link>
        </div>
      </section>
    </FadeInPageWrapper>
  );
};

export default WebDesign;
