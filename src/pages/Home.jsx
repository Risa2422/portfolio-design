import { motion } from "framer-motion";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "../components/BlogCard";
import Contact from "../components/Contact";
import FadeInPageWrapper from "../components/FadeInPageWrapper";
import SectionTitle from "../components/SectionTitle";
import WorkCard from "../components/WorkCard";
import blogData from "../data/blogData";
import workData from "../data/workData";
import useIsMobile from "../hooks/useIsMobile";

const Home = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    const savedPosition = sessionStorage.getItem("scrollPosition");
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedPosition, 10),
        });
        sessionStorage.removeItem("scrollPosition");
      }, 50);
    }
  }, []);

  return (
    <FadeInPageWrapper>
      <section className="px-[5vw] sm:px-[12vw]">
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
            <h1 className="text-5xl gap-3.5 sm:text-[88px] md:text-[100px] lg:text-[110px] flex flex-col z-10 mt-10">
              <span className="uppercase">Risa</span>
              <span className="uppercase">Yamamoto</span>
            </h1>
            <p className="text-xs md:text-sm z-30 px-2 md:px-4 text-gray-600">
              エンジニアリングとデザインの架け橋になるデザイナーを目指しまています。
              <br />
            </p>
          </div>
        </section>
        <div className="space-y-24">
          {/* works */}
          <section className="space-y-10">
            <SectionTitle title="Works" jp="制作物" />
            <div className="flex flex-col gap-10 md:gap-32 mt-4 md:mt-8">
              {workData.map((work, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <WorkCard
                    imageSrc={work.imageSrc}
                    title={work.title}
                    description={work.description}
                    tags={work.tags}
                    reverse={index % 2 === 1}
                    to={work.to}
                  />
                </motion.div>
              ))}
            </div>
          </section>
          {/* blogs */}
          <section>
            <SectionTitle title="Blogs" jp="学習のアウトプット" />
            <div className="mt-4 md:mt-8">
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
              <div className="flex items-center justify-end hover:opacity-70 transition">
                <a
                  href="https://note.com/rsloth24"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center justify-end gap-1 pt-8">
                    <p className="text-sm">ブログ一覧を見る</p>
                    <img
                      src="/note-icon.png"
                      alt="note icon"
                      className="w-6 h-6 object-cover border-text-sub border-[0.6px] rounded-md"
                    />
                  </div>
                </a>
              </div>
            </div>
          </section>
          {/* contact */}
          <Contact />
        </div>
      </section>
    </FadeInPageWrapper>
  );
};

export default Home;
