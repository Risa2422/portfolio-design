import { useEffect, useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import Accordion from "../../components/Accordion";
import Arrow from "../../components/Arrow";
import FadeInPageWrapper from "../../components/FadeInPageWrapper";
import InfoList from "../../components/InfoList";
import ZoomableImage from "../../components/ZoomableImage";
import { useLanguage } from "../../context/LanguageContext";
import { localizeImage } from "../../utils/localizeImage";
import Improvement1 from "./mining/Improvement1";
import Improvement2 from "./mining/Improvement2";
import Improvement3 from "./mining/Improvement3";

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
    ProductOverview: "プロジェクト概要",
    ProductOverviewText:
      "鉱山業界のプログラムマネージャーを対象としたプロジェクト管理プラットフォームです。従来、複数のツールに分散していたプロジェクト情報や進捗管理を一元化し、業務効率を大幅に向上させます。ITツールの導入が遅れがちな業界特性に配慮し、デジタル機器に不慣れなユーザーでも直感的に操作できるよう、既存のワークフローに寄り添ったストレスフリーなUI/UXデザインを実現しました。",
    productFlowTitle: "プロダクト開発の流れ",
    productFlowText:
      "スタートアップでのプロダクト開発であったため、基本的に要件定義からリリースまでの工程を全メンバーで協力して進めました。",
    improvementsTitle: "改善案3案",
    improvements: [
      {
        id: 1,
        title: "プログラム作成フロー簡略化",
        summary: "フローを簡潔化しました。",
        description: "改善案1の詳細な説明がここに記載されます。",
        before: {
          label: "変更前",
          image: "/mining/creation-flow-before.svg",
          alt: "変更前のプログラム作成フロー",
          heading: "課題",
          items: [
            "プログラム作成までに時間がかかっていた。",
            "プログラムを作成するフローが画面遷移のため、似たよ...",
            "必須入力項目が多かった",
            "他のプログラム名の名前がわからない",
          ],
        },
        after: {
          label: "変更後",
          image: "/mining/creation-flow-after.svg",
          alt: "変更後のプログラム作成フロー",
          heading: "改善内容",
          items: [
            "プログラム作成までに時間がかかっていた。",
            "プログラムを作成するフローが画面遷移のため、似たよ...",
            "必須入力項目が多かった",
            "他のプログラム名の名前がわからない",
          ],
        },
      },
      {
        id: 2,
        title: "複雑な大量データを迷わせない「テーブルUI」の設計",
        summary: "フローを簡潔化しました。",
        description: "改善案2の詳細な説明がここに記載されます。",
        before: {
          label: "変更前",
          image: "/mining/cost-management-before.png",
          alt: "変更前のコスト管理画面",
          text: "改善前の画面の説明",
          items: [
            "AIが自動で計算する",
            "AIが自動で計算する",
            "AIが自動で計算する",
          ],
        },
        hearing: {
          heading: "ヒアリングの結果...",
          quotes: [
            "AIの機能は必要ない",
            "複雑なデータを迷わせないUIにしてほしい",
          ],
        },
        after: {
          label: "変更後",
          image: "/mining/cost-management-after.png",
          alt: "変更後のコスト管理画面",
          heading: "改善内容",
          items: ["改善内容1", "改善内容1", "改善内容1"],
        },
      },
      {
        id: 3,
        title: "新規機能追加",
        summary: "フローを簡潔化しました。",
        description: "改善案3の詳細な説明がここに記載されます。",
        steps: [
          {
            badgeClass: "bg-[#746B60]",
            label: "1. ヒアリング",
            intro: "聞き取りをし、以下の要件が決まりました。",
            items: ["予算を作成したい", "予算を作成したい", "予算を作成したい"],
          },
          {
            badgeClass: "bg-[#4A6F8A]",
            label: "2. ユーザーストーリー作成",
            text: "ユーザーストーリーを作成し、エンジニアと打ち合わせをしました。",
            image: "/mining/user-story.png",
            alt: "ユーザーストーリーの画像",
          },
          {
            badgeClass: "bg-[#4A5742]",
            label: "3. UI作成",
            image: "/mining/draft-mode.svg",
            alt: "ドラフトモードUIの画像",
            heading: "改善内容",
            items: ["改善内容1", "改善内容1", "改善内容1"],
          },
        ],
      },
    ],
    aiUsageTitle: "AIをどう仕事に取り入れたか",
    aiUsageText: [
      "クライアントとの打ち合わせの際に使用するプロトタイプの作成 (AlloyとClause design, Figma make)",
      "Edgeケースの洗い出し",
      "いくつかのUIパターンの生成",
    ],
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
        id: 1,
        title: "Simplifying the Program Creation Flow",
        summary: "Simplified the flow.",
        description: "A detailed description of improvement 1 goes here.",
        before: {
          label: "Before",
          image: "/mining/creation-flow-before.svg",
          alt: "Program creation flow before the change",
          heading: "Challenges",
          items: [
            "Creating a program took a long time.",
            "The flow required navigating through several similar screens due to page transitions.",
            "There were many required input fields.",
            "Users couldn't tell the names of other existing programs.",
          ],
        },
        after: {
          label: "After",
          image: "/mining/creation-flow-after.svg",
          alt: "Program creation flow after the change",
          heading: "Improvements",
          items: [
            "Creating a program took a long time.",
            "The flow required navigating through several similar screens due to page transitions.",
            "There were many required input fields.",
            "Users couldn't tell the names of other existing programs.",
          ],
        },
      },
      {
        id: 2,
        title: "Designing a Table UI for Complex, Large Datasets",
        summary: "Simplified the flow.",
        description: "A detailed description of improvement 2 goes here.",
        before: {
          label: "Before",
          image: "/mining/cost-management-before.png",
          alt: "Cost management screen before the change",
          text: "Description of the screen before the improvement.",
          items: [
            "AI calculates it automatically.",
            "AI calculates it automatically.",
            "AI calculates it automatically.",
          ],
        },
        hearing: {
          heading: "Feedback from user interviews...",
          quotes: [
            "We don't need the AI feature",
            "We want a UI that won't confuse us with complex data",
          ],
        },
        after: {
          label: "After",
          image: "/mining/cost-management-after.png",
          alt: "Cost management screen after the change",
          heading: "Improvements",
          items: [
            "Improvement content 1",
            "Improvement content 1",
            "Improvement content 1",
          ],
        },
      },
      {
        id: 3,
        title: "Adding a New Feature",
        summary: "Simplified the flow.",
        description: "A detailed description of improvement 3 goes here.",
        steps: [
          {
            badgeClass: "bg-[#746B60]",
            label: "1. Interviews",
            intro:
              "After conducting interviews, the following requirements were defined.",
            items: [
              "Wanted to be able to create a budget.",
              "Wanted to be able to create a budget.",
              "Wanted to be able to create a budget.",
            ],
          },
          {
            badgeClass: "bg-[#4A6F8A]",
            label: "2. Creating User Stories",
            text: "Created user stories and discussed them with the engineers.",
            image: "/mining/user-story.png",
            alt: "Image of the user story",
          },
          {
            badgeClass: "bg-[#4A5742]",
            label: "3. UI Creation",
            image: "/mining/draft-mode.svg",
            alt: "Image of the draft mode UI",
            heading: "Improvements",
            items: [
              "Improvement content 1",
              "Improvement content 1",
              "Improvement content 1",
            ],
          },
        ],
      },
    ],

    aiUsageTitle: "How I Incorporated AI Into My Work",
    aiUsageText: [
      "Dummy text. This section describes how AI was incorporated into daily work, specific use cases, and the impact it had.",
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
            <ZoomableImage
              src={localizeImage("/mining/thumbnail.png", language)}
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
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="flex items-stretch gap-3 text-lg md:text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.ProductOverview}
          </h2>
          <div className="flex flex-col gap-8 justify-center items-center">
            <p className="text-base leading-relaxed text-gray-700 ">
              {t.ProductOverviewText}
            </p>
            <ZoomableImage
              src="/mining/blurred_medium.png"
              className="md:w-1/2 object-contain"
              alt="ProductOverview"
            />
          </div>
        </div>
        {/* Product Development Flow Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20">
          <h2 className="flex items-stretch gap-3 text-lg md:text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.productFlowTitle}
          </h2>
          <div className="flex flex-col gap-8">
            <p className="text-base leading-relaxed text-gray-700">
              {t.productFlowText}
            </p>
            <ZoomableImage
              src="/mining/product-flow.svg"
              alt={t.productFlowTitle}
              className="rounded-lg w-23 bg-background"
            />
          </div>
        </div>
        {/* Improvement Proposals Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="flex items-stretch gap-3 text-lg md:text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.improvementsTitle}
          </h2>
          <div className="space-y-4 w-full">
            {t.improvements.map((improvement) => (
              <Accordion
                key={improvement.id}
                title={improvement.title}
                summary={improvement.summary}
                isOpen={openSections[improvement.id]}
                onToggle={() => toggleSection(improvement.id)}
              >
                <p className="my-6">{improvement.description}</p>
                {improvement.id === 1 && (
                  <Improvement1
                    before={improvement.before}
                    after={improvement.after}
                  />
                )}
                {improvement.id === 2 && (
                  <Improvement2
                    before={improvement.before}
                    hearing={improvement.hearing}
                    after={improvement.after}
                  />
                )}
                {improvement.id === 3 && (
                  <Improvement3 steps={improvement.steps} />
                )}
              </Accordion>
            ))}
          </div>
        </div>

        {/* AI Usage Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20">
          <h2 className="flex items-stretch gap-3 text-lg md:text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.aiUsageTitle}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ">
            {t.aiUsageText.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Learnings Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="flex items-stretch gap-3 text-lg md:text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.learnings}
          </h2>
          <p className="text-base leading-relaxed">{t.learningsText}</p>
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
