/* eslint-disable @next/next/no-img-element */
import { ImageProps } from 'next/image';
import React from 'react';

const Image = ({
  src,
  alt,
  width,
  height,
  fill,
  style,
  ...props
}: ImageProps) => {
  const imageSrc = typeof src === 'string' ? src : (src as { src: string }).src;

  const fillStyle: React.CSSProperties = fill
    ? { objectFit: 'cover', width: '100%', height: '100%' }
    : {};

  const combinedStyle = { ...style, ...fillStyle };

  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      style={combinedStyle}
      {...props}
    />
  );
};

export default Image;
