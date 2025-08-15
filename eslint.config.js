import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default tseslint.config([
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {projectService: true},
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.browser,
        },
        plugins: {
            react,
            'react-hooks': reactHooks, // Подключаем плагин явно
        },
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            // react.configs.flat.recommended,
        ],
        settings: {react: {version: 'detect'}},
        rules: {
            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off", // Отключаем проверку prop-types для TypeScript
            "@typescript-eslint/no-unused-vars": ["warn", {"argsIgnorePattern": "^_"}],
            "no-unused-expressions": "off",
            '@typescript-eslint/no-empty-object-type': 'off',
            'no-console': 'off',
            "no-empty-pattern": ["error", {
                "allowObjectPatternsAsParameters": true
            }],// Разрешить пустые паттерны в параметрах
            'no-constant-binary-expression': 'off',

            // React Hooks правила
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn"
        },
    },
    {
        ignores: ['dist', 'node_modules'],
    },
]);
