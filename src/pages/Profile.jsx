import Contact from "../components/Contact";
import SectionTitle from "../components/SectionTitle";
import SkillItem from "../components/SkillItem";
import skillData from "../data/skillData";

const profileItems = ["鹿児島県出身 🍠", "カナダ在住 🇨🇦", "1997年生まれ 🗓️"];

const backgrounds = [
  {
    title: "Cornerstone International Community College of Canada",
    date: "2024 - 現在",
    description:
      "Web開発の基礎からNext.jsなどのモダンな技術を用いたアプリ開発までを、1年をかけて体系的に学びました。授業外では、クライアントワークとしてWordPress（Elementor）を用いたWebサイトの制作や、ボランティア活動の一環として絵画オークションサービスのデザインを担当しました。",
  },
  {
    title: "株式会社ARS",
    date: "2021 - 2024 (3年)",
    description:
      "自社サービスであるPOSシステム、患者動線管理システムの導入・開発・保守業務に携わっていました。 特に、システム導入時や保守対応の際には、お客様とのコミュニケーションを重視し、ニーズを的確に把握した上で可能な限り迅速に実現できるよう心がけていました。お客様ごとに仕様が異なる中で、それぞれの要望に柔軟に対応する力を培うことができました。",
  },
  {
    title: "鹿児島大学",
    date: "2016 - 2021 (5年)",
    description: "法文学部 経済情報学科",
  },
];

const Profile = () => {
  return (
    <section className="flex-1 space-y-10 px-[5vw] sm:px-[10vw]">
      <SectionTitle title="Profile" />
      <div className="flex flex-col items-center justify-center md:items-start md:flex-row md:gap-16 px-10 md:px-0 mt-4 md:mt-10">
        <div className="w-[320px]">
          <img
            src="profile.svg"
            alt="Profile"
            width={320}
            height={320}
            className="w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 space-y-5 md:mt-16">
          <p className="font-base text-sm leading-relaxed">
            元々エンジニアをしていましたが、デザインの世界に惹かれ、xxxxxx
            元々エンジニアをしていましたが、デザインの世界に惹かれ、xxxxxx
            元々エンジニアをしていましたが、デザインの世界に惹かれ、xxxxxx
          </p>
          <ul className="flex flex-wrap gap-2">
            {profileItems.map((text, index) => (
              <li
                key={index}
                className="px-4 py-1.5 text-text-sub border border-border rounded-full text-xs bg-white"
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space-y-16 md:space-y-20 pb-10">
        <section className="px-6 md:px-4">
          <SectionTitle title="Backgrounds" sub />
          <div className="px-4 md:px-10 mt-4 md:mt-8 space-y-4">
            {backgrounds.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center space-y-2 mt-1.5">
                  <img src="rhombus.svg" alt="" className="w-3.5 h-3.5" />
                  <div
                    className={`${
                      index === backgrounds.length - 1
                        ? "hidden"
                        : "w-px flex-1 border-l-2 border-dotted border-gray-400 h-16 "
                    }`}
                  />
                </div>
                <div className="flex-1 space-y-2 md:space-y-1">
                  <div className="flex flex-col gap-1 md:flex-row justify-between">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-[#66676B]">{item.date}</p>
                  </div>
                  <p className="text-sm text-text-sub leading-relaxed ">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="px-6 md:px-4">
          <SectionTitle title="Skills" sub />
          <div className="px-6 md:px-10 mt-4 md:mt-8 space-y-4">
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
      <Contact />
    </section>
  );
};

export default Profile;
