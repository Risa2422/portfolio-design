import { useEffect } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import Arrow from "../../components/Arrow";
import FadeInPageWrapper from "../../components/FadeInPageWrapper";
import InfoList from "../../components/InfoList";

const EventManagement = () => {
  const infoItems = [
    { title: "サービス種別", value: "Webアプリ(モバイル版)" },
    { title: "制作種類", value: "チーム開発" },
    { title: "期間", value: "1週間(デザイン) / 3週間(コーディング)" },
    { title: "担当", value: "UIデザイン / フロントエンド開発" },
    { title: "使用ツール(デザイン)", value: "Figma" },
    { title: "開発言語", value: "Next.js, Tailwind CSS, shadcn/ui" },
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
                  <h1 className="text-xl font-semibold">
                    イベント管理サービス
                  </h1>
                  <div className="flex-1 h-[0.8px] bg-border mt-4" />
                </div>
              </div>
            </div>
            <InfoList items={infoItems} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-56 bg-background-secondary">
          <h2 className="text-lg md:text-xl text-accent font-medium">概要</h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            子どもの誕生日会を主催するユーザーを主な対象とした、イベントマネジメントツールです。イベントの企画から準備、当日の運営、イベント後のフォローアップまで、すべての工程を本サービスで完結できることを目指しました。
            一般的なイベントマネジメントアプリとの違いとして、開催場所を提案するサジェスト機能や、写真アルバム内で人物を自動認識する機能などの機能を提供します。
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background">
          <h2 className="text-lg md:text-xl text-accent font-medium">背景</h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            本サービスの着想は、私が大学時代に行っていたイベントの企画・運営経験にあります。
            準備から当日の運営、アフターケアに至るまで多くのタスクを複数のツールで管理しており、作業の煩雑さに課題を感じていました。
            そこでイベント管理に必要なすべての工程をひとつのサービスで完結できれば、主催者・参加者の負担を減らせるのではないかと考えました。
            <br />
            <br />
            既存のイベント管理プラットフォームとの差別化を図るため、「子どもの誕生日会を主催する子育て層」にターゲットを絞りました。
            背景には、現在居住しているカナダでは子どもの誕生日会が気軽に、かつ頻繁に開催されているという文化があり、こうしたニーズに特化することで、より実用性の高いサービスになると仮定しました。
          </p>
        </div>
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background-secondary">
          <h2 className="text-lg md:text-xl text-accent font-medium text-center">
            課題の洗い出し
          </h2>
          <div className="space-y-2">
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              ユーザーの課題の洗い出しをするにあたって、私の経験をもとに以下のユーザーシナリオを想定しました。
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
                ユーザーシナリオをもとに、イベント主催者と参加者が直面しうる課題を洗い出しました。
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
            イベント主催者にとって、イベントの準備から運営まで多くのタスクが存在し、
            それらを複数のツールで管理することによる情報の分散や抜け漏れが大きな課題となると感じ、
            特に、参加者とのスムーズな情報共有や連絡手段の確保、当日の運営負担を軽減するサポート機能などが求められているのではないかと考えました。
            <br />
            また、参加者側にとってもイベントの詳細や持ち物、当日のスケジュールが分かりづらいことや、参加者の顔ぶれなど、主催者にその都度確認しなければならない点が負担になっているのではないかと考えました。
          </p>
        </div>
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background">
          <h2 className="text-lg md:text-xl text-accent font-medium text-center">
            MVP設定
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            今回はデザインから実装までの期間が4週間と短かったこともあり、MVPを設定し開発を行いました。
          </p>
          <div className="md:w-1/2">
            <img
              src="/event-management/mvp.png"
              alt=""
              className="w-full h-full object-cover border border-border rounded"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background-secondary overflow-hidden">
          <h2 className="text-lg md:text-xl text-accent font-medium">UI設計</h2>
          <div>
            <div className="space-y-20">
              {/* ワイヤーフレーム作成 */}
              <section className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">
                  1. ワイヤーフレーム作成
                </h3>
                <div className="flex flex-col gap-4">
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    デザインはチームなのデザイナーと二人で担当しました。私はイベントのホストとゲストのイベント管理画面を担当し、MVPのコア機能をベースに双方の使いやすさを意識してワイヤーフレームを作成しました。
                    <br />
                    イベント管理画面は、ホーム画面に概要や重要な情報を集約し、必要に応じて各機能へ遷移できるように設計しました。
                    <br />
                    また、親しみやすさを演出するため、丸みを帯びたデザイン要素を多く取り入れました。
                  </p>
                  <div className="md:w-1/2">
                    <img
                      src="/event-management/wireframe.png"
                      alt="ワイヤーフレーム画像"
                      className="w-full max-w-full object-cover border border-border rounded"
                    />
                    <p className="text-xs text-center text-gray-520 mt-2">
                      作成したワイヤーフレーム
                    </p>
                  </div>
                </div>
              </section>

              {/* イメージボードとスタイルガイド */}
              <section className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold">
                  2. イメージボードの作成とスタイルガイドの決定
                </h3>
                <div className="space-y-4">
                  <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-3">
                    もう一人のデザイナーと参考にしたいデザインを集め、イメージボードを作成しました。
                  </p>
                  <div className="flex flex-col md:flex-row items-center gap-10 flex-wrap">
                    {[
                      {
                        src: "/event-management/image-board.png",
                        alt: "イメージボード",
                        label: "イメージボード",
                      },
                      {
                        src: "/event-management/color-token.png",
                        alt: "カラートークン",
                        label: "カラートークン",
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
                    カラーについては、ターゲットが子育て層であることを踏まえ、「安心感」「親しみやすさ」「つながり」を表現するオレンジ（#FF8549）をテーマカラーとして採用しました。
                    また、余白や文字サイズは8の倍数のルールに基づいてあらかじめ決定し、デザインの一貫性を保つようにしました。
                  </p>
                </div>
              </section>

              {/* 完成UI */}
              <section
                id="final-ui"
                className="flex flex-col gap-2 scroll-mt-24"
              >
                <h3 className="text-lg font-semibold">3. 完成UI</h3>
                <div>
                  {/* イベント前 */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-medium">イベント前</p>
                      <div className="flex-1 h-[0.8px] bg-border" />
                    </div>
                    <div className="flex flex-col">
                      {/* 主催者フロー */}
                      <div className="flex flex-col lg:flex-row items-center md:justify-between gap-10 mb-6 w-full px-2">
                        <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <span className="bg-primary text-white text-xs px-2 py-[2px] rounded-full">
                                主催者
                              </span>
                              <h4 className="text-sm text-gray-700">
                                イベント招待状作成フロー
                              </h4>
                            </div>
                            <p className="text-xs text-gray-600">
                              ※担当 : フロントエンド開発
                            </p>
                          </div>
                          <div className="w-full max-w-[480px] h-[380px]">
                            <video
                              src="/event-management/demo-createinvitation.mp4"
                              controls
                              className="h-full object-contain rounded"
                            />
                          </div>

                          <p className="text-sm text-gray-700">
                            主催者はイベントを作成する際に、招待状を作成します。
                            <br />
                            屋外での開催を予定している場合は、花見やピクニックなどのアクティビティに応じて、場所提案機能を利用することができます。
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
                                主催者
                              </span>
                              <h4 className="text-sm text-gray-700">
                                イベントページ作成フロー
                              </h4>
                            </div>
                            <p className="text-xs text-gray-600">
                              ※担当 : デザイン / フロントエンド開発(RSVP
                              Responses以外)
                            </p>
                          </div>
                          <div className="w-full max-w-[480px] h-[380px]">
                            <video
                              src="/event-management/demo-host-eventpre.mp4"
                              controls
                              className="h-full object-contain rounded"
                            />
                          </div>
                          <p className="text-sm text-gray-700">
                            イベント招待状を作成すると、マイページからイベントの詳細情報を設定できるようになります。「タイムライン」「持ち物リスト」「予算管理」「出欠確認」機能を利用し、準備をスムーズに進めることができます。
                          </p>
                        </div>
                      </div>

                      {/* 参加者フロー */}
                      <div className="flex flex-col lg:flex-row items-center md:justify-between gap-10 mb-6 w-full px-2">
                        <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <span className="bg-secondary text-white text-xs px-2 py-[2px] rounded-full">
                                参加者
                              </span>
                              <h4 className="text-sm text-gray-700">
                                招待状回答フロー
                              </h4>
                            </div>
                            <p className="text-xs text-gray-600">
                              ※担当 : フロントエンド開発
                            </p>
                          </div>
                          <div className="w-full max-w-[480px] h-[380px]">
                            <video
                              src="/event-management/demo-rsvp.mp4"
                              controls
                              className="h-full object-contain rounded"
                            />
                          </div>
                          <p className="text-sm text-gray-700">
                            招待状を受け取ったユーザーは、招待状に回答することで出欠を主催者に知らせます。アレルギー情報の事前通知や、家族などの同伴者がいる場合に名前を追加することができます。
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
                                参加者
                              </span>
                              <h4 className="text-sm text-gray-700">
                                イベントページ閲覧フロー
                              </h4>
                            </div>
                            <p className="text-xs text-gray-600">
                              ※担当 : デザイン / フロントエンド開発
                            </p>
                          </div>
                          <div className="w-full max-w-[480px] h-[380px]">
                            <video
                              src="/event-management/demo-guest-eventpre.mp4"
                              controls
                              className="h-full object-contain rounded"
                            />
                          </div>
                          <p className="text-sm text-gray-700">
                            イベントに参加する場合、メールでイベントページのリンクが送信されます。イベントページで当日の持ち物リストやタイムライン、参加者一覧を確認することができます。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* イベント当日 */}
                  <div className="mb-8 space-y-3">
                    <div className="flex items-center gap-2">
                      <p className="font-medium m-0">イベント当日</p>
                      <div className="flex-1 h-[0.8px] bg-border" />
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 px-2">
                      <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
                        <div>
                          <div className="flex items-center gap-1 mb-1">
                            <span className="bg-primary text-white text-xs px-2 py-[2px] rounded-full">
                              主催者
                            </span>
                            <h4 className="text-sm text-gray-700">
                              イベント当日の運営フロー
                            </h4>
                          </div>
                          <p className="text-xs text-gray-600">
                            ※担当 : デザイン
                          </p>
                        </div>
                        <div className="w-full max-w-[480px] h-[380px]">
                          <video
                            src="/event-management/demo-host-eventday.mp4"
                            controls
                            className="h-full object-contain rounded"
                          />
                        </div>
                        <p className="text-sm text-gray-700">
                          主催者は参加者の出欠確認とアルバム作成ができます。
                          <br />
                          アルバム機能では、画像認識処理を用いて個人のアルバムが自動で作成されます。
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* イベント後 */}
                  <div className="mb-8 space-y-3">
                    <div className="flex items-center gap-2">
                      <p className="font-medium m-0">イベント後</p>
                      <div className="flex-1 h-[0.8px] bg-border" />
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 px-2">
                      <div className="w-full max-w-[420px] space-y-1.5 h-[520px]">
                        <div>
                          <div className="flex items-center gap-1 mb-1">
                            <span className="bg-secondary text-white text-xs px-2 py-[2px] rounded-full">
                              参加者
                            </span>
                            <h4 className="text-sm text-gray-700 font-me">
                              イベント後のレビューフロー
                            </h4>
                          </div>
                          <p className="text-xs text-gray-600">
                            ※担当 : デザイン
                          </p>
                        </div>
                        <div className="w-full max-w-[480px] h-[380px]">
                          <video
                            src="/event-management/demo-guest-review.mp4"
                            controls
                            className="h-full object-contain rounded"
                          />
                        </div>
                        <p className="text-sm text-gray-700">
                          参加者はイベントでの思い出をアプリ内に投稿し、全参加者が閲覧できるようになります。
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 意識した点 */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">4. 意識した点</h3>
                    <ul className="list-disc pl-5 space-y-6 text-sm md:text-base text-gray-700">
                      <li>
                        <div className="flex flex-col">
                          <strong>コントラスト</strong>
                          <p>
                            当初、タイムラインではカード形式のUIを採用し、差別化を図るためにカードに複数の色を使用していました。しかし、全体の視認性に課題があったため、最終的にはコントラストを重視し、使用する色を2色に絞って見やすさを向上させました。
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-col">
                          <strong>レスポンシブ対応</strong>
                          <p>
                            今回はレスポンシブのみの対応だったため、スマートフォンで片手操作しやすいように、ボタンのサイズや幅を広めに設計しました。
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-col">
                          <strong>
                            コンポーネントライブラリに合わせた設計
                          </strong>
                          <p>
                            実装時に shadcn/ui
                            を使用することが決まっていたため、提供されているコンポーネントを無理なく使えるよう、デザインの段階から意識して構成しました。
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

        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background">
          <h2 className="text-lg md:text-xl text-accent font-medium text-center">
            学び
          </h2>
          <ul className="list-disc pl-5 space-y-6 text-sm md:text-base text-gray-700">
            <li>
              <div className="flex flex-col">
                <strong>想定パターンの幅を広げる重要性</strong>
                <p>
                  設計中、想定すべきユーザーフローのパターンに抜け漏れが多く、引き出しの少なさを実感しました。例えば、今回のプロジェクトでは「ホストかゲストか」「データが存在しない場合のUIをどうするか」といったケースへの対応が不十分でした。今後は、より多くのサービスに触れることで幅広い状況を想定できるよう日頃から意識していきたいです。
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <strong>設計意図の言語化の重要性</strong>
                <p>
                  一部のUIで設計意図が曖昧なまま進めてしまい、メンバーからデザインの意図を尋ねられた際に答えられない場面がありました。今後は「なぜこの設計にしたのか」を常に意識し、明確な根拠を持ってデザインするよう努めたいです。
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <strong>実装とのバランス感覚</strong>
                <p>
                  デザインの理想と実装の現実の間で柔軟に調整する力が必要だと感じました。例えば、ホーム画面に子どもの絵や写真を表示する案がありましたが、DB設計の都合で実現が難しく、デザインを見直す必要がありました。今後は、デザイン段階から実装の制約を意識し、より現実的な設計を心がけたいです。
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
