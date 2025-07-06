import React from 'react';
import { AbsoluteFill } from 'remotion';

type StyledTitleProps = {
  children: React.ReactNode;
  color: string;
};

export const StyledTitle: React.FC<StyledTitleProps> = ({ children, color }) => {
  return (
    <AbsoluteFill className="bg-gray-900 items-center justify-center">
      <h1
        style={{
          color: color,
          fontSize: '18rem',
        }}
        className="font-extrabold tracking-tighter text-center"
      >
        {children}
      </h1>
    </AbsoluteFill>
  );
};
