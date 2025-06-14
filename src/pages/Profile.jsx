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
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in",
  },
  {
    title: "株式会社ARS",
    date: "2021 - 2024 (3年)",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in",
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
          <img src="profile.svg" alt="Profile" className="w-full h-full" />
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
          <div className="px-4 md:px-10 mt-4 md:mt-8 space-y-8">
            {backgrounds.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center space-y-2 mt-1.5">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      index % 2 === 0 ? "bg-tertiary" : "bg-secondary"
                    }`}
                  />
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
