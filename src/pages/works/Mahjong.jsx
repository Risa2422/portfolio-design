import { useEffect } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import Arrow from "../../components/Arrow";
import FadeInPageWrapper from "../../components/FadeInPageWrapper";
import InfoList from "../../components/InfoList";

const Mahjong = () => {
  const infoItems = [
    { title: "サービス種別", value: "Webアプリ(モバイル版)" },
    { title: "制作形態", value: "チーム開発" },
    { title: "制作期間", value: "1週間" },
    { title: "担当領域", value: "UIデザイン" },
    { title: "使用ツール", value: "Figma" },
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
              src="/mahjong/thumbnail.png"
              alt="mahjong thumbnail"
              width={320}
              height={320}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <div className="space-y-3">
                <h1 className="text-xl font-semibold">麻雀対戦記録アプリ</h1>
                <div className="flex-1 h-[0.8px] bg-border mt-4" />
              </div>
            </div>
            <InfoList items={infoItems} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-56 bg-background-secondary">
          <h2 className="text-lg md:text-xl text-accent font-medium">概要</h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            既存の
            <a
              href="https://apps.apple.com/jp/app/%E9%9B%80%E3%83%AD%E3%82%B0-%E9%BA%BB%E9%9B%80%E3%81%AE%E6%88%90%E7%B8%BE-%E5%8F%8E%E6%94%AF%E3%82%92%E8%A8%98%E9%8C%B2%E3%81%99%E3%82%8B%E5%B8%B3%E7%B0%BF%E3%82%A2%E3%83%97%E3%83%AA/id1439070045"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              麻雀記録アプリ
            </a>
            をベースとした麻雀対戦記録アプリのデザインを担当しました。
            背景としては、麻雀好きな知人のエンジニアが、普段対戦結果を記録するために使用している既存アプリが使い辛く、
            より使いやすいアプリを開発したいとのことで、既存アプリの基本的な機能は引き継ぎつつもより直感的なUIデザインの制作に力を入れました。
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background">
          <h2 className="text-lg md:text-xl text-accent font-medium">
            課題の洗い出し
          </h2>
          <div className="space-y-8">
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              既存アプリは、機能面では充実している一方で、デザインが機能的すぎるため、麻雀アプリとしての世界観や雰囲気に乏しい印象を受けました。
              実際にヒアリングを行った際、依頼者も「機能には特に不満はないが、使いづらさや見た目の古さを感じる」と話しており、UIの使いやすさと視覚的な魅力の両立が求められていると判断しました。
            </p>

            <div className="flex flex-col gap-4">
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                そこでまずはじめに、既存アプリの課題をページごとに洗い出しました。
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
        <div
          id="final-ui"
          className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background-secondary overflow-hidden scroll-mt-24"
        >
          <h2 className="text-lg md:text-xl text-accent font-medium">UI設計</h2>
          <div className="flex flex-col w-full gap-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold m-0">完成UI</h3>
                <div className="flex-1 h-[0.8px] bg-border" />
              </div>
            </div>
            <div className="space-y-12">
              <div className="flex flex-col lg:flex-row items-center md:justify-between gap-10">
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
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-20">
              <section className="flex flex-col gap-2 mt-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold m-0">意識した点</h3>
                    <div className="flex-1 h-[0.8px] bg-border" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-2">
                  {/* カード1 */}
                  <div className="flex flex-col">
                    <img
                      src="/mahjong/score-after.png"
                      alt="成績ページ"
                      className="w-full object-contain border border-border rounded"
                    />
                    <p className="text-xs text-center text-gray-520 mt-2">
                      成績ページ
                    </p>
                  </div>

                  {/* カード2 */}
                  <div className="flex flex-col">
                    <img
                      src="/mahjong/record-after.png"
                      alt="履歴ページ"
                      className="w-full object-contain border border-border rounded"
                    />
                    <p className="text-xs text-center text-gray-520 mt-2">
                      履歴ページ
                    </p>
                  </div>

                  {/* カード3 */}
                  <div className="flex flex-col">
                    <img
                      src="/mahjong/input-after.png"
                      alt="成績入力ページ"
                      className="w-full object-contain border border-border rounded"
                    />
                    <p className="text-xs text-center text-gray-520 mt-2">
                      成績入力ページ
                    </p>
                  </div>

                  {/* カード4 */}
                  <div className="flex flex-col">
                    <img
                      src="/mahjong/mypage-after.png"
                      alt="アカウントページ"
                      className="w-full object-contain border border-border rounded"
                    />
                    <p className="text-xs text-center text-gray-520 mt-2">
                      アカウントページ
                    </p>
                  </div>

                  {/* カード5 */}
                  <div className="flex flex-col">
                    <img
                      src="/mahjong/friends-after.png"
                      alt="友達管理ページ"
                      className="w-full object-contain border border-border rounded"
                    />
                    <p className="text-xs text-center text-gray-520 mt-2">
                      友達管理ページ
                    </p>
                  </div>
                </div>
              </section>

              <section className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold m-0">
                    カラー & イラスト
                  </h3>
                  <div className="flex-1 h-[0.8px] bg-border" />
                </div>
                <div className="space-y-4">
                  <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-3">
                    麻雀牌を連想させる「赤・緑・青」を基調にすることで、麻雀らしさを視覚的に表現しました。背景色には落ち着いたベージュ（#F7F1E1）を採用することで和の雰囲気を保ちながら、親しみやすさを感じられる配色を意識しました。
                    <br />
                    また、イラストは知人に依頼しました。
                  </p>
                  <div className="flex flex-col md:flex-row items-center gap-10 flex-wrap">
                    <div className="flex flex-col md:w-1/2">
                      <img
                        src="/mahjong/style-guide.png"
                        alt="イメージボード"
                        className="h-full object-cover border border-border rounded max-w-full"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-56 bg-background">
          <h2 className="text-lg md:text-xl text-center text-accent font-medium">
            学び
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            色数が多いにも関わらず配色の優先順位を明確に定義できていなかったため、統一感を持たせるのに時間を要しました。
            <br />
            今後は、背景色や主役カラーの役割を明確にした上で配色の優先順位を整理し、よりスムーズにデザインを進めることを目指します。
          </p>
          <Link to="/" className="hover:opacity-80 pt-4">
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

export default Mahjong;
