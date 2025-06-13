import { useEffect } from "react";
import Arrow from "../../components/Arrow";
import InfoList from "../../components/InfoList";

const Mahjong = () => {
  const infoItems = [
    { title: "制作種類", value: "チーム制作" },
    { title: "期間", value: "1週間" },
    { title: "担当", value: "デザイン" },
    { title: "使用ツール", value: "Figma" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="space-y-10 md:space-y-4">
      <Arrow />
      <div className="flex flex-col md:flex-row gap-2 md:gap-16 px-6 md:px-16 lg:px-32 xl:px-56">
        <div className="md:w-1/2 md:h-[300px] flex-1 mb-4 md:mb-40">
          <img
            src="/susan4.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6 py-2 flex-1">
          <div>
            <div className="space-y-2">
              <p className="w-fit flex items-center text-xs mb-1 px-2.5 py-1 border border-[#F0EEEA] bg-[#F0EEEA] rounded-full">
                webアプリ
              </p>
              <h1 className="text-xl font-semibold">麻雀対戦記録アプリ</h1>
            </div>
            <div className="flex-1 h-[0.8px] bg-border mt-4" />
          </div>
          <InfoList items={infoItems} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background-secondary">
        <h2 className="text-xl  text-accent font-medium">概要</h2>
        <p className="text-sm md:text-base leading-relaxed text-gray-700">
          既存の麻雀記録アプリのUIリデザインをしました。
          背景として、麻雀好きな知人のエンジニアが普段、対戦結果を記録するために使用しているアプリが使い辛く、
          より使いやすいアプリを開発したいとのことで、既存アプリの基本的な機能は引き継ぎつつもより直感的なUIデザインの制作に力を入れました。
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background">
        <h2 className="text-xl text-accent font-medium">課題</h2>
        <div className="space-y-8">
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            現行のジャンログは、機能面では充実している一方で、デザインが機能的すぎるため、麻雀アプリとしての世界観や雰囲気に乏しい印象を受けました。
            実際にヒアリングを行った際、依頼者も「機能には特に不満はないが、使いづらさや見た目の古さを感じる」と話しており、UIの使いやすさと視覚的な魅力の両立が求められていると判断しました。
          </p>

          <div className="flex flex-col gap-4">
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              まずは既存アプリの課題をページごとに洗い出しました。
            </p>
            <div className="space-y-4">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col md:flex-row flex-1 gap-10">
                  <div className="flex flex-col">
                    <img
                      src="/mahjong/score-before.png"
                      alt="成績ページ"
                      className="h-full object-cover border border-border rounded max-w-full"
                    />
                    <p className="text-xs text-center text-gray-520 mt-2">
                      成績ページ
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <img
                      src="/mahjong/record-before.png"
                      alt="履歴ページ"
                      className="h-full object-contain border border-border rounded max-w-full"
                    />
                    <p className="text-xs text-center text-gray-520 mt-2">
                      履歴ページ
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row flex-1 gap-10">
                  <div className="flex flex-col">
                    <img
                      src="/mahjong/input-before.png"
                      alt="成績入力ページ"
                      className="h-full object-cover border border-border rounded max-w-full"
                    />
                    <p className="text-xs text-center text-gray-520 mt-2">
                      成績入力ページ
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <img
                      src="/mahjong/account-before.png"
                      alt="アカウントページ"
                      className="h-full object-contain border border-border rounded max-w-full"
                    />
                    <p className="text-xs text-center text-gray-520 mt-2">
                      アカウントページ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background-secondary overflow-hidden">
        <h2 className="text-xl text-accent font-medium">UI設計</h2>
        <div className="flex flex-col w-full gap-20">
          <div className="flex flex-col lg:flex-row items-center md:justify-between gap-10 mb-6">
            <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <h4 className="text-sm text-gray-700 font-semibold">
                    成績/履歴ページ
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
              <p className="text-sm text-gray-700">
                招待者は招待状に回答し出欠を主催者に知らせます。アレルギー情報を事前に知らせることができ、また家族などの同伴者がいる場合も名前を追加することができます。
              </p>
            </div>
            <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <h4 className="text-sm text-gray-700 font-semibold">
                    成績入力ページ
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
              <p className="text-sm text-gray-700">
                招待者は招待状に回答し出欠を主催者に知らせます。アレルギー情報を事前に知らせることができ、また家族などの同伴者がいる場合も名前を追加することができます。
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center md:justify-between gap-10 mb-6">
            <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <h4 className="text-sm text-gray-700 font-semibold">
                    マイページ
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
              <p className="text-sm text-gray-700">
                招待者は招待状に回答し出欠を主催者に知らせます。アレルギー情報を事前に知らせることができ、また家族などの同伴者がいる場合も名前を追加することができます。
              </p>
            </div>
            <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <h4 className="text-sm text-gray-700 font-semibold">
                    友達管理ページ
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
              <p className="text-sm text-gray-700">
                招待者は招待状に回答し出欠を主催者に知らせます。アレルギー情報を事前に知らせることができ、また家族などの同伴者がいる場合も名前を追加することができます。
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="space-y-20">
            {/* ワイヤーフレーム作成 */}
            <section className="flex flex-col gap-4 mt-10">
              <h3 className="text-lg font-semibold">
                ・どんな改善を目指したか？
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  基本的な機能やUIの構造に大きな変化を加えないようにしつつも、必要最低限の機能や情報を中心的にに表示するように意識しました。
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-10">
                  <div className="flex flex-col md:flex-row flex-1 gap-10">
                    <div className="flex flex-col">
                      <img
                        src="/mahjong/score-after.png"
                        alt="成績ページ"
                        className="h-full object-cover border border-border rounded max-w-full"
                      />
                      <p className="text-xs text-center text-gray-520 mt-2">
                        成績ページ
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <img
                        src="/mahjong/record-after.png"
                        alt="履歴ページ"
                        className="h-full object-contain border border-border rounded max-w-full"
                      />
                      <p className="text-xs text-center text-gray-520 mt-2">
                        履歴ページ
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row flex-1 gap-10">
                    <div className="flex flex-col">
                      <img
                        src="/mahjong/input-after.png"
                        alt="成績入力ページ"
                        className="h-full object-cover border border-border rounded max-w-full"
                      />
                      <p className="text-xs text-center text-gray-520 mt-2">
                        成績入力ページ
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <img
                        src="/mahjong/mypage-after.png"
                        alt="アカウントページ"
                        className="h-full object-contain border border-border rounded max-w-full"
                      />
                      <p className="text-xs text-center text-gray-520 mt-2">
                        アカウントページ
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row flex-1 gap-10 md:w-1/2">
                    <div className="flex flex-col">
                      <img
                        src="/mahjong/friends-after.png"
                        alt="友達管理ページ"
                        className="h-full object-cover border border-border rounded max-w-full"
                      />
                      <p className="text-xs text-center text-gray-520 mt-2">
                        友達管理ページ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">・カラー </h3>
              <div className="space-y-4">
                <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-3">
                  麻雀牌を連想させる「赤・緑・青」の色を基調にすることで、麻雀らしさを視覚的に表現し、背景色には落ち着いたベージュ（#F7F1E1）を採用することで、和の雰囲気を保ちながら、親しみやすさを感じられる配色を意識しています。
                </p>
                <div className="flex flex-col md:flex-row md:justify-around items-center gap-10 flex-wrap">
                  <div className="max-w-[420px] h-[320px] flex flex-col">
                    <img
                      src="/event-management/image-board.png"
                      alt="イメージボード"
                      className="w-full h-full object-cover border border-border rounded max-w-full"
                    />
                    <p className="text-xs text-center text-gray-520 mt-2">
                      イメージボード
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">・イラスト </h3>
              <div className="space-y-4">
                <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-3">
                  麻雀牌を連想させる「赤・緑・青」の色を基調にすることで、麻雀らしさを視覚的に表現し、背景色には落ち着いたベージュ（#F7F1E1）を採用することで、和の雰囲気を保ちながら、親しみやすさを感じられる配色を意識しています。
                </p>
                <div className="flex flex-col md:flex-row md:justify-around items-center gap-10 flex-wrap">
                  <div className="max-w-[420px] h-[320px] flex flex-col">
                    <img
                      src="/event-management/image-board.png"
                      alt="イメージボード"
                      className="w-full h-full object-cover border border-border rounded max-w-full"
                    />
                    <p className="text-xs text-center text-gray-520 mt-2">
                      イメージボード
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background">
        <h2 className="text-xl text-accent font-medium">学び</h2>
        <p className="text-sm md:text-base leading-relaxed text-gray-700">
          麻雀の世界観を意識し、「赤・緑・青」を基調とした配色を取り入れましたが、色数が多いにも関わらず配色の優先順位を明確に定義できていなかったため、視覚的な混乱が生まれてしまいい、その結果UI全体に統一感を持たせるのに時間がかかる要因となりました。今後は、背景色や主役カラーの役割を明確にした上で配色の優先順位を整理し、調和の取れたUI設計を心がけていきたいと考えています。
        </p>
      </div>
    </section>
  );
};

export default Mahjong;
