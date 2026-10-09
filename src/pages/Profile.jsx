import { useEffect } from "react";
import Contact from "../components/Contact";
import FadeInPageWrapper from "../components/FadeInPageWrapper";
import SectionTitle from "../components/SectionTitle";
import SkillItem from "../components/SkillItem";
import { useLanguage } from "../context/LanguageContext";
import skillData from "../data/skillData";

const content = {
  ja: {
    bio: "エンジニア経験を経て「継続的に愛されるプロダクトには優れたUI/UXが不可欠」と実感し、UI/UXデザイナーへ転向しました。\n直近ではカナダのスタートアップに参画し、英語環境かつ唯一のデザイナーという挑戦的な環境の中でユーザーの課題発見から機能定義、UI作成まで一元的に主導し、自走力を磨きました。",
    experiences: [
      {
        title: "Clause Technology Inc.",
        date: "2025年11月 - 2026年6月",
        position: "UI/UXデザイナー",
        place: "カナダ",
        description:
          "新規自社プロダクトのMVP開発に参画したほか、複数プロジェクトのUI改善を担当しました。また、社内グッズ（Tシャツ、バナーなど）や社外向け資料のデザイン、自社Webサイトの構成案・ワイヤーフレームの作成など、幅広い領域に携わりました。",
      },
      {
        title: "株式会社 Fill",
        date: "2025年8月 - 2025年12月",
        position: "Webデザイナー",
        place: "東京 (リモート)",
        description:
          "自社の公式サイトのリニューアルを担当し、一貫したブランドイメージと使いやすい体験の実現に取り組みました。また、社内外でのブランドイメージ向上のため、名刺や外部向け資料の制作も行いました。",
      },
      {
        title: "株式会社 プライムスタイル",
        date: "2025年8月 - 2025年10月",
        position: "UI/UXデザイナー",
        place: "東京 (リモート)",
        description:
          "新規サービスのユーザーストーリーとユーザーフローを作成し、ユーザーニーズを明確化しました。ワイヤーフレームの作成やUIデザインの検討を通じて一貫性のある使いやすいインターフェースを目指し、海外メンバーを含むチームと円滑に連携しながらデザインの意思決定を進めました。",
      },
      {
        title: "株式会社 ARS",
        date: "2021年 - 2024年",
        position: "エンジニア、カスタマーサポート",
        place: "鹿児島",
        description:
          "自社サービスであるPOSシステムや患者動線管理システムの導入・開発・保守業務に携わりました。導入や保守対応の際にはお客様とのコミュニケーションを通じてニーズを正確に把握し、できる限り迅速な対応を心がけました。お客様ごとに異なる仕様や運用に対応する中で、柔軟に要望へ応える力を養いました。",
      },
    ],
    education: [
      {
        title: "Cornerstone International Community College of Canada",
        date: "2024年 - 2025年",
        position: "Web開発専攻",
        place: "カナダ",
        description:
          "Web開発の基礎からNext.jsなどのモダンな技術を用いたアプリ開発までを体系的に学びました。授業外ではWordPress（Elementor）を用いたクライアントワークや、絵画オークションサービスのデザインをボランティアとして担当しました。",
      },
      {
        title: "鹿児島大学",
        date: "2016年 - 2021年",
        position: "法文学部 経済情報学科",
        place: "鹿児島県",
      },
    ],
  },
  en: {
    bio: "With a background in software engineering, I realized that exceptional UI/UX is essential for building products that users truly love, which motivated my transition to UI/UX design.\n\n Most recently, I served as the sole designer at a Canadian startup. Working in an English-speaking environment, I independently led the process from user research and feature definition to UI design, honing my ability to take ownership and drive projects forward.",
    experiences: [
      {
        title: "Clause Technology Inc.",
        date: "Nov 2025 - Jun 2026",
        position: "UI/UX Designer",
        place: "Canada",
        description:
          "Participated in the MVP development of a new in-house product and was responsible for UI improvements across multiple projects. I also worked across a wide range of areas, including designing company merchandise (T-shirts, banners, etc.) and external materials, and creating the site structure and wireframes for the company website.",
      },
      {
        title: "Fill Inc.",
        date: "Aug 2025 - Dec 2025",
        position: "Web Designer",
        place: "Tokyo (Remote)",
        description:
          "Responsible for the redesign of the company's official website, ensuring a consistent brand image and a user-friendly experience, while also creating business cards and external materials to enhance the company's brand impression both internally and externally.",
      },
      {
        title: "Prime Style Inc.",
        date: "Aug 2025 - Oct 2025",
        position: "UI/UX Designer",
        place: "Tokyo (Remote)",
        description:
          "Developed user stories and user flows for a new service to clarify user needs, created wireframes and collaborated on UI design to ensure a consistent and user-friendly interface, and collaborated effectively with an international team to facilitate smooth discussions and align design decisions.",
      },
      {
        title: "ARS Inc.",
        date: "2021 - 2024",
        position: "Engineer, Customer Support",
        place: "Kagoshima",
        description:
          "I was involved in the implementation, development, and maintenance of the company's proprietary POS systems and patient flow management systems. During system implementation and maintenance, I focused on accurately understanding customer needs through communication and responding as quickly as possible. Working with various specifications and operational needs for each client, I cultivated the ability to flexibly adapt to diverse requests.",
      },
    ],
    education: [
      {
        title: "Cornerstone International Community College of Canada",
        date: "2024 - 2025",
        position: "Web Development",
        place: "Canada",
        description:
          "I systematically learned everything from the basics of web development to application development using modern technologies like Next.js. Outside of class, I took on client work using WordPress (Elementor) and volunteered as a designer for a painting auction service.",
      },
      {
        title: "Kagoshima University",
        date: "2016 - 2021",
        position:
          "Faculty of Law, Literature and the Arts, Department of Economics and Information",
        place: "Kagoshima",
      },
    ],
  },
};

const Timeline = ({ items }) => {
  return (
    <div className="mt-4 space-y-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex gap-6 pb-8 border-b border-gray-300 last:pb-0 last:border-b-0"
        >
          {/* <div className="pt-2">
            <span className="inline-block w-2.5 h-2.5 bg-gray-600 rounded-full"></span>
          </div> */}
          <div className="flex-1 space-y-3">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="space-y-1">
                <p className="font-semibold text-lg">{item.title}</p>
                <div className="flex gap-2 items-center">
                  {item.place && (
                    <p className="text-sm text-gray-600">
                      {item.position} / {item.place}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <p className="text-sm text-text">{item.date}</p>
              </div>
            </div>
            <p className="text-sm text-text w-full md:w-3/4">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Profile = () => {
  const { language } = useLanguage();
  const t = content[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FadeInPageWrapper>
      <section className="flex-1 px-[5vw] sm:px-[12vw] pt-12 md:mt-0 space-y-12 md:space-y-40">
        <div>
          <div>
            <SectionTitle
              title="Profile"
              subtitle="Who I am"
              jpSubtitle="私について"
              jp="Profile"
            />
            <div className="flex flex-col justify-center md:flex-row items-center md:gap-24 py-8 md:py-12">
              <div className="space-y-8 md:w-2/3">
                {language === "en" ? (
                  <p className="text-5xl font-bold">Hi, it's Risa</p>
                ) : (
                  <p>
                    はじめまして。
                    <span className="font-kurenaido text-4xl font-extrabold pr-2">
                      山元里紗
                    </span>
                    と申します。
                  </p>
                )}
                <p className="text-gray-700 whitespace-pre-line">{t.bio}</p>
              </div>
              <div className="hidden md:block md:w-1/3">
                <img
                  src="profile-deco.svg"
                  alt="Profile"
                  className="w-full h-auto"
                  width={120}
                  height={120}
                  loading="eager"
                />
              </div>
            </div>
          </div>
          <div className="space-y-16 md:space-y-32 mt-16 md:mt-40">
            <section className="">
              <SectionTitle
                title="Career"
                subtitle="Work History"
                jpSubtitle="実務経験"
                sub
                jp="Career"
              />
              <Timeline items={t.experiences} />
            </section>
            <section className="">
              <SectionTitle
                title="Education"
                subtitle="Learning History"
                jpSubtitle="学歴"
                sub
                jp="Education"
              />
              <Timeline items={t.education} />
            </section>
            <section className="">
              <SectionTitle
                title="Skills"
                subtitle="Tools & Technologies"
                jpSubtitle="できること・わかること"
                sub
                jp="Skills"
              />
              <div className="mt-4 space-y-4">
                <div className="flex justify-center md:justify-start">
                  <ul className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-8 md:gap-8">
                    {skillData.map((skill) => (
                      <SkillItem
                        key={skill.label}
                        icon={skill.icon}
                        label={skill.label}
                        size={skill.size}
                        cover={skill.cover}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Contact />
      </section>
    </FadeInPageWrapper>
  );
};

export default Profile;
