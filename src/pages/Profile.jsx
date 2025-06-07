import SectionTitle from "../components/SectionTitle";

const Profile = () => {
  const profileItems = [
    { text: "鹿児島県出身 🍠" },
    { text: "カナダ在住 🇨🇦" },
    { text: "1997年生まれ 🗓️" },
  ];

  return (
    <section className="flex-1">
      <section>
        <SectionTitle title="Profile" />
        <div className="flex flex-col items-center justify-center md:items-start justify-center md:flex-row md:gap-8 px-10 mt-4 md:mt-8">
          <div className="w-[300]px flex ">
            <img src="profile.svg" alt="" className="w-full h-full" />
          </div>
          <div className="md:w-1/2 space-y-4 md:mt-16">
            <p className="font-base text-sm">
              元々エンジニアをしていましたが、デザインの世界に惹かれ、xxxxxx元々エンジニア
              をしていましたが、デザインの世界に惹かれ、xxxxxx元々エンジニアをしていましたが、デザインの世界に惹かれ、xxxxxx元々エンジニア
              をしていましたが、デザインの世界に惹かれ、xxxxxx元々エンジニアをしていましたが、デザインの世界に惹かれ、xxxxxx元々エンジニア
              をしていましたが、デザインの世界に惹かれ、xxxxxx元々エンジニアをしていましたが、デザインの世界に惹かれ、xxxxxx元々エンジニア
            </p>
            <ul className="flex flex-col md:flex-row gap-2">
              {profileItems.map((item, index) => (
                <li
                  key={index}
                  className="hidden lg:flex items-center px-4 py-1.5 text-text-sub border border-border rounded-full text-sm bg-white"
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Profile;
