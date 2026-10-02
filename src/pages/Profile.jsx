import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Contact from "../components/Contact";
import FadeInPageWrapper from "../components/FadeInPageWrapper";
import SectionTitle from "../components/SectionTitle";
import SkillItem from "../components/SkillItem";
import { useLanguage } from "../context/LanguageContext";
import skillData from "../data/skillData";

const content = {
  ja: {
    bio: "エンジニアとしてデスクトップアプリやWebアプリの開発に携わる中で、どれほど優れたプログラムを実装しても、UIに課題があれば継続的に使われるサービスにはなりにくいと実感しました。この経験からUI/UXデザインの重要性を強く意識するようになり、誰にとっても「使いやすく、作りやすい」プロダクトを実現できるデザイナーを目指しています。",
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
        date: "2024年 - 2026年",
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
    bio: 'Through my previous experience as an engineer involved in developing desktop and web applications, I realized that even the most brilliantly implemented program is unlikely to be continuously used if the UI presents challenges. This experience strongly highlighted the importance of UI/UX design. I aspire to be a designer who can create products that are "easy to use and easy to build" for everyone.',
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
        date: "2024 - 2026",
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
  const containerRef = useRef(null);
  const dotRefs = useRef([]);
  const [line, setLine] = useState(null);

  // 最初の丸の中心から最後の丸の中心までの位置を計測して、一本の線を引く
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const dots = dotRefs.current.filter(Boolean);
      if (dots.length < 2) return setLine(null);
      const containerRect = container.getBoundingClientRect();
      const center = (dot) => {
        const rect = dot.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        };
      };
      const first = center(dots[0]);
      const last = center(dots[dots.length - 1]);
      setLine({ left: first.x, top: first.y, height: last.y - first.y });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, [items]);

  return (
    <div ref={containerRef} className="relative px-4 md:px-10 mt-4 space-y-10">
      {line && (
        <div
          className="absolute -translate-x-1/2 border-l-2 border-dotted border-gray-500"
          style={{ left: line.left, top: line.top, height: line.height }}
        />
      )}
      {items.map((item, index) => (
        <div key={index} className="flex gap-6">
          <div className="relative z-10 pt-2">
            <div className="flex items-center">
              <span
                ref={(el) => (dotRefs.current[index] = el)}
                className="inline-block w-2.5 h-2.5 bg-gray-600 rounded-full"
              ></span>
            </div>
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="space-y-1">
                <p className="font-semibold">{item.title}</p>
                <div className="flex gap-2 items-center">
                  {item.place && (
                    <p className="text-sm text-gray-500">
                      {item.position} / {item.place}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <p className="text-sm text-text-sub">{item.date}</p>
              </div>
            </div>
            <p className="text-sm md:text-base font-light text-gray-700">
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
      <section className="flex-1 px-[5vw] sm:px-[10vw] pt-8 md:pt-10 space-y-32">
        <div>
          <div>
            <SectionTitle title="Profile" jp="自己紹介" />
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
                {/* <ul className="flex flex-wrap gap-2">
                  {t.profileItems.map((text, index) => (
                    <li
                      key={index}
                      className="px-4 py-1.5  border border-gray-300 rounded-full text-xs bg-white"
                    >
                      {text}
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
          </div>
          <div className="space-y-8 md:space-y-32 mt-40 ml-8">
            <section className="px-6 md:px-4">
              <SectionTitle title="Experience" sub jp="職歴" />
              <Timeline items={t.experiences} />
            </section>
            <section className="px-6 md:px-4">
              <SectionTitle title="Education" sub jp="学歴" />
              <Timeline items={t.education} />
            </section>
            <section className="px-6 md:px-4">
              <SectionTitle title="Skills" sub jp="スキル" />
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
