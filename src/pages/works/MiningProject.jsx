import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "../../components/Accordion";
import ArrowLeftIcon from "../../components/ArrowLeftIcon";
import FadeInPageWrapper from "../../components/FadeInPageWrapper";
import InfoList from "../../components/InfoList";
import SectionMark from "../../components/SectionMark";
import SkillItem from "../../components/SkillItem";
import ZoomableImage from "../../components/ZoomableImage";
import { useLanguage } from "../../context/LanguageContext";
import { localizeImage } from "../../utils/localizeImage";
import CaseStudy from "./mining/CaseStudy";
import IndustryFlowImage from "./mining/IndustryFlowImage";

const aiUsageSkills = [
  { icon: "/alloy-icon.svg", label: "Alloy" },
  { icon: "/openai-icon.svg", label: "ChatGPT", size: "w-full h-full" },
  { icon: "/claude-icon.svg", label: "Claude Design" },
  { icon: "/google-icon.svg", label: "Google Stitch" },
];

const content = {
  ja: {
    infoLabels: [
      { title: "サービス種別", value: "B2B SaaS / Webアプリケーション（PC）" },
      { title: "プロジェクト区分", value: "クライアントワーク" },
      { title: "期間", value: "8ヶ月（2025年11月 - 2026年6月）" },
      { title: "担当領域", value: "主要機能設計・既存画面のUI/UX改善" },
      {
        title: "チーム構成",
        value:
          "PdM1名、エンジニア5名、オペレーション2名、デザイナー1名（自身）",
      },
      { title: "使用ツール", value: "Figma, ChatGPT, Alloy" },
    ],
    title: "鉱山開発の予算・進捗管理システム",
    thumbnail: "/mining/thumbnail.png",
    ProductOverview: "プロダクト概要",
    ProductOverviewText:
      "世界有数の資源大国であるカナダの基幹産業です。広大で過酷な環境の中、資源の調査から環境評価、採掘まで、長期・大規模なプロジェクトが同時進行しています。そのため、フェーズごとの人員移動や、複雑な予算・実績の管理が欠かせない業界です。",
    ProductOverviewApproach:
      "ITツールの導入が遅れがちな業界特性に配慮し、デジタル機器に不慣れなユーザーでも直感的に操作できるよう、既存のワークフローに寄り添ったUI/UXデザインを追求しました。",
    productOverviewImage: "/mining/program_overview.svg",
    productOverviewImageCaption: "制作デザイン (一部)",
    industryTitle: "カナダの鉱山業界",
    industryFlowImage: "/mining/industory_flow.svg",
    clientTitle: "クライアントの立ち位置",
    clientText:
      "発足した各プロジェクトには、基本的に「依頼企業（鉱業企業）」「運用マネジメント会社」「現場」の3者が関わります。 \n本プロジェクトのクライアントは、その中心に立つ採掘運用マネジメント会社です。依頼企業からの委託を受け、輸送・人員・宿泊・機材などの予算作成と提案を行い、承認後は実際の現場や各業者への手配・依頼を進めます。プロジェクト開始後も現場の実績を管理し、依頼企業への予実報告までを担います。本システムは、この予算作成から手配・報告までの一連の業務をサポートします。",
    clientFlowImage: "/mining/client_flow.svg",
    challengesTitle: "クライアントの課題とシステムが解決すること",
    challengesText:
      "カナダの鉱山業界ではExcelを中心とした手作業での管理が一般的であり、そこに起因する「非効率さ・属人化・ヒューマンエラーの常態化」が大きな課題でした。日々の業務の中で見過ごされがちなこれらの問題が現場の負担となっていたため、本システムでは業務の統一と自動化によって課題の解決を目指しました。",
    challengesHeaders: ["課題", "具体例", "システムが提供する解決策"],
    challenges: [
      {
        issue: "非効率さ",
        before: "依頼企業への報告レポートを毎回作成",
        solution: "集計・報告書作成の自動化",
      },
      {
        issue: "属人化",
        before: "担当者ごとにExcelのフォーマットや管理方法が異なる",
        solution: "入力形式と業務フローの統一",
      },
      {
        issue: "ヒューマンエラーの常態化",
        before: "過去ファイルの使い回しやコピペによる入力ミス",
        solution: "テンプレート化と入力チェック",
      },
    ],
    backgroundTitle: "プロジェクトの背景と課題",
    backgroundText:
      "私が参画した時点では、すでにデザイン制作や実装が進行していましたが、プロダクトには以下のような課題がありました。これらを解消するため、UI/UXの全面的な見直しが必要でした。",
    backgroundIssues: [
      {
        title: "動線の不備と画面の分断",
        detail:
          "ホーム画面から予算作成・管理画面へ直接遷移できる導線がありませんでした。また、予算と報告書（レポート）は実際の業務で連動して扱うことが多いにもかかわらず、それぞれ独立したページに分断されている状態でした。そのため、画面間の行き来が煩雑になり、業務をスムーズに進められないという操作性（ユーザビリティ）の課題がありました。",
      },
      {
        title: "現場のフローと乖離したAI機能",
        detail:
          "複数のAI機能が実装されていたものの、実際の業務の流れと一致しておらず、出力の精度も低いことから、ユーザーの信頼を得られていませんでした。",
      },
    ],
    productFlowTitle: "担当領域と開発プロセス",
    productFlowText:
      "全員がヒアリングからリリースまで関わるアジャイル体制のもと、機能定義からUI/UXデザインまでを主導しつつ前後の工程もサポートしました。",
    productFlowImage: "/product_development_flow.svg",
    improvementsTitle: "改善事例",
    improvementsText:
      "守秘義務契約（NDA）の都合上、すべての成果物やデザイン画面はお見せできませんが、参画期間中に特に注力して取り組んだUI/UX改善事例を2つご紹介します。",
    caseLabels: {
      background: "課題・背景",
      backgroundEyebrow: "Background",
      reflection: "学び",
      reflectionEyebrow: "Reflection",
    },
    improvements: [
      {
        id: 1,
        title: "プログラム作成フローの簡略化",
        summary:
          "不要な画面遷移を廃止し、最速で予算作成へ到達できる入力体験を目指しました。",
        background: [
          "最も利用頻度が高い「予算作成画面」へと至る事前フロー（プロジェクト、プログラム作成）が直感性に欠けており、離脱や操作上の混乱を招くUI/UXの課題がありました。",
        ],
        backgroundFigure: {
          caption:
            "データ構造としては、1つの親プロジェクトに複数の子プログラムが紐づけてあり、それらに各予算が紐づいていました。そのため、新規で予算を作成するためには、プロジェクトとプログラムを順番に作成することが前提となっていました。",
          image: "/mining/diagram.svg",
          imageCaption: "データ構造",
          alt: "プロジェクトとプログラムの構造図",
        },
        sections: [
          {
            theme: "before",
            label: "改善前",
            flowLabel: "プロジェクト作成から予算作成までのユーザーフロー",
            image: "/mining/creation-flow-before.svg",
            alt: "改善前のプログラム作成フロー",
            list: {
              heading: "課題",
              eyebrow: "Issues",
              note: "(図中の A・B・C に対応)",
              marker: "letter",
              items: [
                {
                  title: "画面分断による構造理解の困難さ",
                  text: "プロジェクト作成とプログラム作成が個別の画面に分かれていたことにより、ユーザーが両者の関係性や階層構造を把握しづらく、操作上の迷いを生む要因となっていました。",
                },
                {
                  title: "予算作成着手までの導線の長さ",
                  text: "多数の必須項目を入力する必要があり、ユーザーが速やかに予算作成できない状況でした。",
                },
                {
                  title: "既存データを参照できない入力環境",
                  text: "ユーザーは既存のプロジェクト名・プログラム名を参照しながら新たな名称を設定することができませんでした。",
                },
              ],
            },
          },
          {
            theme: "hearing",
            eyebrow: "Research",
            label: "ヒアリングと仕様定義",
            caption:
              "UI上の課題抽出にとどまらず、実際の業務フローについてクライアントへヒアリングを実施しました。",
            pairs: {
              findingHeading: "実態",
              decisionHeading: "UI/UXへの落とし込み",
              items: [
                {
                  finding:
                    "一つのプロジェクト内に複数のプログラムが存在するとは限らず、プログラム単体で運用されるケースも多い。",
                  decision:
                    "プロジェクト作成を「必須の事前ステップ」から「任意の機能」へと変更",
                },
                {
                  finding:
                    "初期の予算策定段階では、プログラムの詳細（期間・人員など）が確定していないことが多い。",
                  decision:
                    "必須入力項目を最小化し、詳細は後から登録可能な設計に変更（※エンジニアと協議し、システム上必須となる最小データ構造を定めた上で仕様を最適化）",
                },
              ],
            },
            // summary:
            // "システムが要求するデータ構造と、ユーザーの実際の運用フロー。この2つのギャップを埋めることが、本フロー改善の起点となりました。",
          },
          {
            theme: "after",
            eyebrow: "After",
            label: "改善後",
            flowLabel: "予算作成までのユーザーフロー (プログラム作成の場合)",
            image: "/mining/creation-flow-after.svg",
            alt: "変更後のプログラム作成フロー",
            list: {
              heading: "改善内容",
              eyebrow: "Solution",
              note: "(図中の A・B・C に対応)",
              marker: "letter",
              items: [
                {
                  title: "プロジェクト作成の任意化",
                  text: "これまで必須であったプロジェクト作成を任意とし、プログラム単体での作成を可能にしました。また、プログラム作成後は直接予算作成画面へ遷移する設計としました。",
                },
                {
                  title: "モーダルによる入力体験の継続性確保",
                  text: "画面遷移に代えてモーダルUIを採用したことで、ユーザーは元の画面の文脈を保ったまま入力を完結できるようになりました。背面の一覧で既存の名称を参照しながら、新たな名称を設定することも可能です。",
                },
                {
                  title: "入力必須項目の最小化",
                  text: "モーダル内の入力必須項目をプロジェクト・プログラム名のみに絞り込み、その他の詳細情報は後から入力できる仕様としました。これにより、ユーザーが最短の操作で予算作成に着手できるようになりました。",
                },
              ],
            },
          },
        ],
        reflection: {
          headline: "前提を疑うことの大切さ",
          text: "フローが直感的でないという課題が挙がった当初は、既存の仕様を前提としたまま、UI上の問題として捉えていました。しかし、クライアントへのヒアリングを通じて仕様と実際の運用との間にズレがあることが明らかになり、仕様そのものを問い直したことで、フロー全体の簡略化へとつなげることができました。",
        },
      },
      {
        id: 2,
        title: "ユーザーの学習コストを極力抑えたUI設計",
        summary:
          "慣れ親しんだ操作性を踏襲することでユーザーの学習コストを極小化し、予算管理プロセス全体の効率化を実現しました。",
        background:
          "初期仕様では、ユーザーがシステム上でプロジェクト作成時に指定した「期間」や「採掘場所」等の条件に基づき、システム側で予算項目の自動作成と初期試算を行う仕組みとなっていました。しかし、初期プロトタイプを用いたクライアント検証を実施したところ、自動生成された画面の操作性や視認性において期待した反応が得られなかったため、UI/UXの再設計が必要でした。",
        sections: [
          {
            theme: "before",
            joinPrevious: true,
            label: "予算管理画面の特徴 (改善前)",
            layout: "row",
            image: "/mining/cost-management-before.png",
            alt: "改善前のコスト管理画面",
            mediaWidth: "md:w-2/5",
            list: {
              size: "sm",
              marker: "dot",
              items: [
                {
                  title: "予算項目およびコストの自動算出",
                  text: "作業員の食費・宿泊費など、プログラム計画に必要なカテゴリと概算コストをシステムが自動生成",
                },
                {
                  title: "提案内容の確認・編集",
                  text: "システムが提示した予算項目数や算出金額を、ユーザーが確認・修正",
                },
                {
                  title: "予算作成と実績管理の両立",
                  text: "初期の予算策定だけでなく、プロジェクト発足後の実コストの管理までを一貫して行える設計",
                },
              ],
            },
          },
          {
            theme: "hearing",
            eyebrow: "Research",
            label: "ヒアリング・既存ワークフローの分析",
            caption:
              "現場の課題を多角的に把握するため、2つの方法で調査を行いました。",
            research: [
              {
                title: "① クライアントおよび鉱山業界の業務担当者へのヒアリング",
                description:
                  "初期段階で提案した予算作成画面へのフィードバックや、現在抱えている課題をヒアリングしました。",
                itemsImage: "/mining/feedback.svg",
                items: [
                  "鉱山採掘プロジェクトではシステムでカバーしきれない現場特有の要素が多く、特に予算策定には過去の実績や熟練者の経験則が不可欠",
                  "現状はExcelで予算管理を行っているが、複雑な関数エラーや手入力によるヒューマンエラーが常態化している",
                  "業界柄、ITツールに対する苦手意識を持つユーザーが多く、学習コストの高いツールは定着しにくい可能性が高い",
                ],
              },
              {
                title: "② 画面録画分析",
                description:
                  "実際の作業状況を正しく把握するため、クライアントに普段のExcel操作の録画を依頼し、分析を行いました。以下が分析結果の一部です。",
                image: "/mining/excel.png",
                alt: "クライアントが使用しているExcelの画面",
                imageCaption: "※ 実際の画面を基に再現したイメージです",
                items: [
                  "新規予算の作成時は既存のExcelシートを再利用する運用が定着しており、それに伴う関数エラーが頻発していた",
                  "現場の稼働中は日々更新される実績データを基にレポートを作成し、依頼企業への進捗共有として頻繁に出力・提出していた",
                ],
                insightLabel: "システムに求められていること",
                insight:
                  "通常業務の自動化ではなく、使い慣れたExcelの運用を崩さずにミスを減らすこと",
              },
            ],
          },
          {
            theme: "process",
            eyebrow: "Reference",
            label: "参考UI分析",
            text: [
              "Excelの表の形式や操作感は残しつつ、手作業の煩雑さを解消する方法を探るため、テーブルUIを採用しているサービスを分析しました。",
            ],
            gallery: [
              {
                src: "/mining/reference-ui-2.png",
                alt: "参考にしたテーブルUI（Notion）",
                title: "Notion",
                points: {
                  label: "参考にした点",
                  items: [
                    {
                      title: "折りたたみ機能",
                      text: "ヒアリングでは「膨大なデータの中から、必要な情報を見やすく整理したい」という要望がありました。そこで、関連する行をまとめて開閉できる仕組みを参考にしました。",
                      highlight: {
                        top: "39.7%",
                        height: "3.7%",
                        left: "24.6%",
                      },
                    },
                  ],
                },
              },
            ],
          },
          {
            theme: "after",
            eyebrow: "After",
            label: "完成UI",
            imageLead:
              "現場で使い慣れたExcelテンプレートのレイアウトを継承することで、ユーザーの学習コストを抑えつつ、より直感的な操作性を実現しました。",
            image: "/mining/cost-management-after.svg",
            alt: "改善後のコスト管理画面",
            imageWidth: "w-full self-center",
            list: {
              heading: "改善内容",
              joinPrevious: true,
              marker: "letter",
              items: [
                {
                  title: "学習コストの最小化",
                  text: "「新しいITツールへの苦手意識」という現場の課題を解消するため、既存の操作習慣を活かす「ヤコブの法則」を適用しました。セルの直接編集やUndo/Redo、コメント、フィルタリング、ファイル出力（Export）など、使い慣れたExcelと同等の操作感を実現しています。",
                },
                {
                  title: "レポート機能のタブ化による一画面集約",
                  text: "ユーザーの行動観察によって、実績管理の過程でレポート作成・出力を頻繁に行う実態が判明したため、別画面にあったレポート機能を画面上部のタブに統合しました。データの入力からレポートの自動生成・確認・出力までが一画面で完結するようUIを再設計しました。",
                },
                {
                  title: "残り枠（日数・予算）の視覚化",
                  text: "クライアントとの対話を通じて、プロジェクト稼働後に「プログラムの残日数」や「予算残存日数」を即座に把握したいという潜在ニーズを発見しました。これに応えるため、各残日数を示す指標を視認性の高い画面右上に配置し、算出根拠を確認できるツールチップを併設することでシステムの透明性と信頼性を高めるようにしました。",
                },
              ],
            },
          },
          {
            theme: "process",
            eyebrow: "Constraint",
            label: "技術的制約を考慮したUX設計",
            constraint: {
              problem: {
                heading: "課題（技術的制約）",
                text: "バックエンドの仕様上、テーブル内の必須項目が未入力のまま離脱すると行全体のデータが保存されず、ユーザーが気づかないうちにデータが消失するリスクがありました。",
              },
              solution: {
                heading: "解決策",
                image: "/mining/error.svg",
                alt: "エラーバナーと必須セルの強調表示",
                items: [
                  {
                    title: "未入力リスクの可視化",
                    text: "入力必須セルの視認性を高め、入力漏れを防ぐデザインを意識しました。",
                  },
                  {
                    title: "エラー特定の手間を解消するエラーナビゲーション",
                    text: "画面上部にエラーバナーを設置し、エラー内容の表示に加え、該当セルへ即座に移動できるボタンを配置。ユーザーがエラー箇所を探す手間やストレスを解消しました。",
                  },
                  {
                    title: "視覚的ノイズを抑えたエラー表示",
                    text: "情報密度の高い画面における視覚的ノイズを抑えるため、エラーの詳細は該当セルへのホバー時にのみツールチップ等で表示する設計を採用しました。",
                  },
                ],
              },
            },
          },
        ],
        reflection: {
          headline: "ヒアリングの先にある「当事者意識」の重要性",
          text: "クライアントから「まさにこういうツールが欲しかった」と評価をいただいた経験を通じ、本質的な解決策を導くためには、表面的なヒアリングにとどまらず、既存の業務に対する深い解像度を持つことが不可欠だと実感しました。",
        },
      },
      {
        id: 3,
        title: "試算機能の追加",
        summary:
          "既存の画面構成や操作感を維持したまま、新機能を組み込みました。",
        background:
          "開発の後半でクライアントから予算試算機能の追加要望を受けました。主要なUI構造が既に固まっていたため、既存のコンポーネントルールや操作の一貫性を維持しながら、ユーザーが違和感なく使えるよう新機能を自然に組み込みました。",
        sections: [
          {
            theme: "hearing",
            eyebrow: "Research",
            label: "ヒアリング",
            caption:
              "クライアントへのヒアリングを通じて、以下の課題およびニーズが浮き彫りとなりました。",
            list: {
              marker: "dot",
              itemsImage: "/mining/feedback_2.svg",
              items: [
                {
                  text: "現状は別のExcelファイルで試算を行っており、作成・転記の手間が発生している",
                },
                { text: "試算を行う頻度が高く、業務における重要度が高い" },
                {
                  text: "作成した試算データをそのまま本番予算へ反映する場合がある",
                },
              ],
            },
          },
          {
            theme: "process",
            eyebrow: "User Flow",
            label: "ユーザーフローの作成",
            layout: "row",
            image: "/mining/user-story.png",
            alt: "ユーザーフローの画像",
            text: [
              "試算データの保存・破棄・本番反映などの分岐パターンをユーザーフローで可視化し、チーム内の認識共有とスコープ定義を行いました。",
              "エンジニアとの協議により、他機能への影響を抑えつつ開発規模を最小化できることが確認できたため、試算機能を独立させず予算管理画面へ統合する方針へと決定しました。",
            ],
          },
          {
            theme: "after",
            eyebrow: "After",
            label: "完成UI",
            flowLabel:
              "想定シナリオ： ユーザーが新規試算を行い、試算結果を保存する。",
            image: "/mining/draft-mode.svg",
            alt: "ドラフトモードUIの画像",
            list: {
              marker: "letter",
              items: [
                {
                  text: "頻繁に行われるシミュレーション業務に対応するため、『Budget versions』ドロップダウンを配置。新規試算の作成から過去バージョンの参照、本番予算への反映までを完結可能にしました。",
                },
                {
                  text: "新規試算作成時は、適用中の予算データを初期値として自動継承するようにしました。",
                },
                {
                  text: "試算モードであることを直感的に識別できるよう、画面全体のカラーテーマを最適化しました。",
                },
                {
                  text: "試算時には、適用中の予算との合計差分を常時表示し、画面遷移なしで即座に数値比較できる仕様にしました。",
                },
                {
                  text: "試算データの保存時には任意の名前を付けられる仕様にし、未入力の場合はシステム側で自動生成する仕組みにしました。さらに、保存と同時に本番データとして反映できるチェックボックスを設け、一連の操作をスムーズに完了できる動線を構築しました。",
                },
              ],
            },
          },
        ],
        reflection: {
          headline: "既存UIとの一貫性を損なわない、自然な機能統合",
          text: "UI構造が確定した段階での機能追加だったため、ユーザーフローで操作パターンを先に可視化し、既存コンポーネントの組み合わせで表現できる範囲を見極めました。新しいUIを増やすよりも一貫性を保つことが、ユーザーの迷いにくさにつながると実感しました。",
        },
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
    learnings: "結果・振り返り",
    learningsText: [
      "本リリース直前までの参画でしたが、当初の目標であった「リリース可能な品質・状態への引き上げ」を達成しました。",
      "一人デザイナーかつ非ネイティブという制約下で、早期からチームを巻き込むアプローチを徹底しました。未完成な段階で積極的にフィードバックを得ることで、手戻りを最小限に抑えスピーディーに成果へ繋げました。",
      "クライアント自身も自覚していない潜在的課題を発見することの難しさと、そのための徹底した業務理解の重要性を痛感しました。単に要望を受け取るだけでなく、自ら仮説を持って対話し、本質的な課題へアプローチする姿勢を今後も意識したいと思います。",
    ],
    futureOutlook: "今後の展望",
    futureOutlookText:
      "デザインレビューにおいて、意図や根拠をチーム全体へ説得しきれない場面を経験しました。今後はビジュアルやUXの表現力を高めるだけでなく、「なぜこのデザインなのか」を論理的・構造的に説明する言語化能力を磨き、より強力にプロジェクトをリードできるデザイナーを目指したいです。",
    home: "Home",
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
      {
        title: "Team Structure",
        value: "5 Engineers, 1 PdM, 2 Operations, 1 Designer (Myself)",
      },
      { title: "Tools Used", value: "Figma, ChatGPT, Alloy" },
    ],
    title: "Program Management Tool (for the Mining Industry)",
    thumbnail: "/mining/thumbnail.png",
    ProductOverview: "Product Overview",
    ProductOverviewText:
      "A program management platform for program managers in Canada's mining industry. At sites where multiple mining programs run simultaneously, it brings budget planning, actuals tracking, and reporting, which tend to become complex, into one place to streamline operations.",
    ProductOverviewApproach:
      "Considering that the industry tends to be slow to adopt IT tools, I pursued a UI/UX design that fits into existing workflows, so that even users unfamiliar with digital devices can operate it intuitively.",
    productOverviewImage: "/mining/program_overview.svg",
    productOverviewImageCaption: "Selected designs (excerpt)",
    industryTitle: "What Is the Mining Industry?",
    industryFlowImage: "/mining/industory_flow.svg",
    clientTitle: "The Client's Position",
    clientText:
      "A program management platform for program managers in Canada's mining industry. At sites where multiple mining programs run simultaneously, it brings budget planning, actuals tracking, and reporting, which tend to become complex, into one place to streamline operations.",
    clientFlowImage: "/mining/client_flow.svg",
    challengesTitle: "Client Challenges and What the System Solves",
    challengesText: (
      <>
        The user problems this system solves are the{" "}
        <span className="font-bold">
          inefficiency, person-dependence, and human error
        </span>{" "}
        of Excel-based budgeting work.
      </>
    ),
    challengesHeaders: ["Challenge", "Before", "Solved by the System"],
    challenges: [
      {
        issue: "Inefficiency",
        before:
          "Reports for requesting companies built from scratch every time",
        solution: "Automated aggregation and report generation",
      },
      {
        issue: "Person-dependence",
        before: "Each person creates and manages budgets differently",
        solution: "Unified input format and workflow",
      },
      {
        issue: "Human error",
        before: "Reuse and copy-paste make input mistakes routine",
        solution: "Templates and input validation",
      },
    ],
    backgroundTitle: "Project Background and Challenges",
    backgroundText:
      "When I joined, design and implementation were already underway, but the project faced the challenges below. I came on board as a UI/UX Designer to turn that situation around.",
    backgroundIssues: [
      { title: "Inconsistent user flows", detail: "Specifically, ..." },
      { title: "A fundamental rethink of the UX", detail: "Specifically, ..." },
    ],
    roleTitle: "My Role & Mission",
    roleText:
      "To turn this situation around, I joined the project as a UI/UX Designer and led the effort to raise the product to release quality by optimizing the information architecture and introducing a design system.",
    productFlowTitle: "My Role and Design Process",
    productFlowText:
      "The team consisted of 5 engineers, 1 PdM, 2 operations staff, and 1 designer (myself).\nIn an agile setup where every member was involved from user interviews through release, I led everything from feature definition to UI/UX design while also supporting the stages before and after.",
    productFlowImage: "/mining/product-flow.svg",
    improvementsTitle: "Improvement Case Studies",
    improvementsText:
      "Due to a non-disclosure agreement (NDA), I'm unable to show all deliverables and design screens, but here are three UI/UX improvements I focused on most during my time on the project.",
    caseLabels: {
      background: "Background",
      backgroundEyebrow: "Background",
      reflection: "Reflection",
      reflectionEyebrow: "Reflection",
    },
    improvements: [
      {
        id: 1,
        title: "Simplifying the Program Creation Flow",
        summary:
          "Eliminated unnecessary page transitions to create an input experience that gets users to budget creation as quickly as possible.",
        background: [
          "The preliminary flow (creating a project, then a program) leading to the Budget Creation screen, the most frequently used feature, lacked intuitiveness, causing drop-offs and confusion during operation.",
        ],
        backgroundFigure: {
          caption:
            "In the data structure, multiple child programs were linked to a single parent project, and each budget was linked to those programs. As a result, creating a new budget required users to first create a project and then a program, in that order.",
          image: "/mining/diagram.svg",
          imageCaption: "Data structure",
          alt: "Diagram of the project and program structure",
        },
        sections: [
          {
            theme: "before",
            label: "Before",
            flowLabel: "User flow from project creation to budget creation",
            image: "/mining/creation-flow-before.svg",
            alt: "Program creation flow before the change",
            list: {
              heading: "Challenges",
              eyebrow: "Issues",
              note: "(Corresponds to A, B, C in the figure)",
              marker: "letter",
              items: [
                {
                  title: "Fragmented screens obscured the structure",
                  text: "Because project creation and program creation lived on separate screens, users struggled to grasp the relationship and hierarchy between the two, which led to hesitation during operation.",
                },
                {
                  title: "A long path to start budgeting",
                  text: "Users had to fill in many required fields, which kept them from creating a budget quickly.",
                },
                {
                  title: "No way to reference existing data",
                  text: "Users couldn't refer to existing project or program names while setting a new name.",
                },
              ],
            },
          },
          {
            theme: "hearing",
            eyebrow: "Research",
            label: "Interviews & Specification",
            caption:
              "Going beyond identifying UI issues, I interviewed the client about their actual workflows.",
            pairs: {
              findingHeading: "User behavior & workflow challenges",
              decisionHeading: "How it shaped the UI/UX",
              items: [
                {
                  finding:
                    "A project doesn't always contain multiple programs; in many cases, a program is run on its own.",
                  decision:
                    'Changed project creation from "a required preliminary step" to "an optional feature."',
                },
                {
                  finding:
                    "In the early budget planning stage, program details (duration, staffing, etc.) are often not yet decided.",
                  decision:
                    "Minimized the required fields to the name only and allowed details to be added later (*after discussing with engineers to define the minimum data structure the system required, then optimizing the specification).",
                },
              ],
            },
          },
          {
            theme: "after",
            eyebrow: "After",
            label: "After",
            flowLabel: "User flow to budget creation (when creating a program)",
            image: "/mining/creation-flow-after.svg",
            alt: "Program creation flow after the change",
            list: {
              heading: "Improvements",
              eyebrow: "Solution",
              note: "(Corresponds to A, B, C in the figure)",
              marker: "letter",
              items: [
                {
                  title: "Making project creation optional",
                  text: "Made the previously required project creation optional, enabling users to create a standalone program. After a program is created, users are taken directly to the Budget Creation screen.",
                },
                {
                  title: "Keeping context with a modal",
                  text: "By replacing page transitions with a modal UI, users can complete their input without losing the context of the original screen. They can also set a new name while referring to existing names in the list behind the modal.",
                },
                {
                  title: "Minimizing required fields",
                  text: "Narrowed the required fields in the modal down to the project or program name only, allowing other details to be entered later. This lets users start creating a budget with the fewest possible steps.",
                },
              ],
            },
          },
        ],
        reflection: {
          headline: "The importance of questioning assumptions",
          text: "When the issue of an unintuitive flow first came up, I treated it as a UI problem while taking the existing specification for granted. Through interviews with the client, however, it became clear that there was a gap between the specification and how the tool was actually used. Questioning the specification itself allowed us to simplify the entire flow.",
        },
      },
      {
        id: 2,
        title: "UI Design That Minimizes the Learning Curve",
        summary:
          "By retaining familiar interaction patterns, we minimized the learning curve for users and streamlined the entire budget management process.",
        background:
          'In the initial specification at the time I joined, the system automatically generated budget items and initial estimates on the Budget Creation screen, based on conditions such as "duration" and "mining location" that users specified when creating a project. However, when we validated an early prototype with the client, the auto-generated screen did not get the response we expected in terms of usability and readability, revealing a gap with how the work was actually done. This led us to redesign the UI/UX.',
        sections: [
          {
            theme: "before",
            joinPrevious: true,
            label: "Key Features of the Budget Creation Screen",
            layout: "row",
            image: "/mining/cost-management-before.png",
            alt: "Cost management screen before the change",
            mediaWidth: "md:w-2/5",
            list: {
              size: "sm",
              marker: "dot",
              items: [
                {
                  title: "Automatic generation of budget items and costs",
                  text: "The system automatically generated the categories and estimated costs needed for program planning, such as workers' meals and accommodation.",
                },
                {
                  title: "Review and edit suggestions",
                  text: "Users reviewed and adjusted the number of budget items and amounts suggested by the system.",
                },
                {
                  title: "Budget creation and cost tracking in one place",
                  text: "Designed to cover not only initial budget planning but also tracking and managing actual costs after the project launched.",
                },
              ],
            },
            footnote:
              '(*In the actual screen, a tab menu at the top let users switch between "Budget Creation" and "Budget Tracking.")',
          },
          {
            theme: "hearing",
            eyebrow: "Research",
            label: "Interviews & Workflow Analysis",
            caption:
              "To understand the on-site challenges from multiple angles, I conducted research in two ways.",
            research: [
              {
                title:
                  "① Interviews with the client and mining industry practitioners",
                description:
                  "I gathered feedback on the Budget Creation screen proposed in the early stage and asked about the challenges they currently face. Below are some of the interview findings.",
                items: [
                  "Mining projects involve many site-specific factors that a system can't fully cover. Budget planning in particular relies heavily on past results and the experience of veteran staff.",
                  "Budgets are currently managed in Excel, but errors from complex formulas and manual input are a constant problem.",
                  "Given the nature of the industry, many users aren't comfortable with IT tools, so a tool with a steep learning curve is unlikely to stick.",
                ],
              },
              {
                title: "② Screen Recording Analysis",
                description:
                  "To accurately understand how the work was actually done, I analyzed screen recordings of their everyday Excel operations, looking for latent issues and habits that are hard to see through interviews alone. \n Below are some of the findings.",
                image: "/mining/excel.png",
                alt: "The client's Excel spreadsheet",
                imageCaption:
                  "* A recreation of the actual screen using dummy data.",
                items: [
                  "Reusing existing Excel sheets to create new budgets was common practice, which frequently caused formula and function errors.",
                  "Budget data was frequently exported as reports (PDF, Excel, etc.) to share progress.",
                ],
                insightLabel: "What the system needed to deliver",
                insight:
                  "Not automation of their daily work, but a way to reduce mistakes without disrupting their familiar Excel workflow.",
              },
            ],
          },
          {
            theme: "process",
            eyebrow: "Reference",
            label: "Reference UI Research",
            text: [
              'To "reduce mistakes without disrupting the familiar Excel workflow," I analyzed services that use table UIs.',
              "I explored how to keep the shape of an Excel sheet while supporting the parts that had been manual work in Excel.",
            ],
            gallery: [
              {
                src: "/mining/reference-ui-2.png",
                alt: "Reference table UI (Notion)",
                title: "Notion",
                points: {
                  label: "What I referenced",
                  items: [
                    {
                      title: "Groups of rows can be expanded and collapsed",
                      text: "Related rows are grouped into one and toggled open or closed with ▶.",
                      // Position of the highlighted row, as % of the image.
                      highlight: {
                        top: "39.7%",
                        height: "3.7%",
                        left: "24.6%",
                      },
                    },
                  ],
                },
              },
            ],
          },
          {
            theme: "after",
            eyebrow: "After",
            label: "Final UI",
            imageLead:
              "Below is the final UI. By carrying over the layout of the Excel templates users were already familiar with on site, I kept the learning curve low while making operation more intuitive.",
            image: "/mining/cost-management-after.svg",
            alt: "Cost management screen after the change",
            imageWidth: "w-full self-center",
            list: {
              heading: "Improvements",
              joinPrevious: true,
              marker: "letter",
              items: [
                {
                  title: "Minimizing the learning curve",
                  text: "Supports direct cell editing, Undo/Redo, comments, filtering, and file export, providing the same familiar feel as Excel.",
                },
                {
                  title: "Two-area layout for data entry",
                  text: 'Placed basic information such as "Category" and "Amount" on the left side of the table and consolidated "daily quantity" inputs in the right area. The basic information area can be collapsed, making large-volume data entry more efficient.',
                },
                {
                  title: "Always-visible action icons",
                  text: 'Rather than a minimal, hover-based table UI like Notion or Jira, I designed the icons for actions such as edit and delete to be always visible to suit the target users, prioritizing "intuitive, hard-to-get-lost operation" over "visual simplicity."',
                },
                {
                  title: "Reports in a tab on the same screen",
                  text: "Moved the reporting feature, which had been on a separate screen, into a tab at the top of the screen so users can review information and work with data on a single screen.",
                },
                {
                  title: "Days remaining and budget runway at a glance",
                  text: 'Through conversations with the client, I uncovered a latent need to see "Days Remaining" in the program and "Budget Runway" at a glance, and placed them in the upper right of the screen. I also added tooltips showing the basis of each calculation to make the system more transparent and support users\' decision-making.',
                },
              ],
            },
          },
          {
            theme: "process",
            eyebrow: "Constraint",
            label: "UX designed around technical constraints",
            constraint: {
              problem: {
                heading: "Problem (technical constraint)",
                text: "Due to the backend specification, if a user left a row with required fields still empty, the entire row would not be saved, risking data loss without the user noticing.",
              },
              solution: {
                heading: "Solution",
                image: "/mining/error.svg",
                alt: "Error banner and highlighted required cells",
                items: [
                  {
                    title: "Making missing-input risk visible",
                    text: "I made required cells more visible, with a design focused on preventing missing input.",
                  },
                  {
                    title:
                      "Error navigation that saves users from hunting for errors",
                    text: "I placed an error banner at the top of the screen that shows the error details along with a button that jumps straight to the affected cell, removing the effort and stress of searching for where the error is.",
                  },
                  {
                    title: "Error display with minimal visual noise",
                    text: "To reduce visual noise on an information-dense screen, error details appear in a tooltip only when users hover over the affected cell.",
                  },
                ],
              },
            },
          },
        ],
        reflection: {
          headline: 'The importance of "ownership" beyond interviews',
          text: "Receiving feedback from the client that \"this is exactly what we wanted\" made me realize that arriving at a truly effective solution requires more than surface-level interviews: it's essential to develop a deep, high-resolution understanding of the users' work and context.",
        },
      },
      {
        id: 3,
        title: "Adding a Budget Simulation Feature",
        summary:
          "Integrated a new feature while preserving the existing screen structure and interaction patterns.",
        background:
          "Based on a request from the client, we decided to add a budget simulation feature.\nSince the main UI structure had already been finalized, I focused on designing the feature to blend in naturally without breaking the consistency of existing UI components and layouts.",
        sections: [
          {
            theme: "hearing",
            eyebrow: "Research",
            label: "Interviews",
            caption:
              "Interviews with the client brought the following challenges and needs to light.",
            list: {
              marker: "dot",
              items: [
                {
                  text: "Simulations were currently done in separate Excel files, which required extra effort to create and transfer data.",
                },
                {
                  text: "Simulations were run frequently and played an important role in their work.",
                },
                {
                  text: "In some cases, simulation data was applied directly to the actual budget.",
                },
              ],
            },
          },
          {
            theme: "process",
            eyebrow: "User Flow",
            label: "Creating a User Flow",
            layout: "row",
            image: "/mining/user-story.png",
            alt: "Image of the user flow",
            text: [
              "Created a user flow to visualize the branching patterns for simulation data (save, discard, and apply to the actual budget), which helped the team build a shared understanding and define the scope smoothly.",
              "As a result, we confirmed that the development effort could be kept small with little impact on other features, so we decided to integrate the simulation feature into the budget management screen.",
            ],
          },
          {
            theme: "after",
            eyebrow: "After",
            label: "Final UI",
            flowLabel:
              "Scenario: The user creates a new simulation and saves the result.",
            image: "/mining/draft-mode.svg",
            alt: "Image of the draft mode UI",
            list: {
              marker: "letter",
              items: [
                {
                  text: 'To support frequent simulation work, I added a "Budget versions" dropdown that lets users create new simulations, view past versions, and apply them to the actual budget, all in one place.',
                },
                {
                  text: "When a new simulation is created, it automatically inherits the currently applied budget data as its starting values.",
                },
                {
                  text: "Optimized the color theme of the entire screen so users can intuitively recognize when they are in simulation mode.",
                },
                {
                  text: "During a simulation, the total difference from the currently applied budget is always displayed, enabling instant comparison without leaving the screen.",
                },
                {
                  text: "When saving a simulation, users can give it any name they like; if left blank, the system generates one automatically. I also added a checkbox to apply the simulation to the actual budget at the same time as saving, creating a flow that lets users complete the whole process smoothly.",
                },
              ],
            },
          },
        ],
        reflection: {
          headline:
            "Blending a new feature in naturally while keeping consistency",
          text: "Because the feature was added after the UI structure was finalized, I visualized the interaction patterns in a user flow first and identified what could be expressed by combining existing components. I realized that keeping consistency, rather than adding new UI, makes the product easier for users to navigate.",
        },
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
      'In client reviews, even when we had reached agreement on static prototypes, gaps often emerged between expectations and the actual feel after implementation. To address this, I introduced the AI tool "Alloy" before development began, creating and sharing prototypes that the client could interact with directly. Compared to before, this helped prevent rework caused by misaligned expectations after implementation.',
    ],
    learnings: "Results & Reflection",
    learningsText: [
      "Although my involvement wrapped up just prior to the official launch, I successfully achieved the primary goal of elevating the product to a release-ready standard.",
      "Working under the constraints of being the sole designer in an environment where I wasn't a native speaker, I made a point of involving the team from an early stage. By actively seeking feedback while work was still unfinished, I kept rework to a minimum and delivered results quickly.",
      "I learned firsthand how difficult it is to uncover latent issues the client themselves aren't aware of, and how important a thorough understanding of their business is for doing so. Going forward, I want to keep not just accepting requests as given, but engaging in dialogue with my own hypotheses to get to the root of the problem.",
    ],
    futureOutlook: "Future Outlook",
    futureOutlookText:
      'In design reviews, there were times when I couldn\'t fully convince the whole team of my intent and reasoning. Going forward, I want to not only improve my visual and UX skills but also sharpen my ability to explain "why this design" logically and structurally, so that I can become a designer who leads projects more effectively.',
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
    1: true,
    2: true,
    3: true,
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
          className="group block w-fit hover:opacity-80 pt-16 md:pt-0 px-6 md:px-12 lg:px-24 xl:px-[154px]"
        >
          <div className="flex items-center">
            <span className="flex items-center justify-center w-14 h-10">
              <ArrowLeftIcon className="w-14 text-[#1C1619] transition-colors group-hover:text-primary group-focus-visible:text-primary" />
            </span>
            <p className="font-normal tracking-widest transition-colors group-hover:text-primary group-focus-visible:text-primary">
              {t.home}
            </p>
          </div>
        </Link>
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 px-6 md:px-12 lg:px-24 xl:px-40 md:pt-12">
          <div className="md:w-1/2 flex-1 mb-4 md:mb-20 h-[300px] self-center">
            <ZoomableImage
              src={localizeImage(t.thumbnail)}
              alt="Mining Project Thumbnail"
              className="w-full h-full object-contain "
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
        <div className="flex flex-col gap-[140px] pt-0 md:pt-24 pb-16">
          {/* ProductOverview Section */}
          <div className="flex flex-col gap-12 px-6 md:px-12 lg:px-24 xl:px-40">
            <h2 className="-mb-4 flex items-center gap-2 text-2xl md:text-[26px] font-semibold text-[#3B2707]">
              <SectionMark />
              {t.industryTitle}
            </h2>
            <p className="text-base leading-loose">{t.ProductOverviewText}</p>
            <IndustryFlowImage
              src={t.industryFlowImage}
              alt={t.industryTitle}
            />
          </div>
          {/* Client Position Section */}
          <div className="flex flex-col gap-12 px-6 md:px-12 lg:px-24 xl:px-40">
            <h2 className="-mb-4 flex items-center gap-2 text-2xl md:text-[26px] font-semibold text-[#3B2707]">
              <SectionMark />
              {t.clientTitle}
            </h2>
            <p className="text-base leading-loose">{t.clientText}</p>
            <ZoomableImage
              src={t.clientFlowImage}
              alt={t.clientTitle}
              className="w-full object-contain"
            />
          </div>
          {/* Client Challenges Section */}
          <div className="flex flex-col gap-12 px-6 md:px-12 lg:px-24 xl:px-40">
            <h2 className="-mb-4 flex items-center gap-2 text-2xl md:text-[26px] font-semibold text-[#3B2707]">
              <SectionMark />
              {t.challengesTitle}
            </h2>
            <p className="text-base leading-loose">{t.challengesText}</p>
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[720px] table-fixed border-collapse text-left">
                <colgroup>
                  <col className="w-1/4" />
                  <col className="w-[37.5%]" />
                  <col className="w-[37.5%]" />
                </colgroup>
                <thead>
                  <tr className="h-[40px] border-b border-[#bdbdbd]">
                    {t.challengesHeaders.map((header, i) => (
                      <th key={header} scope="col" className="pb-1 ">
                        <span
                          className={`items-center justify-center px-3 py-1 rounded-full border text-xs font-bold text-white whitespace-nowrap ${
                            i < 2 ? "bg-[#7e8284] " : "bg-[#005989]"
                          }`}
                        >
                          {header}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.challenges.map((row, i) => (
                    <tr
                      key={row.issue}
                      className={`h-[70px] ${
                        i < t.challenges.length - 1
                          ? "border-b border-dashed border-[#bab9b9]"
                          : ""
                      }`}
                    >
                      <th scope="row" className="pr-4 font-bold text-sm">
                        {row.issue}
                      </th>
                      <td className="pr-4 text-sm ">{row.before}</td>
                      <td className=" font-semibold text-sm">{row.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Project Background Section */}
          <div className="flex flex-col gap-12 px-6 md:px-12 lg:px-24 xl:px-40">
            <h2 className="-mb-4 flex items-center gap-2 text-2xl md:text-[26px] font-semibold text-[#3B2707]">
              <SectionMark />
              {t.backgroundTitle}
            </h2>
            <div className="text-base leading-relaxed">
              <p>{t.backgroundText}</p>
              <p>{t.roleText}</p>
            </div>
            <ul className="flex flex-col gap-12">
              {t.backgroundIssues.map((issue, index) => (
                <li key={issue.title} className="">
                  <p className="flex items-center gap-2 font-bold  text-lg">
                    <span className="shrink-0 text-primary">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    {issue.title}
                  </p>
                  <div className="flex items-center gap-2 pl-8 pt-2">
                    {/* <CornerDownRight
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="size-5 shrink-0"
                    /> */}
                    <p className="font-medium leading-relaxed">
                      {issue.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Product Development Flow Section */}
          <div className="flex flex-col gap-12 px-6 md:px-12 lg:px-24 xl:px-40">
            <h2 className="-mb-4 flex items-center gap-2 text-2xl md:text-[26px] font-semibold ">
              <SectionMark />
              {t.productFlowTitle}
            </h2>
            <div className="flex flex-col gap-12">
              <p className="text-base leading-loose  whitespace-pre-line">
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
          <div className="flex flex-col gap-12 px-6 md:px-12 lg:px-24 xl:px-40">
            <h2 className="-mb-4 flex items-center gap-2 text-2xl md:text-3xl font-semibold">
              <SectionMark />
              {t.improvementsTitle}
            </h2>
            <p className="-mb-4 text-base leading-loose">
              {t.improvementsText}
            </p>
            <div className="space-y-4 w-full">
              {/* id: 1 は一時的に非表示 */}
              {t.improvements
                .filter((improvement) => improvement.id !== 1)
                .map((improvement) => (
                  <Accordion
                    key={improvement.id}
                    title={improvement.title}
                    summary={improvement.summary}
                    isOpen={openSections[improvement.id]}
                    onToggle={() => toggleSection(improvement.id)}
                  >
                    <CaseStudy
                      labels={t.caseLabels}
                      background={improvement.background}
                      backgroundFigure={improvement.backgroundFigure}
                      sections={improvement.sections}
                      reflection={improvement.reflection}
                    />
                  </Accordion>
                ))}
            </div>
          </div>

          {/* AI Usage Section */}
          <div className="flex flex-col gap-12 px-6 md:px-12 lg:px-24 xl:px-40">
            <h2 className="-mb-4 flex items-center gap-2 text-2xl md:text-[26px] font-semibold">
              <SectionMark />
              {t.aiUsageTitle}
            </h2>
            <div className="flex flex-col md:flex-row gap-10 md:gap-16">
              <ul className="md:w-1/3 grid grid-cols-4 content-end gap-9 gap-y-6">
                {aiUsageSkills.map((skill) => (
                  <SkillItem
                    key={skill.label}
                    icon={skill.icon}
                    label={skill.label}
                    size={skill.size}
                    cover={skill.cover}
                  />
                ))}
              </ul>
              <ul className="md:w-2/3 flex flex-col gap-6 list-disc pl-5">
                {t.aiUsageSubTitle.map((subTitle, index) => (
                  <li key={subTitle} className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#3B2707]">
                      {subTitle}
                    </h3>
                    <p className="text-base leading-loose">
                      {t.aiUsageText[index]}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Learnings Section */}
          <div className="flex flex-col gap-12 px-6 md:px-12 lg:px-24 xl:px-40">
            <h2 className="-mb-4 flex items-center gap-2 text-2xl md:text-[26px] font-semibold text-[#3B2707]">
              <SectionMark />
              {t.learnings}
            </h2>
            {/* <p className="text-base leading-loose">{t.learningsText}</p> */}

            <ul className="flex flex-col gap-6 list-disc pl-5">
              {t.learningsText.map((text, index) => (
                <li key={index} className="space-y-2">
                  <p className="text-base leading-loose">{text}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* Future Outlook Section */}
          <div className="flex flex-col gap-12 px-6 md:px-12 lg:px-24 xl:px-40">
            <h2 className="-mb-4 flex items-center gap-2 text-2xl md:text-[26px] font-semibold text-[#3B2707]">
              <SectionMark />
              {t.futureOutlook}
            </h2>
            <p className="text-base leading-loose">{t.futureOutlookText}</p>
            <Link to="/" className="group hover:opacity-80 pt-20">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-14 h-10">
                  <ArrowLeftIcon className="w-14 text-[#1C1619] transition-colors group-hover:text-primary group-focus-visible:text-primary" />
                </span>
                <p className="font-normal tracking-widest transition-colors group-hover:text-primary group-focus-visible:text-primary">
                  {t.home}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </FadeInPageWrapper>
  );
};

export default MiningProject;
