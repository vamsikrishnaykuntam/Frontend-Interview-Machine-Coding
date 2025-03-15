import React, { useState, useEffect } from "react";
import styles from "../app/page.module.css";

const ProgressBar = ({ value }) => {
  const [percentage, setPercentage] = useState(value);
  useEffect(() => {
    setPercentage(Math.min(100, Math.max(value, 0)));
  }, [value]);
  return (
    <div className={styles.progressbar}>
      <span style={{ color: percentage > 49 ? "white" : "black" }}>
        {percentage.toFixed()}%
      </span>
      <div
        className={styles.progress}
        style={{ width: `${percentage.toFixed()}%` }}
        role="progressbar"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={percentage.toFixed()}
      >
      </div>
    </div>
  );
};
export default ProgressBar;
