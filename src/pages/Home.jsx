import { useState } from "react";
import { VscMail } from "react-icons/vsc";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "../components/BlogCard";
import SectionTitle from "../components/SectionTitle";
import WorkCard from "../components/WorkCard";
import blogData from "../data/blogData";
import workData from "../data/workData";
import useIsMobile from "../hooks/useIsMobile";

const Home = () => {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);
  const textToCopy = "yamari2422@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("コピーに失敗しました:", err);
    }
  };

  return (
    <section>
      <section className="relative z-20 space-y-2 sm:space-y-2 mt-20 md:mt-[100px] h-[320px] md:h-[560px]">
        {/* <img
          src="/circle-yellow.png"
          alt="Yellow Circle"
          className="absolute -top-10 -left-10 md:-top-40 md:-left-20 w-[200px] h-[200px] md:w-[600px] md:h-[600px]"
        />
        <img
          src="/circle-green.png"
          alt="Green Circle"
          className="hidden md:block absolute md:-top-40 md:left-[720px] md:w-[420px] md:h-[420px]"
        />
        <img
          src="/circle-red.png"
          alt="Red Circle"
          className="hidden md:block absolute md:top-36 md:left-[1000px] md:w-[240px] md:h-[240px]"
        /> */}
        <div className="font-lustria gap-2 flex flex-col px-4">
          <h1 className="text-5xl gap-2 sm:text-[88px] md:text-[100px] lg:text-[110px] flex flex-col z-10 mt-10">
            <span className="uppercase">Risa</span>
            <span className="uppercase">Yamamoto</span>
          </h1>
          <p className="text-xs md:text-sm z-30 px-2 md:px-4 ">
            デザイナー目指しています。一生懸命頑張りますデザイナー目指しています。一生懸命頑張ります
          </p>
        </div>
      </section>
      <div className="space-y-20">
        {/* works */}
        <section className="space-y-10">
          <SectionTitle title="Works" />
          <div className="space-y-10 md:space-y-20 mt-4 md:mt-8">
            {workData.map((work, index) => (
              <WorkCard
                key={index}
                imageSrc={work.imageSrc}
                title={work.title}
                description={work.description}
                tags={work.tags}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </section>
        {/* blogs */}
        <section>
          <SectionTitle title="Blogs" />
          <div className="mt-4 md:mt-8 space-y-1">
            {isMobile ? (
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper space-x-2"
                spaceBetween={10}
                slidesPerView={1.2}
              >
                {blogData.map((data, i) => (
                  <SwiperSlide key={i}>
                    <BlogCard
                      imageSrc={data.imageSrc}
                      title={data.title}
                      url={data.url}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {blogData.map((data) => (
                  <BlogCard
                    imageSrc={data.imageSrc}
                    title={data.title}
                    url={data.url}
                  />
                ))}
              </div>
            )}
            <a
              href="https://note.com/rsloth24"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-end gap-1 cursor-pointer hover:opacity-80 transition"
            >
              <p className="text-sm">ブログ一覧を見る</p>
              <img
                src="/note-icon.png"
                alt="note icon"
                className="w-6 h-6 object-cover border-text-sub border-[0.6px] rounded-md"
              />
            </a>
          </div>
        </section>
        {/* contact */}
        <section className="mt-0">
          <SectionTitle title="Contact" />
          <div className="space-y-10 md:space-y-20 mt-4 md:mt-8 mb-10 px-4">
            <ul className="flex flex-col md:flex-row gap-4 md:gap-20 md:h-16">
              <li className="w-56 space-y-1">
                <div
                  className="flex items-center gap-2 cursor-pointer select-text hover:opacity-70 transition"
                  onClick={handleCopy}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleCopy();
                    }
                  }}
                  aria-label="メールアドレスをクリップボードにコピー"
                >
                  <VscMail size={26} />
                  <p className="text-sm leading-none">yama422@gmail.com</p>
                </div>
                {copied ? (
                  <p className="text-xs text-[#7e611e] font-semibold">
                    メールアドレスをコピーしました！
                  </p>
                ) : (
                  <p className="text-xs text-text-sub">
                    ※クリックするとコピーができます
                  </p>
                )}
              </li>
              <li className="hover:opacity-70 transition">
                <a
                  href="https://www.linkedin.com/in/risa-yamamoto-profile/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 "
                >
                  <img
                    src="/linkedin-icon.png"
                    alt="LinkedIn"
                    className="w-7 h-6 mt-0.5 object-cover "
                  />
                  <p className="leading-none">risa-yamamoto-profile</p>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;
