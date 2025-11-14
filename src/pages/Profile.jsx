// import { useEffect } from "react";
// import Contact from "../components/Contact";
// import FadeInPageWrapper from "../components/FadeInPageWrapper";
// import SectionTitle from "../components/SectionTitle";
// import SkillItem from "../components/SkillItem";
// import skillData from "../data/skillData";

// const profileItems = [
//   "# 鹿児島県出身 🍠",
//   "# カナダ在住 🇨🇦",
//   "# 1997年生まれ 🗓️",
// ];

// const backgrounds = [
//   {
//     title: "Cornerstone International Community College of Canada",
//     date: "2024 - 現在",
//     description:
//       "Web開発の基礎からNext.jsなどのモダンな技術を用いたアプリ開発までを、1年をかけて体系的に学びました。授業外では、クライアントワークとしてWordPress（Elementor）を使ったWebサイトの制作や、ボランティア活動の一環として絵画オークションサービスのデザインを担当しました。",
//   },
//   {
//     title: "株式会社ARS",
//     date: "2021 - 2024 (3年)",
//     description:
//       "自社サービスであるPOSシステムや患者動線管理システムの導入・開発・保守業務に携わっていました。システム導入時や保守対応の際には、お客様とのコミュニケーションを通じてニーズを正確に把握し、できる限り迅速に対応することを心がけていました。お客様ごとに仕様や運用が異なる中で、それぞれの要望に柔軟に対応する力を養うことができました。",
//   },
//   {
//     title: "鹿児島大学",
//     date: "2016 - 2021 (5年)",
//     description: "法文学部 経済情報学科",
//   },
// ];

// const Profile = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <FadeInPageWrapper>
//       <section className="flex-1 px-[5vw] sm:px-[10vw] pt-8 md:pt-0 space-y-32">
//         <div>
//           <div>
//             <SectionTitle title="Profile" jp="私について" />
//             <div className="flex flex-col items-center justify-center md:items-start md:flex-row md:gap-3 px-10 md:px-0 ">
//               <div className="w-[420px]">
//                 <img
//                   src="profile-image.png"
//                   alt="Profile"
//                   width={320}
//                   height={320}
//                   className="w-64 sm:w-96 h-auto mx-auto m-0 block"
//                   loading="eager"
//                 />
//               </div>
//               <div className="md:w-1/2 space-y-5 md:mt-16">
//                 <p className="font-base text-sm leading-loose text-gray-700">
//                   これまでエンジニアとしてデスクトップアプリやWebアプリの開発に携わる中で、どれほど優れたプログラムが実装されていても、UIに課題があると継続的に利用されるサービスにはなりにくいことを実感しました。
//                   この経験から、UI/UXデザインの重要性を強く意識するようになり、誰にとっても「使いやすく、作りやすい」プロダクトを実現できるデザイナーを目指しています。
//                 </p>
//                 <ul className="flex flex-wrap gap-2">
//                   {profileItems.map((text, index) => (
//                     <li
//                       key={index}
//                       className="px-4 py-1.5 text-text-sub border border-gray-400 rounded-full text-xs bg-white"
//                     >
//                       {text}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-8 md:space-y-20 mt-10 md:mt-20">
//             <section className="px-6 md:px-4">
//               <SectionTitle title="Backgrounds" sub jp="学歴 & 経歴" />
//               <div className="px-4 md:px-10 mt-4 space-y-8">
//                 {backgrounds.map((item, index) => (
//                   <div key={index} className="flex gap-4">
//                     <div className="flex flex-col items-center space-y-2 mt-1.5">
//                       <img
//                         src="rhombus.svg"
//                         alt="rhombus"
//                         className="w-3.5 h-3.5"
//                       />
//                       <div
//                         className={`${
//                           index === backgrounds.length - 1
//                             ? "hidden"
//                             : "w-px flex-1 border-l-2 border-dotted border-gray-400 h-16 "
//                         }`}
//                       />
//                     </div>
//                     <div className="flex-1 space-y-2 md:space-y-2">
//                       <div className="flex flex-col gap-1 md:flex-row justify-between">
//                         <p className="text-sm md:text-base font-medium">
//                           {item.title}
//                         </p>
//                         <p className="text-sm text-[#66676B]">{item.date}</p>
//                       </div>
//                       <p className="text-xs md:text-sm leading-relaxed text-gray-700">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//             <section className="px-6 md:px-4">
//               <SectionTitle title="Skills" sub jp="できること" />
//               <div className="px-6 md:px-10 mt-4 space-y-4">
//                 <div className="flex justify-center md:justify-start">
//                   <ul className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 gap-8 md:gap-9">
//                     {skillData.map((skill) => (
//                       <SkillItem
//                         key={skill.label}
//                         icon={skill.icon}
//                         label={skill.label}
//                         size={skill.size}
//                         cover={skill.cover}
//                       />
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//         <Contact />
//       </section>
//     </FadeInPageWrapper>
//   );
// };

// export default Profile;

import { useEffect } from "react";
import Contact from "../components/Contact";
import FadeInPageWrapper from "../components/FadeInPageWrapper";
import SectionTitle from "../components/SectionTitle";
import SkillItem from "../components/SkillItem";
import skillData from "../data/skillData";

const profileItems = [
  "Born in Japan 🇯🇵",
  "Living in Canada 🇨🇦",
  "1997-born 🗓️",
];

const backgrounds = [
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
];

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FadeInPageWrapper>
      <section className="flex-1 px-[5vw] sm:px-[10vw] pt-8 md:pt-0 space-y-32">
        <div>
          <div>
            <SectionTitle title="Profile" jp="About Me" />
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
                <p className="font-base text-gray-700 ">
                  Through my previous experience as an engineer involved in
                  developing desktop and web applications, I realized that even
                  the most brilliantly implemented program is unlikely to be
                  continuously used if the UI presents challenges. This
                  experience strongly highlighted the importance of UI/UX
                  design. I aspire to be a designer who can create products that
                  are "easy to use and easy to build" for everyone.
                </p>
                <ul className="flex flex-wrap gap-2">
                  {profileItems.map((text, index) => (
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
                jp="Education & Work Experience"
              />
              <div className="px-4 md:px-10 mt-4 space-y-8">
                {backgrounds.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center space-y-2 mt-1.5">
                      <img
                        src="rhombus.svg"
                        alt="rhombus"
                        className="w-3.5 h-3.5"
                      />
                      <div
                        className={`${
                          index === backgrounds.length - 1
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
              <SectionTitle title="Skills" sub jp="What I Can Do" />
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
