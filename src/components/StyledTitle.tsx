import React from 'react';
import { AbsoluteFill } from 'remotion';

type StyledTitleProps = {
  children: React.ReactNode;
  color: string;
  image?: string; // imageプロパティを追加
};

export const StyledTitle: React.FC<StyledTitleProps> = ({ children, color, image }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundImage: image ? `url(${staticFile(image)})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={image ? "" : "bg-gray-900"} items-center justify-center>
      <h1
        style={{
          color: color,
          fontSize: '18rem',
        }}
        className="font-extrabold tracking-tighter text-center font-noto-sans-jp"
      >
        {children}
      </h1>
    </AbsoluteFill>
  );
};
