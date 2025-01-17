import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-console"          : "warn",
      "max-len"             : ["error", { code: 120 }],
      "object-curly-spacing": ["error", "always"],
      "key-spacing"         : [
        "error",
        { align: "colon", beforeColon: false, afterColon: true },
      ],
    },
  },
];

export default eslintConfig;
