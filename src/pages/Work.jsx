import { useParams } from "react-router-dom";

const Work = () => {
  const { workId } = useParams();

  switch (workId) {
    case "work-a":
      return <WorkFamily />;
    default:
      return <div>作品が見つかりません</div>;
  }
};

export default Work;
