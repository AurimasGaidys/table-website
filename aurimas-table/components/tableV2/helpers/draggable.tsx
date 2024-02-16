import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
}

export const Draggable = ({ children }: Props) => {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
    >
      {children}
    </motion.div>
  );
};
