import { useEffect, useState } from "react";
import {
  FaCaretDown,
  FaMinus,
  FaPlus,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
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

  const [openSections, setOpenSections] = useState({
    1: false,
    2: false,
    3: false,
  });
  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
          <div className="flex flex-col gap-8 justify-center items-center">
            <p className="text-base leading-relaxed text-gray-700 ">
              {t.ProductOverviewText}
            </p>
            <img
              src="/mining/blurred_medium.png"
              className="md:w-1/2 object-contain"
              alt="ProductOverview"
            />
          </div>
        </div>
        {/* Product Development Flow Section */}
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            {t.productFlowTitle}
          </h2>
          <div className="flex flex-col items-center gap-8">
            <p className="text-base leading-relaxed text-gray-700">
              {t.productFlowText}
            </p>
            <img src="/mining/product-flow.svg" className="rounded-lg w-23" />
          </div>
        </div>
        {/* Improvement Proposals Section */}
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            {t.improvementsTitle}
          </h2>
          <div className="space-y-4 w-full">
            <div className="w-full bg-white border border-gray-300 border-l-8 border-l-teal-700 rounded-lg p-4">
              {/* 改善案1 */}
              <button
                type="button"
                onClick={() => toggleSection(1)}
                aria-expanded={openSections[1]}
                className="w-full flex justify-between items-center gap-4 cursor-pointer"
              >
                <div className="flex flex-col items-start">
                  <h2 className="text-lg md:text-xl font-semibold">
                    プログラム作成フロー簡略化
                  </h2>
                  <p className="text-gray-700 text-sm p-1 ">
                    フローを簡潔化しました。
                  </p>
                </div>
                {openSections[1] ? (
                  <FaMinus className="w-5 h-5 shrink-0 text-teal-700" />
                ) : (
                  <FaPlus className="w-5 h-5 shrink-0 text-teal-700" />
                )}
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openSections[1]
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <hr className="border-t-2 border-dotted border-gray-300 my-4" />
                  <p className="my-6">
                    改善案1の詳細な説明がここに記載されます。
                  </p>
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
                            <FaCaretDown className="w-14 h-14" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-white border border-gray-300 border-l-8 border-l-teal-700 rounded-lg p-4">
              {/* 改善案2 */}
              <button
                type="button"
                onClick={() => toggleSection(2)}
                aria-expanded={openSections[2]}
                className="w-full flex justify-between items-center gap-4 cursor-pointer"
              >
                <div className="flex flex-col items-start">
                  <h2 className="text-lg md:text-xl font-semibold">
                    複雑な大量データを迷わせない「テーブルUI」の設計
                  </h2>
                  <p className="text-gray-700 text-sm p-1 ">
                    フローを簡潔化しました。
                  </p>
                </div>
                {openSections[2] ? (
                  <FaMinus className="w-5 h-5 shrink-0 text-teal-700" />
                ) : (
                  <FaPlus className="w-5 h-5 shrink-0 text-teal-700" />
                )}
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openSections[2]
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <hr className="border-t-2 border-dotted border-gray-300 my-4" />
                  <p className="mb-6">
                    改善案2の詳細な説明がここに記載されます。
                  </p>
                  <div className="">
                    <div className="space-y-4">
                      <p className="w-fit py-1 px-4 border bg-blue-500 text-white text-xl font-semibold rounded-full">
                        Before
                      </p>
                      <div className="flex gap-4">
                        <img
                          src="/mining/cost-management-before.png"
                          alt=""
                          className="w-1/3 object-contain"
                        />
                        <div className="space-y-10">
                          <p>
                            改善前の画面の説明改善前の画面の説明改善前の画面の説明改善前の画面の説明改善前の画
                            面の説明改善前の画面の説明改善前の画面の説明改善前の画面の説明改善前の画面の説明改善前の画面の説明改善前の画面の説明改善前の画面の説明改善前の画面の説明改善前の画面の説明改善前の画面の説明改善前の画面の説明
                          </p>
                          <ul className="list-disc list-inside space-y-1 pl-1">
                            <li>AIが自動で計算する</li>
                            <li>AIが自動で計算する</li>
                            <li>AIが自動で計算する</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center gap-2 mt-6">
                        <FaCaretDown className="w-14 h-14" />
                      </div>
                      <div className="space-y-4">
                        <h5>ヒアリングの結果...</h5>
                        <div>
                          <p className="flex text-xl items-center gap-2 italic text-gray-600">
                            <FaQuoteLeft className="w-3 h-3 shrink-0" />
                            AIの機能は必要ない
                            <FaQuoteRight className="w-3 h-3 shrink-0" />
                          </p>
                          <p className="flex text-xl items-center gap-2 italic text-gray-600">
                            <FaQuoteLeft className="w-3 h-3 shrink-0" />
                            複雑なデータを迷わせないUIにしてほしい
                            <FaQuoteRight className="w-3 h-3 shrink-0" />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 mt-6">
                      <FaCaretDown className="w-14 h-14" />
                    </div>

                    <div className="space-y-4 mt-6">
                      <p className="w-fit py-1 px-4 border bg-blue-500 text-white text-xl font-semibold rounded-full">
                        After
                      </p>
                      <div className="flex flex-col md:flex-row gap-4">
                        <img
                          src="/mining/cost-management-after.png"
                          className="w-1/2"
                          alt=""
                        />
                        <ul className="list-disc list-inside space-y-1 pl-1">
                          <div>
                            <span className="inline-block w-3 h-3 rounded-full bg-slate-600 shrink-0"></span>
                            <span className="ml-2 font-semibold text-lg">
                              改善内容
                            </span>
                          </div>
                          <li>
                            改善内容1改善内容1改善内容1改善内容1改善内容1改善内容1
                          </li>
                          <li>改善内容2</li>
                          <li>改善内容3</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-white border border-gray-300 border-l-8 border-l-teal-700 rounded-lg p-4">
              {/* 改善案2 */}
              <button
                type="button"
                onClick={() => toggleSection(3)}
                aria-expanded={openSections[3]}
                className="w-full flex justify-between items-center gap-4 cursor-pointer"
              >
                <div className="flex flex-col items-start">
                  <h2 className="text-lg md:text-xl font-semibold">
                    新規機能追加
                  </h2>
                  <p className="text-gray-700 text-sm p-1 ">
                    フローを簡潔化しました。
                  </p>
                </div>
                {openSections[3] ? (
                  <FaMinus className="w-5 h-5 shrink-0 text-teal-700" />
                ) : (
                  <FaPlus className="w-5 h-5 shrink-0 text-teal-700" />
                )}
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openSections[3]
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <hr className="border-t-2 border-dotted border-gray-300 my-4" />
                  <p className="mb-6">
                    改善案3の詳細な説明がここに記載されます。
                  </p>

                  <div>
                    <h4 className="font-semibold text-xl">1.ヒアリング</h4>
                    <p>聞き取りをし、以下の要件が決まりました。</p>
                    <ul className="list-disc list-inside space-y-1 pl-1">
                      <li>予算を作成したい</li>
                      <li>予算を作成したい</li>
                      <li>予算を作成したい</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex flex-col justify-center items-center gap-2 mt-6">
                      <FaCaretDown className="w-14 h-14" />
                    </div>
                    <h4 className="font-semibold text-xl">
                      2. ユーザーストーリーの作成
                    </h4>
                    <div className="flex flex-col md:flex-row gap-4">
                      <p>
                        ユーザーストーリーを作成し、エンジニアと打ち合わせをしました。
                      </p>
                      <img
                        src="/mining/user-story.png"
                        alt="image of user story"
                        className="w-1/2"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-2 mt-6">
                    <FaCaretDown className="w-14 h-14" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl">3. UI作成</h4>
                    <img
                      src="/mining/draft-mode.svg"
                      alt="image of draft mode UI"
                    />
                    <ul className="list-disc list-inside space-y-1 pl-1">
                      <div>
                        <span className="inline-block w-3 h-3 rounded-full bg-slate-600 shrink-0"></span>
                        <span className="ml-2 font-semibold text-lg">
                          改善内容
                        </span>
                      </div>
                      <li>
                        改善内容1改善内容1改善内容1改善内容1改善内容1改善内容1
                      </li>
                      <li>改善内容2</li>
                      <li>改善内容3</li>
                    </ul>
                  </div>
                </div>
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
