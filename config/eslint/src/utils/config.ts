import { config } from 'typescript-eslint';
import type { ConfigWithExtends } from 'typescript-eslint';
import type { TSESLint } from '@typescript-eslint/utils';

/**
 * Takes in an object or generator that defines a specific eslint config
 * @param inConfig - Object or generator that defines this config
 * @returns Flattened config that can be exported to eslint
 */
export const DefineConfig = <T extends ConfigWithExtends>(
    inConfig: T[] | (() => TSESLint.FlatConfig.ConfigArray),
): TSESLint.FlatConfig.ConfigArray => {
    // If param is generator then run generator and flatten the response
    if (typeof inConfig === 'function') return config(...inConfig());

    // If param is config block return the flattened config
    return config(...inConfig);
};
