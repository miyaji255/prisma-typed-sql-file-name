// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

export default {
  // 複数エントリーポイントを指定（オブジェクト形式でも可）
  input: ["main.w.ts", "main.wo.ts"],
  output: {
    // 出力先ディレクトリ
    dir: "dist/rollup",
    // ESM 形式で出力
    format: "esm",
  },
  plugins: [
    // Node モジュール解決：mainFields と exportConditions の指定
    resolve({
      mainFields: ["browser", "module", "main"],
      // exportConditions オプションで条件を指定（rollup v13 以降）
      exportConditions: ["workerd", "worker", "browser"],
      browser: true, // ブラウザ向けの解決を優先
    }),
    // TypeScript の変換
    typescript({
      tsconfig: "tsconfig.json",
    }),
  ],
};
