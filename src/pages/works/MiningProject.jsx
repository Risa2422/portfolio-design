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
      { title: "プロジェクト区分", value: "クライアントワーク" },
      { title: "期間", value: "8ヶ月（2025年11月 - 2026年6月）" },
      { title: "担当領域", value: "主要機能設計・既存画面のUI/UX改善" },
      { title: "使用ツール", value: "Figma, ChatGPT, Alloy" },
    ],
    title: "プログラム管理ツール (鉱山業界向け)",
    thumbnail: "/mining/thumbnail.png",
    ProductOverview: "プロジェクト概要",
    ProductOverviewText:
      "カナダの鉱山採掘業界を対象としたプロジェクト管理プラットフォームです。複数の採掘プログラムが同時進行する現場において、複雑化しやすい予算策定・トラッキング・レポート作成を一元化し、業務効率化を実現します。",
    ProductOverviewApproach:
      "ITツールの導入が遅れがちな業界特性に配慮し、デジタル機器に不慣れなユーザーでも直感的に操作できるよう、既存のワークフローに寄り添ったストレスフリーなUI/UXデザインを追求しました。",
    productOverviewImage: "/mining/blurred_medium.png",
    productOverviewImageCaption: "主要画面・機能のデザイン抜粋",
    productFlowTitle: "プロダクト開発の流れ",
    productFlowText:
      "チーム構成は、エンジニア5名、PM1名、オペレーション2名、デザイナー（自身）1名で、全員がヒアリングからリリースまでの全工程に関わる体制のもと、MVP開発として短いサイクルで運用しました。\n\n私は機能定義からデザイン作成までを主導しつつ、前後の工程にも協働・サポートとして関わりました。多国籍なチーム環境においても認識を揃えてスムーズに進行できるよう、密なコミュニケーションを重視してプロジェクトを推進しました。",
    productFlowImage: "/mining/product-flow.svg",
    improvementsTitle: "改善事例",
    improvements: [
      {
        id: 1,
        title: "プログラム作成フローの簡略化",
        summary:
          "不要な画面遷移を廃止し、最速で予算作成へ到達できる入力体験を目指しました。",
        description:
          "最もユーザーニーズが高い「予算作成画面」へと至る事前フロー（プロジェクト、プログラム作成）が直感性に欠けており、離脱や操作上の混乱を招くUI/UXの課題がありました。(１つのプロジェクト配下に、複数のプログラムを紐づけて作成・管理できる構造になっています。)",
        before: {
          label: "改善前",
          image: "/mining/creation-flow-before.svg",
          alt: "改善前のプログラム作成フロー",
          heading: "課題",
          items: [
            "プロジェクト作成から予算作成に至るまでの入力項目・必須項目が多く、予算作成ページ到達までに時間がかかっていました。",
            "「プロジェクト作成」と「プログラム作成」の画面が分断されており、機能間の関連性や構造が分かりづらい状況でした。",
            "画面遷移が発生することで、ユーザーが既存のプロジェクト(プログラム)名を確認しながら新規プロジェクト名を入力できませんでした。",
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
        title: "学習コストをかけない業務効率化",
        summary:
          "慣れ親しんだ操作性を踏襲することでユーザーの学習コストを極小化し、予算管理プロセス全体の効率化を実現しました。",
        description:
          "プロダクト初期段階では、ユーザーが事前入力した条件（プログラム期間や採掘場所など）に基づき、システムが自動で予算項目の作成・試算を行う仕様となっていました。",
        before: {
          label: "改善前",
          image: "/mining/cost-management-before.png",
          alt: "改善前のコスト管理画面",
          imageCaption: "予算作成画面",
          text: "予算作成画面の特徴 - 改善前",
          itemTitles: [
            "予算項目およびコストの自動算出",
            "提案内容の確認・編集",
            "予算作成とコストトラッキングの両立",
          ],
          items: [
            "作業員の食費・宿泊費など、プログラム計画に必要なカテゴリと概算コストをシステムが自動生成",
            "AIが提示した予算項目数や算出金額を、ユーザーが確認・修正",
            "初期の予算策定だけでなく、プロジェクト発足後の実コストの追跡・管理までを一貫して行える設計",
          ],
          note: "(※実際の画面では、上部に「予算作成」と「トラッキング」を切り替えるタブメニューが配置されていました)",
        },
        hearing: {
          heading: "クライアントからのフィードバック",
          quotes: [
            "鉱山採掘プロジェクトではシステムでカバーしきれない現場特有の要素が多く、特に予算策定には過去の実績や熟練者の経験則が不可欠",
            "現状はExcelで予算管理を行っているが、複雑な関数エラーや手入力によるヒューマンエラーが常態化している",
            "業界柄、ITツールに対する苦手意識を持つユーザーが多く、学習コストの高いツールは定着しにくい可能性が高い",
          ],
        },
        after: {
          label: "改善後",
          image: "/mining/cost-management-after.png",
          alt: "改善後のコスト管理画面",
          heading: "改善内容",
          text: "予算作成画面の特徴 - 改善後",
          itemTitles: ["学習コストの最小化", "2エリア構成のデータ入力"],
          items: [
            "セルの直接編集やUndo/Redo、コメント、フィルタリング、ファイル出力（Export）などに対応しており、使い慣れたExcelと同等の操作感を提供",
            "テーブル左側に「カテゴリー」「金額」などの基本情報を配置し、右側エリアに「各日ごとの数量」入力を集約したレイアウトを採用。基本情報エリアの折りたたみ機能を備え、大量データ入力時の作業を効率化",
          ],
          details: [
            "テーブルUIを採用している、NotionやJiraのようなホバー表示メインのミニマルUIではなく、ターゲットユーザーに合わせて編集・削除などのアイコンを常時露出させる設計を採用し、「視覚的シンプルさ」よりも「直感的な操作性・迷いにくさ」を優先しました。",
            "別画面に独立していたレポート機能を画面上部のタブに追加することで、情報確認とデータ操作を一画面で完結できるようにしました。",
            "クライアントとの対話を通じて「プログラムの残日数（Days Remaining）」や「予算残量（Budget Runway）」の即時把握に対する潜在ニーズを発見し、画面右上に配置しました。",
          ],
        },
      },
      {
        id: 3,
        title: "試算機能の追加",
        summary:
          "既存の画面構成や操作感を維持したまま、新機能を組み込みました。",
        description:
          "クライアントからの要望を受け、予算の試算機能を追加することになりました。",
        steps: [
          {
            badgeClass: "bg-[#746B60]",
            label: "1. ヒアリング",
            intro:
              "クライアントヒアリングで、以下の課題とニーズが明確になりました。",
            items: [
              "現状は別のExcelファイルで試算を行っており、作成・転記の手間が発生している",
              "試算を行う頻度が高く、業務における重要度が高い",
              "作成した試算データをそのまま本番予算へ反映する場合もある",
            ],
          },
          {
            badgeClass: "bg-[#4A6F8A]",
            label: "2. ユーザーフローの作成",
            text: "ユーザーフローを作成して多様な操作パターン（保存・破棄・本番反映）を可視化し、チーム内の認識共有と機能スコープの定義をスムーズに行いました。",
            image: "/mining/user-story.png",
            alt: "ユーザーフローの画像",
          },
          {
            badgeClass: "bg-[#627d50]",
            label: "3. 完成UI",
            image: "/mining/draft-mode.svg",
            alt: "ドラフトモードUIの画像",
            heading: "主要機能とUIの工夫",
            items: [
              "「Budget versions」ドロップダウンにより、新規試算の作成・表示・本番予算の切り替えを一元化",
              "新規試算作成時は、適用中の予算データを初期値として自動継承",
              "試算モードであることを直感的に識別できるよう、画面全体のカラーテーマを最適化",
              "適用中の予算との合計差分を常時表示し、画面遷移なしで即座に数値比較が可能",
            ],
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
      "短期間で最適なUIを選定するため、生成AIを活用して複数のデザインパターンを迅速に作成・検証しました。早い段階から高精度なUIで比較・検討できたことで、実装に近い解像度で意思決定を行うことができました。",
      "クライアントレビューにおいて、静的プロトタイプで合意を得ていても、実装後に実際の操作感とのギャップが生じる課題がありました。そこで開発前の段階でAIツール「Alloy」を導入し、クライアントが直接操作できるプロトタイプを作成・共有しました。これにより、以前に比べて実装後の認識ギャップによる手戻りを防ぐことができました。",
    ],
    learnings: "振り返り",
    learningsText: [
      "一人デザイナーかつ非ネイティブ環境という制約下で、完璧主義を捨て早期からチームを巻き込むアプローチを徹底しました。未完成な段階で積極的にフィードバックを得ることで、手戻りを最小限に抑えスピーディーに成果へ繋げました。",
      "クライアント自身も自覚していない潜在的課題を発見することの難しさと、そのための徹底した業務理解の重要性を痛感しました。単に要望を受け取るだけでなく、自ら仮説を持って対話し、本質的な課題へアプローチする姿勢を今後も意識したいと思います。",
    ],
    futureOutlook: "今後の展望",
    futureOutlookText:
      "デザインレビューにおいて、意図や根拠をチーム全体へ説得しきれない場面を経験しました。今後はビジュアルやUXの表現力を高めるだけでなく、「なぜこのデザインなのか」を論理的・構造的に説明する言語化能力を磨き、より強力にプロジェクトをリードできるデザイナーを目指したいです。",
    home: "ホーム",
  },
  en: {
    infoLabels: [
      { title: "Service Type", value: "B2B SaaS / Web Application (Desktop)" },
      { title: "Project Format", value: "Client Work" },
      { title: "Duration", value: "8 Months (Nov 2025 - Jun 2026)" },
      {
        title: "My Role",
        value: "Core Feature Design / UI/UX Improvements to Existing Screens",
      },
      { title: "Tools Used", value: "Figma, ChatGPT, Alloy" },
    ],
    title: "Program Management Tool (for the Mining Industry)",
    thumbnail: "/mining/thumbnail.png",
    ProductOverview: "Project Overview",
    ProductOverviewText:
      "A project management platform for program managers in Canada's mining industry. At sites where multiple mining programs run simultaneously, it brings budget planning, tracking, and reporting, which tend to become complex, into one place to streamline operations.",
    ProductOverviewApproach:
      "Considering that the industry tends to be slow to adopt IT tools, I pursued a stress-free UI/UX design that fits into existing workflows, so that even users unfamiliar with digital devices can operate it intuitively.",
    productOverviewImage: "/mining/blurred_medium.png",
    productOverviewImageCaption: "Selected designs of key screens and features",
    productFlowTitle: "Product Development Process",
    productFlowText:
      "As this was MVP development, we ran short cycles from interviews through release. I was responsible for feature definition through design creation, and also collaborated on and supported the other phases.",
    productFlowImage: "/mining/product-flow.svg",
    improvementsTitle: "Improvement Case Studies",
    improvements: [
      {
        id: 1,
        title: "Simplifying the Program Creation Flow",
        summary:
          "Eliminated unnecessary page transitions to create an input experience that gets users to budget creation as quickly as possible.",
        description:
          "The preliminary flow (creating a project, then a program) leading to the Budget Creation screen, the feature users needed most, lacked intuitiveness, causing drop-offs and confusion during operation. (The structure allows multiple programs to be created and managed under a single project.)",
        before: {
          label: "Before",
          image: "/mining/creation-flow-before.svg",
          alt: "Program creation flow before the change",
          heading: "Challenges",
          items: [
            "There were many input fields and required fields between project creation and budget creation, so it took a long time to reach the Budget Creation page.",
            'The "Create Project" and "Create Program" screens were separated, making it difficult to understand the relationship and structure between the features.',
            "Because of page transitions, users couldn't refer to existing project (program) names while entering information.",
          ],
        },
        after: {
          label: "After",
          image: "/mining/creation-flow-after.svg",
          alt: "Program creation flow after the change",
          heading: "Improvements",
          items: [
            "Interviews revealed that a project doesn't always contain multiple programs, so I made it possible to create a standalone program and redesigned the flow to take users directly to the Budget Creation screen after creating a program.",
            "Replaced page transitions with a modal UI, allowing users to complete their input without losing the original context.",
            "Reduced the required fields to just the project (program) name so users can start creating a budget as quickly as possible.",
          ],
        },
      },
      {
        id: 2,
        title: "Streamlining Operations Without a Learning Curve",
        summary:
          "By retaining familiar interaction patterns, we minimized the learning curve for users and streamlined the entire budget management process.",
        description:
          "In the early stage of the product, AI automatically generated and estimated budget items based on conditions entered by the user in advance (such as program duration and mining location).",
        before: {
          label: "Before",
          image: "/mining/cost-management-before.png",
          alt: "Cost management screen before the change",
          imageCaption: "Budget Creation Screen",
          text: "Key Features of the Budget Creation Screen",
          itemTitles: [
            "Automatic generation of budget items and costs",
            "Review and edit suggestions",
            "Budget creation and cost tracking in one place",
          ],
          items: [
            "AI automatically generated the categories and estimated costs needed for program planning, such as workers' meals and accommodation.",
            "Users reviewed and adjusted the number of budget items and amounts suggested by the AI.",
            "Designed to cover not only initial budget planning but also tracking and managing actual costs after the project launched.",
          ],
          note: '(*In the actual screen, a tab menu at the top let users switch between "Budget Creation" and "Tracking.")',
        },
        hearing: {
          heading: "Feedback from the Client",
          quotes: [
            "Mining projects involve many site-specific factors that AI can't fully cover. Budget planning in particular relies heavily on past results and the experience of veteran staff.",
            "We currently manage budgets in Excel, but errors from complex formulas and manual input are a constant problem.",
            "Given the nature of our industry, many users aren't comfortable with IT tools, so a tool with a steep learning curve probably won't stick.",
          ],
        },
        after: {
          label: "After",
          image: "/mining/cost-management-after.png",
          alt: "Cost management screen after the change",
          heading: "Improvements",
          text: "Key Features of the Budget Creation Screen",
          itemTitles: [
            "Two-area layout for data entry",
            "Minimizing the learning curve",
          ],
          items: [
            'Placed basic information such as "Category" and "Amount" on the left side of the table and consolidated "daily quantity" inputs in the right area. The basic information area can be collapsed to maximize the quantity input area, making large-volume data entry more efficient.',
            "Supports direct cell editing, Undo/Redo, comments, filtering, and file export, providing the same familiar feel as Excel.",
          ],
          details: [
            "Shifted away from relying on automatic generation so that users can flexibly create and edit budget items themselves, reflecting on-site realities and the know-how of veteran staff.",
            "By carrying over the familiar feel of Excel, which they already use, users who aren't comfortable with IT tools can switch over without a steep learning curve.",
          ],
        },
      },
      {
        id: 3,
        title: "Designing a Budget Simulation Feature",
        summary:
          "Integrated a new feature while preserving the existing screen structure and interaction patterns.",
        description:
          "Based on a request from the client, we decided to add a new feature for simulating budgets.",
        steps: [
          {
            badgeClass: "bg-[#746B60]",
            label: "1. Interviews",
            intro:
              "Client interviews clarified the following challenges and needs.",
            items: [
              "Simulations were currently done in separate Excel files, which required extra effort to create and transfer data.",
              "Simulations were run frequently and played an important role in their work.",
              "In some cases, simulation data was applied directly to the actual budget.",
            ],
          },
          {
            badgeClass: "bg-[#4A6F8A]",
            label: "2. Creating a User Flow",
            text: "Created a user flow to visualize the various interaction patterns (save, discard, and apply to the actual budget), which helped the team build a shared understanding and define the feature scope smoothly.",
            image: "/mining/user-story.png",
            alt: "Image of the user flow",
          },
          {
            badgeClass: "bg-[#627d50]",
            label: "3. Final UI",
            image: "/mining/draft-mode.svg",
            alt: "Image of the draft mode UI",
            heading: "Key Features and UI Considerations",
            items: [
              'A "Budget versions" dropdown brings creating and viewing simulations and switching to the actual budget into one place.',
              "When a new simulation is created, it automatically inherits the currently applied budget data as its starting values.",
              "The color theme of the entire screen changes so users can intuitively recognize when they are in simulation mode.",
              "The total difference from the currently applied budget is always displayed, enabling instant comparison without leaving the screen.",
            ],
          },
        ],
      },
    ],

    aiUsageTitle: "How I Incorporated AI Into My Work",
    aiUsageSubTitle: [
      "Identifying edge cases",
      "Generating multiple UI patterns in parallel",
      "Building prototypes for client meetings",
    ],
    aiUsageText: [
      "To prevent rework during development, I used generative AI from the early design stage to identify edge cases. This created a system for catching gaps that would often only surface right before implementation, which improved development efficiency.",
      "To select the best UI in a short time, I used generative AI to quickly create and test multiple design patterns. Being able to compare high-fidelity UIs from an early stage allowed us to make decisions at a level of detail close to the final implementation.",
      'In client reviews, even when we had reached agreement on static prototypes, gaps often emerged between expectations and the actual feel after implementation. To address this, I introduced the AI tool "Alloy" before development began, creating and sharing interactive prototypes that the client could try out on real devices. This helped prevent rework caused by misaligned expectations.',
    ],
    learnings: "Learnings",
    learningsText: [
      "When I first joined the project, I found it challenging to identify latent issues the client themselves weren't aware of, as well as the solutions that would truly address them. However, by consistently digging deeper into problems and repeatedly asking \"Why?\", I believe I was ultimately able to contribute to a product definition and UI/UX design that captured users' true needs.",
    ],
    futureOutlook: "Future Outlook",
    futureOutlookText: [
      "Based on usage data and user feedback after release, I hope to verify where friction and burden still remain in day-to-day work, and turn those insights into continuous UI/UX improvements.",
    ],
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
              <h1 className="text-2xl font-semibold">{t.title}</h1>
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
              <p className="pt-4">{t.ProductOverviewApproach}</p>
            </div>
            <div className="md:w-1/2 space-y-2">
              <ZoomableImage
                src={localizeImage(t.productOverviewImage, language)}
                className="w-full object-contain"
                alt="ProductOverview"
              />
              <p className="text-xs text-gray-700 text-center">
                {t.productOverviewImageCaption}
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
            <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
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
          {/* <p className="text-base leading-relaxed">{t.learningsText}</p> */}

          <ul className="flex flex-col gap-6 list-disc pl-5">
            {t.learningsText.map((text, index) => (
              <li key={index} className="space-y-2">
                <p className="text-base leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* Future Outlook Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20">
          <h2 className="flex items-stretch gap-3 text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.futureOutlook}
          </h2>
          <p className="text-base leading-relaxed">{t.futureOutlookText}</p>
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
