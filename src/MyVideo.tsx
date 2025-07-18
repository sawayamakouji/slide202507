import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  spring,
  Audio, // Audioコンポーネントを追加
  staticFile, // staticFileを追加
} from 'remotion';
import { z } from 'zod';
import { zColor } from '@remotion/zod-types';
import { StyledTitle } from './components/StyledTitle';

// Zodスキーマをシナリオの形式に合わせる
export const myVideoSchema = z.object({
  scenario: z.array(
    z.object({
      type: z.string(),
      text: z.string().optional(),
      title: z.string().optional(),
      children: z.string().optional(),
      description: z.string().optional(),
      code: z.string().optional(),
      color: zColor().optional(),
      image: z.string().optional(), // imageプロパティを追加
      audio: z.string().optional(), // audioプロパティを追加
    })
  ),
  backgroundAudio: z.string().optional(), // BGM用のプロパティを追加
});

const useAppearAnimation = (delay: number) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const anim = spring({
    frame: frame - delay,
    fps,
    from: 0,
    to: 1,
    config: {
      damping: 12,
      stiffness: 100,
    },
  });

  return {
    opacity: anim,
    transform: `translateY(${(1 - anim) * 50}px)`,
  };
};

// シーン1: タイトル
const TitleScene: React.FC<{ text: string; color: string; image?: string }> = ({ text, color, image }) => {
  const animation = useAppearAnimation(0);
  return (
    <AbsoluteFill style={animation}>
      <StyledTitle color={color} image={image}>{text}</StyledTitle>
    </AbsoluteFill>
  );
};

// 汎用的な説明シーンのコンポーネント
const InfoScene: React.FC<{ title: string; children: string; image?: string }> = ({ title, children, image }) => {
  const titleAnim = useAppearAnimation(0);
  const contentAnim = useAppearAnimation(15);

  return (
    <AbsoluteFill
      style={{
        backgroundImage: image ? `url(${staticFile(image)})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: image ? undefined : 'rgb(17 24 39)', // Equivalent to bg-gray-900
      }}
      className="items-center justify-center text-center p-8"
    >
      {title && (
        <h2 style={titleAnim} className="text-8xl font-bold text-white mb-12 drop-shadow-lg">
          {title}
        </h2>
      )}
      {children && (
        <div
          style={contentAnim}
          className="text-7xl text-white font-bold max-w-5xl leading-tight drop-shadow-lg"
          dangerouslySetInnerHTML={{ __html: children }}
        />
      )}
    </AbsoluteFill>
  );
};

const CodeScene: React.FC<{ description: string; code: string; image?: string }> = ({ description, code, image }) => {
  const descAnim = useAppearAnimation(0);
  const codeAnim = useAppearAnimation(15);

  return (
    <AbsoluteFill
      style={{
        backgroundImage: image ? `url(${staticFile(image)})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={`${image ? "" : "bg-gray-900"} items-center justify-center text-center p-8`}>
      <p style={descAnim} className="text-7xl text-white mb-12 font-bold drop-shadow-lg text-center font-noto-sans-jp">
        {description}
      </p>
      <code
        style={codeAnim}
        className="bg-gray-800 border-2 border-gray-700 text-emerald-300 p-8 rounded-lg text-6xl font-mono font-noto-sans-jp text-center"
      >
        {code}
      </code>
    </AbsoluteFill>
  );
};

export const MyVideo: React.FC<z.infer<typeof myVideoSchema>> = ({ scenario, backgroundAudio }) => {
  const SCENE_DURATION = 100;

  return (
    <AbsoluteFill>
      {backgroundAudio && <Audio src={staticFile(backgroundAudio)} loop volume={0.3} />}
      {scenario.map((scene, index) => {
        return (
          <Sequence key={index} from={index * SCENE_DURATION} durationInFrames={SCENE_DURATION}>
            {scene.audio && <Audio src={staticFile(scene.audio)} />}
            {(() => {
              switch (scene.type) {
                case 'title':
                  return scene.text && scene.color ? (
                    <TitleScene text={scene.text} color={scene.color} image={scene.image} />
                  ) : null;
                case 'info':
                  return (
                    <InfoScene title={scene.title} children={scene.children} image={scene.image} />
                  );
                case 'code':
                  return scene.description && scene.code ? (
                    <CodeScene description={scene.description} code={scene.code} image={scene.image} />
                  ) : null;
                default:
                  return null;
              }
            })()}
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};