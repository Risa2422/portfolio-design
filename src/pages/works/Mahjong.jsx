// import { useEffect } from "react";
// import { MdOutlineArrowBackIosNew } from "react-icons/md";
// import { Link } from "react-router-dom";
// import Arrow from "../../components/Arrow";
// import FadeInPageWrapper from "../../components/FadeInPageWrapper";
// import InfoList from "../../components/InfoList";

// const Mahjong = () => {
//   const infoItems = [
//     { title: "サービス種別", value: "Webアプリ(モバイル版)" },
//     { title: "制作形態", value: "チーム開発" },
//     { title: "制作期間", value: "1週間" },
//     { title: "担当領域", value: "UIデザイン" },
//     { title: "使用ツール", value: "Figma" },
//   ];

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <FadeInPageWrapper>
//       <section className="space-y-10 md:space-y-4">
//         <Arrow />
//         <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-6 md:px-16 lg:px-32 xl:px-56 md:pt-12">
//           <div className="md:w-1/2 md:h-[300px] flex-1 mb-4 md:mb-20">
//             <img
//               src="/mahjong/thumbnail.png"
//               alt="mahjong thumbnail"
//               width={320}
//               height={320}
//               className="w-full h-full object-contain"
//             />
//           </div>
//           <div className="space-y-4 flex-1">
//             <div>
//               <div className="space-y-3">
//                 <h1 className="text-xl font-semibold">麻雀対戦記録アプリ</h1>
//                 <div className="flex-1 h-[0.8px] bg-border mt-4" />
//               </div>
//             </div>
//             <InfoList items={infoItems} />
//           </div>
//         </div>
//         <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-56 bg-background-secondary">
//           <h2 className="text-lg md:text-xl text-accent font-medium">概要</h2>
//           <p className="text-sm md:text-base leading-relaxed text-gray-700">
//             既存の
//             <a
//               href="https://apps.apple.com/jp/app/%E9%9B%80%E3%83%AD%E3%82%B0-%E9%BA%BB%E9%9B%80%E3%81%AE%E6%88%90%E7%B8%BE-%E5%8F%8E%E6%94%AF%E3%82%92%E8%A8%98%E9%8C%B2%E3%81%99%E3%82%8B%E5%B8%B3%E7%B0%BF%E3%82%A2%E3%83%97%E3%83%AA/id1439070045"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 underline hover:text-blue-800"
//             >
//               麻雀記録アプリ
//             </a>
//             をベースとした麻雀対戦記録アプリのデザインを担当しました。
//             背景としては、麻雀好きな知人のエンジニアが、普段対戦結果を記録するために使用している既存アプリが使い辛く、
//             より使いやすいアプリを開発したいとのことで、既存アプリの基本的な機能は引き継ぎつつもより直感的なUIデザインの制作に力を入れました。
//           </p>
//         </div>
//         <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background">
//           <h2 className="text-lg md:text-xl text-accent font-medium">
//             課題の洗い出し
//           </h2>
//           <div className="space-y-8">
//             <p className="text-sm md:text-base leading-relaxed text-gray-700">
//               既存アプリは、機能面では充実している一方で、デザインが機能的すぎるため、麻雀アプリとしての世界観や雰囲気に乏しい印象を受けました。
//               実際にヒアリングを行った際、依頼者も「機能には特に不満はないが、使いづらさや見た目の古さを感じる」と話しており、UIの使いやすさと視覚的な魅力の両立が求められていると判断しました。
//             </p>

//             <div className="flex flex-col gap-4">
//               <p className="text-sm md:text-base leading-relaxed text-gray-700">
//                 そこでまずはじめに、既存アプリの課題をページごとに洗い出しました。
//               </p>
//               <div className="space-y-4">
//                 <div className="flex flex-col gap-10">
//                   <div className="flex flex-col md:flex-row flex-1 gap-10">
//                     <div className="flex flex-col">
//                       <img
//                         src="/mahjong/score-before.png"
//                         alt="成績ページ"
//                         className="h-full object-cover border border-border rounded max-w-full"
//                       />
//                       <p className="text-xs text-center text-gray-520 mt-2">
//                         成績ページ
//                       </p>
//                     </div>
//                     <div className="flex flex-col">
//                       <img
//                         src="/mahjong/record-before.png"
//                         alt="履歴ページ"
//                         className="h-full object-contain border border-border rounded max-w-full"
//                       />
//                       <p className="text-xs text-center text-gray-520 mt-2">
//                         履歴ページ
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col md:flex-row flex-1 gap-10">
//                     <div className="flex flex-col">
//                       <img
//                         src="/mahjong/input-before.png"
//                         alt="成績入力ページ"
//                         className="h-full object-cover border border-border rounded max-w-full"
//                       />
//                       <p className="text-xs text-center text-gray-520 mt-2">
//                         成績入力ページ
//                       </p>
//                     </div>
//                     <div className="flex flex-col">
//                       <img
//                         src="/mahjong/account-before.png"
//                         alt="アカウントページ"
//                         className="h-full object-contain border border-border rounded max-w-full"
//                       />
//                       <p className="text-xs text-center text-gray-520 mt-2">
//                         アカウントページ
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           id="final-ui"
//           className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background-secondary overflow-hidden scroll-mt-24"
//         >
//           <h2 className="text-lg md:text-xl text-accent font-medium">UI設計</h2>
//           <div className="flex flex-col w-full gap-2">
//             <div className="space-y-2">
//               <div className="flex items-center gap-2">
//                 <h3 className="text-lg font-semibold m-0">完成UI</h3>
//                 <div className="flex-1 h-[0.8px] bg-border" />
//               </div>
//             </div>
//             <div className="space-y-12">
//               <div className="flex flex-col lg:flex-row items-center md:justify-between gap-10">
//                 <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
//                   <div>
//                     <div className="flex items-center gap-1 mb-1">
//                       <h4 className="text-sm text-gray-700 font-semibold">
//                         成績/履歴ページ
//                       </h4>
//                     </div>
//                   </div>
//                   <div className="w-full max-w-[480px] h-[480px]">
//                     <video
//                       src="/mahjong/grade-record.mp4"
//                       controls
//                       className="h-full object-cover rounded"
//                     />
//                   </div>
//                 </div>
//                 <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
//                   <div>
//                     <div className="flex items-center gap-1 mb-1">
//                       <h4 className="text-sm text-gray-700 font-semibold">
//                         成績入力ページ
//                       </h4>
//                     </div>
//                   </div>
//                   <div className="w-full max-w-[480px] h-[480px]">
//                     <video
//                       src="/mahjong/input.mp4"
//                       controls
//                       className="h-full object-cover rounded"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col lg:flex-row items-center md:justify-between gap-10 mb-6">
//                 <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
//                   <div>
//                     <div className="flex items-center gap-1 mb-1">
//                       <h4 className="text-sm text-gray-700 font-semibold">
//                         マイページ
//                       </h4>
//                     </div>
//                   </div>
//                   <div className="w-full max-w-[480px] h-[480px]">
//                     <video
//                       src="/mahjong/account.mp4"
//                       controls
//                       className="h-full object-cover rounded"
//                     />
//                   </div>
//                 </div>
//                 <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
//                   <div>
//                     <div className="flex items-center gap-1 mb-1">
//                       <h4 className="text-sm text-gray-700 font-semibold">
//                         友達管理ページ
//                       </h4>
//                     </div>
//                   </div>
//                   <div className="w-full max-w-[480px] h-[480px]">
//                     <video
//                       src="/mahjong/friend-management.mp4"
//                       controls
//                       className="h-full object-cover rounded"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className="space-y-20">
//               <section className="flex flex-col gap-2 mt-10">
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-2">
//                     <h3 className="text-lg font-semibold m-0">意識した点</h3>
//                     <div className="flex-1 h-[0.8px] bg-border" />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-2">
//                   {/* カード1 */}
//                   <div className="flex flex-col">
//                     <img
//                       src="/mahjong/score-after.png"
//                       alt="成績ページ"
//                       className="w-full object-contain border border-border rounded"
//                     />
//                     <p className="text-xs text-center text-gray-520 mt-2">
//                       成績ページ
//                     </p>
//                   </div>

//                   {/* カード2 */}
//                   <div className="flex flex-col">
//                     <img
//                       src="/mahjong/record-after.png"
//                       alt="履歴ページ"
//                       className="w-full object-contain border border-border rounded"
//                     />
//                     <p className="text-xs text-center text-gray-520 mt-2">
//                       履歴ページ
//                     </p>
//                   </div>

//                   {/* カード3 */}
//                   <div className="flex flex-col">
//                     <img
//                       src="/mahjong/input-after.png"
//                       alt="成績入力ページ"
//                       className="w-full object-contain border border-border rounded"
//                     />
//                     <p className="text-xs text-center text-gray-520 mt-2">
//                       成績入力ページ
//                     </p>
//                   </div>

//                   {/* カード4 */}
//                   <div className="flex flex-col">
//                     <img
//                       src="/mahjong/mypage-after.png"
//                       alt="アカウントページ"
//                       className="w-full object-contain border border-border rounded"
//                     />
//                     <p className="text-xs text-center text-gray-520 mt-2">
//                       アカウントページ
//                     </p>
//                   </div>

//                   {/* カード5 */}
//                   <div className="flex flex-col">
//                     <img
//                       src="/mahjong/friends-after.png"
//                       alt="友達管理ページ"
//                       className="w-full object-contain border border-border rounded"
//                     />
//                     <p className="text-xs text-center text-gray-520 mt-2">
//                       友達管理ページ
//                     </p>
//                   </div>
//                 </div>
//               </section>

//               <section className="flex flex-col gap-2">
//                 <div className="flex items-center gap-2">
//                   <h3 className="text-lg font-semibold m-0">
//                     カラー & イラスト
//                   </h3>
//                   <div className="flex-1 h-[0.8px] bg-border" />
//                 </div>
//                 <div className="space-y-4">
//                   <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-3">
//                     麻雀牌を連想させる「赤・緑・青」を基調にすることで、麻雀らしさを視覚的に表現しました。背景色には落ち着いたベージュ（#F7F1E1）を採用することで和の雰囲気を保ちながら、親しみやすさを感じられる配色を意識しました。
//                     <br />
//                     また、イラストは知人に依頼しました。
//                   </p>
//                   <div className="flex flex-col md:flex-row items-center gap-10 flex-wrap">
//                     <div className="flex flex-col md:w-1/2">
//                       <img
//                         src="/mahjong/style-guide.png"
//                         alt="イメージボード"
//                         className="h-full object-cover border border-border rounded max-w-full"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </section>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-56 bg-background">
//           <h2 className="text-lg md:text-xl text-center text-accent font-medium">
//             学び
//           </h2>
//           <p className="text-sm md:text-base leading-relaxed text-gray-700">
//             色数が多いにも関わらず配色の優先順位を明確に定義できていなかったため、統一感を持たせるのに時間を要しました。
//             <br />
//             今後は、背景色や主役カラーの役割を明確にした上で配色の優先順位を整理し、よりスムーズにデザインを進めることを目指します。
//           </p>
//           <Link to="/" className="hover:opacity-80 pt-4">
//             <div className="flex items-center gap-1">
//               <MdOutlineArrowBackIosNew width={10} className="w-5 h-3" />
//               <p className="text-sm underline">Home</p>
//             </div>
//           </Link>
//         </div>
//       </section>
//     </FadeInPageWrapper>
//   );
// };

// export default Mahjong;
import { useEffect } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import Arrow from "../../components/Arrow";
import FadeInPageWrapper from "../../components/FadeInPageWrapper";
import InfoList from "../../components/InfoList";
import { useLanguage } from "../../context/LanguageContext";
import { localizeImage } from "../../utils/localizeImage";

const content = {
  en: {
    infoItems: [
      { title: "Service Type", value: "Web App (Mobile Version)" },
      { title: "Project Format", value: "Team Development" },
      { title: "Duration", value: "1 Week" },
      { title: "My Role", value: "UI Design" },
      { title: "Tools Used", value: "Figma" },
    ],
    heading: "Mahjong Match Record App",
    overviewTitle: "Overview",
    overviewText: (
      <>
        I was responsible for designing a Mahjong match record application based
        on an existing{" "}
        <a
          href="https://apps.apple.com/jp/app/%E9%9B%80%E3%83%AD%E3%82%B0-%E9%BA%BB%E9%9B%80%E3%81%AE%E6%88%90%E7%B8%BE-%E5%8F%8E%E6%94%AF%E3%82%92%E8%A8%98%E9%8C%B2%E3%81%99%E3%82%8B%E5%B8%B3%E7%B0%BF%E3%82%A2%E3%83%97%E3%83%AA/id1439070045"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Mahjong record app
        </a>
        . The background was that an engineer acquaintance who loves Mahjong
        felt the existing app they usually use to record match results was
        cumbersome. They wanted to develop a more user-friendly app. While
        inheriting the basic functionality of the existing app, I focused on
        creating a more intuitive UI design.
      </>
    ),
    problemTitle: "Problem Identification",
    problemIntro:
      'While the existing application was feature-rich, the design was overly functional, giving the impression that it lacked the visual world or atmosphere of a Mahjong app. During the initial interview, the requester also mentioned, "I have no specific complaints about the functions, but I find it difficult to use and the look feels outdated." Thus, I determined that balancing ease of use with visual appeal was required.',
    analysisIntro:
      "First, I analyzed the issues of the existing app page by page.",
    scoreCaption: "Score Page",
    historyCaption: "History Page",
    scoreInputCaption: "Score Input Page",
    accountCaption: "Account Page",
    friendManagementCaption: "Friend Management Page",
    uiDesignTitle: "UI Design",
    finalUiLabel: "Final UI",
    scoreHistoryVideoLabel: "Score / History Page",
    scoreInputVideoLabel: "Score Input Page",
    myPageVideoLabel: "My Page",
    friendManagementVideoLabel: "Friend Management Page",
    designFocusLabel: "Design Focus",
    colorIllustrationLabel: "Color & Illustration",
    colorIllustrationText:
      'We visually expressed the essence of Mahjong by using "Red, Green, and Blue" reminiscent of Mahjong tiles as the base colors. By adopting a calm beige for the background, we aimed for a color scheme that maintains a Japanese atmosphere while feeling approachable. The illustrations were commissioned from an acquaintance.',
    learningsTitle: "Learnings",
    learningsText:
      "Despite using many colors, the prioritization of the color scheme was not clearly defined, which resulted in time spent to achieve a sense of unity. Moving forward, I aim to clarify the roles of the background and main accent colors and organize the color prioritization to proceed with design more smoothly.",
    homeLabel: "Home",
  },
  ja: {
    infoItems: [
      { title: "サービス種別", value: "Webアプリ（モバイル版）" },
      { title: "プロジェクト区分", value: "チーム開発" },
      { title: "期間", value: "1週間" },
      { title: "担当領域", value: "UIデザイン" },
      { title: "使用ツール", value: "Figma" },
    ],
    heading: "麻雀対戦記録アプリ",
    overviewTitle: "概要",
    overviewText: (
      <>
        既存の「
        <a
          href="https://apps.apple.com/jp/app/%E9%9B%80%E3%83%AD%E3%82%B0-%E9%BA%BB%E9%9B%80%E3%81%AE%E6%88%90%E7%B8%BE-%E5%8F%8E%E6%94%AF%E3%82%92%E8%A8%98%E9%8C%B2%E3%81%99%E3%82%8B%E5%B8%B3%E7%B0%BF%E3%82%A2%E3%83%97%E3%83%AA/id1439070045"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          麻雀記録アプリ
        </a>
        」をベースに、麻雀対戦記録アプリのUIデザインを担当しました。麻雀好きな知人のエンジニアから、普段使っている既存アプリの操作性に不満があり、より使いやすいアプリを開発したいという相談を受けたことがきっかけです。既存アプリの基本機能を引き継ぎつつ、より直感的なUIデザインの制作に力を注ぎました。
      </>
    ),
    problemTitle: "課題の洗い出し",
    problemIntro:
      "既存アプリは機能面では充実している一方で、デザインが機能性を重視しすぎており、麻雀アプリならではの世界観や雰囲気に乏しい印象を受けました。実際のヒアリングでも、依頼者から「機能に特に不満はないが、使いづらさや見た目の古さを感じる」という声があり、使いやすさと視覚的な魅力を両立させる必要があると判断しました。",
    analysisIntro: "まず、既存アプリの課題をページごとに洗い出しました。",
    scoreCaption: "成績ページ",
    historyCaption: "履歴ページ",
    scoreInputCaption: "成績入力ページ",
    accountCaption: "アカウントページ",
    friendManagementCaption: "友達管理ページ",
    uiDesignTitle: "UI設計",
    finalUiLabel: "完成UI",
    scoreHistoryVideoLabel: "成績/履歴ページ",
    scoreInputVideoLabel: "成績入力ページ",
    myPageVideoLabel: "マイページ",
    friendManagementVideoLabel: "友達管理ページ",
    designFocusLabel: "意識した点",
    colorIllustrationLabel: "カラー & イラスト",
    colorIllustrationText:
      "麻雀牌を連想させる「赤・緑・青」を基調色として採用し、麻雀らしさを視覚的に表現しました。背景には落ち着いたベージュを採用し、和の雰囲気を保ちながら親しみやすさも感じられる配色を目指しました。イラストは知人に制作を依頼しました。",
    learningsTitle: "学び",
    learningsText:
      "色数が多いにもかかわらず配色の優先順位を明確に定義できていなかったため、全体に統一感を持たせるのに時間がかかりました。今後は、背景色やメインカラーの役割を明確にしたうえで配色の優先順位を整理し、よりスムーズにデザインを進めていきたいと考えています。",
    homeLabel: "ホーム",
  },
};

const Mahjong = () => {
  const { language } = useLanguage();
  const t = content[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <FadeInPageWrapper>
      <section className="space-y-10 md:space-y-4">
        <Arrow />
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-6 md:px-16 lg:px-32 xl:px-56 md:pt-12">
          <div className="md:w-1/2 md:h-[300px] flex-1 mb-4 md:mb-20">
            <img
              src={localizeImage("/mahjong/thumbnail.png", language)}
              alt="mahjong thumbnail"
              width={320}
              height={320}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <div className="space-y-3">
                <h1 className="text-2xl font-semibold">{t.heading}</h1>
                <div className="flex-1 h-[0.8px] bg-border mt-4" />
              </div>
            </div>
            <InfoList items={t.infoItems} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20  bg-background-secondary">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            {t.overviewTitle}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            {t.overviewText}
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            {t.problemTitle}
          </h2>
          <div className="space-y-8">
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              {t.problemIntro}
            </p>

            <div className="flex flex-col gap-4">
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                {t.analysisIntro}
              </p>
              <div className="space-y-4">
                <div className="flex flex-col gap-10">
                  <div className="flex flex-col md:flex-row flex-1 gap-10">
                    <div className="flex flex-col">
                      <img
                        src={localizeImage(
                          "/mahjong/score-before.png",
                          language,
                        )}
                        alt="Score Page"
                        className="h-full object-cover border border-border rounded max-w-full"
                      />
                      <p className="text-xs text-center text-gray-520 mt-2">
                        {t.scoreCaption}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <img
                        src={localizeImage(
                          "/mahjong/record-before.png",
                          language,
                        )}
                        alt="History Page"
                        className="h-full object-contain border border-border rounded max-w-full"
                      />
                      <p className="text-xs text-center text-gray-520 mt-2">
                        {t.historyCaption}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row flex-1 gap-10">
                    <div className="flex flex-col">
                      <img
                        src={localizeImage(
                          "/mahjong/input-before.png",
                          language,
                        )}
                        alt="Score Input Page"
                        className="h-full object-cover border border-border rounded max-w-full"
                      />
                      <p className="text-xs text-center text-gray-520 mt-2">
                        {t.scoreInputCaption}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <img
                        src={localizeImage(
                          "/mahjong/account-before.png",
                          language,
                        )}
                        alt="Account Page"
                        className="h-full object-contain border border-border rounded max-w-full"
                      />
                      <p className="text-xs text-center text-gray-520 mt-2">
                        {t.accountCaption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="final-ui"
          className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary overflow-hidden scroll-mt-24"
        >
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            {t.uiDesignTitle}
          </h2>
          <div className="flex flex-col w-full gap-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold m-0">{t.finalUiLabel}</h3>
                <div className="flex-1 h-[0.8px] bg-border" />
              </div>
            </div>
            <div className="space-y-12">
              <div className="flex flex-col lg:flex-row items-center md:justify-between gap-10">
                <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <h4 className="text-sm text-gray-700 font-semibold">
                        {t.scoreHistoryVideoLabel}
                      </h4>
                    </div>
                  </div>
                  <div className="w-full max-w-[480px] h-[480px]">
                    <video
                      src="/mahjong/grade-record.mp4"
                      controls
                      className="h-full object-cover rounded"
                    />
                  </div>
                </div>
                <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <h4 className="text-sm text-gray-700 font-semibold">
                        {t.scoreInputVideoLabel}
                      </h4>
                    </div>
                  </div>
                  <div className="w-full max-w-[480px] h-[480px]">
                    <video
                      src="/mahjong/input.mp4"
                      controls
                      className="h-full object-cover rounded"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center md:justify-between gap-10 mb-6">
                <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <h4 className="text-sm text-gray-700 font-semibold">
                        {t.myPageVideoLabel}
                      </h4>
                    </div>
                  </div>
                  <div className="w-full max-w-[480px] h-[480px]">
                    <video
                      src="/mahjong/account.mp4"
                      controls
                      className="h-full object-cover rounded"
                    />
                  </div>
                </div>
                <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <h4 className="text-sm text-gray-700 font-semibold">
                        {t.friendManagementVideoLabel}
                      </h4>
                    </div>
                  </div>
                  <div className="w-full max-w-[480px] h-[480px]">
                    <video
                      src="/mahjong/friend-management.mp4"
                      controls
                      className="h-full object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-20">
              <section className="flex flex-col gap-2 mt-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold m-0">
                      {t.designFocusLabel}
                    </h3>
                    <div className="flex-1 h-[0.8px] bg-border" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-2">
                  {/* カード1 */}
                  <div className="flex flex-col">
                    <img
                      src={localizeImage("/mahjong/score-after.png", language)}
                      alt="Score Page"
                      className="w-full object-contain border border-border rounded"
                    />
                    <p className="text-xs text-center text-gray-520 mt-2">
                      {t.scoreCaption}
                    </p>
                  </div>

                  {/* カード2 */}
                  <div className="flex flex-col">
                    <img
                      src={localizeImage("/mahjong/record-after.png", language)}
                      alt="History Page"
                      className="w-full object-contain border border-border rounded"
                    />
                    <p className="text-xs text-center text-gray-520 mt-2">
                      {t.historyCaption}
                    </p>
                  </div>

                  {/* カード3 */}
                  <div className="flex flex-col">
                    <img
                      src={localizeImage("/mahjong/input-after.png", language)}
                      alt="Score Input Page"
                      className="w-full object-contain border border-border rounded"
                    />
                    <p className="text-xs text-center text-gray-520 mt-2">
                      {t.scoreInputCaption}
                    </p>
                  </div>

                  {/* カード4 */}
                  <div className="flex flex-col">
                    <img
                      src={localizeImage("/mahjong/mypage-after.png", language)}
                      alt="Account Page"
                      className="w-full object-contain border border-border rounded"
                    />
                    <p className="text-xs text-center text-gray-520 mt-2">
                      {t.accountCaption}
                    </p>
                  </div>

                  {/* カード5 */}
                  <div className="flex flex-col">
                    <img
                      src={localizeImage(
                        "/mahjong/friends-after.png",
                        language,
                      )}
                      alt="Friend Management Page"
                      className="w-full object-contain border border-border rounded"
                    />
                    <p className="text-xs text-center text-gray-520 mt-2">
                      {t.friendManagementCaption}
                    </p>
                  </div>
                </div>
              </section>

              <section className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold m-0">
                    {t.colorIllustrationLabel}
                  </h3>
                  <div className="flex-1 h-[0.8px] bg-border" />
                </div>
                <div className="space-y-4">
                  <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-3">
                    {t.colorIllustrationText}
                  </p>
                  <div className="flex flex-col md:flex-row items-center gap-10 flex-wrap">
                    <div className="flex flex-col md:w-1/2">
                      <img
                        src={localizeImage(
                          "/mahjong/style-guide.png",
                          language,
                        )}
                        alt="Style Guide/Mood Board"
                        className="h-full object-cover border border-border rounded max-w-full"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background">
          <h2 className="text-lg md:text-2xl text-center text-accent font-medium">
            {t.learningsTitle}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            {t.learningsText}
          </p>
          <Link to="/" className="hover:opacity-80 pt-10">
            <div className="flex items-center gap-1">
              <span
                className="flex items-center justify-center rounded-full w-6 h-6"
                style={{ backgroundColor: "#746B60" }}
              >
                <MdOutlineArrowBackIosNew width={10} className="w-5 h-3 text-white" />
              </span>
              <p className="text-sm">{t.homeLabel}</p>
            </div>
          </Link>
        </div>
      </section>
    </FadeInPageWrapper>
  );
};

export default Mahjong;
