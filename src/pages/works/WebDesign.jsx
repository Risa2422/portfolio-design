import { useEffect } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import Arrow from "../../components/Arrow";
import FadeInPageWrapper from "../../components/FadeInPageWrapper";
import InfoList from "../../components/InfoList";
import { useLanguage } from "../../context/LanguageContext";
import { localizeImage } from "../../utils/localizeImage";

const content = {
  ja: {
    infoLabels: [
      { title: "サービス種別", value: "コーポレートサイト / Webサイト" },
      { title: "プロジェクト区分", value: "自社Webサイト制作" },
      { title: "期間", value: "3ヶ月（2025年10月 - 2026年12月）" },
      {
        title: "チーム構成",
        value:
          "リードデザイナー1名、Web UIデザイナー（自身）1名、エンジニア1名",
      },
      {
        title: "担当領域",
        value: "ワイヤーフレーム作成、派生画面のUIデザイン設計",
      },
      { title: "使用ツール", value: "Figma" },
    ],
    title: "Web Design",
    Overview: "Overview",
    OverviewText:
      "自社webサイトのリニューアルプロジェクト。 インターン生としてプロジェクトに参画し、リードデザイナーが定義した基本デザインシステムおよびメインページをベースに、多数の派生画面・管理画面のデザイン展開を担当しました。",
    output: "成果物",
    productFlowText:
      "    - 🖼️クライアント(SME)からのヒアリング (now, later, future) -> 課題特定、定義 -> 機能考案 -> ワイヤーフレーム、プロトタイプ作成 -> クライアントにプレゼン -> 実装 (ちょっとフロントエンドを手伝ったよ) -> テスト ",
    improvementsTitle: "デザインプロセスと意識したこと",
    improvements: [
      {
        title: "改善案1",
        description:
          "ダミーテキストです。改善案1の内容についてここに記載します。",
      },
      {
        title: "改善案2",
        description:
          "ダミーテキストです。改善案2の内容についてここに記載します。",
      },
      {
        title: "改善案3",
        description:
          "ダミーテキストです。改善案3の内容についてここに記載します。",
      },
    ],
    learnings: "学び",
    learningsText:
      "ダミーテキストです。学びについてここに記載します。エンジニアやPMとの連携方法やコミュニケーションの工夫について説明します。",
    home: "ホーム",
  },
  en: {
    infoLabels: [
      { title: "Service Type", value: "Web App / Mobile" },
      { title: "Project Format", value: "Feature Design" },
      { title: "Duration", value: "1 Day" },
      { title: "My Role", value: "UI/UX Design" },
      { title: "Tools Used", value: "Figma" },
    ],
    title: "Web design",
    Overview: "Overview",
    OverviewText: "",
    output: "Product Development Process",
    productFlowText:
      "Dummy text. This section describes the product development process, from requirements definition through release, and the work done at each phase.",
    improvementsTitle: "3 Improvement Proposals",
    improvements: [
      {
        title: "Proposal 1",
        description: "Dummy text describing improvement proposal 1.",
      },
      {
        title: "Proposal 2",
        description: "Dummy text describing improvement proposal 2.",
      },
      {
        title: "Proposal 3",
        description: "Dummy text describing improvement proposal 3.",
      },
    ],
    learnings: "Learnings",
    learningsText: "",
    home: "Home",
  },
};

const MiningProject = () => {
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
            <img
              src={localizeImage("/mining-project/thumbnail.png", language)}
              alt="Mining Project Thumbnail"
              className="w-full h-full object-contain"
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
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            {t.Overview}
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            {t.OverviewText}
          </p>
        </div>
        {/* Product Development Flow Section */}
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            {t.output}
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            <p>
              <a href="https://fill.jp/">
                リンクは<span className="text-blue-500">こちら</span>
              </a>
            </p>
          </p>
        </div>
        {/* Improvement Proposals Section */}
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            {t.improvementsTitle}
          </h2>
          <div className="w-full grid  gap-8">
            {t.improvements.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <p className="text-lg font-bold">{item.title}</p>
                <p className="text-base leading-relaxed text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learnings Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background">
          <h2 className="text-2xl text-center text-accent font-medium">
            {t.learnings}
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            {t.learningsText}
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

export default MiningProject;
