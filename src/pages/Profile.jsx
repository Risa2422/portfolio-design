import { useEffect } from "react";
import Contact from "../components/Contact";
import FadeInPageWrapper from "../components/FadeInPageWrapper";
import SectionTitle from "../components/SectionTitle";
import SkillItem from "../components/SkillItem";
import { useLanguage } from "../context/LanguageContext";
import skillData from "../data/skillData";

const content = {
  ja: {
    bio: "エンジニアとしてデスクトップアプリやWebアプリの開発に携わる中で、どれほど優れたプログラムを実装しても、UIに課題があれば継続的に使われるサービスにはなりにくいと実感しました。この経験からUI/UXデザインの重要性を強く意識するようになり、誰にとっても「使いやすく、作りやすい」プロダクトを実現できるデザイナーを目指しています。",
    profileItems: ["日本出身 🇯🇵", "カナダ在住 🇨🇦", "1997年生まれ 🗓️"],
    backgrounds: [
      {
        title: "Fill Inc.",
        date: "2025年8月 - 現在",
        description:
          "自社の公式サイトのリニューアルを担当し、一貫したブランドイメージと使いやすい体験の実現に取り組みました。また、社内外でのブランドイメージ向上のため、名刺や外部向け資料の制作も行いました。",
      },
      {
        title: "Prime Style Inc.",
        date: "2025年8月 - 2025年10月",
        description:
          "新規サービスのユーザーストーリーとユーザーフローを作成し、ユーザーニーズを明確化しました。ワイヤーフレームの作成やUIデザインの検討を通じて一貫性のある使いやすいインターフェースを目指し、海外メンバーを含むチームと円滑に連携しながらデザインの意思決定を進めました。",
      },
      {
        title: "Cornerstone International Community College of Canada",
        date: "2024年 - 現在",
        description:
          "1年間かけて、Web開発の基礎からNext.jsなどのモダンな技術を用いたアプリ開発までを体系的に学びました。授業外ではWordPress（Elementor）を用いたクライアントワークとしてのWeb制作や、絵画オークションサービスのデザインをボランティアとして担当しました。",
      },
      {
        title: "ARS Inc.",
        date: "2021年 - 2024年（3年間）",
        description:
          "自社サービスであるPOSシステムや患者動線管理システムの導入・開発・保守業務に携わりました。導入や保守対応の際にはお客様とのコミュニケーションを通じてニーズを正確に把握し、できる限り迅速な対応を心がけました。お客様ごとに異なる仕様や運用に対応する中で、柔軟に要望へ応える力を養いました。",
      },
      {
        title: "Kagoshima University",
        date: "2016年 - 2021年（5年間）",
        description: "法文学部 経済情報学科",
      },
    ],
  },
  en: {
    bio: 'Through my previous experience as an engineer involved in developing desktop and web applications, I realized that even the most brilliantly implemented program is unlikely to be continuously used if the UI presents challenges. This experience strongly highlighted the importance of UI/UX design. I aspire to be a designer who can create products that are "easy to use and easy to build" for everyone.',
    profileItems: ["Born in Japan 🇯🇵", "Living in Canada 🇨🇦", "1997-born 🗓️"],
    backgrounds: [
      {
        title: "Fill Inc.",
        date: "Aug 2025 - Present",
        description:
          "Responsible for the redesign of the company's official website, ensuring a consistent brand image and a user-friendly experience, while also creating business cards and external materials to enhance the company's brand impression both internally and externally.",
      },
      {
        title: "Prime Style Inc.",
        date: "Aug 2025 - Oct 2025",
        description:
          "Developed user stories and user flows for a new service to clarify user needs, created wireframes and collaborated on UI design to ensure a consistent and user-friendly interface, and collaborated effectively with an international team to facilitate smooth discussions and align design decisions.",
      },
      {
        title: "Cornerstone International Community College of Canada",
        date: "2024 - Present",
        description:
          "I systematically learned everything from the basics of web development to application development using modern technologies like Next.js over the course of a year. Outside of class, I engaged in client work creating websites using WordPress (Elementor) and volunteered for a painting auction service in design capacity.",
      },
      {
        title: "ARS Inc.",
        date: "2021 - 2024 (3 years)",
        description:
          "I was involved in the implementation, development, and maintenance of the company's proprietary POS systems and patient flow management systems. During system implementation and maintenance, I focused on accurately understanding customer needs through communication and responding as quickly as possible. Working with various specifications and operational needs for each client, I cultivated the ability to flexibly adapt to diverse requests.",
      },
      {
        title: "Kagoshima University",
        date: "2016 - 2021 (5 years)",
        description:
          "Faculty of Law, Literature and the Arts, Department of Economics and Information",
      },
    ],
  },
};

const Profile = () => {
  const { language } = useLanguage();
  const t = content[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FadeInPageWrapper>
      <section className="flex-1 px-[5vw] sm:px-[10vw] pt-8 md:pt-0 space-y-32">
        <div>
          <div>
            <SectionTitle title="Profile" jp="プロフィール" />
            <div className="flex flex-col items-center justify-center md:items-start md:flex-row md:gap-3 px-10 md:px-0 ">
              <div className="w-[420px]">
                <img
                  src="profile-image.png"
                  alt="Profile"
                  width={320}
                  height={320}
                  className="w-64 sm:w-96 h-auto mx-auto m-0 block"
                  loading="eager"
                />
              </div>
              <div className="md:w-1/2 space-y-5 md:mt-24">
                <p className="font-base text-gray-700 ">{t.bio}</p>
                <ul className="flex flex-wrap gap-2">
                  {t.profileItems.map((text, index) => (
                    <li
                      key={index}
                      className="px-4 py-1.5  border border-gray-300 rounded-full text-xs bg-white"
                    >
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8 md:space-y-20 mt-10 md:mt-20">
            <section className="px-6 md:px-4">
              <SectionTitle
                title="Backgrounds"
                sub
                jp="学歴 & 経歴"
              />
              <div className="px-4 md:px-10 mt-4 space-y-8">
                {t.backgrounds.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center space-y-2 mt-1.5">
                      <img
                        src="rhombus.svg"
                        alt="rhombus"
                        className="w-3.5 h-3.5"
                      />
                      <div
                        className={`${
                          index === t.backgrounds.length - 1
                            ? "hidden"
                            : "w-px flex-1 border-l-2 border-dotted border-gray-400 h-16 "
                        }`}
                      />
                    </div>
                    <div className="flex-1 space-y-2 md:space-y-2">
                      <div className="flex flex-col gap-1 md:flex-row justify-between">
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-[#66676B]">{item.date}</p>
                      </div>
                      <p className="text-sm md:text-base text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="px-6 md:px-4">
              <SectionTitle title="Skills" sub jp="できること" />
              <div className="px-6 md:px-10 mt-4 space-y-4">
                <div className="flex justify-center md:justify-start">
                  <ul className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 gap-8 md:gap-9">
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
