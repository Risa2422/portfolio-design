import { useEffect, useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import Accordion from "../../components/Accordion";
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
    thumbnail: "/mining/thumbnail.png",
    ProductOverview: "プロジェクト概要",
    ProductOverviewText:
      "鉱山採掘業界のプログラムマネージャーを対象としたプロジェクト管理プラットフォームです。複数の採掘プログラムが同時進行する現場において、複雑化しやすい予算策定・トラッキング・レポート作成を一元化し、業務効率化を実現します。",
    productOverviewImage: "/mining/blurred_medium.png",
    productFlowTitle: "プロダクト開発の流れ",
    productFlowText:
      "MVP開発のため、ヒアリングからリリースまでを短いサイクルで回しました。機能定義〜デザイン作成を担当し、その他の工程にも協働・サポートとして関わりました。",
    productFlowImage: "/mining/product-flow.svg",
    improvementsTitle: "改善事例",
    improvements: [
      {
        id: 1,
        title: "プログラム作成フローの簡略化",
        summary:
          "不要な画面遷移を廃止し、最速で予算作成へ到達できる入力体験を目指しました。",
        description:
          "最もユーザーニーズが高い「予算作成画面」へと至る事前フロー（プロジェクト、プログラム作成手順）が直感性に欠けており、離脱や操作上の混乱を招くUI/UXの課題がありました。(１つのプロジェクト配下に、複数のプログラムを紐づけて作成・管理できる構造になっています。)",
        before: {
          label: "変更前",
          image: "/mining/creation-flow-before.svg",
          alt: "変更前のプログラム作成フロー",
          heading: "課題",
          items: [
            "プロジェクト作成から予算作成に至るまでの入力項目・必須項目が多く、予算作成ページ到達までに時間がかかっていました。",
            "「プロジェクト作成」と「プログラム作成」の画面が分断されており、機能間の関連性や構造が分かりづらい状況でした。",
            "画面遷移が発生することで、ユーザーが既存のプロジェクト(プログラム)名を確認しながら入力できませんでした。",
          ],
        },
        after: {
          label: "改善後",
          image: "/mining/creation-flow-after.svg",
          alt: "変更後のプログラム作成フロー",
          heading: "改善内容",
          items: [
            "ヒアリングを通して、必ずしも「１プロジェクト = 複数プログラム」ではないことが判明したため、プログラム単体での作成を選択可能にし、プログラム作成時後はダイレクトに予算作成画面へ遷移できる設計に変更しました。",
            "画面遷移の代わりにモーダルUIを採用することで、元のコンテキストを維持したまま入力を完結できるフローへ改善しました。",
            "入力必須項目をプロジェクト(プログラム)名のみに絞り込むことで、最速で予算作成を開始できるようにしました。",
          ],
        },
      },
      {
        id: 2,
        title: "複雑な大量データを迷わせない「テーブルUI」の設計",
        summary: "フローを簡潔化しました。",
        description:
          "プロダクト初期段階では、ユーザーが事前入力した条件（プログラム期間や採掘場所など）に基づき、AIが自動で予算項目の作成・試算を行う仕様となっていました。",
        before: {
          label: "改善前",
          image: "/mining/cost-management-before.png",
          alt: "変更前のコスト管理画面",
          text: "予算作成画面の特徴",
          itemTitles: [
            "予算項目およびコストの自動算出",
            "提案内容の確認・編集",
            "予算作成とコストトラッキングの両立",
          ],
          items: [
            "作業員の食費・宿泊費など、プログラム計画に必要なカテゴリと概算コストをAIが自動生成",
            "AIが提示した予算項目数や算出金額を、ユーザーが確認・修正",
            "初期の予算策定だけでなく、プロジェクト発足後の実コストの追跡・管理までを一貫して行える設計",
          ],
        },
        hearing: {
          heading: "クライアントからのフィードバック",
          quotes: [
            "鉱山採掘プロジェクトではAIでカバーしきれない現場特有の要素が多く、特に予算策定には過去の実績や熟練者の経験則が不可欠",
            "現状はExcelで予算管理を行っているが、複雑な関数エラーや手入力によるヒューマンエラーが常態化している",
            "業界柄、ITツールに対する苦手意識を持つユーザーが多く、学習コストの高いツールは定着しにくいのではないか",
          ],
        },
        after: {
          label: "改善後",
          image: "/mining/cost-management-after.png",
          alt: "改善後のコスト管理画面",
          heading: "改善内容",
          itemTitles: ["2エリア構成のデータ入力", "学習コストの最小化"],
          items: [
            "テーブル左側に「カテゴリー」「金額」などの基本情報を配置し、右側エリアに「各日ごとの数量」入力を集約したレイアウトを採用。基本情報エリアの折りたたみ機能を備え、数量入力領域を最大化し、大量データ入力時の作業を効率化",
            "セルの直接編集やUndo/Redo、コメント、フィルタリング、ファイル出力（Export）などに対応しており、使い慣れたExcelと同等の操作感を提供",
          ],
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
    aiUsageTitle: "AIを業務にどう取り入れたか",
    aiUsageSubTitle: [
      "エッジケースの洗い出し",
      "複数UIパターンの同時生成",
      "クライアントとの打ち合わせ時に使用するプロトタイプの作成",
    ],
    aiUsageText: [
      "開発フェーズでの手戻りを防ぐため、設計初期から生成AIを活用しエッジケースを洗い出しました。従来発生しがちだった実装直前の検討漏れを事前防止する仕組みを作れたため、開発効率の向上を実現することができました。",
      "短期間で最適なUIを選定するため、生成AIを活用して複数のデザインパターンを迅速に作成・検証しました。早い段階から高精度なUIで比較・検討できたことで、実装に近い解像度で意思決定を行うことが可能でした。",
      "クライアントレビューにおいて、静的プロトタイプで合意を得ていても実装後に実際の操作感とのギャップが生じる課題がありました。そこで開発前の段階でAIツール「Alloy」を導入し、クライアントが実機上で試走できるインタラクティブなプロトタイプを作成・共有しました。これにより、認識ギャップによる手戻りを防ぐことができました。",
    ],
    learnings: "振り返り",
    learningsText:
      "プロジェクト参画当初は、クライアント自身も自覚していない潜在的な課題や本質的な解決策の特定に難しさを感じていました。しかし、「なぜ？」を繰り返す課題の深掘りを徹底したことで、最終的にはユーザーの真のニーズを捉えたプロダクト定義とUIUXデザインへ貢献できたと考えています。",
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
    thumbnail: "/mining/thumbnail.png",
    ProductOverview: "ProductOverview",
    ProductOverviewText: "",
    productOverviewImage: "/mining/blurred_medium.png",
    productFlowTitle: "Product Development Process",
    productFlowText:
      "Dummy text. This section describes the product development process, from requirements definition through release, and the work done at each phase.",
    productFlowImage: "/mining/product-flow.svg",
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
    aiUsageSubTitle: ["Dummy subtitle"],
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
              src={localizeImage(t.thumbnail)}
              alt="Mining Project Thumbnail"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4 flex-1">
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold">{t.title}</h1>
              <div className="h-[0.8px] bg-border mt-4" />
            </div>
            <InfoList items={infoItems} visible={false} />
          </div>
        </div>
        {/* ProductOverview Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="flex items-stretch gap-3 text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.ProductOverview}
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="w-full md:w-1/2 md:pt-4">
              <p className="text-base leading-relaxed text-gray-700 ">
                {t.ProductOverviewText}
              </p>
              <p className="pt-4">
                ITツールの導入が遅れがちな業界特性に配慮し、デジタル機器に不慣れなユーザーでも直感的に操作できるよう、既存のワークフローに寄り添ったストレスフリーなUI/UXデザインを追求しました。
              </p>
            </div>
            <div className="md:w-1/2 space-y-2">
              <ZoomableImage
                src={localizeImage(t.productOverviewImage, language)}
                className="w-full object-contain"
                alt="ProductOverview"
              />
              <p className="text-xs text-gray-600 text-center">
                主要画面・機能の抜粋
              </p>
            </div>
          </div>
        </div>
        {/* Product Development Flow Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20">
          <h2 className="flex items-stretch gap-3 text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.productFlowTitle}
          </h2>
          <div className="flex flex-col gap-8">
            <p className="text-base leading-relaxed text-gray-700">
              {t.productFlowText}
            </p>
            <ZoomableImage
              src={localizeImage(t.productFlowImage, language)}
              alt={t.productFlowTitle}
              className="rounded-lg w-23 bg-background"
            />
          </div>
        </div>
        {/* Improvement Proposals Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="flex items-stretch gap-3 text-2xl font-semibold text-[#3B2707]">
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
          <h2 className="flex items-stretch gap-3 text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.aiUsageTitle}
          </h2>
          <ul className="flex flex-col gap-6 list-disc pl-5">
            {t.aiUsageSubTitle.map((subTitle, index) => (
              <li key={subTitle} className="space-y-2">
                <h3 className="text-lg font-semibold text-[#3B2707]">
                  {subTitle}
                </h3>
                <p className="text-base leading-relaxed">
                  {t.aiUsageText[index]}
                </p>
              </li>
            ))}
          </ul>
        </div>
        {/* Learnings Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="flex items-stretch gap-3 text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.learnings}
          </h2>
          <p className="text-base leading-relaxed">{t.learningsText}</p>
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

export default MiningProject;
