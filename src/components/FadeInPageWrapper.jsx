import { motion } from "framer-motion";

export default function FadeInPageWrapper({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {children}
    </motion.section>
  );
}
