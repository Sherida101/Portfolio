import React from "react";
import PropTypes from "prop-types";

// NB: 20000 milliseconds ==> 2 seconds

const fadeVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const fadeLeft20pxDuration2s = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeOut" } },
};

const fadeLeftVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeOut" } },
};

const fadeRight20pxDuration2s = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeOut" } },
};

const fadeRight20pxDuration15s = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

const fadeRight40pxDuration2s = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeOut" } },
};

const fadeRightVariant = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
};

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2, ease: "easeOut" } },
};

const fadeInTop20pxDuration1s = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInBottom20pxDuration2s = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
};
const fadeInBottom40pxDuration1s = {
  hidden: { opacity: 0, y: 40 }, // 40px from the bottom
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};
const fadeInBottom40pxDuration2s = {
  hidden: { opacity: 0, y: 40 }, // 40px from the bottom
  visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
};

const fadeDownVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
};

// Flip transition variants for Framer Motion
const flipLeftVariant = {
  hidden: { rotateY: 90, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 2, ease: "easeOut" },
  },
};

// Other

const ColouredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 2,
    }}
  />
);

ColouredLine.propTypes = {
  color: PropTypes.string.isRequired,
};

export {
  ColouredLine,
  fadeVariant,
  fadeLeftVariant,
  fadeLeft20pxDuration2s,
  fadeRight20pxDuration2s,
  fadeRight20pxDuration15s,
  fadeRight40pxDuration2s,
  fadeRightVariant,
  fadeUpVariant,
  flipLeftVariant,
  fadeInVariant,
  fadeInTop20pxDuration1s,
  fadeInBottom20pxDuration2s,
  fadeInBottom40pxDuration1s,
  fadeInBottom40pxDuration2s,
  fadeDownVariant,
};
