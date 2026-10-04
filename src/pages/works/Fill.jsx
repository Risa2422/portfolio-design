import { useEffect } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import FadeInPageWrapper from "../../components/FadeInPageWrapper";
import InfoList from "../../components/InfoList";
import ZoomableImage from "../../components/ZoomableImage";
import { useLanguage } from "../../context/LanguageContext";
import { localizeImage } from "../../utils/localizeImage";

const content = {
  ja: {
    infoLabels: [
      {
        title: "担当範囲",
        value: "ワイヤーフレーム作成、派生画面のUIデザイン展開",
      },
      { title: "使用ツール", value: "Figma" },
      { title: "制作期間", value: "3ヶ月（2026年10月〜12月）" },
      {
        title: "チーム構成",
        value: "リードデザイナー1名、Webデザイナー（自身）1名、エンジニア1名",
      },
    ],
    title: "Webサイトリニューアル",
    subtitle: "自社Webサイト",
    overviewTitle: "プロジェクト概要",
    overviewText:
      "自社Webサイトのリニューアルプロジェクトにインターン生として参画しました。ワイヤーフレームの作成と、リードデザイナーが定義したデザインシステムおよびメインページをベースに、多数の派生画面のデザイン展開を担当しました。",
    siteLinkPrefix: "サイトは",
    siteLinkText: "こちら",
    siteLinkSuffix: "をご覧ください。",
    overviewImageLabel: "Webサイトの画像（準備中）",
    outputTitle: "成果物 (一部)",
    outputImageLabels: [
      { url: "inquiry", label: "お問い合わせページ" },
      { url: "information-request", label: "資料請求ページ" },
      { url: "recruit", label: "採用ページ" },
      { url: "about-us", label: "私たちについてページ" },
      { url: "blog", label: "ブログページ" },

      { url: "service", label: "サービスページ" },
    ],
    processTitle: "意識したこと",
    process: [
      {
        number: "①",
        title: "デザインシステムの理解とルールに沿ったUI設計",
        paragraphs: [
          "デザインシステムの全体像と各ページの役割・目的を把握した上で作業に入りました。エンジニアが実装で迷わないよう、Hover/Active/Disabledなどの状態変化やレスポンシブ時の挙動まで考慮し、一貫性のあるUI設計を徹底しました。",
        ],
      },
      {
        number: "②",
        title: "レビューを通じた学びの横展開",
        paragraphs: [
          "レビューでいただいた指摘やアドバイスは、「なぜその指摘を受けたのか」という背景を理解するよう心がけました。そうすることで他のページのデザインレビュー時に、同じ指摘を繰り返さないよう意識しました。",
        ],
      },
      {
        number: "③",
        title: "派生画面特有の情報設計とレイアウト工夫",
        paragraphs: [
          "メインページとは異なり、複雑なデータ表示（図形、フィルター、各種フォームなど）が必要になる画面では、全体のトーン＆マナーを崩さない範囲でレイアウトを工夫しました。直感的に操作できる情報設計を目指しつつ、CMSの仕様や実装上の制約についても事前に確認しながら進めました。",
        ],
      },
    ],
    resultsTitle: "学び",
    resultsText:
      "実務におけるデザインシステムの運用・理解が深まっただけでなく、「チームで働くデザイナー」として、仮説を持ったコミュニケーションや効率的なレビュープロセスの重要性を身をもって学ぶことができました。",
    home: "ホーム",
  },
  en: {
    infoLabels: [
      {
        title: "Scope of Work",
        value: "Wireframing and UI design for derivative pages",
      },
      { title: "Tools Used", value: "Figma" },
      { title: "Duration", value: "3 months (Oct - Dec 2026)" },
      {
        title: "Team",
        value: "1 Lead Designer, 1 Web Designer (myself), 1 Engineer",
      },
    ],
    title: "Website Redesign",
    subtitle: "Corporate Website",
    overviewTitle: "Project Overview",
    overviewText:
      "I joined our company's website redesign project as an intern. I was responsible for creating wireframes and for designing a large number of derivative pages, building on the design system and main page defined by the lead designer.",
    siteLinkPrefix: " You can view the site ",
    siteLinkText: "here",
    siteLinkSuffix: ".",
    overviewImageLabel: "Website image (coming soon)",
    outputTitle: "Deliverables (excerpt)",
    outputImageLabels: [
      { url: "inquiry", label: "Contact Page" },
      { url: "information-request", label: "Information Request Page" },
      { url: "recruit", label: "Careers Page" },
      { url: "about-us", label: "About Us Page" },
      { url: "blog", label: "Blog Page" },

      { url: "service", label: "Services Page" },
    ],
    processTitle: "What I Focused On",
    process: [
      {
        number: "1.",
        title:
          "Understanding the design system and designing UI within its rules",
        paragraphs: [
          "Before starting, I made sure to grasp the overall design system as well as the role and purpose of each page. So that engineers would never be unsure during implementation, I accounted for state changes such as hover, active, and disabled, as well as responsive behavior, keeping the UI consistent throughout.",
        ],
      },
      {
        number: "2.",
        title: "Applying lessons from reviews across other pages",
        paragraphs: [
          "For any feedback or advice I received in reviews, I made a point of understanding why it was given. This helped me avoid receiving the same feedback again when other pages were reviewed.",
        ],
      },
      {
        number: "3.",
        title:
          "Information architecture and layouts tailored to derivative pages",
        paragraphs: [
          "Unlike the main page, some pages required complex data displays (diagrams, filters, various forms, etc.). For these, I refined the layouts without breaking the overall tone and manner. While aiming for an intuitive information architecture, I also checked CMS specifications and implementation constraints in advance as I worked.",
        ],
      },
    ],
    resultsTitle: "Learnings",
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
        <Link
          to="/"
          className="block w-fit hover:opacity-80 px-6 md:px-16 lg:px-32 xl:px-[218px]"
        >
          <div className="flex items-center gap-1">
            <span className="flex items-center justify-center rounded-full w-6 h-6 bg-primary">
              <MdOutlineArrowBackIosNew className="w-5 h-3 text-white" />
            </span>
            <p className="text-base">{t.home}</p>
          </div>
        </Link>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-6 md:px-16 lg:px-32 xl:px-56 md:pt-12">
          <div className="md:w-1/2 flex-1 mb-4 md:mb-20 h-[300px]">
            <ZoomableImage
              src={localizeImage("/fill/thumbnail.png")}
              alt="Fill Project Thumbnail"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4 flex-1">
            <div className="space-y-3">
              <h1 className="text-2xl font-semibold">{t.title}</h1>
              <div className="h-[0.8px] bg-border mt-4" />
            </div>
            <InfoList items={infoItems} visible={false} />
          </div>
        </div>
        {/* Overview Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="flex items-stretch gap-3 text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.overviewTitle}
          </h2>
          <div className="flex flex-col gap-8 justify-center items-center">
            <p className="text-base leading-relaxed text-gray-700">
              {t.overviewText}
              <span>
                {t.siteLinkPrefix}
                <a
                  href="https://fill.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {t.siteLinkText}
                </a>
                {t.siteLinkSuffix}
              </span>
            </p>
          </div>
        </div>
        {/* Output Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20">
          <h2 className="flex items-stretch gap-3 text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.outputTitle}
          </h2>
          <div className="grid gap-10 items-start md:grid-cols-3">
            {t.outputImageLabels.map((label) => (
              <div>
                <p>{label.label}</p>
                <ZoomableImage
                  src={localizeImage(`/fill/${label.url}.png`)}
                  alt={label.label}
                  className="w-full h-full object-contain pt-1"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Design Process Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="flex items-stretch gap-3 text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.processTitle}
          </h2>
          <div className="space-y-8">
            {t.process.map((item) => (
              <div key={item.number} className="space-y-2">
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
          <h2 className="flex items-stretch gap-3 text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.resultsTitle}
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            {t.resultsText}
          </p>
          <Link to="/" className="hover:opacity-80 pt-20">
            <div className="flex items-center gap-1">
              <span className="flex items-center justify-center rounded-full w-6 h-6 bg-primary">
                <MdOutlineArrowBackIosNew className="w-5 h-3 text-white" />
              </span>
              <p className="text-base">{t.home}</p>
            </div>
          </Link>
        </div>
      </section>
    </FadeInPageWrapper>
  );
};

export default WebDesign;
