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
      { title: "サービス種別", value: "B2B SaaS / Webアプリケーション（PC）" },
      { title: "プロジェクト区分", value: "インハウスプロダクト開発" },
      { title: "期間", value: "8ヶ月（2025年11月 - 2026年6月）" },
      { title: "担当領域", value: "主要機能設計・既存画面のUI/UX改善" },
      { title: "使用ツール", value: "Figma, ChatGPT, Alloy" },
    ],
    title: "Mining Project",
    ProductOverview: "Product Overview",
    ProductOverviewText:
      "鉱山業界のプログラムマネージャーを対象としたプロジェクト管理プラットフォームです。従来、複数のツールに分散していたプロジェクト情報や進捗管理を一元化し、業務効率を大幅に向上させます。ITツールの導入が遅れがちな業界特性に配慮し、デジタル機器に不慣れなユーザーでも直感的に操作できるよう、既存のワークフローに寄り添ったストレスフリーなUI/UXデザインを実現しました。",
    productFlowTitle: "プロダクト開発の流れ",
    productFlowText:
      "    - 🖼️クライアント(SME)からのヒアリング (now, later, future) -> 課題特定、定義 -> 機能考案 -> ワイヤーフレーム、プロトタイプ作成 -> クライアントにプレゼン -> 実装 (ちょっとフロントエンドを手伝ったよ) -> テスト ",
    improvementsTitle: "改善案3案",
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
    teamCollabTitle: "チームコラボレーション",
    teamCollabText:
      "ダミーテキストです。チームコラボレーションについてここに記載します。エンジニアやPMとの連携方法やコミュニケーションの工夫について説明します。",
    aiUsageTitle: "AIをどう仕事に取り入れたか",
    aiUsageText:
      "- クライアントとの打ち合わせの際に使用するプロトタイプの作成 (AlloyとClause design, Figma make) - Edgeケースの洗い出し- いくつかのUIパターンの生成",
    learnings: "Learnings",
    learningsText:
      "リリース直前に退職したため、リアルユーザーの反応はわからないが、少なくとも前のプロダクトに比べたらユーザーのニーズを満たしたプロダクトを作成できたのではないかと思う。* 現在はパートナーのオンボーディング（導入）初期段階にあるため、定量的なユーザー指標（データ）はまだ得られていません。",
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
    title: "Mining Project",
    ProductOverview: "ProductOverview",
    ProductOverviewText: "",
    productFlowTitle: "Product Development Process",
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
    teamCollabTitle: "Team Collaboration",
    teamCollabText:
      "Dummy text. This section describes how I collaborated with engineers and PMs, and the communication practices used throughout the project.",
    aiUsageTitle: "How I Incorporated AI Into My Work",
    aiUsageText:
      "Dummy text. This section describes how AI was incorporated into daily work, specific use cases, and the impact it had.",
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
        {/* ProductOverview Section */}
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            {t.ProductOverview}
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            {t.ProductOverviewText}
          </p>
        </div>
        {/* Product Development Flow Section */}
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            {t.productFlowTitle}
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            {t.productFlowText}
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
        {/* Team Collaboration Section */}
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            {t.teamCollabTitle}
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            {t.teamCollabText}
          </p>
        </div>
        {/* AI Usage Section */}
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            {t.aiUsageTitle}
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            {t.aiUsageText}
          </p>
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
              <MdOutlineArrowBackIosNew className="w-5 h-3" />
              <p className="text-sm underline">{t.home}</p>
            </div>
          </Link>
        </div>
      </section>
    </FadeInPageWrapper>
  );
};

export default MiningProject;
