import ArrowDivider from "./ArrowDivider";
import Badge from "./Badge";
import DetailBox from "./DetailBox";

function FlowStep({ label, badgeClass, image, alt, heading, items }) {
  return (
    <div className="space-y-4">
      <Badge colorClass={badgeClass}>{label}</Badge>
      <div className="space-y-6">
        <img src={image} className="w-full h-full object-contain" alt={alt} />
        <DetailBox heading={heading} items={items} />
      </div>
    </div>
  );
}

function Improvement1({ before, after }) {
  return (
    <div className="space-y-6">
      <FlowStep {...before} badgeClass="bg-[#746B60]" />
      <ArrowDivider />
      <FlowStep {...after} badgeClass="bg-[#4A5742]" />
    </div>
  );
}

export default Improvement1;
