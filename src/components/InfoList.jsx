import { ArrowRight } from "lucide-react";

function InfoList({ items }) {
  const scrollToFinalUI = (e) => {
    e.preventDefault();
    const element = document.getElementById("final-ui");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex flex-col justify-start gap-6">
      <dl className="space-y-4">
        {items.map(({ title, value }, index) => (
          <div key={index} className="flex gap-10 text-sm justify-start">
            <dt className="w-24 md:w-40 font-medium">{title}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <div className="flex justify-center items-center self-end ">
        <a
          href="#final-ui"
          onClick={scrollToFinalUI}
          className="group flex items-center gap-1 px-4 py-1.5 text-white  rounded-full text-sm transition  bg-accent"
        >
          {/* 完成UIはこちら */}
          Check the Final UI
          <ArrowRight className="w-5 h-4 transform duration-200 group-hover:translate-x-0.5 text-white" />
        </a>
      </div>
    </div>
  );
}

export default InfoList;
