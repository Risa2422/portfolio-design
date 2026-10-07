import { useEffect } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import Arrow from "../../components/Arrow";
import FadeInPageWrapper from "../../components/FadeInPageWrapper";
import InfoList from "../../components/InfoList";
import ZoomableImage from "../../components/ZoomableImage";
import { useLanguage } from "../../context/LanguageContext";
import { localizeImage } from "../../utils/localizeImage";

const content = {
  en: {
    infoItems: [
      { title: "Service Type", value: "Web App / Mobile" },
      { title: "Project Format", value: "Feature Design" },
      { title: "Duration", value: "1 day" },
      { title: "My Role", value: "UI/UX Design" },
      { title: "Tools Used", value: "Figma" },
    ],
    heading: "Google Maps – New Album Feature Design",
    overviewTitle: "Overview",
    overviewText:
      "I expanded the existing Lists feature in Google Maps and designed a new album function. The goal was to make organizing and sharing added photos more intuitive while maintaining consistency with the original app.",
    backgroundTitle: "Background",
    backgroundText: (
      <>
        During spring break, I went on a trip to Jasper, Canada, with my
        friends. Since it was a group trip, we used a shared Google Maps list to
        organize and coordinate all of our destinations. After the trip, I tried
        sharing our travel photos through Slack, but quickly found the process
        inconvenient—Slack doesn’t offer an album feature, and it only allows up
        to 10 photos to be uploaded at once. <br />
        This experience made me realize how useful it would be if Google Maps
        allowed users to create photo albums for each place in their travel
        list. Being able to save, share, and revisit memories directly within
        the app would make the entire travel experience much smoother. This idea
        became the starting point for my redesign.
      </>
    ),
    problemTitle: "Identifying the Problems & Generating Ideas",
    problemIntro:
      "The existing Lists feature allowed users to save and organize places, but there was no way to create a visually appealing album with photos and notes. The challenge was to enhance the functionality without overcomplicating the UI.",
    issuesLabel: "Here are some specific issues I identified:",
    issues: [
      "Many messaging apps do not offer built-in album features for photo sharing, and when they do support photo sharing, the number of photos that can be sent at once is often limited.",
      "The more photos there are to share, the longer it takes for users to find the ones they need.",
      "Users often want to leave comments on shared photos to add context or share their thoughts.",
    ],
    analysisText: (
      <>
        First of all, I analyzed the current Lists feature page by page and
        identified opportunities to introduce a new album feature.
        <br />
        The existing app allows users to create lists for sharing by selecting
        the "You" tag and choosing "Shared" when configuring the list details.
      </>
    ),
    flowCaption: (
      <>
        Next, I created user stories and, while comparing them with the existing
        app flow, brainstormed potential ideas for each screen.
        <br />
        (The text in red indicates the parts that were incorporated into this
        design.)
      </>
    ),
    finalUiTitle: "Final UI Design",
    newScreensLabel: "New Screens",
    newScreensCaption: "Here’s the album feature I designed.",
    moreDetailsLabel: "More details",
    modalCaption:
      "After setting up the list information, the design allows users to freely choose whether to use the album feature via a half-modal, preventing unexpected features from appearing suddenly and causing confusion.",
    listCaption:
      "Initially, the list was designed to automatically switch from “Destinations” to “Album” after the trip, based on the travel dates entered by the user. However, since users may still want to review their “Destinations,” the design was updated to let them switch between “Destinations” and “Album” using tags, independent of the dates.",
    albumCaption:
      "I displayed albums by location and chose smaller album cards to keep scrolling minimal, since users often visit many places when traveling. I also separated albums with photos from those without, so users can quickly understand their options and take intuitive actions.",
    albumDetailCaption:
      "I explored several ways to display photos, such as individual cards and horizontal scrolling. But since users often have many photos, I decided that a vertical, camera-roll-style layout would help them find what they need more quickly. For comments, which are lower in priority compared to photos, I kept the section compact and used horizontal scrolling so users can browse all comments without taking up too much space.",
    learningsTitle: "Learnings",
    learningsText:
      "Throughout this project, I focused on keeping the design consistent by reusing existing components whenever I could, and only improving the parts that really needed it—without changing the overall user flow too much. Through this process, I learned how important it is to respect the existing information architecture and the user experience people are already familiar with. I realized that improving an existing app requires careful decisions so the update doesn’t disrupt what users are used to.",
    homeLabel: "Home",
  },
  ja: {
    infoItems: [
      { title: "サービス種別", value: "Webアプリ / モバイル" },
      { title: "プロジェクト区分", value: "機能デザイン" },
      { title: "期間", value: "1日" },
      { title: "担当領域", value: "UI/UXデザイン" },
      { title: "使用ツール", value: "Figma" },
    ],
    heading: "Google Maps – 新しいアルバム機能デザイン",
    overviewTitle: "Overview",
    overviewText:
      "Google Mapsの既存のリスト機能を拡張し、新しいアルバム機能をデザインしました。既存アプリとの一貫性を保ちながら、追加した写真をより直感的に整理・共有できることを目指しました。",
    backgroundTitle: "Background",
    backgroundText: (
      <>
        春休みに、友人とカナダのジャスパーへ旅行に行きました。グループ旅行だったため、共有のGoogle
        Mapsリストを使って目的地を整理・調整していました。旅行後、Slackで旅の写真を共有しようとしましたが、Slackにはアルバム機能がなく、一度に送れる写真の枚数も10枚までに制限されており、不便さを感じました。
        <br />
        この経験から、Google
        Mapsの旅行リストの各場所ごとに写真アルバムを作成できれば便利なのではないかと考えるようになりました。アプリ内で思い出を保存・共有・振り返ることができれば、旅行体験全体がよりスムーズになります。このアイデアが今回のリデザインの出発点になりました。
      </>
    ),
    problemTitle: "課題の特定とアイデア出し",
    problemIntro:
      "既存のリスト機能では場所を保存・整理することはできましたが、写真やメモを使って見た目にも魅力的なアルバムを作成する方法はありませんでした。課題は、UIを複雑にしすぎることなく機能を拡張することでした。",
    issuesLabel: "具体的に見えてきた課題は以下の通りです：",
    issues: [
      "多くのメッセージアプリには写真共有用のアルバム機能が組み込まれておらず、写真共有に対応している場合でも、一度に送信できる枚数が制限されていることが多い。",
      "共有する写真が多いほど、ユーザーが必要な写真を見つけるのに時間がかかる。",
      "ユーザーは共有した写真に文脈を加えたり感想を伝えたりするために、コメントを残したいと考えることが多い。",
    ],
    analysisText: (
      <>
        まず、既存のリスト機能を1画面ずつ分析し、新しいアルバム機能を導入できるポイントを洗い出しました。
        <br />
        既存のアプリでは、リストの詳細設定時に「You」タグを選択し「Shared」を選ぶことで、共有用のリストを作成できます。
      </>
    ),
    flowCaption: (
      <>
        次に、ユーザーストーリーを作成し、既存のアプリのフローと比較しながら各画面ごとのアイデアをブレインストーミングしました。
        <br />
        （赤字部分が、今回のデザインに反映された箇所です。）
      </>
    ),
    finalUiTitle: "最終UIデザイン",
    newScreensLabel: "新しい画面",
    newScreensCaption: "デザインしたアルバム機能はこちらです。",
    moreDetailsLabel: "詳細",
    modalCaption:
      "リスト情報を設定した後、ハーフモーダルを使ってアルバム機能を使うかどうかをユーザーが自由に選べるようにし、予期しない機能が突然表示されて混乱することを防いでいます。",
    listCaption:
      "当初は、ユーザーが入力した旅行日程に基づいて、旅行後に自動的に「Destinations」から「Album」へ切り替わるようにリストを設計していました。しかし、ユーザーが旅行後も「Destinations」を見返したい場合があるため、日程に関係なくタグで「Destinations」と「Album」を切り替えられるようにデザインを変更しました。",
    albumCaption:
      "旅行では多くの場所を訪れることが多いため、スクロール量を抑えられるよう、場所ごとにアルバムを表示し、小さめのアルバムカードを採用しました。また、写真があるアルバムとないアルバムを分けて表示することで、ユーザーが選択肢をすぐに理解し、直感的に行動できるようにしました。",
    albumDetailCaption:
      "個別カード表示や横スクロールなど、写真の表示方法をいくつか検討しました。しかしユーザーは多くの写真を持っていることが多いため、必要な写真をより早く見つけられるよう、カメラロールのような縦型レイアウトを採用することにしました。写真に比べて優先度の低いコメントについては、セクションをコンパクトに保ち、スペースを取りすぎないよう横スクロールで閲覧できるようにしました。",
    learningsTitle: "学び",
    learningsText:
      "このプロジェクトを通して、できる限り既存のコンポーネントを再利用して一貫性のあるデザインを保ちながら、本当に改善が必要な部分だけを見直し、全体的なユーザーフローを大きく変えないことを意識しました。この過程で、既存の情報設計やユーザーがすでに慣れ親しんでいる体験を尊重することの重要性を学びました。既存アプリを改善する際は、ユーザーの慣れを崩さないよう慎重に判断する必要があると実感しました。",
    homeLabel: "ホーム",
  },
};

const GoogleMapsAlbum = () => {
  const { language } = useLanguage();
  const t = content[language];

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
              src={localizeImage("/googlemaps-album/thumbnail.png", language)}
              alt="Google Maps Album Feature Thumbnail"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4 flex-1">
            <div className="space-y-3">
              <h1 className="text-2xl font-semibold">{t.heading}</h1>
              <div className="h-[0.8px] bg-border mt-4" />
            </div>
            <InfoList items={t.infoItems} />
          </div>
        </div>
        {/* Overview Section */}
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            {t.overviewTitle}
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            {t.overviewText}
          </p>
        </div>
        {/* Background Section */}
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            {t.backgroundTitle}
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            {t.backgroundText}
          </p>
        </div>

        {/* Problem Identification Section */}
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            {t.problemTitle}
          </h2>
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-700">
                {t.problemIntro}
              </p>
              <div>
                <p className="text-lg font-bold">{t.issuesLabel}</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {t.issues.map((issue, idx) => (
                    <li key={idx}>{issue}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <p className="leading-relaxed text-gray-700">{t.analysisText}</p>

              {/* Existing Flow Images */}
              <div className="flex flex-col gap-24">
                {["existing-flow.png", "flow.png"].map((src, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row flex-1 gap-10">
                      <div className="flex flex-col gap-2">
                        {idx === 1 ? <p>{t.flowCaption}</p> : ""}
                        <ZoomableImage
                          src={localizeImage(
                            `/googlemaps-album/${src}`,
                            language,
                          )}
                          alt="Lists Page Before"
                          className="h-full object-cover border border-border rounded max-w-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* UI Design Section */}
        <div
          id="final-ui"
          className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background"
        >
          <h2 className="text-2xl text-center text-accent font-medium">
            {t.finalUiTitle}
          </h2>
          {/* Final Design */}
          <div className="w-full space-y-2">
            <div>
              <p className="text-lg md:text-xl font-medium">
                {t.newScreensLabel}
              </p>
              <p className="text-base">{t.newScreensCaption}</p>
            </div>
            <div>
              <ZoomableImage
                src={localizeImage("/googlemaps-album/final-ui.png", language)}
                alt="Album Feature Page"
                className="h-full object-cover rounded"
              />
            </div>
          </div>
          {/* Additional UI Screens */}
          <div className="flex flex-col w-full gap-8">
            <p className="border-b border-gray-400 border-dashed my-4"></p>
            <div className="w-full space-y-3">
              <p className="text-lg md:text-xl font-medium">
                {t.moreDetailsLabel}
              </p>
              {/* Row 1 */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col lg:flex-row gap-8 items-center md:justify-between">
                  {["modal.png", "list.png"].map((src, idx) => (
                    <div
                      key={idx}
                      className="w-full h-[500px] sm:h-[800px] md:max-w-[480px] md:h-[500px]"
                    >
                      <ZoomableImage
                        src={localizeImage(
                          `/googlemaps-album/${src}`,
                          language,
                        )}
                        alt="Album Page"
                        className="object-contain rounded"
                      />
                      {idx === 0 ? (
                        <p className="text-base md:text-sm text-gray-700 pt-2">
                          {t.modalCaption}
                        </p>
                      ) : (
                        <p className="text-base md:text-sm text-gray-700 pt-2">
                          {t.listCaption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="flex flex-col items-center lg:flex-row gap-8 lg:items-start md:justify-between">
                  <div className="w-full sm:h-[800px] md:max-w-[480px] md:h-[620px]">
                    <ZoomableImage
                      src={localizeImage(
                        "/googlemaps-album/album.png",
                        language,
                      )}
                      alt="Album Page"
                      className="object-contain rounded"
                    />
                    <p className="text-base md:text-sm text-gray-700 pt-2">
                      {t.albumCaption}
                    </p>
                  </div>
                  <div className="w-full h-[500px] sm:h-[800px] md:max-w-[480px] md:h-[620px]">
                    <ZoomableImage
                      src={localizeImage(
                        "/googlemaps-album/album-detail.png",
                        language,
                      )}
                      alt="Album Detail Page"
                      className="object-contain rounded"
                    />
                    <p className="text-sm text-gray-700 pt-2">
                      {t.albumDetailCaption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Learnings Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="text-2xl text-center text-accent font-medium">
            {t.learningsTitle}
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            {t.learningsText}
          </p>
          <Link to="/" className="hover:opacity-80 pt-10">
            <div className="flex items-center gap-1">
              <span className="flex items-center justify-center rounded-full w-6 h-6 bg-primary">
                <MdOutlineArrowBackIosNew className="w-5 h-3 text-white" />
              </span>
              <p className="text-sm">{t.homeLabel}</p>
            </div>
          </Link>
        </div>
      </section>
    </FadeInPageWrapper>
  );
};

export default GoogleMapsAlbum;
