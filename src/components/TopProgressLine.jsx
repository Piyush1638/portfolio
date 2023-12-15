"use client"
import {useScroll } from "framer-motion";
import { MotionDiv } from "./MotionDiv";

const TopProgressLine = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
    <MotionDiv
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        height: 5,
        background: "#6547bd",
        zIndex: "100",
      }}
    />
    </>
  );
};

export default TopProgressLine;
