"use client";
import styles from "./styles.module.css";
import { useState } from "react";
import { Navigation } from "@/features/navigation";
import { Hello } from "@/widgets/hello";

export const MainPage = () => {
  const [currentTabValue, setCurrentTabValue] = useState(0);

  const handleTabChange = (value: number) => {
    setCurrentTabValue(value);
  };

  const placeholder = (
    <h1
      style={{
        width: "100%",
        color: "var(--color-white)",
        alignSelf: "flex-start",
        textAlign: "center",
        padding: 20,
      }}
    >
      Coming soon
    </h1>
  );

  const components = [
    { render: <Hello /> },
    { render: placeholder },
    { render: placeholder },
    { render: placeholder },
  ];

  return (
    <div className={styles.page}>
      <Navigation
        list={[
          { label: "_hello", value: 0 },
          { label: "_about", value: 1 },
          { label: "_skills", value: 2 },
          { label: "_work", value: 3 },
        ]}
        value={currentTabValue}
        onChange={(value) => handleTabChange(value)}
      />
      <main className={styles.main}>{components[currentTabValue].render}</main>
      <div className={styles.dock}></div>
    </div>
  );
};
