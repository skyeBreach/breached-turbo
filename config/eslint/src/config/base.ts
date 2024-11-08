import { DefineConfig } from '../utils/config.js';

import js from '@eslint/js';
import tslint from 'typescript-eslint';
import turboPlugin from 'eslint-plugin-turbo';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';

import globals from 'globals';

/** Defines the flattened config for the base eslint config */
export const base = DefineConfig([
    // Glob patterns that this config will ignore
    {
        ignores: ['.next', 'build', 'storybook-static'],
    },

    // Base configuration for javascript and typescript
    js.configs.recommended,

    // Recommended TS config for strict type checking
    ...tslint.configs.strictTypeChecked,

    // Recommended TS config for stylistic rules
    ...tslint.configs.stylisticTypeChecked,

    // Configuration for turbo
    {
        // Import the turbo plugin
        plugins: {
            turbo: turboPlugin,
        },

        // Import/Customise the turbo plugins rule set
        rules: {
            // Include the recommended rule set for the turbo plugin
            ...turboPlugin.configs.recommended.rules,
        },
    },

    // Configuration for prettier to disable conflicting rules, imports the config and plugin
    eslintPluginPrettier,
    {
        rules: {
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                    endOfLine: 'auto',
                    printWidth: 120,
                    tabWidth: 4,
                },
            ],
        },
    },

    // Additional rules for ESLint directive comments
    comments.recommended,

    // Config general options
    {
        // Options relating to the linter process
        linterOptions: {
            // Warn when the are disable directive comments that are unused
            reportUnusedDisableDirectives: true,
        },

        // Settings related to how all files are configured for linting
        languageOptions: {
            // Specify that we are using the 'typescript-eslint' parser
            parser: tslint.parser,

            // Additional options that are passed directly to the 'typescript-eslint' parser
            parserOptions: {
                // Specifies using TypeScript APIs to generate type information for rules
                projectService: true,
            },

            // Specifies extra objects to add in the global scope during linting
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },

        // TS specific rules
        rules: {
            // Variable and parameter linting
            '@typescript-eslint/no-unused-vars': 'off',
            'no-empty-pattern': 'error',
        },
    },
]);
