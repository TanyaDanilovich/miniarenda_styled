
module.exports = {
    globals: {
        module: "readonly"  // ← Принудительно объявляем `module`
    },
    "env": {
        "browser": true,
        "es2021": true,
        node: true
    },
    settings: {
        react: {
            version: "19.1.0"
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
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
        // "react-hooks/rules-of-hooks": "error",
        // "react-hooks/exhaustive-deps": "warn"
    }
}
