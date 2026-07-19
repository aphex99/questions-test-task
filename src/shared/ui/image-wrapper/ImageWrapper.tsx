import { useState } from "react";

import clsx from "clsx";

import { avatarDefault, jslogo } from "@/shared/assets";

import styles from "./ImageWrapper.module.scss";

interface ImageWrapperProps {
  className?: string;
  src?: string;
  title: string;
  avatar?: boolean;
  questionLogo?: boolean;
}

export const ImageWrapper = ({
  className,
  src,
  title,
  avatar,
  questionLogo,
}: ImageWrapperProps) => {
  const [hasError, setHasError] = useState(false);

  if (src && !hasError) {
    return <img src={src} alt={title} className={styles.image} onError={() => setHasError(true)} />;
  }

  if (questionLogo) {
    return <img src={jslogo} alt={title} className={clsx(styles.image, className)} />;
  }
  if (avatar) {
    return <img src={avatarDefault} alt={title} className={clsx(styles.image, className)} />;
  }
};
