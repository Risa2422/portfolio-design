import { motion, useReducedMotion } from "framer-motion";
import ZoomableImage from "../../../components/ZoomableImage";

// Horizontal crop of each phase column (①, ②, ③) within industory_flow.svg.
// Boundaries sit in the gaps between columns (viewBox x 100–1190).
const PHASE_CLIPS = [
  "inset(0 68.5% 0 0)",
  "inset(0 33% 0 31.5%)",
  "inset(0 0 0 67%)",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.5 } },
};

const phase = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// Shows the mining industry flow diagram, revealing phases ① → ② → ③ left to right on scroll
const IndustryFlowImage = ({ src, alt }) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <ZoomableImage src={src} alt={alt} className="w-full object-contain" />;
  }

  return (
    <motion.div
      className="relative w-full"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Invisible base keeps the layout size and handles click-to-zoom */}
      <ZoomableImage src={src} alt={alt} className="w-full object-contain opacity-0" />
      {PHASE_CLIPS.map((clipPath) => (
        <motion.img
          key={clipPath}
          src={src}
          alt=""
          aria-hidden="true"
          variants={phase}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          style={{ clipPath }}
        />
      ))}
    </motion.div>
  );
};

export default IndustryFlowImage;
