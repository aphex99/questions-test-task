import { useState } from "react";

import styles from "./ImageWrapper.module.scss";

interface ImageWrapperProps {
  src?: string;
  title: string;
}

export const ImageWrapper = ({ src, title }: ImageWrapperProps) => {
  const [hasError, setHasError] = useState(false);

  if (src && !hasError) {
    return <img src={src} alt={title} className={styles.image} onError={() => setHasError(true)} />;
  }
};
