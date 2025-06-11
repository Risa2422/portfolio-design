import InfoList from "../../components/InfoList";

const EventManagement = () => {
  const infoItems = [
    { title: "制作種類", value: "個人制作" },
    { title: "期間", value: "1週間" },
    { title: "担当", value: "デザイン / コーディング" },
    { title: "使用ツール", value: "Figma" },
  ];
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-6 md:gap-16 px-[5vw] sm:px-[10vw]">
        <div className="md:w-1/2 h-[300px] flex-1 mb-40">
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
              <h1 className="text-xl font-semibold">イベント管理サービス</h1>
            </div>
            <div className="flex-1 h-[0.8px] bg-border mt-4" />
          </div>
          <InfoList items={infoItems} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 md:gap-7 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background-secondary">
        <h2 className="text-xl text-accent font-medium">概要</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          子どもの誕生日会を主催するユーザーを主な対象としたイベントマネジメントツールです。
          イベントの企画段階から、準備、当日の運営、終了後のフォローアップまで、すべての工程をひとつのサービス内で完結することを目的としています。
          一般的なイベントマネジメントアプリとの違いとして、開催場所のサジェスト機能や、写真アルバム内での人物認識機能といった独自の機能があり、
          よりスムーズで充実したイベント体験を提供します。
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 md:gap-7 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background">
        <h2 className="text-xl text-accent font-medium">背景</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          本サービスの着想は、私が大学時代に行っていたイベントの企画・運営経験にあります。
          準備から当日の運営、アフターケアに至るまで多くのタスクを複数のツールで管理していたことから、作業の煩雑さに課題を感じていました。
          そこでイベント管理に必要なすべての工程をひとつのサービスで完結できる仕組みがあれば、主催者また参加者の両方の負担を減らせるのではないかと考えました。
          <br />
          <br />
          さらに、既存のイベント管理プラットフォームとの差別化を図るため「子どもの誕生日会を主催するユーザー」にターゲットを絞りました。
          また、居住地であるカナダでは、子どもの誕生日会が重要かつ頻繁に開催されるイベントであることから、
          「子どもの誕生日会」に特化することでより実用性が高く、ユーザーの共感を得られるサービスになると考えました。
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 md:gap-7 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background-secondary">
        <h2 className="text-xl text-accent font-medium">課題の洗い出し</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          ユーザーシナリオ（現状の課題を浮き彫りにするための私の経験）
          課題の洗い出しをするにあたって、私の経験をもとに以下のユーザーシナリオを想定しました。
        </p>
        <div className="w-1/2 ">
          <img
            src="/event-management/user-scenario.png"
            alt=""
            className="w-full h-full object-cover border border-border"
          />
        </div>
        <div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-1/2 ">
              <img
                src="/event-management/problem-host.png"
                alt=""
                className="w-full h-full object-cover border border-border"
              />
            </div>
            <div className="w-1/2 ">
              <img
                src="/event-management/problem-guest.png"
                alt=""
                className="w-full h-full object-cover border border-border"
              />
            </div>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-gray-700">
          イベント主催者にとって、イベントの準備から当日運営、終了後の振り返りまでには多くのタスクが存在し、
          それらを複数のツールで管理することによる情報の分散や抜け漏れが大きな課題となると感じました。
          特に、参加者とのスムーズな情報共有や連絡手段の確保、当日の運営負担を軽減するサポート機能などが求められているのではないかと考えました。
          また参加者側にとっても、イベントの詳細や持ち物、当日のスケジュールが分かりづらいことや、参加者の顔ぶれなど、必要な情報にすぐアクセスできず、主催者にその都度確認しなければならない点が負担になっているのではないかと考えました。
          このように、イベントの全体フローに潜む課題を洗い出したことで、「イベント主催における一連の体験をまるごと支援する」サービス設計が重要であると再認識しました。
        </p>
      </div>
      <div className="flex flex-col gap-6 md:gap-7 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background">
        <h2 className="text-xl text-accent font-medium text-center">MVP設定</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          今回はデザインから実装までの期間が4週間と短かったこともありMVPを設定しました。
        </p>
        <div className="w-1/2 justify-self-center">
          <img
            src="/event-management/mvp.png"
            alt=""
            className="w-full h-full object-cover border border-border"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 md:gap-7 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background-secondary">
        <h2 className="text-xl text-accent font-medium">UI設計</h2>

        {/* ワイヤーフレーム作成 */}
        <section>
          <h3 className="text-lg font-semibold mb-2">
            1. ワイヤーフレーム作成
          </h3>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            私はイベントのホストとゲストのイベント管理画面を担当し、MVPのコア機能をベースに双方の使いやすさを意識してワイヤーフレームを作成しました。
            各機能は独立した構造とし、必要最低限の情報にすぐアクセスできる設計としました。
            ホーム画面に概要と重要情報を集約し、必要に応じて各機能へ遷移可能としました。
            また、親しみやすさを出すため、丸みを帯びた要素を多く取り入れました。
          </p>
          <div className="w-1/2">
            <img
              src="/event-management/wireframe.png"
              alt="ワイヤーフレーム画像"
              className="w-full h-full object-cover border border-border"
            />
          </div>
        </section>

        {/* イメージボードとスタイルガイド */}
        <section>
          <h3 className="text-lg font-semibold mt-10 mb-2">
            2. イメージボードの作成とスタイルガイドの決定
          </h3>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            もう一人のデザイナーと参考にしたいデザインを集め、イメージボードを作成しました。
          </p>
          <div className="flex gap-2 mb-4">
            <div className="w-1/2">
              <img
                src="/event-management/image-board.png"
                alt="イメージボード"
                className="w-full h-full object-cover border border-border"
              />
            </div>
            <div className="w-1/2">
              <img
                src="/event-management/color-token.png"
                alt="カラートークン"
                className="w-full h-full object-cover border border-border"
              />
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-700">
            ターゲットが子育て層であることから、「安心感」「親しみやすさ」「つながり」を表すオレンジ（#FF8549）をテーマカラーに採用。
            デザイン時間が限られていたため、カラートークンと8の倍数に沿った余白・文字サイズを事前に決定しました。
          </p>
        </section>

        {/* 完成UI */}
        <div>
          <h3 className="text-lg font-semibold mt-10 mb-4">3. 完成UI</h3>
          <p className="mb-6">
            マイページ、イベント管理画面のデザインを担当しました。
          </p>

          {/* イベント前 */}
          <div className="mb-8">
            <p className="font-medium mb-2">イベント前</p>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div>
                <h4 className="text-sm text-gray-700 mb-1">
                  【主催者】イベント招待状作成フロー
                </h4>
                <video
                  src="/event-management/demo-createinvitation.mp4"
                  controls
                  className="w-[480px] h-[400px] object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm text-gray-700 mb-1">
                  【主催者】イベントページ作成フロー
                </h4>
                <video
                  src="/event-management/demo-host-eventpre.mp4"
                  controls
                  className="w-[480px] h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div>
                <h4 className="text-sm text-gray-700 mb-1">
                  【参加者】イベント招待状回答フロー
                </h4>
                <video
                  src="/event-management/demo-rsvp.mp4"
                  controls
                  className="w-[480px] h-[400px] object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm text-gray-700 mb-1">
                  【参加者】イベントページ閲覧フロー
                </h4>
                <video
                  src="/event-management/demo-guest-eventpre.mp4"
                  controls
                  className="w-[480px] h-[400px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* イベント当日 */}
          <div className="mb-8">
            <p className="font-medium mb-2">イベント当日</p>
            <div className="flex flex-col md:flex-row gap-4">
              <div>
                <h4 className="text-sm text-gray-700 mb-1">
                  【主催者】イベント当日の運営フロー
                </h4>
                <video
                  src="/event-management/demo-host-eventday.mp4"
                  controls
                  className="w-[480px] h-[400px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* イベント後 */}
          <div>
            <p className="font-medium mb-2">イベント後</p>
            <div className="flex flex-col md:flex-row gap-4">
              <div>
                <h4 className="text-sm text-gray-700 mb-1">
                  【参加者】イベント後の振り返りフロー
                </h4>
                <video
                  src="/event-management/demo-guest-review.mp4"
                  controls
                  className="w-[480px] h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
          {/* 意識した点 */}
          <div>
            <h3 className="text-lg font-semibold mt-10 mb-4">4. 意識した点</h3>
            <ul className="list-disc pl-5 space-y-4 text-sm text-gray-700">
              <li>
                <div className="flex flex-col">
                  <strong>コントラスト</strong>
                  <p>
                    タイムラインのUIでは、アクティビティをカード形式で表現し、直感的な操作ができるよう複数の色を使って設計しました。しかし、全体の視認性に課題があったため、最終的にはコントラストを重視し、使用する色を2色に絞って見やすさを向上させました。
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
                  <strong>コンポーネントライブラリに合わせた設計</strong>
                  <p>
                    実装時に shadcn/ui
                    を使用することが決まっていたため、提供されているコンポーネントを無理なく使えるよう、デザイン段階から意識して構成しました。
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 md:gap-7 px-6 md:px-16 lg:px-32 xl:px-56 py-10 min-h-72 bg-background">
        <h2 className="text-xl text-accent font-medium">学び</h2>
        <ul className="list-disc pl-5 space-y-4 text-sm text-gray-700">
          <li>
            <div className="flex flex-col">
              <strong>想定パターンの幅を広げる重要性</strong>
              <p>
                設計中、想定すべきユーザーフローのパターンに抜け漏れが多く、自分の中での引き出しの少なさを実感しました。たとえば、今回のプロジェクトでは「ユーザーがホストかゲストか」「データが存在しない場合のUIをどうするか」といったケースへの対応が不十分でした。今後は、より多くの事例に触れながら柔軟な発想を身につけ、幅広い状況を想定できるよう日頃から意識していきたいです。
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-col">
              <strong>設計意図の言語化の重要性</strong>
              <p>
                一部のUIで設計意図が曖昧なまま進めてしまい、プロジェクトメンバーからデザインの意図を尋ねられた際に答えられない場面がありました。今後は「なぜこの設計にしたのか」を常に意識し、明確な根拠を持ってデザインするよう努めたいです。
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-col">
              <strong>実装とのバランス感覚</strong>
              <p>
                デザインの理想と実装の現実の間で柔軟に調整する力が必要だと感じました。例えば、イベントホーム画面に子どもの絵や写真を表示する案がありましたが、DB設計の都合で実現が難しく、仕様を見直す判断が求められました。
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default EventManagement;
