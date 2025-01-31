import type { ConfigWithExtends } from 'typescript-eslint';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

import { config as _DefineConfig } from 'typescript-eslint';
import { FlatCompat } from '@eslint/eslintrc';

/* ------------------------------------------------------------------------------------------------------------------ */
// TypeDefs

/** Utility type that groups all config arrays types that {@link _DefineConfig} can parametrize */
export type ConfigArray = ConfigWithExtends[] | FlatConfig.ConfigArray;

/** Utility type that groups all generating function types that return {@link ConfigArray} */
export type ConfigArrayGenerator = (() => ConfigWithExtends[]) | (() => FlatConfig.ConfigArray);

/* ------------------------------------------------------------------------------------------------------------------ */
// Config Definition Utils

/**
 * Extends the provided {@link _DefineConfig|define flat config} with basic generator function support.
 *
 * @param config -  Array of {@link ConfigArray|config(s)} or a {@link ConfigGenerator|generator function} that returns
 *                  a config array
 *
 * @returns         The strictly typed eslint {@link FlatConfig.ConfigArray|flat config} object
 */
export const DefineConfig = (config: ConfigArray | ConfigArrayGenerator): FlatConfig.ConfigArray => {
    // For config generator, call the generator inside the provided config flattener
    if (typeof config === "function") return _DefineConfig(...config())

    // For config object array, pass objects to flattener by spread operator
    return _DefineConfig(...config);
};

/**
 * Creates ESLint's 'eslintrc' compatibility class. This class allows for easy migration from the old 'eslintrc' style
 * to the new 'flat-config' style config objects.
 */
export const Compat = new FlatCompat({
    baseDirectory: import.meta.dir,
    resolvePluginsRelativeTo: import.meta.dir,
})

/* ------------------------------------------------------------------------------------------------------------------ */
