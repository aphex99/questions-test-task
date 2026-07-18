import { useState } from "react";

import clsx from "clsx";

import { avatarDefault } from "@/shared/assets";

import styles from "./ImageWrapper.module.scss";

interface ImageWrapperProps {
  className?: string;
  src?: string;
  title: string;
  avatar?: boolean;
}

export const ImageWrapper = ({ className, src, title, avatar }: ImageWrapperProps) => {
  const [hasError, setHasError] = useState(false);

  if (src && !hasError) {
    return <img src={src} alt={title} className={styles.image} onError={() => setHasError(true)} />;
  }

  if (avatar) {
    return <img src={avatarDefault} alt={title} className={clsx(styles.image, className)} />;
  }
};
