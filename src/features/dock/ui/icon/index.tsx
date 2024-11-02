import { paths } from "./svg";
export type Icon = keyof typeof paths;

interface DockIconProps {
  icon: Icon;
}

export const DockIcon = ({ icon }: DockIconProps) => {
  return (
    <svg viewBox="0 0 24 24" role="img">
      <path d={paths[icon]} />
    </svg>
  );
};
