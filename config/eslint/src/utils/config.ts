import { config } from 'typescript-eslint';
import type { ConfigWithExtends } from 'typescript-eslint';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

//~ ---------------------------------------------------------------------------------------------------------------- ~//

// Config Definition Utils

/**
 * Takes in an object or generator that defines a specific eslint config
 * @param inConfig - Object or generator that defines this config
 * @returns Flattened config that can be exported to eslint
 */
export const DefineConfig = (
    inConfig: ConfigWithExtends[] | (() => FlatConfig.ConfigArray),
): FlatConfig.ConfigArray => {
    // If param is generator then run generator and flatten the response
    if (typeof inConfig === 'function') return config(...inConfig());

    // If param is config block return the flattened config
    return config(...inConfig);
};

//~ ---------------------------------------------------------------------------------------------------------------- ~//
