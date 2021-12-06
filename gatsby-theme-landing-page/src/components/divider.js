import React from "react";
import * as styles from "./divider.module.css";

const dividerSize = {
  short: styles.short,
  medium: styles.half,
  half: styles.half,
  long: styles.long,
  full: styles.full,
};

export default function Divider({ size }) {
  const widthStyle = dividerSize[size] || styles.half;
  return <div className={`${styles.divider} ${widthStyle}`} />;
}