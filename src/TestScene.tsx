import React from 'react';
import { AbsoluteFill, staticFile } from 'remotion';

export const TestScene: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundImage: `url(${staticFile('/images/download.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="items-center justify-center"
    >
      <h1
        style={{
          fontSize: '10rem',
          color: 'white',
        }}
        className="font-bold text-center"
      >
        テスト
      </h1>
    </AbsoluteFill>
  );
};