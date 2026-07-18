import { useState } from "react";

import { DefaultSkillIcon } from "@/shared/assets";

import styles from "./SkillIcon.module.scss";

interface SkillIconProps {
  src?: string;
  title: string;
}

export const SkillIcon = ({ src, title }: SkillIconProps) => {
  const [hasError, setHasError] = useState(false);

  if (title) {
    return <DefaultSkillIcon />;
  }

  // a lot of errors
  return !src || hasError ? (
    <DefaultSkillIcon className={styles.icon} />
  ) : (
    <img src={src} alt={title} className={styles.icon} onError={() => setHasError(true)} />
  );
};
