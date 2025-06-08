import InfoList from "../../components/InfoList";

const EventManagement = () => {
  const infoItems = [
    { title: "制作種類", value: "個人制作" },
    { title: "期間", value: "1週間" },
    { title: "担当", value: "デザイン / コーディング" },
    { title: "使用ツール", value: "Figma" },
  ];
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-6 md:gap-16">
        <div className="md:w-1/2 h-[300px] flex-1">
          <img
            src="/susan4.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6 py-2 flex-1">
          <div>
            <div className="space-y-2">
              <p className="w-fit flex items-center text-xs mb-1 px-2.5 py-1 border border-[#F0EEEA] bg-[#F0EEEA] rounded-full">
                webアプリ
              </p>
              <h2 className="text-xl font-semibold">イベント管理サービス</h2>
            </div>
            <div className="flex-1 h-[0.8px] bg-border mt-4" />
          </div>
          <InfoList items={infoItems} />
        </div>
      </div>
    </section>
  );
};

export default EventManagement;
