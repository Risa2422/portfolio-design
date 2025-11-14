// import { useEffect } from "react";
// import { MdOutlineArrowBackIosNew } from "react-icons/md";
// import { Link } from "react-router-dom";
// import Arrow from "../../components/Arrow";
// import FadeInPageWrapper from "../../components/FadeInPageWrapper";
// import InfoList from "../../components/InfoList";

// const Quiz = () => {
//   const infoItems = [
//     { title: "サービス種別", value: "Webアプリ(モバイル版)" },
//     { title: "制作形態", value: "クライアントワーク" },
//     { title: "制作期間", value: "1週間" },
//     { title: "担当領域", value: "UIデザイン" },
//     { title: "使用ツール", value: "Figma" },
//   ];

//   const designOptions = [
//     {
//       label: "デザイン案A",
//       images: ["/quiz/design-a-1.png", "/quiz/design-a-2.png"],
//     },
//     {
//       label: "デザイン案B",
//       images: ["/quiz/design-b-1.png", "/quiz/design-b-2.png"],
//     },
//     {
//       label: "デザイン案C",
//       images: ["/quiz/design-c-1.png", "/quiz/design-c-2.png"],
//     },
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
//               src="/quiz/thumbnail.png"
//               alt="quiz thumbnail"
//               width={320}
//               height={320}
//               className="w-full h-full object-contain"
//             />
//           </div>
//           <div className="space-y-4 flex-1">
//             <div>
//               <div className="space-y-3">
//                 <h1 className="text-2xl font-semibold">Japan Quiz Journey</h1>
//                 <div className="flex-1 h-[0.8px] bg-border mt-4" />
//               </div>
//             </div>
//             <InfoList items={infoItems} />
//           </div>
//         </div>
//         <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-56 bg-background-secondary">
//           <h2 className="text-lg md:text-xl text-accent font-medium">概要</h2>
//           <p className="text-sm md:text-base leading-relaxed text-gray-700">
//             訪日外国人観光客や海外在住者を対象にした、日本文化やマナーを学ぶことができるクイズ形式学習アプリのUIデザインを担当しました。
//             <br />
//             提示された要件を満たすだけでなく、ターゲットユーザーにとって使いやすいサービスとなるように心がけました。
//           </p>
//         </div>
//         <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 md:py-8 min-h-72 bg-background">
//           <h2 className="text-lg md:text-xl text-accent font-medium text-center">
//             要件
//           </h2>
//           <div className="space-y-8">
//             <p className="text-sm leading-relaxed ">
//               ※要約後 (一部省略、編集しています)
//             </p>
//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <div className="w-3.5 h-3.5 bg-black"></div>
//                 <p className="text-sm md:text-base font-semibold">
//                   サービス概要
//                 </p>
//               </div>
//               <p className="list-disc text-sm md:text-base pl-5 space-y-1">
//                 日本文化やマナー、緊急時の対応について外国人が楽しく学べるクイズアプリであり、
//                 文化的なトラブルを防ぎ、安全で充実した滞在をサポートすることを目的とする。
//               </p>
//             </div>
//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <div className="w-3.5 h-3.5 bg-black"></div>
//                 <p className="text-sm md:text-base font-semibold">
//                   対象ユーザー
//                 </p>
//               </div>
//               <ul className="list-disc text-sm md:text-base pl-5 space-y-1">
//                 <li>日本を訪れる外国人観光客</li>
//                 <li>日本文化に興味のある海外在住者</li>
//                 <li>日本で生活・就学する外国人</li>
//               </ul>
//             </div>
//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <div className="w-3.5 h-3.5 bg-black"></div>
//                 <p className="text-sm md:text-base font-semibold">機能一覧</p>
//               </div>
//               <ul className="list-disc text-sm md:text-base pl-5 space-y-1">
//                 <li>
//                   日本文化・マナー・季節行事・災害対応など、幅広いジャンルから出題
//                 </li>
//                 <li>
//                   正解・不正解時にフィードバック表示（文化的背景や注意点など）
//                 </li>
//                 <li>ユーザー全体でのランキング表示</li>
//                 <li>
//                   正解数に応じた「理解度ランク」を表示（例:
//                   外国人観光客の中で上位15％)
//                 </li>
//                 <li>過去の最高ランクをホーム画面で確認可能</li>
//               </ul>
//             </div>
//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <div className="w-3.5 h-3.5 bg-black"></div>
//                 <p className="text-sm md:text-base font-semibold">画面</p>
//               </div>
//               <ul className="list-disc text-sm md:text-base pl-5 space-y-1">
//                 <li>
//                   ホーム画面 : アプリ概要説明とユーザーの「理解度ランク」を表示
//                   (ゲーム後は他の難易度や再挑戦が可能)
//                 </li>
//                 <li>
//                   レベル選択画面 :
//                   4段階の難易度（初級、中級、上級、プロ）から選択
//                 </li>
//                 <li>クイズ画面 : 1問ずつクイズを回答</li>
//                 <li>結果画面 : 外国人全体でのランキングを示し、達成感を提供</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background-secondary overflow-hidden">
//           <h2 className="text-lg md:text-xl text-accent font-medium">
//             制作プロセス
//           </h2>
//           <div className="flex flex-col w-full gap-6">
//             <div className="space-y-2">
//               <h3 className="text-base md:text-lg font-semibold m-0">
//                 1. ペルソナ作成
//               </h3>
//               <p className="text-sm md:text-base text-gray-700">
//                 ターゲットユーザーは事前に定義されていましたが、具体的なユーザーの課題やニーズを導き出し、より実用的なUIデザインを実現するためにペルソナを作成しました。
//               </p>
//             </div>
//             <div className="space-y-8">
//               <div className="flex flex-col lg:flex-row items-center md:justify-between gap-10">
//                 <div className="space-y-1.5">
//                   <div className="w-full space-y-2">
//                     <img
//                       src="/quiz/persona1.png"
//                       controls
//                       className="h-full object-contain rounded  border border-gray-300"
//                     />
//                     <p className="text-xs text-gray-700 text-center">
//                       ペルソナ1
//                     </p>
//                   </div>
//                 </div>
//                 <div className="space-y-1.5">
//                   <div className="w-full space-y-2">
//                     <img
//                       src="/quiz/persona2.png"
//                       controls
//                       className="h-full object-contain rounded  border border-gray-300"
//                     />
//                     <p className="text-xs text-gray-700 text-center">
//                       ペルソナ2
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <p>
//                 ペルソナを通じて「
//                 <span className="font-bold">
//                   多忙な生活の中でも短時間で利用でき、継続的な使用によって成長を実感できるサービス
//                 </span>
//                 」が求められているのではないかと仮定しました。
//               </p>
//             </div>
//           </div>
//           <div>
//             <div className="space-y-20">
//               <section className="flex flex-col gap-2 mt-12">
//                 <h3 className="text-base md:text-lg font-semibold m-0">
//                   2. デザイン案作成
//                 </h3>
//                 <p className="text-sm md:text-base text-gray-700">
//                   今回は具体的な画面数や構成が事前に決まっていたため、クライアントに以下のデザイン案を提示し、方向性のすり合わせを行いました。
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-6">
//                   {designOptions.map((option, index) => (
//                     <div key={index} className="flex flex-col items-center">
//                       <div className="flex gap-4">
//                         {option.images.map((src, i) => (
//                           <img
//                             key={i}
//                             src={src}
//                             alt={`${option.label} 画像${i + 1}`}
//                             className="object-contain max-h-64 w-full"
//                           />
//                         ))}
//                       </div>
//                       <p className="text-xs text-center mt-2">{option.label}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <p className="mt-6">
//                   クイズらしいポップさと、イラストを使用することによって日本に関するアプリだということがわかるという点から、デザイン案Cを採用していただきました。
//                   色味の変更などの希望がなかったため、デザイン案Cをベースにデザインを進めました。
//                 </p>
//               </section>
//               <section className="flex flex-col gap-2">
//                 <h3 className="text-base md:text-lg font-semibold m-0">
//                   3. ワイヤーフレーム作成
//                 </h3>
//                 <div className="space-y-4">
//                   <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-3 ">
//                     ワイヤーフレームの作成では、要件を満たしつつ直感的な操作が実現するよう意識しました。
//                   </p>
//                   <div className="flex flex-col md:flex-row items-center gap-10 flex-wrap">
//                     <div className="flex flex-col md:w-1/2">
//                       <img
//                         src="/quiz/wireframe.png"
//                         alt="イメージボード"
//                         className="h-full object-cover border border-border rounded max-w-full"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </section>
//               <section className="flex flex-col gap-2">
//                 <h3 className="text-base md:text-lg font-semibold m-0">
//                   4. スタイルガイド作成
//                 </h3>
//                 <div className="space-y-4">
//                   <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-3 ">
//                     アプリ全体としてポップさを演出するために原色に近いカラーを複数使用していることから、
//                     フォントに関しては、シンプルかつ多言語対応にも優れた Open
//                     Sansを採用しました。
//                     <br />
//                     また、今回はスマートフォンでの使用を前提としているため、ボタンはユーザーが快適に操作できるよう十分なサイズを確保しました。
//                   </p>
//                   <div className="flex flex-col md:flex-row items-center gap-10 flex-wrap">
//                     <div className="flex flex-col md:w-1/2">
//                       <img
//                         src="/quiz/styleguide.png"
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
//         <div
//           id="final-ui"
//           className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 md:py-8 min-h-72 bg-background scroll-mt-24"
//         >
//           <h2 className="text-lg md:text-xl text-accent font-medium">完成UI</h2>
//           <video
//             src="/quiz/prototype.mov"
//             controls
//             className="rounded md:h-[500px] "
//           />
//           <section className="flex flex-col gap-2">
//             <div className="flex items-center gap-2">
//               <h3 className="font-semibold m-0">デザイン概要</h3>
//               <div className="flex-1 h-[1px] bg-border" />
//             </div>
//             <div className="space-y-4">
//               <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-3 ">
//                 ターゲットユーザーが成人であることを踏まえ、クイズらしいポップさを取り入れつつも、全体としてはシンプルかつ直感的なUIを目指しました。
//                 また、ユーザーのモチベーションの維持と継続的な学習を促すために、声かけなどの対話的要素も取り入れました。
//               </p>
//             </div>
//             <div className="flex flex-col md:flex-row gap-12 md:gap-36 mt-8">
//               <div className="w-full md:w-1/2">
//                 <div className="flex items-center gap-2 mb-4">
//                   <div className="w-3.5 h-3.5 bg-black"></div>
//                   <p className="font-semibold">ホーム画面</p>
//                 </div>
//                 <div className="flex flex-col gap-6">
//                   <div className="h-[320px]">
//                     <img
//                       src="/quiz/home.svg"
//                       alt="ホーム画面"
//                       className="h-full w-full object-contain rounded"
//                     />
//                   </div>

//                   <div className="text-sm leading-relaxed text-gray-700">
//                     <p>
//                       サービス名を強調するよりも、サービスを通して得られる体験を強調することで、ユーザーが「何ができるのか」を直感的に理解できるよう工夫しました。
//                       また、日本を連想させるアイコンを取り入れることで、視覚的にもサービスの目的が伝わりやすくしました。
//                       <br />
//                       また、担当エンジニアとの話し合い、ログインには外部の認証サービスを利用することとなったため、は独自のログイン画面のデザインは行っていません。
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2">
//                 <div className="flex items-center gap-2 mb-4">
//                   <div className="w-3.5 h-3.5 bg-black"></div>
//                   <p className="font-semibold">レベル選択画面</p>
//                 </div>

//                 <div className="flex flex-col gap-6">
//                   <div className="h-[320px]">
//                     <img
//                       src="/quiz/level-select.svg"
//                       alt="ホーム画面"
//                       className="h-full w-full object-contain"
//                     />
//                   </div>
//                   <div className="text-sm leading-relaxed text-gray-700">
//                     <p>
//                       星マークを用いて視覚的に難易度を表現し、各レベルに対応するクイズのテーマも併記することで、ユーザーが自分に合った問題を選びやすくなるよう工夫しました。
//                       <br />
//                       また、ユーザーの「過去の最高ランク」は、すべてのユーザーにとって重要な情報とは限らないと判断し、レベル選択とランキング表示をタブで切り替えられる構成にしています。
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col md:flex-row gap-12 mb:gap-36 mt-8">
//               <div className="w-full md:w-1/2">
//                 <div className="flex items-center gap-2 mb-4">
//                   <div className="w-3.5 h-3.5 bg-black"></div>
//                   <p className="font-semibold">クイズ画面</p>
//                 </div>
//                 <div className="flex flex-col gap-6">
//                   <div className="flex justify-around gap-8">
//                     <div className="h-[320px]">
//                       <img
//                         src="/quiz/quiz-not-selected.svg"
//                         alt="ホーム画面"
//                         className="h-full w-full object-contain"
//                       />
//                     </div>
//                     <div className="h-[320px]">
//                       <img
//                         src="/quiz/quiz-selected.svg"
//                         alt="ホーム画面"
//                         className="h-full w-full object-contain"
//                       />
//                     </div>
//                   </div>
//                   <div className="text-sm leading-relaxed text-gray-700">
//                     <p>
//                       ワクワク感を演出するため、クイズ画面にはカード形式のデザインを採用しました。
//                       <br />
//                       また、日本らしさを感じられるよう、ワンポイントとして日の丸をイメージした赤みのある丸を使用しています。
//                       ユーザーの誤操作を防ぐため、回答が未選択の場合はSubmitボタンを非活性にし、意図しない送信が行われないよう配慮しました。
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2">
//                 <div className="flex items-center gap-2 mb-4">
//                   <div className="w-3.5 h-3.5 bg-black"></div>
//                   <p className="font-semibold">正誤画面</p>
//                 </div>
//                 <div className="flex flex-col gap-6">
//                   <div className="flex justify-around gap-8">
//                     <div className="h-[320px]">
//                       <img
//                         src="/quiz/correct.svg"
//                         alt="ホーム画面"
//                         className="h-full w-full object-contain"
//                       />
//                     </div>
//                     <div className="h-[320px]">
//                       <img
//                         src="/quiz/wrong.svg"
//                         alt="ホーム画面"
//                         className="h-full w-full object-contain"
//                       />
//                     </div>
//                   </div>
//                   <div className="text-sm leading-relaxed text-gray-700">
//                     <p>
//                       正誤の結果が一目でわかるよう、紙吹雪を用いた演出を取り入れました。
//                       <br />
//                       また、ユーザーが選択した回答と正解の両方を表示することで、正誤だけでなく「どの選択肢を選んで間違えたのか」を振り返ることができるようにしています。
//                       <br />
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col md:flex-row gap-12 mb:gap-36 mt-8">
//               <div className="w-full md:w-1/2">
//                 <div className="flex items-center gap-2 mb-4">
//                   <div className="w-3.5 h-3.5 bg-black"></div>
//                   <p className="font-semibold">結果画面</p>
//                 </div>
//                 <div className="flex flex-col gap-6">
//                   <div className="h-[320px]">
//                     <img
//                       src="/quiz/result.svg"
//                       alt="結果画面"
//                       className="h-full w-full object-contain"
//                     />
//                   </div>
//                   <div className="text-sm leading-relaxed text-gray-700">
//                     <p>
//                       正解率を画面の最上部に表示することで、ユーザーがまず大まかな結果を把握できるようにし、その後に具体的な正解数を示すという優先順位を設けました。
//                       <br />
//                       また、正解率に応じてユーザーへのメッセージを変化させることで、より対話的な体験を提供しています。
//                       <br />
//                       さらに、ランキングを積極的に確認しないユーザーに配慮し、全体で20位以内に入った場合には正解数の下に順位を表示することで、モチベーションの向上を図りました。
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2">
//                 <div className="flex items-center gap-2 mb-4">
//                   <div className="w-3.5 h-3.5 bg-black"></div>
//                   <p className="font-semibold">ランキング画面</p>
//                 </div>
//                 <div className="flex flex-col gap-6">
//                   <div className="h-[320px]">
//                     <img
//                       src="/quiz/ranking.svg"
//                       alt="ランキング画面"
//                       className="h-full w-full object-contain"
//                     />
//                   </div>
//                   <div className="text-sm leading-relaxed text-gray-700">
//                     <p>
//                       ユーザー自身のランキング情報と、全体のランキングの両方を表示する構成にしました。
//                       <br />
//                       また、現在の順位と過去最高順位を同時に表示することで、モチベーションの向上を促すようにしました。
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col md:flex-row gap-36 mt-12">
//               <div className="w-full md:w-1/2  md:pr-10">
//                 <div className="flex items-center gap-2 mb-4">
//                   <div className="w-3.5 h-3.5 bg-black"></div>
//                   <p className="font-semibold">クイズ中断画面</p>
//                 </div>
//                 <div className="flex flex-col gap-6">
//                   <div className="h-[320px]">
//                     <img
//                       src="/quiz/quit.svg"
//                       alt="クイズ中断画面"
//                       className="h-full w-full object-contain rounded"
//                     />
//                   </div>
//                   <div className="text-sm leading-relaxed text-gray-700">
//                     <p>
//                       クイズの回答を中断する際は、確認用のモーダルを表示することでユーザーの誤操作によるクイズの中断を防ぐようにしました。
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//         <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 0 pb-10 bg-background-secondary overflow-hidden py-10">
//           <h2 className="text-xl text-center text-accent font-medium">学び</h2>
//           <div className="flex flex-col w-full gap-4">
//             <ul class="list-disc pl-6 space-y-8 text-sm md:text-base leading-relaxed text-gray-700">
//               <li>
//                 ペルソナを作り出すことでよりユーザーが求めている機能を備えたサービスの提供に繋がるということを体感することができました。特に表示候補内容が複数ある場合に、ペルソナを具体的に指定していることで、ペルソナの課題を解決できる点を基準にして判断できました。
//               </li>
//               <li>
//                 当初、フォントにFredokaを使用していましたがポップさが強まってしまい、全体的に締まりがなく、再度フォントの選定が必要になったため、フォントの選定は慎重に行う必要がると感じました。
//               </li>
//             </ul>
//           </div>
//           <Link to="/" className="hover:opacity-80 pt-10">
//             <div className=" flex items-center gap-1">
//               <MdOutlineArrowBackIosNew width={10} className="w-5 h-3" />
//               <p className="pb-0.5 text-sm underline">Home</p>
//             </div>
//           </Link>
//         </div>
//       </section>
//     </FadeInPageWrapper>
//   );
// };

// export default Quiz;

import { useEffect } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import Arrow from "../../components/Arrow";
import FadeInPageWrapper from "../../components/FadeInPageWrapper";
import InfoList from "../../components/InfoList";

const Quiz = () => {
  const infoItems = [
    { title: "Service Type", value: "Web App (Mobile Version)" },
    { title: "Project Format", value: "Client Work" },
    { title: "Duration", value: "1 Week" },
    { title: "My Role", value: "UI Design" },
    { title: "Tools Used", value: "Figma" },
  ];

  const designOptions = [
    {
      label: "Design Option A",
      images: ["/quiz/design-a-1.png", "/quiz/design-a-2.png"],
    },
    {
      label: "Design Option B",
      images: ["/quiz/design-b-1.png", "/quiz/design-b-2.png"],
    },
    {
      label: "Design Option C",
      images: ["/quiz/design-c-1.png", "/quiz/design-c-2.png"],
    },
  ];

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
              src="/quiz/thumbnail.png"
              alt="quiz thumbnail"
              width={320}
              height={320}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <div className="space-y-3">
                <h1 className="text-2xl font-semibold">Japan Quiz Journey</h1>
                <div className="flex-1 h-[0.8px] bg-border mt-4" />
              </div>
            </div>
            <InfoList items={infoItems} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20  bg-background-secondary">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            Overview
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            I was responsible for the UI design of a quiz-based learning
            application targeting international visitors and overseas residents,
            allowing them to learn about Japanese culture and manners.
            <br />
            My goal was not only to meet the presented requirements but also to
            create a service that is easy for the target users to use.
          </p>
        </div>
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 md:py-20 bg-background">
          <h2 className="text-lg md:text-2xl text-accent font-medium text-center">
            Requirements
          </h2>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed ">
              *Summary (partially omitted and edited)
            </p>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3.5 h-3.5 bg-black"></div>
                <p className="text-sm md:text-base font-semibold">
                  Service Outline
                </p>
              </div>
              <p className="list-disc text-sm md:text-base pl-5 space-y-1">
                A quiz application where foreigners can enjoy learning about
                Japanese culture, manners, and emergency response, aiming to
                prevent cultural troubles and support a safe and fulfilling
                stay.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3.5 h-3.5 bg-black"></div>
                <p className="text-sm md:text-base font-semibold">
                  Target Users
                </p>
              </div>
              <ul className="list-disc text-sm md:text-base pl-5 space-y-1">
                <li>Foreign tourists visiting Japan</li>
                <li>Overseas residents interested in Japanese culture</li>
                <li>Foreigners living or studying in Japan</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3.5 h-3.5 bg-black"></div>
                <p className="text-sm md:text-base font-semibold">
                  Feature List
                </p>
              </div>
              <ul className="list-disc text-sm md:text-base pl-5 space-y-1">
                <li>
                  Questions from a wide range of genres including Japanese
                  culture, manners, seasonal events, and disaster response
                </li>
                <li>
                  Feedback display upon correct/incorrect answers (including
                  cultural background and points of caution)
                </li>
                <li>Overall user ranking display</li>
                <li>
                  "Understanding Rank" display based on the number of correct
                  answers (e.g., Top 15% among foreign tourists)
                </li>
                <li>Past highest rank viewable on the home screen</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3.5 h-3.5 bg-black"></div>
                <p className="text-sm md:text-base font-semibold">Screens</p>
              </div>
              <ul className="list-disc text-sm md:text-base pl-5 space-y-1">
                <li>
                  Home Screen: Displays app overview and user's "Understanding
                  Rank" (allows re-challenge or selection of different
                  difficulty after the game)
                </li>
                <li>
                  Level Selection Screen: Select from 4 difficulty levels
                  (Beginner, Intermediate, Advanced, Pro)
                </li>
                <li>Quiz Screen: Answer quizzes one question at a time</li>
                <li>
                  Result Screen: Shows ranking among all foreigners, providing a
                  sense of achievement
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary overflow-hidden">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            Production Process
          </h2>
          <div className="flex flex-col w-full gap-6">
            <div className="space-y-2">
              <h3 className="text-base md:text-lg font-semibold m-0">
                1. Persona Creation
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Although the target users were defined beforehand, I created
                personas to derive specific user challenges and needs, aiming
                for a more practical UI design.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex flex-col lg:flex-row items-center md:justify-between gap-10">
                <div className="space-y-1.5">
                  <div className="w-full space-y-2">
                    <img
                      src="/quiz/persona1.png"
                      controls
                      className="h-full object-contain rounded  border border-gray-300"
                    />
                    <p className="text-xs text-gray-700 text-center">
                      Persona 1
                    </p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="w-full space-y-2">
                    <img
                      src="/quiz/persona2.png"
                      controls
                      className="h-full object-contain rounded  border border-gray-300"
                    />
                    <p className="text-xs text-gray-700 text-center">
                      Persona 2
                    </p>
                  </div>
                </div>
              </div>
              <p>
                Through the personas, I hypothesized that the service needed to
                be "
                <span className="font-bold">
                  usable in a short time even in a busy life, and enable users
                  to feel a sense of growth through continuous use
                </span>
                ."
              </p>
            </div>
          </div>
          <div>
            <div className="space-y-20">
              <section className="flex flex-col gap-2 mt-12">
                <h3 className="text-base md:text-lg font-semibold m-0">
                  2. Design Option Creation
                </h3>
                <p className="text-sm md:text-base text-gray-700">
                  Since the specific number and structure of screens were
                  already decided, I presented the following design options to
                  the client to align on the direction.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-6">
                  {designOptions.map((option, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="flex gap-4">
                        {option.images.map((src, i) => (
                          <img
                            key={i}
                            src={src}
                            alt={`${option.label} Image ${i + 1}`}
                            className="object-contain max-h-64 w-full"
                          />
                        ))}
                      </div>
                      <p className="text-xs text-center mt-2">{option.label}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6">
                  Design Option C was adopted, based on its quiz-like pop
                  feeling and the clear indication that it is an app about Japan
                  through the use of illustrations. Since there were no requests
                  for color changes, I proceeded with the design based on Option
                  C.
                </p>
              </section>
              <section className="flex flex-col gap-2">
                <h3 className="text-base md:text-lg font-semibold m-0">
                  3. Wireframe Creation
                </h3>
                <div className="space-y-4">
                  <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-3 ">
                    In creating the wireframes, I focused on achieving intuitive
                    operation while fulfilling the requirements.
                  </p>
                  <div className="flex flex-col md:flex-row items-center gap-10 flex-wrap">
                    <div className="flex flex-col md:w-1/2">
                      <img
                        src="/quiz/wireframe.png"
                        alt="Wireframe"
                        className="h-full object-cover border border-border rounded max-w-full"
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className="flex flex-col gap-2">
                <h3 className="text-base md:text-lg font-semibold m-0">
                  4. Style Guide Creation
                </h3>
                <div className="space-y-4">
                  <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-3 ">
                    As the app uses multiple near-primary colors to create a
                    playful and pop atmosphere, I adopted Open Sans for the font
                    due to its simplicity and excellent multilingual support.
                    <br />
                    Additionally, since the app is intended for smartphone use,
                    I ensured that buttons had sufficient size for comfortable
                    user interaction.
                  </p>
                  <div className="flex flex-col md:flex-row items-center gap-10 flex-wrap">
                    <div className="flex flex-col md:w-1/2">
                      <img
                        src="/quiz/styleguide.png"
                        alt="Style Guide"
                        className="h-full object-cover border border-border rounded max-w-full"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div
          id="final-ui"
          className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 md:py-20 bg-background scroll-mt-24"
        >
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            Final UI design
          </h2>
          <video
            src="/quiz/prototype.mov"
            controls
            className="rounded md:h-[500px] "
          />
          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">Design Summary</h3>
              <div className="flex-1 h-[1px] bg-border" />
            </div>
            <div className="space-y-4">
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-3 ">
                Considering that the target users are adults, I aimed for a
                simple and intuitive UI overall while incorporating a quiz-like
                pop feeling. Furthermore, I included conversational elements
                like encouraging messages to maintain user motivation and
                promote continuous learning.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-12 md:gap-36 mt-8">
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3.5 h-3.5 bg-black"></div>
                  <p className="font-semibold">Home Screen</p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="h-[320px]">
                    <img
                      src="/quiz/home.svg"
                      alt="Home Screen"
                      className="h-full w-full object-contain rounded"
                    />
                  </div>

                  <div className="text-sm leading-relaxed text-gray-700">
                    <p>
                      I focused on emphasizing the experience gained through the
                      service rather than just the service name, allowing users
                      to intuitively understand "what they can do." I also
                      incorporated Japan-suggestive icons to visually
                      communicate the service's purpose.
                      <br />
                      After discussing with the assigned engineer, it was
                      decided to use an external authentication service for
                      login, so I did not design a proprietary login screen.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3.5 h-3.5 bg-black"></div>
                  <p className="font-semibold">Level Selection Screen</p>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="h-[320px]">
                    <img
                      src="/quiz/level-select.svg"
                      alt="Level Selection Screen"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="text-sm leading-relaxed text-gray-700">
                    <p>
                      I used star marks to visually represent difficulty and
                      included the quiz themes corresponding to each level,
                      making it easier for users to select questions appropriate
                      for them.
                      <br />
                      Furthermore, judging that the user's "past highest rank"
                      is not critical information for all users, the screen is
                      configured with tabs to switch between level selection and
                      ranking display.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-36 mb:gap-36 mt-8">
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3.5 h-3.5 bg-black"></div>
                  <p className="font-semibold">Quiz Screen</p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex justify-around gap-8">
                    <div className="h-[320px]">
                      <img
                        src="/quiz/quiz-not-selected.svg"
                        alt="Quiz Screen Not Selected"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="h-[320px]">
                      <img
                        src="/quiz/quiz-selected.svg"
                        alt="Quiz Screen Selected"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-sm leading-relaxed text-gray-700">
                    <p>
                      I adopted a card-style design for the quiz screen to
                      create a sense of excitement.
                      <br />
                      Also, to evoke a Japanese feel, I used a reddish circle
                      image, reminiscent of the Japanese flag (Hinomaru), as an
                      accent. To prevent user error, the Submit button is
                      disabled when an answer is not selected, ensuring that
                      unintended submissions do not occur.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3.5 h-3.5 bg-black"></div>
                  <p className="font-semibold">Correct/Incorrect Screen</p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex justify-around gap-8">
                    <div className="h-[320px]">
                      <img
                        src="/quiz/correct.svg"
                        alt="Correct Screen"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="h-[320px]">
                      <img
                        src="/quiz/wrong.svg"
                        alt="Incorrect Screen"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-sm leading-relaxed text-gray-700">
                    <p>
                      I incorporated a confetti effect to make the
                      correct/incorrect result immediately clear.
                      <br />
                      Furthermore, by displaying both the user's selected answer
                      and the correct answer, users can reflect on "which option
                      they chose and where they went wrong," not just the
                      correctness.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-36 mb:gap-36 mt-8">
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3.5 h-3.5 bg-black"></div>
                  <p className="font-semibold">Result Screen</p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="h-[320px]">
                    <img
                      src="/quiz/result.svg"
                      alt="Result Screen"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="text-sm leading-relaxed text-gray-700">
                    <p>
                      I established a priority to first display the overall
                      result by placing the correct answer rate at the very top
                      of the screen, followed by the specific number of correct
                      answers.
                      <br />
                      Additionally, changing the message to the user according
                      to the correct answer rate provides a more interactive
                      experience.
                      <br />
                      Furthermore, considering users who do not actively check
                      the ranking, the rank is displayed below the number of
                      correct answers if they are in the top 20 overall, aiming
                      to boost motivation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3.5 h-3.5 bg-black"></div>
                  <p className="font-semibold">Ranking Screen</p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="h-[320px]">
                    <img
                      src="/quiz/ranking.svg"
                      alt="Ranking Screen"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="text-sm leading-relaxed text-gray-700">
                    <p>
                      The screen is configured to display both the user's
                      current ranking information and the overall ranking.
                      <br />
                      Also, displaying the current rank and the all-time highest
                      rank simultaneously is designed to encourage increased
                      motivation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-36 mt-12">
              <div className="w-full md:w-1/2  md:pr-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3.5 h-3.5 bg-black"></div>
                  <p className="font-semibold">Quiz Interruption Screen</p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="h-[320px]">
                    <img
                      src="/quiz/quit.svg"
                      alt="Quiz Interruption Screen"
                      className="h-full w-full object-contain rounded"
                    />
                  </div>
                  <div className="text-sm leading-relaxed text-gray-700">
                    <p>
                      When interrupting a quiz, a confirmation modal is
                      displayed to prevent the quiz from being unintentionally
                      aborted due to user error.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 pb-10 bg-background-secondary overflow-hidden py-20">
          <h2 className="text-lg md:text-2xl text-accent font-medium text-center">
            Learnings
          </h2>
          <div className="flex flex-col w-full gap-4">
            <ul class="list-disc pl-6 space-y-8 text-sm md:text-base leading-relaxed text-gray-700">
              <li>
                I was able to experience firsthand that creating personas leads
                to providing a service equipped with the features that users
                truly seek. Specifically, when multiple display options were
                available, having clearly defined personas allowed me to make
                decisions based on what would solve the persona's challenges.
              </li>
              <li>
                Initially, I used the Fredoka font, but it made the pop feeling
                too strong, resulting in a lack of overall cohesiveness,
                necessitating a re-selection of the font. I felt that font
                selection needs to be approached cautiously.
              </li>
            </ul>
          </div>
          <Link to="/" className="hover:opacity-80 pt-10">
            <div className=" flex items-center gap-1">
              <MdOutlineArrowBackIosNew width={10} className="w-5 h-3" />
              <p className="pb-0.5 text-sm underline">Home</p>
            </div>
          </Link>
        </div>
      </section>
    </FadeInPageWrapper>
  );
};

export default Quiz;
