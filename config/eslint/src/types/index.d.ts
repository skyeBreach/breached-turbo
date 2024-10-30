/// <reference types="./eslint.d.ts" />

import type { ConfigWithExtends } from 'typescript-eslint';

import type { TSESLint } from '@typescript-eslint/utils';

/** Define the type for the utils we want to export from the package */
export declare const utils: {
    DefineConfig: <T extends ConfigWithExtends>(
        inConfig: T[] | (() => TSESLint.FlatConfig.ConfigArray),
    ) => TSESLint.FlatConfig.ConfigArray;
};

/** Define the type for the configs we are exporting from the package */
export const config: {
    base: TSESLint.FlatConfig.ConfigArray;
};
