import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

export default tseslint.config(
    {
        ignores: ["dist", "build", "node_modules"]
    },
    js.configs.recommended,
    tseslint.configs.recommended,
    {
        files: ["**/*.{ts,tsx,js}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
        ],
        plugins: {
            "react": pluginReact,
            "react-hooks": pluginReactHooks
        },
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser
            }
        },
        rules: {
            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off", // Отключаем проверку prop-types для TypeScript
            "@typescript-eslint/no-unused-vars": ["warn", {"argsIgnorePattern": "^_"}],
            "no-unused-expressions": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            '@typescript-eslint/no-empty-object-type': 'off',
            'no-console': 'off',
            "no-empty-pattern": ["error", {
                "allowObjectPatternsAsParameters": true }] ,// Разрешить пустые паттерны в параметрах
            'no-constant-binary-expression': 'off'
        }
    }
);