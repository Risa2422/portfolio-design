import { useEffect } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import Arrow from "../../components/Arrow";
import FadeInPageWrapper from "../../components/FadeInPageWrapper";
import InfoList from "../../components/InfoList";

const EventManagement = () => {
  // const infoItems = [
  //   { title: "サービス種別", value: "Webアプリ (モバイル版)" },
  //   { title: "制作種類", value: "チーム開発 (4人)" },
  //   { title: "期間", value: "1週間 (デザイン) / 3週間 (コーディング)" },
  //   { title: "担当", value: "UIデザイン / フロントエンド開発" },
  //   { title: "使用ツール (デザイン)", value: "Figma" },
  //   { title: "開発言語", value: "Next.js, Tailwind CSS, shadcn/ui" },
  // ];

  const infoItems = [
    { title: "Service Type", value: "Web App (Mobile Version)" },
    { title: "Project Type", value: "Team Development (4 members)" },
    { title: "Timeline", value: "1 week (Design) / 3 weeks (Coding)" },
    { title: "Role", value: "UI Design / Frontend Development" },
    { title: "Design Tool", value: "Figma" },
    { title: "Tech Stack", value: "Next.js, Tailwind CSS, shadcn/ui" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FadeInPageWrapper>
      <section className="space-y-10 md:space-y-4">
        <Arrow />
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-6 md:px-16 lg:px-32 xl:px-56 md:pt-12">
          <div className="md:w-1/2 md:h-[300px] flex-1 mb-4 md:mb-20 overflow-hidden object-top">
            <img
              src="/event-management/thumbnail.png"
              alt="event management thumbnail"
              width={320}
              height={320}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <div>
                <div className="space-y-3">
                  <h1 className="text-2xl font-semibold">
                    Birthday Event Management App
                  </h1>
                  <div className="flex-1 h-[0.8px] bg-border mt-4" />
                </div>
              </div>
            </div>
            <InfoList items={infoItems} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            Overview
          </h2>
          <p className="leading-relaxed text-gray-700">
            {/* 子どもの誕生日会を主催するユーザーを主な対象とした、イベントマネジメントツールです。イベントの企画から準備、当日の運営、イベント後のフォローアップまで、すべての工程を本サービスで完結できることを目指しました。
            一般的なイベントマネジメントアプリとの違いとして、開催場所を提案するサジェスト機能や、写真アルバム内で人物を自動認識する機能などの機能を提供します。 */}
            This is an event management tool primarily designed for parents
            hosting children's birthday parties. Our goal is to enable users to
            complete every step of the process within this service, from initial
            planning and preparation to day-of coordination and post-event
            follow-up. Distinguishing it from general event management apps,
            this service offers features such as a venue suggestion engine and
            an automatic facial recognition function for tagging people in photo
            albums.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            Background
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            {/* 本サービスの着想は、私が大学時代に行っていたイベントの企画・運営経験にあります。
            準備から当日の運営、アフターケアに至るまで多くのタスクを複数のツールで管理しており、作業の煩雑さに課題を感じていました。
            そこでイベント管理に必要なすべての工程をひとつのサービスで完結できれば、主催者・参加者の負担を減らせるのではないかと考えました。 */}
            The inspiration for this service came from my experience planning
            and managing events during my university years. I found the process
            cumbersome, as I had to manage numerous tasks—from preparation to
            day-of operation and aftercare—using multiple different tools. This
            led me to the idea that if all the necessary event management steps
            could be completed within a single service, it would significantly
            reduce the burden on both organizers and attendees.
          </p>
        </div>
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="text-lg md:text-2xl text-accent font-medium text-center">
            {/* 課題の洗い出し */}Problem Definition
          </h2>
          <div className="space-y-2">
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              {/* ユーザーの課題の洗い出しをするにあたって、私の経験をもとに以下のユーザーシナリオを想定しました。 */}
              Based on my personal experience, I constructed the following user
              scenarios to pinpoint key pain points for the user.
            </p>
            <div className="md:w-1/2 self-start">
              <img
                src="/event-management/user-scenario.png"
                alt="user scenario"
                className="w-full h-full object-cover border border-border rounded"
              />
            </div>
          </div>
          <div>
            <div className="space-y-2">
              <p>
                {/* ユーザーシナリオをもとに、イベント主催者と参加者が直面しうる課題を洗い出しました。 */}
                Based on the user scenarios, I identified the potential
                challenges faced by both event organizers and attendees.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2">
                  <img
                    src="/event-management/problem-host.png"
                    alt=""
                    className="w-full h-full object-cover border border-border rounded"
                  />
                </div>
                <div className="md:w-1/2 ">
                  <img
                    src="/event-management/problem-guest.png"
                    alt=""
                    className="w-full h-full object-cover border border-border rounded"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            {/* イベント主催者にとって、イベントの準備から運営まで多くのタスクが存在し、
            それらを複数のツールで管理することによる情報の分散や抜け漏れが大きな課題となると感じ、
            特に、参加者とのスムーズな情報共有や連絡手段の確保、当日の運営負担を軽減するサポート機能などが求められているのではないかと考えました。
            また、参加者側にとってもイベントの詳細や持ち物、当日のスケジュールが分かりづらいことや、参加者の顔ぶれなど、主催者にその都度確認しなければならない点が負担になっているのではないかと考えました。 */}
            For event organizers, the number of tasks involved, from initial
            preparation through day-of operation, is significant. I recognized a
            major challenge in information dispersion and omissions that result
            from managing these tasks using multiple tools. Specifically, I
            concluded there was a demand for support functions that ensure
            seamless information sharing and reliable communication with
            attendees, while simultaneously reducing the operational burden on
            the day of the event. On the attendee side, I also saw a
            considerable burden of confirmation placed on them, often having to
            repeatedly check with the organizer about crucial details—such as
            unclear event specifics, required items, the day's schedule, or even
            the faces of the other participants.
            <br />
            <br />
            {/* さらに、既存のイベント管理プラットフォームとの差別化を図るため、「子どもの誕生日会を主催する子育て層」にターゲットを絞りました。
            背景には、現在居住しているカナダでは子どもの誕生日会が気軽に、かつ頻繁に開催されているという文化があり、こうしたニーズに特化することで、より実用性の高いサービスになると仮定しました。 */}
            Furthermore, to differentiate ourselves from existing event
            management platforms, we narrowed our target audience to focus on
            parents organizing children's birthday parties. This focus was
            motivated by the cultural context of my current residence in Canada,
            where children's birthday parties are hosted casually and
            frequently. We hypothesized that by specializing in this particular,
            high-demand niche, we could create a service with significantly
            greater practical utility
          </p>
        </div>
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background">
          <h2 className="text-lg md:text-2xl text-accent font-medium text-center">
            {/* MVP設定 */}MVP Definition
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            {/* 今回はデザインから実装までの期間が4週間と短かったこともあり、MVPを設定し開発を行いました。 */}
            As the duration for design and implementation was limited to four
            weeks, we established an MVP scope to focus our development efforts.
          </p>
          <div className="md:w-1/2">
            <img
              src="/event-management/mvp.png"
              alt=""
              className="w-full h-full object-cover border border-border rounded"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary overflow-hidden">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            UI Design
          </h2>
          <div>
            <div className="space-y-20">
              {/* ワイヤーフレーム作成 */}
              <section className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">
                  {/* 1. ワイヤーフレーム作成 */}
                  1. Wireframing
                </h3>
                <div className="flex flex-col gap-4">
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    {/* 私はイベントの主催者と参加者のイベント管理画面を担当し、MVPのコア機能をベースに双方の使いやすさを意識してワイヤーフレームを作成しました。 */}
                    I was responsible for designing the event management screens
                    for both the organizer and the attendee.
                    <br />
                    {/* イベント管理画面は、ホーム画面に概要や重要な情報を集約し、必要に応じて各機能へ遷移できるように設計しました。
                    また、親しみやすさを演出するため、丸みを帯びたデザイン要素を多く取り入れました。 */}
                    The event management interface was designed to centralize
                    the overview and critical information on the home screen,
                    allowing users to easily navigate to specific functions as
                    needed. Additionally, to create a friendly and approachable
                    feel, I incorporated numerous rounded design elements
                    throughout the interface.
                  </p>
                  <div className="md:w-1/2">
                    <img
                      src="/event-management/wireframe.png"
                      alt="ワイヤーフレーム画像"
                      className="w-full max-w-full object-cover border border-border rounded"
                    />
                    <p className="text-xs text-center text-gray-520 mt-2">
                      {/* 作成したワイヤーフレーム */}Wireframe Outputs
                    </p>
                  </div>
                </div>
              </section>

              {/* イメージボードとスタイルガイド */}
              <section className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">
                  {/* 2. イメージボードの作成とスタイルガイドの決定 */}
                  2. Mood Board Creation and Style Guide Definition
                </h3>
                <div className="space-y-4">
                  <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-3">
                    {/* もう一人のデザイナーと参考にしたいデザインを集め、イメージボードを作成しました。 */}
                    Working with a fellow designer, we collected design
                    references and compiled a mood board.
                  </p>
                  <div className="flex flex-col md:flex-row items-center gap-10 flex-wrap">
                    {[
                      {
                        src: "/event-management/image-board.png",
                        alt: "イメージボード",
                        label: "Mood Board",
                      },
                      {
                        src: "/event-management/color-token.png",
                        alt: "カラーシステム",
                        label: "Color Palette System",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="max-w-[420px] w-full flex flex-col items-center"
                      >
                        <div className="w-full md:h-[240px] flex items-center justify-center border border-border rounded bg-white">
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <p className="text-xs text-center text-gray-520 mt-2">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    {/* カラーについては、ターゲットが子育て層であることを踏まえ、「安心感」「親しみやすさ」「つながり」を表現するオレンジ（#FF8549）をテーマカラーとして採用しました。
                    また、余白や文字サイズは8の倍数のルールに基づいてあらかじめ決定し、デザインの一貫性を保つようにしました。 */}
                    Considering our target audience of parents with young
                    children, we adopted orange (#FF8549) as our main theme
                    color to express feelings of "safety," "approachability,"
                    and "connection." Furthermore, to ensure design consistency,
                    we pre-determined the use of padding and font sizes based on
                    the 8-point grid system rule (multiples of 8)
                  </p>
                </div>
              </section>

              {/* 完成UI */}
              <section
                id="final-ui"
                className="flex flex-col gap-2 scroll-mt-24"
              >
                <h3 className="text-lg font-semibold">3. Final UI Design</h3>
                <div>
                  {/* イベント前 */}
                  <div>
                    <a
                      href="https://www.figma.com/design/oIPqiG9YMKMtWQmttO0IU1/Event-app?node-id=2-7042&t=4fp1dIlf82wF3oub-1"
                      className="underline text-blue-500 hover:opacity-75 pt-2 pb-4 block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* Figmaでデザインを見る */}View Design in Figma
                    </a>
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-medium">Pre-Event</p>
                      <div className="flex-1 h-[0.8px] bg-border" />
                    </div>
                    <div className="flex flex-col gap-16">
                      {/* 主催者フロー */}
                      <div className="flex flex-col lg:flex-row items-center md:justify-between gap-10 mb-6 w-full px-2">
                        <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <span className="bg-primary text-white text-xs px-2 py-[2px] rounded-full">
                                Organizer
                              </span>
                              <h4 className="text-sm font-semibold text-gray-700">
                                {/* イベント招待状作成フロー */}
                                Invitation Creation Flow
                              </h4>
                            </div>
                            <p className="text-xs text-gray-600">
                              {/* ※担当 : フロントエンド開発 */}
                              Role: Frontend Developer
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
                            {/* 主催者はイベントを作成する際に、招待状を作成します。 */}
                            When creating an event, the organizer proceeds to
                            generate the invitation.
                            <br />
                            {/* 屋外での開催を予定している場合は、花見やピクニックなどのアクティビティに応じて、場所提案機能を利用することができます。 */}
                            If the party is planned to be held outdoors, the
                            organizer can utilize the Venue Suggestion feature,
                            which provides relevant location ideas based on the
                            specific activity, such as a cherry blossom viewing
                            or a picnic.
                          </p>
                        </div>
                        <img
                          src="/event-management/arrow-right.svg"
                          alt="right arrow"
                          className="w-[64px] h-auto object-cover transform rotate-90 lg:rotate-0 transition-transform duration-300"
                        />
                        <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <span className="bg-primary text-white text-xs px-2 py-[2px] rounded-full">
                                Organizer
                              </span>
                              <h4 className="text-sm font-semibold text-gray-700">
                                Event Preparation Flow
                              </h4>
                            </div>
                            <p className="text-xs text-gray-600">
                              Role: Designer / Frontend Developer (Excluding
                              RSVP Responses)
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
                            {/* イベント招待状を作成すると、マイページからイベントの詳細情報を設定できるようになります。「タイムライン」「持ち物リスト」「予算管理」「出欠確認」機能を利用し、準備をスムーズに進めることができます。 */}
                            Once the event invitation is created, the organizer
                            gains access to the detailed event settings screen
                            from their main page. They can then utilize features
                            such as "Timeline," "Packing List (or Items to
                            Bring)," "Budget Management," and "RSVP Tracking" to
                            ensure smooth and efficient preparation.
                          </p>
                        </div>
                      </div>

                      {/* 参加者フロー */}
                      <div className="flex flex-col lg:flex-row items-center md:justify-between gap-10 mb-6 w-full px-2">
                        <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <span className="bg-secondary text-white text-xs px-2 py-[2px] rounded-full">
                                Attendee
                              </span>
                              <h4 className="text-sm font-semibold text-gray-700">
                                Invitation Response Flow
                              </h4>
                            </div>
                            <p className="text-xs text-gray-600">
                              Role: Frontend Developer
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
                            {/* 招待状を受け取ったユーザーは、招待状に回答することで出欠を主催者に知らせます。アレルギー情報の事前通知や、家族などの同伴者がいる場合に名前を追加することができます。 */}
                            Upon receiving the invitation, the user informs the
                            organizer of their attendance by submitting their
                            RSVP response. The response process allows the
                            attendee to pre-notify the organizer of any allergy
                            information and add the names of any accompanying
                            guests, such as family members.
                          </p>
                        </div>
                        <img
                          src="/event-management/arrow-right.svg"
                          alt="right arrow"
                          className="w-[64px] h-auto object-cover transform rotate-90 lg:rotate-0 transition-transform duration-300"
                        />
                        <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <span className="bg-secondary text-white text-xs px-2 py-[2px] rounded-full">
                                Attendee
                              </span>
                              <h4 className="text-sm font-semibold text-gray-700">
                                Event Page Viewing Flow
                              </h4>
                            </div>
                            <p className="text-xs text-gray-600">
                              Role: Designer / Frontend Developer
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
                            {/* イベントに参加する場合、メールでイベントページのリンクが送信されます。イベントページで当日の持ち物リストやタイムライン、参加者一覧を確認することができます。 */}
                            If an attendee confirms their participation, a link
                            to the dedicated event page is sent via email. On
                            this event page, they can easily check the packing
                            list (items to bring), the day's timeline/schedule,
                            and the list of other attendees.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* イベント当日 */}
                  <div className="my-8 space-y-3">
                    <div className="flex items-center gap-2">
                      <p className="font-medium m-0">Day of the Event</p>
                      <div className="flex-1 h-[0.8px] bg-border" />
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 px-2">
                      <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
                        <div>
                          <div className="flex items-center gap-1 mb-1">
                            <span className="bg-primary text-white text-xs px-2 py-[2px] rounded-full">
                              Organizer
                            </span>
                            <h4 className="text-sm font-semibold text-gray-700">
                              Day-of Event Operation Flow
                            </h4>
                          </div>
                          <p className="text-xs text-gray-600">
                            Role: Designer
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
                          {/* 主催者は参加者の出欠確認とアルバム作成ができます。 */}
                          The organizer can manage attendee check-in (attendance
                          tracking) and create the photo album within the
                          application.
                          <br />
                          {/* アルバム機能では、画像認識処理を用いて個人のアルバムが自動で作成されます。 */}
                          For the photo album feature, individual photo albums
                          are automatically generated for each attendee using
                          image recognition processing.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* イベント後 */}
                  <div className="pt-8 mb-8 space-y-3">
                    <div className="flex items-center gap-2">
                      <p className="font-medium m-0">Post-Event</p>
                      <div className="flex-1 h-[0.8px] bg-border" />
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 px-2">
                      <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
                        <div>
                          <div className="flex items-center gap-1 mb-1">
                            <span className="bg-secondary text-white text-xs px-2 py-[2px] rounded-full">
                              Attendee
                            </span>
                            <h4 className="text-sm text-gray-700 font-semibold">
                              Post-Event Review Flow
                            </h4>
                          </div>
                          <p className="text-xs text-gray-600">
                            Role: Designer
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
                          {/* 参加者はイベントでの思い出をアプリ内に投稿し、全参加者が閲覧できるようになります。 */}
                          Attendees can post their memories within the app, and
                          these posts become accessible to all participants of
                          the event.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 意識した点 */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">
                      4. Key Design Principles
                    </h3>
                    <ul className="list-disc pl-5 space-y-6 text-sm md:text-base text-gray-700">
                      <li>
                        <div className="flex flex-col">
                          <strong>Contrast and Readability</strong>
                          <p>
                            {/* 当初、タイムラインではカード形式のUIを採用し、差別化を図るためにカードに複数の色を使用していました。しかし、全体の視認性に課題があったため、最終的にはコントラストを重視し、使用する色を2色に絞って見やすさを向上させました。 */}
                            Initially, we used a card-based UI for the Timeline
                            and incorporated multiple colors on the cards to
                            enhance differentiation. However, this approach
                            presented challenges regarding overall visibility
                            and legibility. Therefore, we ultimately prioritized
                            contrast, simplifying the design by limiting the
                            color palette to just two colors to significantly
                            improve readability.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-col">
                          <strong>Responsive Design</strong>
                          <p>
                            {/* 今回はレスポンシブのみの対応だったため、スマートフォンで片手操作しやすいように、ボタンのサイズや幅を広めに設計しました。 */}
                            Although our scope was limited to responsive design,
                            we prioritized optimizing the mobile experience.
                            Specifically, we designed buttons and interactive
                            elements with generous sizing and width to
                            facilitate comfortable single-handed operation on
                            smartphones.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-col">
                          <strong>
                            {/* コンポーネントライブラリに合わせた設計 */}
                            Design Aligned with Component Library
                          </strong>
                          <p>
                            {/* 実装時に
                            shadcn/uiを使用することが決まっていたため、提供されているコンポーネントを無理なく使えるよう、デザインの段階から意識して構成しました。 */}
                            Since we had decided to use shadcn/ui for
                            implementation, the design structure was consciously
                            composed from the initial stage to ensure that the
                            provided components could be seamlessly integrated
                            without requiring complex overrides or excessive
                            custom styling.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background">
          <h2 className="text-lg md:text-2xl text-accent font-medium text-center">
            {/* 学び */}Key Takeaways
          </h2>
          <ul className="list-disc pl-5 space-y-6 text-sm md:text-base text-gray-700">
            <li>
              <div className="flex flex-col">
                <strong>The Importance of Expanding Scenarios</strong>
                <p>
                  {/* 設計中、想定すべきユーザーフローのパターンに抜け漏れが多く、引き出しの少なさを実感しました。例えば、今回のプロジェクトでは「ホストかゲストか」「データが存在しない場合のUIをどうするか」といったケースへの対応が不十分でした。今後は、より多くのサービスに触れることで幅広い状況を想定できるよう日頃から意識していきたいです。 */}
                  During the design process, I realized a lack of breadth in
                  anticipating necessary user flows, leading to many omissions
                  in expected patterns. For instance, in this project, handling
                  edge cases such as determining the UI for "Host or Guest"
                  status or designing the interface for "no data available"
                  scenarios was insufficient. Moving forward, I plan to
                  consciously engage with and analyze a wider variety of
                  existing services to better anticipate and accommodate
                  comprehensive situations and user behaviors in my future
                  designs.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <strong>The Importance of Articulating Design Intent</strong>
                <p>
                  {/* 一部のUIで設計意図が曖昧なまま進めてしまい、メンバーからデザインの意図を尋ねられた際に答えられない場面がありました。今後は「なぜこの設計にしたのか」を常に意識し、明確な根拠を持ってデザインするよう努めたいです。 */}
                  During the project, I encountered situations where the design
                  rationale for certain UI elements was ambiguous. This led to
                  instances where I was unable to clearly explain the design
                  choices when asked by team members. Moving forward, I am
                  committed to always defining "Why I made this specific design
                  decision," ensuring every choice is backed by a clear and
                  explicit rationale.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <strong>Balancing Design and Implementation</strong>
                <p>
                  {/* デザインの理想と実装の現実の間で柔軟に調整する力が必要だと感じました。例えば、ホーム画面に子どもの絵や写真を表示する案がありましたが、DB設計の都合で実現が難しく、デザインを見直す必要がありました。今後は、デザイン段階から実装の制約を意識し、より現実的な設計を心がけたいです。 */}
                  I realized the necessity of flexible adjustment between design
                  ideals and implementation realities. For example, an initial
                  idea was to display children's drawings or photos on the home
                  screen; however, this proved challenging due to our database
                  (DB) structure, necessitating a re-evaluation of the design.
                  Moving forward, I am committed to making more realistic design
                  decisions by consciously considering implementation
                  constraints from the earliest design stages.
                </p>
              </div>
            </li>
          </ul>
          <Link to="/" className="hover:opacity-80 pt-4">
            <div className="flex items-center gap-1">
              <MdOutlineArrowBackIosNew width={10} className="w-5 h-3" />
              <p className="pb-0.5 text-sm underline">Home</p>
            </div>
          </Link>
        </div>
      </section>
    </FadeInPageWrapper>
  );
};

export default EventManagement;
