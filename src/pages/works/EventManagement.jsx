import { useEffect } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import FadeInPageWrapper from "../../components/FadeInPageWrapper";
import InfoList from "../../components/InfoList";
import ZoomableImage from "../../components/ZoomableImage";
import { useLanguage } from "../../context/LanguageContext";
import { localizeImage } from "../../utils/localizeImage";

const moodboardImages = [
  { src: "/event-management/image-board.png", alt: "イメージボード" },
  { src: "/event-management/color-token.png", alt: "カラーシステム" },
];

const content = {
  en: {
    infoItems: [
      { title: "Service Type", value: "Web App (Mobile Version)" },
      { title: "Project Type", value: "Team Development (4members)" },
      { title: "Timeline", value: "1week(Design) / 3weeks(Coding)" },
      { title: "Role", value: "UI Design / Frontend Development" },
      { title: "Design Tool", value: "Figma" },
      { title: "Tech Stack", value: "Next.js, Tailwind CSS, shadcn/ui" },
    ],
    heading: "Birthday Event Management App",
    overviewTitle: "Overview",
    overviewText:
      "This is an event management tool primarily designed for parents hosting children's birthday parties. Our goal is to enable users to complete every step of the process within this service, from initial planning and preparation to day-of coordination and post-event follow-up. Distinguishing it from general event management apps, this service offers features such as a venue suggestion engine and an automatic facial recognition function for tagging people in photo albums.",
    backgroundTitle: "Background",
    backgroundText:
      "The inspiration for this service came from my experience planning and managing events during my university years. I found the process cumbersome, as I had to manage numerous tasks—from preparation to day-of operation and aftercare—using multiple different tools. This led me to the idea that if all the necessary event management steps could be completed within a single service, it would significantly reduce the burden on both organizers and attendees.",
    problemTitle: "Problem Definition",
    problemIntro:
      "Based on my personal experience, I constructed the following user scenarios to pinpoint key pain points for the user.",
    problemAnalysisText:
      "Based on the user scenarios, I identified the potential challenges faced by both event organizers and attendees.",
    problemSummaryText: (
      <>
        For event organizers, the number of tasks involved, from initial
        preparation through day-of operation, is significant. I recognized a
        major challenge in information dispersion and omissions that result from
        managing these tasks using multiple tools. Specifically, I concluded
        there was a demand for support functions that ensure seamless
        information sharing and reliable communication with attendees, while
        simultaneously reducing the operational burden on the day of the event.
        On the attendee side, I also saw a considerable burden of confirmation
        placed on them, often having to repeatedly check with the organizer
        about crucial details—such as unclear event specifics, required items,
        the day's schedule, or even the faces of the other participants.
        <br />
        <br />
        Furthermore, to differentiate ourselves from existing event management
        platforms, we narrowed our target audience to focus on parents
        organizing children's birthday parties. This focus was motivated by the
        cultural context of my current residence in Canada, where children's
        birthday parties are hosted casually and frequently. We hypothesized
        that by specializing in this particular, high-demand niche, we could
        create a service with significantly greater practical utility
      </>
    ),
    mvpTitle: "MVP Definition",
    mvpText:
      "As the duration for design and implementation was limited to four weeks, we established an MVP scope to focus our development efforts.",
    uiDesignTitle: "UI Design",
    wireframeHeading: "1. Wireframing",
    wireframeText: (
      <>
        I was responsible for designing the event management screens for both
        the organizer and the attendee.
        <br />
        The event management interface was designed to centralize the overview
        and critical information on the home screen, allowing users to easily
        navigate to specific functions as needed. Additionally, to create a
        friendly and approachable feel, I incorporated numerous rounded design
        elements throughout the interface.
      </>
    ),
    wireframeCaption: "Wireframe Outputs",
    moodboardHeading: "2. Mood Board Creation and Style Guide Definition",
    moodboardText:
      "Working with a fellow designer, we collected design references and compiled a mood board.",
    moodboardItems: ["Mood Board", "Color Palette System"],
    moodboardStyleText:
      'Considering our target audience of parents with young children, we adopted orange as our main theme color to express feelings of "safety," "approachability," and "connection." Furthermore, to ensure design consistency, we pre-determined the use of padding and font sizes based on the 8-point grid system rule (multiples of 8)',
    finalUiHeading: "3. Final UI Design",
    figmaLinkLabel: "View Design in Figma",
    preEventLabel: "Pre-Event",
    organizerBadge: "Organizer",
    attendeeBadge: "Attendee",
    invitationFlowHeading: "Invitation Creation Flow",
    invitationFlowRole: "Role: Frontend Developer",
    invitationFlowText: (
      <>
        When creating an event, the organizer proceeds to generate the
        invitation.
        <br />
        If the party is planned to be held outdoors, the organizer can utilize
        the Venue Suggestion feature, which provides relevant location ideas
        based on the specific activity, such as a cherry blossom viewing or a
        picnic.
      </>
    ),
    eventPrepFlowHeading: "Event Preparation Flow",
    eventPrepFlowRole:
      "Role: Designer / Frontend Developer (Excluding RSVP Responses)",
    eventPrepFlowText:
      'Once the event invitation is created, the organizer gains access to the detailed event settings screen from their main page. They can then utilize features such as "Timeline," "Packing List (or Items to Bring)," "Budget Management," and "RSVP Tracking" to ensure smooth and efficient preparation.',
    rsvpFlowHeading: "Invitation Response Flow",
    rsvpFlowRole: "Role: Frontend Developer",
    rsvpFlowText:
      "Upon receiving the invitation, the user informs the organizer of their attendance by submitting their RSVP response. The response process allows the attendee to pre-notify the organizer of any allergy information and add the names of any accompanying guests, such as family members.",
    eventPageFlowHeading: "Event Page Viewing Flow",
    eventPageFlowRole: "Role: Designer / Frontend Developer",
    eventPageFlowText:
      "If an attendee confirms their participation, a link to the dedicated event page is sent via email. On this event page, they can easily check the packing list (items to bring), the day's timeline/schedule, and the list of other attendees.",
    dayOfEventLabel: "Day of the Event",
    dayOfOperationHeading: "Day-of Event Operation Flow",
    dayOfOperationRole: "Role: Designer",
    dayOfOperationText: (
      <>
        The organizer can manage attendee check-in (attendance tracking) and
        create the photo album within the application.
        <br />
        For the photo album feature, individual photo albums are automatically
        generated for each attendee using image recognition processing.
      </>
    ),
    postEventLabel: "Post-Event",
    postEventReviewHeading: "Post-Event Review Flow",
    postEventReviewRole: "Role: Designer",
    postEventReviewText:
      "Attendees can post their memories within the app, and these posts become accessible to all participants of the event.",
    keyPrinciplesHeading: "4. Key Design Principles",
    keyPrinciples: [
      {
        title: "Contrast and Readability",
        text: "Initially, we used a card-based UI for the Timeline and incorporated multiple colors on the cards to enhance differentiation. However, this approach presented challenges regarding overall visibility and legibility. Therefore, we ultimately prioritized contrast, simplifying the design by limiting the color palette to just two colors to significantly improve readability.",
      },
      {
        title: "Responsive Design",
        text: "Although our scope was limited to responsive design, we prioritized optimizing the mobile experience. Specifically, we designed buttons and interactive elements with generous sizing and width to facilitate comfortable single-handed operation on smartphones.",
      },
      {
        title: "Design Aligned with Component Library",
        text: "Since we had decided to use shadcn/ui for implementation, the design structure was consciously composed from the initial stage to ensure that the provided components could be seamlessly integrated without requiring complex overrides or excessive custom styling.",
      },
    ],
    takeawaysTitle: "Key Takeaways",
    takeaways: [
      {
        title: "The Importance of Expanding Scenarios",
        text: 'During the design process, I realized a lack of breadth in anticipating necessary user flows, leading to many omissions in expected patterns. For instance, in this project, handling edge cases such as determining the UI for "Host or Guest" status or designing the interface for "no data available" scenarios was insufficient. Moving forward, I plan to consciously engage with and analyze a wider variety of existing services to better anticipate and accommodate comprehensive situations and user behaviors in my future designs.',
      },
      {
        title: "The Importance of Articulating Design Intent",
        text: 'During the project, I encountered situations where the design rationale for certain UI elements was ambiguous. This led to instances where I was unable to clearly explain the design choices when asked by team members. Moving forward, I am committed to always defining "Why I made this specific design decision," ensuring every choice is backed by a clear and explicit rationale.',
      },
      {
        title: "Balancing Design and Implementation",
        text: "I realized the necessity of flexible adjustment between design ideals and implementation realities. For example, an initial idea was to display children's drawings or photos on the home screen; however, this proved challenging due to our database (DB) structure, necessitating a re-evaluation of the design. Moving forward, I am committed to making more realistic design decisions by consciously considering implementation constraints from the earliest design stages.",
      },
    ],
    homeLabel: "Home",
  },
  ja: {
    infoItems: [
      { title: "サービス種別", value: "Webアプリ (モバイル版)" },
      { title: "制作種類", value: "チーム開発 (4人)" },
      { title: "期間", value: "1週間 (デザイン) / 3週間 (コーディング)" },
      { title: "担当", value: "UIデザイン / フロントエンド開発" },
      { title: "使用ツール (デザイン)", value: "Figma" },
      { title: "開発言語", value: "Next.js, Tailwind CSS, shadcn/ui" },
    ],
    heading: "誕生日会イベント管理アプリ",
    overviewTitle: "Overview",
    overviewText:
      "子どもの誕生日会を主催するユーザーを主な対象とした、イベントマネジメントツールです。イベントの企画から準備、当日の運営、イベント後のフォローアップまで、すべての工程を本サービスで完結できることを目指しました。一般的なイベントマネジメントアプリとの違いとして、開催場所を提案するサジェスト機能や、写真アルバム内で人物を自動認識する機能などの機能を提供します。",
    backgroundTitle: "Background",
    backgroundText:
      "本サービスの着想は、私が大学時代に行っていたイベントの企画・運営経験にあります。準備から当日の運営、アフターケアに至るまで多くのタスクを複数のツールで管理しており、作業の煩雑さに課題を感じていました。そこでイベント管理に必要なすべての工程をひとつのサービスで完結できれば、主催者・参加者の負担を減らせるのではないかと考えました。",
    problemTitle: "課題の洗い出し",
    problemIntro:
      "ユーザーの課題の洗い出しをするにあたって、私の経験をもとに以下のユーザーシナリオを想定しました。",
    problemAnalysisText:
      "ユーザーシナリオをもとに、イベント主催者と参加者が直面しうる課題を洗い出しました。",
    problemSummaryText: (
      <>
        イベント主催者にとって、イベントの準備から運営まで多くのタスクが存在し、それらを複数のツールで管理することによる情報の分散や抜け漏れが大きな課題となると感じ、特に、参加者とのスムーズな情報共有や連絡手段の確保、当日の運営負担を軽減するサポート機能などが求められているのではないかと考えました。また、参加者側にとってもイベントの詳細や持ち物、当日のスケジュールが分かりづらいことや、参加者の顔ぶれなど、主催者にその都度確認しなければならない点が負担になっているのではないかと考えました。
        <br />
        <br />
        さらに、既存のイベント管理プラットフォームとの差別化を図るため、「子どもの誕生日会を主催する子育て層」にターゲットを絞りました。背景には、現在居住しているカナダでは子どもの誕生日会が気軽に、かつ頻繁に開催されているという文化があり、こうしたニーズに特化することで、より実用性の高いサービスになると仮定しました。
      </>
    ),
    mvpTitle: "MVP設定",
    mvpText:
      "今回はデザインから実装までの期間が4週間と短かったこともあり、MVPを設定し開発を行いました。",
    uiDesignTitle: "UIデザイン",
    wireframeHeading: "1. ワイヤーフレーム作成",
    wireframeText: (
      <>
        私はイベントの主催者と参加者のイベント管理画面を担当し、MVPのコア機能をベースに双方の使いやすさを意識してワイヤーフレームを作成しました。
        <br />
        イベント管理画面は、ホーム画面に概要や重要な情報を集約し、必要に応じて各機能へ遷移できるように設計しました。また、親しみやすさを演出するため、丸みを帯びたデザイン要素を多く取り入れました。
      </>
    ),
    wireframeCaption: "作成したワイヤーフレーム",
    moodboardHeading: "2. イメージボードの作成とスタイルガイドの決定",
    moodboardText:
      "もう一人のデザイナーと参考にしたいデザインを集め、イメージボードを作成しました。",
    moodboardItems: ["イメージボード", "カラーシステム"],
    moodboardStyleText:
      "カラーについては、ターゲットが子育て層であることを踏まえ、「安心感」「親しみやすさ」「つながり」を表現するオレンジ（#FF8549）をテーマカラーとして採用しました。また、余白や文字サイズは8の倍数のルールに基づいてあらかじめ決定し、デザインの一貫性を保つようにしました。",
    finalUiHeading: "3. 最終UIデザイン",
    figmaLinkLabel: "Figmaでデザインを見る",
    preEventLabel: "イベント前",
    organizerBadge: "主催者",
    attendeeBadge: "参加者",
    invitationFlowHeading: "イベント招待状作成フロー",
    invitationFlowRole: "担当：フロントエンド開発",
    invitationFlowText: (
      <>
        主催者はイベントを作成する際に、招待状を作成します。
        <br />
        屋外での開催を予定している場合は、花見やピクニックなどのアクティビティに応じて、場所提案機能を利用することができます。
      </>
    ),
    eventPrepFlowHeading: "イベント準備フロー",
    eventPrepFlowRole: "担当：デザイナー／フロントエンド開発（出欠確認を除く）",
    eventPrepFlowText:
      "イベント招待状を作成すると、マイページからイベントの詳細情報を設定できるようになります。「タイムライン」「持ち物リスト」「予算管理」「出欠確認」機能を利用し、準備をスムーズに進めることができます。",
    rsvpFlowHeading: "招待状回答フロー",
    rsvpFlowRole: "担当：フロントエンド開発",
    rsvpFlowText:
      "招待状を受け取ったユーザーは、招待状に回答することで出欠を主催者に知らせます。アレルギー情報の事前通知や、家族などの同伴者がいる場合に名前を追加することができます。",
    eventPageFlowHeading: "イベントページ閲覧フロー",
    eventPageFlowRole: "担当：デザイナー／フロントエンド開発",
    eventPageFlowText:
      "イベントに参加する場合、メールでイベントページのリンクが送信されます。イベントページで当日の持ち物リストやタイムライン、参加者一覧を確認することができます。",
    dayOfEventLabel: "イベント当日",
    dayOfOperationHeading: "当日運営フロー",
    dayOfOperationRole: "担当：デザイナー",
    dayOfOperationText: (
      <>
        主催者は参加者の出欠確認とアルバム作成ができます。
        <br />
        アルバム機能では、画像認識処理を用いて個人のアルバムが自動で作成されます。
      </>
    ),
    postEventLabel: "イベント後",
    postEventReviewHeading: "イベント後の振り返りフロー",
    postEventReviewRole: "担当：デザイナー",
    postEventReviewText:
      "参加者はイベントでの思い出をアプリ内に投稿し、全参加者が閲覧できるようになります。",
    keyPrinciplesHeading: "4. デザインで意識したポイント",
    keyPrinciples: [
      {
        title: "コントラストと視認性",
        text: "当初、タイムラインではカード形式のUIを採用し、差別化を図るためにカードに複数の色を使用していました。しかし、全体の視認性に課題があったため、最終的にはコントラストを重視し、使用する色を2色に絞って見やすさを向上させました。",
      },
      {
        title: "レスポンシブデザイン",
        text: "今回はレスポンシブのみの対応だったため、スマートフォンで片手操作しやすいように、ボタンのサイズや幅を広めに設計しました。",
      },
      {
        title: "コンポーネントライブラリに合わせた設計",
        text: "実装時にshadcn/uiを使用することが決まっていたため、提供されているコンポーネントを無理なく使えるよう、デザインの段階から意識して構成しました。",
      },
    ],
    takeawaysTitle: "学び",
    takeaways: [
      {
        title: "想定シナリオの幅を広げることの重要性",
        text: "設計中、想定すべきユーザーフローのパターンに抜け漏れが多く、引き出しの少なさを実感しました。例えば、今回のプロジェクトでは「ホストかゲストか」「データが存在しない場合のUIをどうするか」といったケースへの対応が不十分でした。今後は、より多くのサービスに触れることで幅広い状況を想定できるよう日頃から意識していきたいです。",
      },
      {
        title: "デザイン意図を言語化することの重要性",
        text: "一部のUIで設計意図が曖昧なまま進めてしまい、メンバーからデザインの意図を尋ねられた際に答えられない場面がありました。今後は「なぜこの設計にしたのか」を常に意識し、明確な根拠を持ってデザインするよう努めたいです。",
      },
      {
        title: "デザインと実装のバランス",
        text: "デザインの理想と実装の現実の間で柔軟に調整する力が必要だと感じました。例えば、ホーム画面に子どもの絵や写真を表示する案がありましたが、DB設計の都合で実現が難しく、デザインを見直す必要がありました。今後は、デザイン段階から実装の制約を意識し、より現実的な設計を心がけたいです。",
      },
    ],
    homeLabel: "ホーム",
  },
};

const EventManagement = () => {
  const { language } = useLanguage();
  const t = content[language];

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
            <p className="text-sm">{t.homeLabel}</p>
          </div>
        </Link>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-6 md:px-16 lg:px-32 xl:px-56 md:pt-12">
          <div className="md:w-1/2 flex-1 mb-4 md:mb-20 h-[300px] overflow-hidden object-top">
            <ZoomableImage
              src={localizeImage("/event-management/thumbnail.png")}
              alt="event management thumbnail"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <div>
                <div className="space-y-3">
                  <h1 className="text-2xl font-semibold">{t.heading}</h1>
                  <div className="flex-1 h-[0.8px] bg-border mt-4" />
                </div>
              </div>
            </div>
            <InfoList items={t.infoItems} />
          </div>
        </div>
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="flex items-stretch gap-3 text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.overviewTitle}
          </h2>
          <p className="leading-relaxed text-gray-700">{t.overviewText}</p>
        </div>
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20">
          <h2 className="flex items-stretch gap-3 text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.backgroundTitle}
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            {t.backgroundText}
          </p>
        </div>
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="flex items-stretch gap-3 text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.problemTitle}
          </h2>
          <div className="space-y-2">
            <p className="text-base leading-relaxed text-gray-700">
              {t.problemIntro}
            </p>
            <div className="md:w-1/2 self-start">
              <ZoomableImage
                src={localizeImage(
                  "/event-management/user-scenario.png",
                  language,
                )}
                alt="user scenario"
                className="w-full h-full object-cover border border-border rounded"
              />
            </div>
          </div>
          <div>
            <div className="space-y-2">
              <p>{t.problemAnalysisText}</p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2">
                  <ZoomableImage
                    src={localizeImage(
                      "/event-management/problem-host.png",
                      language,
                    )}
                    alt=""
                    className="w-full h-full object-cover border border-border rounded"
                  />
                </div>
                <div className="md:w-1/2 ">
                  <ZoomableImage
                    src={localizeImage(
                      "/event-management/problem-guest.png",
                      language,
                    )}
                    alt=""
                    className="w-full h-full object-cover border border-border rounded"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="text-base leading-relaxed text-gray-700">
            {t.problemSummaryText}
          </p>
        </div>
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20">
          <h2 className="flex items-stretch gap-3 text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.mvpTitle}
          </h2>
          <p className="text-base leading-relaxed text-gray-700">{t.mvpText}</p>
          <div className="md:w-1/2">
            <ZoomableImage
              src={localizeImage("/event-management/mvp.png", language)}
              alt=""
              className="w-full h-full object-cover border border-border rounded"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary overflow-hidden">
          <h2 className="flex items-stretch gap-3 text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.uiDesignTitle}
          </h2>
          <div>
            <div className="space-y-20">
              {/* ワイヤーフレーム作成 */}
              <section className="flex flex-col gap-2">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  {t.wireframeHeading}
                </h3>
                <div className="flex flex-col gap-4">
                  <p className="text-base leading-relaxed text-gray-700">
                    {t.wireframeText}
                  </p>
                  <div className="md:w-1/2">
                    <ZoomableImage
                      src={localizeImage(
                        "/event-management/wireframe.png",
                        language,
                      )}
                      alt="ワイヤーフレーム画像"
                      className="w-full max-w-full object-cover border border-border rounded"
                    />
                    <p className="text-xs text-center text-gray-520 mt-2">
                      {t.wireframeCaption}
                    </p>
                  </div>
                </div>
              </section>

              {/* イメージボードとスタイルガイド */}
              <section className="flex flex-col gap-2">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  {t.moodboardHeading}
                </h3>
                <div className="space-y-4">
                  <p className="text-base leading-relaxed text-gray-700 mb-3">
                    {t.moodboardText}
                  </p>
                  <div className="flex flex-col md:flex-row items-center gap-10 flex-wrap">
                    {moodboardImages.map((item, index) => (
                      <div
                        key={index}
                        className="max-w-[420px] w-full flex flex-col items-center"
                      >
                        <div className="w-full md:h-[240px] flex items-center justify-center border border-border rounded bg-white">
                          <ZoomableImage
                            src={localizeImage(item.src, language)}
                            alt={item.alt}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <p className="text-xs text-center text-gray-520 mt-2">
                          {t.moodboardItems[index]}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="text-base leading-relaxed text-gray-700">
                    {t.moodboardStyleText}
                  </p>
                </div>
              </section>

              {/* 完成UI */}
              <section
                id="final-ui"
                className="flex flex-col gap-2 scroll-mt-24"
              >
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  {t.finalUiHeading}
                </h3>
                <div>
                  {/* イベント前 */}
                  <div>
                    <a
                      href="https://www.figma.com/design/oIPqiG9YMKMtWQmttO0IU1/Event-app?node-id=2-7042&t=4fp1dIlf82wF3oub-1"
                      className="underline text-blue-500 hover:opacity-75 pt-2 pb-4 block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.figmaLinkLabel}
                    </a>
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-medium">{t.preEventLabel}</p>
                      <div className="flex-1 h-[0.8px] bg-border" />
                    </div>
                    <div className="flex flex-col gap-16">
                      {/* 主催者フロー */}
                      <div className="flex flex-col lg:flex-row items-center md:justify-between gap-10 mb-6 w-full px-2">
                        <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <span className="bg-primary text-white text-xs px-2 py-[2px] rounded-full">
                                {t.organizerBadge}
                              </span>
                              <h4 className="text-sm font-semibold text-gray-700">
                                {t.invitationFlowHeading}
                              </h4>
                            </div>
                            <p className="text-xs text-gray-600">
                              {t.invitationFlowRole}
                            </p>
                          </div>
                          <div className="w-full max-w-[480px] h-[380px]">
                            <video
                              src="/event-management/demo-createinvitation.mp4"
                              controls
                              className="h-full object-contain rounded"
                            />
                          </div>

                          <p className="text-sm text-gray-700 pt-2">
                            {t.invitationFlowText}
                          </p>
                        </div>
                        <img
                          src={localizeImage(
                            "/event-management/arrow-right.svg",
                            language,
                          )}
                          alt="right arrow"
                          className="w-[64px] h-auto object-cover transform rotate-90 lg:rotate-0 transition-transform duration-300"
                        />
                        <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <span className="bg-primary text-white text-xs px-2 py-[2px] rounded-full">
                                {t.organizerBadge}
                              </span>
                              <h4 className="text-sm font-semibold text-gray-700">
                                {t.eventPrepFlowHeading}
                              </h4>
                            </div>
                            <p className="text-xs text-gray-600">
                              {t.eventPrepFlowRole}
                            </p>
                          </div>
                          <div className="w-full max-w-[480px] h-[380px]">
                            <video
                              src="/event-management/demo-host-eventpre.mp4"
                              controls
                              className="h-full object-contain rounded"
                            />
                          </div>
                          <p className="text-sm text-gray-700 pt-2">
                            {t.eventPrepFlowText}
                          </p>
                        </div>
                      </div>

                      {/* 参加者フロー */}
                      <div className="flex flex-col lg:flex-row items-center md:justify-between gap-10 mb-6 w-full px-2">
                        <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <span className="bg-secondary text-white text-xs px-2 py-[2px] rounded-full">
                                {t.attendeeBadge}
                              </span>
                              <h4 className="text-sm font-semibold text-gray-700">
                                {t.rsvpFlowHeading}
                              </h4>
                            </div>
                            <p className="text-xs text-gray-600">
                              {t.rsvpFlowRole}
                            </p>
                          </div>
                          <div className="w-full max-w-[480px] h-[380px]">
                            <video
                              src="/event-management/demo-rsvp.mp4"
                              controls
                              className="h-full object-contain rounded"
                            />
                          </div>
                          <p className="text-sm text-gray-700 pt-2">
                            {t.rsvpFlowText}
                          </p>
                        </div>
                        <img
                          src={localizeImage(
                            "/event-management/arrow-right.svg",
                            language,
                          )}
                          alt="right arrow"
                          className="w-[64px] h-auto object-cover transform rotate-90 lg:rotate-0 transition-transform duration-300"
                        />
                        <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <span className="bg-secondary text-white text-xs px-2 py-[2px] rounded-full">
                                {t.attendeeBadge}
                              </span>
                              <h4 className="text-sm font-semibold text-gray-700">
                                {t.eventPageFlowHeading}
                              </h4>
                            </div>
                            <p className="text-xs text-gray-600">
                              {t.eventPageFlowRole}
                            </p>
                          </div>
                          <div className="w-full max-w-[480px] h-[380px]">
                            <video
                              src="/event-management/demo-guest-eventpre.mp4"
                              controls
                              className="h-full object-contain rounded"
                            />
                          </div>
                          <p className="text-sm text-gray-700 pt-2">
                            {t.eventPageFlowText}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* イベント当日 */}
                  <div className="my-8 space-y-3">
                    <div className="flex items-center gap-2">
                      <p className="font-medium m-0">{t.dayOfEventLabel}</p>
                      <div className="flex-1 h-[0.8px] bg-border" />
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 px-2">
                      <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
                        <div>
                          <div className="flex items-center gap-1 mb-1">
                            <span className="bg-primary text-white text-xs px-2 py-[2px] rounded-full">
                              {t.organizerBadge}
                            </span>
                            <h4 className="text-sm font-semibold text-gray-700">
                              {t.dayOfOperationHeading}
                            </h4>
                          </div>
                          <p className="text-xs text-gray-600">
                            {t.dayOfOperationRole}
                          </p>
                        </div>
                        <div className="w-full max-w-[480px] h-[380px]">
                          <video
                            src="/event-management/demo-host-eventday.mp4"
                            controls
                            className="h-full object-contain rounded"
                          />
                        </div>
                        <p className="text-sm text-gray-700 pt-2">
                          {t.dayOfOperationText}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* イベント後 */}
                  <div className="pt-8 mb-8 space-y-3">
                    <div className="flex items-center gap-2">
                      <p className="font-medium m-0">{t.postEventLabel}</p>
                      <div className="flex-1 h-[0.8px] bg-border" />
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 px-2">
                      <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
                        <div>
                          <div className="flex items-center gap-1 mb-1">
                            <span className="bg-secondary text-white text-xs px-2 py-[2px] rounded-full">
                              {t.attendeeBadge}
                            </span>
                            <h4 className="text-sm text-gray-700 font-semibold">
                              {t.postEventReviewHeading}
                            </h4>
                          </div>
                          <p className="text-xs text-gray-600">
                            {t.postEventReviewRole}
                          </p>
                        </div>
                        <div className="w-full max-w-[480px] h-[380px]">
                          <video
                            src="/event-management/demo-guest-review.mp4"
                            controls
                            className="h-full object-contain rounded"
                          />
                        </div>
                        <p className="text-sm text-gray-700 pt-2">
                          {t.postEventReviewText}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 意識した点 */}
                  <div className="space-y-2">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900">
                      {t.keyPrinciplesHeading}
                    </h3>
                    <ul className="list-disc pl-5 space-y-6 text-base text-gray-700">
                      {t.keyPrinciples.map((item, idx) => (
                        <li key={idx}>
                          <div className="flex flex-col">
                            <strong>{item.title}</strong>
                            <p>{item.text}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20">
          <h2 className="flex items-stretch gap-3 text-2xl font-semibold text-[#3B2707]">
            <span className="w-1.5 bg-current shrink-0 rounded-full" />
            {t.takeawaysTitle}
          </h2>
          <ul className="list-disc pl-5 space-y-6 text-base text-gray-700">
            {t.takeaways.map((item, idx) => (
              <li key={idx}>
                <div className="flex flex-col">
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link to="/" className="hover:opacity-80 pt-20">
            <div className="flex items-center gap-1">
              <span className="flex items-center justify-center rounded-full w-6 h-6 bg-primary">
                <MdOutlineArrowBackIosNew
                  width={10}
                  className="w-5 h-3 text-white"
                />
              </span>
              <p className="pb-0.5 text-sm">{t.homeLabel}</p>
            </div>
          </Link>
        </div>
      </section>
    </FadeInPageWrapper>
  );
};

export default EventManagement;
