"use client";
import React, { useState, useEffect } from "react";
import ProgressBar from "@/components/ProgressBar";
import styles from "./page.module.css";

export default function Home() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setValue((prev) => prev + 1);
    }, 100);
  }, []);
  return (
    <div className={styles.container}>
      <span> Progress Bar </span>
      <ProgressBar value={value} />
    </div>
  );
}
