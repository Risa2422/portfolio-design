import React from "react";
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
  return (
    <section>
      <section className="relative z-20 space-y-2 sm:space-y-2 mt-20 md:mt-[100px] h-[320px] md:h-[520px]">
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
        <div className="font-lustria gap-2 flex flex-col px-8">
          <h1 className="text-5xl gap-2 sm:text-[88px] md:text-[100px] lg:text-[110px] flex flex-col z-10">
            <span className="uppercase">Risa</span>
            <span className="uppercase">Yamamoto</span>
          </h1>
          <p className="text-xs md:text-sm z-30 px-2 md:px-4 ">
            デザイナー目指しています。一生懸命頑張りますデザイナー目指しています。一生懸命頑張ります
          </p>
        </div>
      </section>
      <section>
        {/* works */}
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
        <div></div>
        {isMobile ? (
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper px-4 mt-4 md:mt-8"
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:mt-8">
            {blogData.map((data) => (
              <BlogCard
                imageSrc={data.imageSrc}
                title={data.title}
                url={data.url}
              />
            ))}
          </div>
        )}
      </section>
    </section>
  );
};

export default Home;
