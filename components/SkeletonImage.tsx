"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

type SkeletonImageProps = Omit<ImageProps, "onLoad"> & {
  skeletonClassName?: string;
};

export default function SkeletonImage({
  skeletonClassName = "",
  className = "",
  alt,
  ...props
}: SkeletonImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Shimmer placeholder */}
      {!loaded && (
        <div
          className={`absolute inset-0 bg-[var(--color-beige-dark)] animate-pulse ${skeletonClassName}`}
        />
      )}
      <Image
        {...props}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}
