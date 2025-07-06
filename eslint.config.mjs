import { config as remotionConfig } from "@remotion/eslint-config-flat";
import globals from "globals";

// Remotionの基本設定に、私たちのカスタムルールを追加します
export default [
  // まず、Remotionの基本的なルールをすべて読み込みます
  ...remotionConfig,

  // 次に、新しいルールをオブジェクトとして追加します
  {
    // このルールは、以下のファイルにのみ適用されます
    files: ["tailwind.config.js", "postcss.config.js"],

    // 言語設定
    languageOptions: {
      // Node.jsのグローバル変数（moduleやrequireなど）を許可する
      globals: {
        ...globals.node,
      },
    },
  },
];