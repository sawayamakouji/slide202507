import { Composition } from "remotion";
import { MyVideo, myVideoSchema } from "./MyVideo";
import "./index.css";
import scenario from "../public/scenario.json"; // public/scenario.json を直接インポート

export const RemotionRoot = () => {
  const SCENE_DURATION = 100; // 各シーンの長さを定義

  return (
    <>
      <Composition
        id="MyVideo"
        component={MyVideo}
        durationInFrames={scenario.scenario.length * SCENE_DURATION} // シーン数に応じて長さを変更
        fps={30}
        width={1920}
        height={1080}
        schema={myVideoSchema}
        defaultProps={{ scenario: scenario.scenario }}
      />
    </>
  );
};
