"use client";
import { NavigationList } from "./list";
import { NavigationTab } from "./tab";
import type { Tab } from "../api/types";

interface NavigationProps {
  list: Tab[];
  value: number;
  onChange: (value: number) => void;
}

export const Navigation = ({ list, value, onChange }: NavigationProps) => {
  const handleTabClick = (value: number) => {
    onChange(value);
  };

  return (
    <NavigationList>
      {list.map((tab) => (
        <NavigationTab
          key={tab.value}
          label={tab.label}
          value={tab.value}
          isActive={value === tab.value}
          onClick={handleTabClick}
        />
      ))}
    </NavigationList>
  );
};
