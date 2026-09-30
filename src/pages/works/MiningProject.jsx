import { useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { LuChevronDown } from "react-icons/lu";
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
      "スタートアップでのプロダクト開発であったため、基本的に要件定義からリリースまでの工程を全メンバーで協力して進めました。",
    improvementsTitle: "改善案3案",
    improvementsText: "今回は3つの改善案を提案しました。",
    improvements: [
      {
        title: "改善案1 - プログラム作成フロー簡略化",
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
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src="/mining/blurred_medium.png"
              className="md:w-1/2 object-contain"
              alt="ProductOverview"
            />
            <p className="text-base leading-relaxed text-gray-700 md:w-1/2">
              {t.ProductOverviewText}
            </p>
          </div>
        </div>
        {/* Product Development Flow Section */}
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            {t.productFlowTitle}
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <img src="/mining/product-flow.png" className="rounded-lg w-2/3" />
            <p className="text-base leading-relaxed text-gray-700">
              {t.productFlowText}
            </p>
          </div>
        </div>
        {/* Improvement Proposals Section */}
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            {t.improvementsTitle}
          </h2>
          <div className="space-y-24">
            <div>
              {/* 改善案1 */}
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-6 bg-teal-700"></span>
                  <h2 className="text-lg md:text-2xl font-semibold">
                    改善案1: プログラム作成フロー簡略化
                    (予算作成画面にどれだけ早く辿り着けるか)
                  </h2>
                </div>
                <p>改善案1の詳細な説明がここに記載されます。</p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    label: "Before /",
                    badgeClass: "bg-blue-700 border-blue-700",
                    image: "/mining/creation-flow-before.svg",
                    heading: "課題",
                    items: [
                      "プログラム作成までに時間がかかっていた。",
                      "プログラムを作成するフローが画面遷移のため、似たよ...",
                      "必須入力項目が多かった",
                      "他のプログラム名の名前がわからない",
                    ],
                  },
                  {
                    label: "After /",
                    badgeClass: "bg-green-700 border-green-700",
                    image: "/mining/creation-flow-after.svg",
                    heading: "改善内容",
                    items: [
                      "プログラム作成までに時間がかかっていた。",
                      "プログラムを作成するフローが画面遷移のため、似たよ...",
                      "必須入力項目が多かった",
                      "他のプログラム名の名前がわからない",
                    ],
                  },
                ].map((flow, idx) => (
                  <div key={flow.label}>
                    <div className="space-y-4">
                      <p
                        className={`w-fit py-1 px-4 border text-white text-xl font-semibold rounded-full ${flow.badgeClass}`}
                      >
                        {flow.label}
                      </p>
                      <div className="space-y-6">
                        <img
                          src={flow.image}
                          className="w-full h-full object-contain"
                          alt="image of program creation flow"
                        />
                        <div className="space-y-2">
                          <div className="flex items-center gap-1">
                            <span className="inline-block w-3 h-3 rounded-full bg-slate-600 shrink-0"></span>
                            <h3 className="text-lg font-bold">
                              {flow.heading}
                            </h3>
                          </div>
                          <ul className="list-disc list-inside space-y-1 pl-1">
                            {flow.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {idx === 0 && (
                      <div className="flex flex-col justify-center items-center gap-2 mt-6">
                        <LuChevronDown className="w-12 h-12" strokeWidth={1.5} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              {/* 改善案2 */}
              <h2>改善案2 - 予算管理画面の改善</h2>
              <p>改善案2の詳細な説明がここに記載されます。</p>
              <div className="">
                <div className="flex flex-col md:flex-row gap-4">
                  <img
                    src="/mining/cost-management-before.png"
                    alt=""
                    className="w-1/2"
                  />
                  <div>
                    <p>
                      改善前の画面の説明改善前の画面の説明改善前の画面の説明改善前の画面の説明
                    </p>
                    <div>
                      <p className="flex text-3xl items-center gap-2 italic text-gray-600">
                        <FaQuoteLeft className="w-3 h-3 shrink-0" />
                        これはいらないな
                        <FaQuoteRight className="w-3 h-3 shrink-0" />
                      </p>
                      <p className="flex text-3xl items-center gap-2 italic text-gray-600">
                        <FaQuoteLeft className="w-3 h-3 shrink-0" />
                        これはいらないな
                        <FaQuoteRight className="w-3 h-3 shrink-0" />
                      </p>
                    </div>
                  </div>
                </div>

                <h4>修正後</h4>
                <div className="flex flex-col md:flex-row gap-4">
                  <img
                    src="/mining/cost-management-after.png"
                    className="w-2/3"
                    alt=""
                  />
                  <ul>
                    <li>改善内容1</li>
                    <li>改善内容2</li>
                    <li>改善内容3</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              {/* 改善案3 */}
              <h2>改善案3 - 新機能追加</h2>
              <p>改善案3の詳細な説明がここに記載されます。</p>

              <div>
                <h4>1. ヒアリング</h4>
                <p className="flex text-3xl items-center gap-2 italic text-gray-600">
                  <FaQuoteLeft className="w-3 h-3 shrink-0" />
                  これはいらないな
                  <FaQuoteRight className="w-3 h-3 shrink-0" />
                </p>
                <p className="flex text-3xl items-center gap-2 italic text-gray-600">
                  <FaQuoteLeft className="w-3 h-3 shrink-0" />
                  これはいらないな
                  <FaQuoteRight className="w-3 h-3 shrink-0" />
                </p>
              </div>
              <div>
                <h4>2.ユーザーストーリーの作成</h4>
                <img src="/mining/user-story.png" alt="" />
              </div>
              <div>
                <h4>3.UI作成</h4>
                <img src="/mining/draft-mode.png" alt="" />
                <ul className="list-disc">
                  <li>改善内容1</li>
                  <li>改善内容2</li>
                  <li>改善内容3</li>
                </ul>
              </div>
            </div>

            {/* <p>{t.improvementsText}</p>
          <div className="w-full grid  gap-8">
            {t.improvements.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <p className="text-lg font-bold">{item.title}</p>
                <p className="text-base leading-relaxed text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div> */}
          </div>
        </div>

        {/* AI Usage Section */}
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            {t.aiUsageTitle}
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            {t.aiUsageText}
          </p>
        </div>
        {/* Learnings Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
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
