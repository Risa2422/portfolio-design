import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import Contact from "../components/Contact";
import FadeInPageWrapper from "../components/FadeInPageWrapper";
import SectionTitle from "../components/SectionTitle";
import TypingText from "../components/TypingText";
import WorkCard from "../components/WorkCard";
import { useLanguage } from "../context/LanguageContext";
import workData from "../data/workData";
import useIsMobile from "../hooks/useIsMobile";
import { scrollToElement } from "../hooks/useSmoothScroll";
import { localizeImage } from "../utils/localizeImage";

const content = {
  ja: {
    tagline:
      "エンジニアリングとデザインの架け橋になるデザイナーを目指しています。",
    fvLead: "開発とデザインの視点で、使いやすさを形にします。",
  },
  en: {
    tagline:
      "My goal is to become a designer who seamlessly connects engineering and design.",
    fvLead: "Shaping usability through engineering and design.",
  },
};

// FV の pill が arch から抜け出し始めるまでの秒数（pill の移動と arch の塗り消しで共有）
const EMERGE_DELAY = 0.5;

// 抜け出す図形の輪郭。モーフィングのため両方とも同じ順序・同じ数の C コマンド（直線も C で表現）で書く
// arch の形（arch の輪郭そのもの）
const EMERGE_ARCH_D =
  "M0.844 24.478C0.844 11.479 11.479 0.844 24.478 0.844C37.608 0.844 50.737 0.844 63.867 0.844C76.866 0.844 87.501 11.479 87.501 24.478C87.501 53.364 87.501 82.249 87.501 111.135C87.501 120.982 78.638 125.906 70.957 120.588C61.898 114.286 53.232 109.165 44.173 109.165C35.113 109.165 26.447 114.286 17.388 120.588C9.707 125.906 0.844 120.982 0.844 111.135C0.844 82.249 0.844 53.364 0.844 24.478Z";
// 最終的な縦長の円（pill）の形
const EMERGE_PILL_D =
  "M0 39.39C0 17.635 17.635 0 39.39 0C42.016 0 44.641 0 47.267 0C69.022 0 86.657 17.635 86.657 39.39C86.657 55.146 86.657 70.901 86.657 86.657C86.657 108.411 69.022 126.046 47.267 126.046C45.954 126.046 44.641 126.046 43.328 126.046C42.015 126.046 40.702 126.046 39.39 126.046C17.635 126.046 0 108.411 0 86.657C0 70.901 0 55.146 0 39.39Z";
const EMERGE_TRANSITION = {
  delay: EMERGE_DELAY,
  duration: 1.8,
  ease: [0.22, 1, 0.36, 1],
};

const Home = () => {
  const isMobile = useIsMobile();
  const { language } = useLanguage();
  const t = content[language];
  const [copied, setCopied] = useState(false);
  const worksRef = useRef(null);
  const [typingDone, setTypingDone] = useState(false);

  const scrollToWorks = () => {
    scrollToElement(worksRef.current);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("yamari2422@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("コピーに失敗しました:", err);
    }
  };

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
      <section className="px-[5vw] sm:px-[8vw]">
        <section className="relative z-20 flex flex-col items-center gap-10 mt-20 md:mt-0 pt-2 pb-10 md:pb-16 min-h-[calc(100svh-80px)] md:min-h-[calc(100svh-60px)]">
          <div className="flex flex-col items-center gap-10 w-full">
            <div className="flex flex-col items-center gap-6 w-full max-w-[280px] md:max-w-[480px]">
              <p className="text-xs md:text-base font-medium tracking-[0.2em]">
                {/* UI/UX Designer */}
              </p>
              <div className="space-y-3">
                <img
                  src="/fv-portfolio.svg"
                  alt="Portfolio"
                  width="692.798"
                  height="116.594"
                  className="w-full h-auto"
                />
                {/* 文字を均等配置して Portfolio と同じ幅にする */}
                <p
                  aria-label="Risa Yamamoto"
                  className="flex justify-between w-full font-semibold text-sm uppercase text-[#77]"
                >
                  {"Risa Yamamoto".split("").map((char, i) => (
                    <span key={i} aria-hidden="true">
                      {char === " " ? " " : char}
                    </span>
                  ))}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-10 w-full">
              <div
                className="relative shrink-0 w-[240px] aspect-[225.083/168.812]"
                aria-hidden="true"
              >
                {/* 位置・サイズは親の幅に対する割合なので、親の w を変えるだけで全体が拡縮する */}
                {/* arch と重なる arch 形から、左下の定位置へ移動しながら pill の形に変わる */}
                {/* x / y は arch の位置へのずれ（37.41, -16.61）を自身の幅・高さに対する割合にしたもの */}
                <motion.svg
                  viewBox="0 0 86.6568 126.046"
                  fill="none"
                  overflow="visible"
                  className="absolute left-[22.25%] top-[17.33%] w-[38.5%] h-auto will-change-transform"
                  initial={{ x: "43.17%", y: "-13.18%" }}
                  animate={{ x: 0, y: 0 }}
                  transition={EMERGE_TRANSITION}
                >
                  <motion.path
                    fill="#E54B30"
                    initial={{ d: EMERGE_ARCH_D }}
                    animate={{ d: EMERGE_PILL_D }}
                    transition={EMERGE_TRANSITION}
                  />
                </motion.svg>
                {/* arch は最初から primary で塗られていて、pill が抜けると線だけになる */}
                <svg
                  viewBox="0 0 88.3449 126.89"
                  fill="none"
                  overflow="visible"
                  className="absolute left-[38.87%] top-[7.49%] w-[39.25%] h-auto"
                >
                  <motion.path
                    d="M0.84406 24.4777C0.84406 11.4792 11.4792 0.84406 24.4777 0.84406H63.8672C76.8657 0.84406 87.5009 11.4792 87.5009 24.4777V111.135C87.5009 120.982 78.6383 125.906 70.9573 120.588C61.8977 114.286 53.2321 109.165 44.1725 109.165C35.1129 109.165 26.4472 114.286 17.3876 120.588C9.70669 125.906 0.84406 120.982 0.84406 111.135V24.4777Z"
                    strokeWidth="1.68812"
                    stroke="#1C1619"
                    initial={{ fill: "rgba(229, 75, 48, 1)" }}
                    animate={{ fill: "rgba(229, 75, 48, 0)" }}
                    transition={{ delay: EMERGE_DELAY, duration: 0.5 }}
                  />
                </svg>
              </div>
              <TypingText
                className="text-center text-xs md:text-base tracking-wider md:tracking-[2px] font-semibold leading-[1.8] whitespace-nowrap"
                lines={["UI/UX Designer", t.fvLead]}
                onComplete={() => setTypingDone(true)}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <motion.button
              type="button"
              onClick={scrollToWorks}
              aria-label="Scroll to Works"
              tabIndex={typingDone ? 0 : -1}
              initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              animate={
                typingDone
                  ? { opacity: 1, clipPath: "inset(0 0 0% 0)" }
                  : { opacity: 0, clipPath: "inset(0 0 100% 0)" }
              }
              transition={{ duration: 1.5, ease: "easeOut" }}
              className={`flex flex-col items-center gap-2 hover:opacity-70 transition-opacity ${
                typingDone ? "" : "pointer-events-none"
              }`}
            >
              <span className="block w-1.5 h-1.5 rounded-full bg-text" />
              <span className="text-[14px] tracking-[0.2em] font-semibold uppercase [writing-mode:vertical-rl]">
                Scroll
              </span>
              <span className="block w-px h-12 md:h-32 bg-gray-500" />
            </motion.button>
          </div>
        </section>
        <div className="space-y-40">
          {/* works */}
          <section ref={worksRef} className="space-y-10 scroll-mt-24">
            <SectionTitle
              title="Works"
              subtitle="Featured Projects"
              jpSubtitle="制作実績"
              jp="Works"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-24 md:gap-y-32 mt-4">
              {workData.map((work, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: isMobile ? 0 : (index % 2) * 0.15,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <WorkCard
                    imageSrc={localizeImage(work.imageSrc)}
                    date={work.date}
                    title={work.title[language]}
                    description={work.description[language]}
                    tags={work.tags[language]}
                    to={work.to}
                  />
                </motion.div>
              ))}
            </div>
          </section>
          {/* blogs */}
          {/* <section>
            <SectionTitle title="Blogs" jp="学習のアウトプット" />
            <div className="mt-4">
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
                  {blogData.map((data, index) => (
                    <BlogCard
                      key={index}
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
          </section> */}

          {/* contact */}
          <Contact />
        </div>
      </section>
    </FadeInPageWrapper>
  );
};

export default Home;
