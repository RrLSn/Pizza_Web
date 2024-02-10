import React from "react";
import styles from "@/styles/PopUpMessage.module.css";
import { motion } from "framer-motion";

const PopUpMessage = () => {
  const popUpVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2, stiffness: 150 },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, stiffness: 150, ease: [0, 0.71, 0.2, 1.01] },
    },
  };
  return (
    <motion.div
      variants={popUpVariants}
      initial="hidden"
      animate="visible"
      className={styles.wrapper}
    >
      <div className={styles.image}></div>
      <h1>Your Order Is Confirmed And Being Processed..</h1>
    </motion.div>
  );
};

export default PopUpMessage;
