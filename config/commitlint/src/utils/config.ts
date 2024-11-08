import _ from 'lodash';
import { defaultConfigOptions } from './constants.js';
import type { IConfigOptions, IExtendedUserConfig } from 'src/types/config.d.ts';

//~ ---------------------------------------------------------------------------------------------------------------- ~//

// Config Definition Utilities

/**
 * Flattens a multiple {@link IExtendedUserConfig} objects into a single merged {@link IExtendedUserConfig} object
 * @param configs - One or more {@link IExtendedUserConfig} objects to flatten and merge
 * @returns A flattened {@link IExtendedUserConfig} object
 */
export const FlattenConfig = (configs: IExtendedUserConfig[]): IExtendedUserConfig => {
    // If the config array is malformed then throw error
    if (configs.length <= 0) {
        throw new Error(
            `Failed to Flatten Config: An empty array of configs was passed to commitlint's DefineConfig function!`,
        );
    }

    // If the config array only contains one object it is already flattened
    if (configs.length === 1) return configs[0];

    // Pass the config array through a lodash reducer to flatten
    return _.reduce(
        configs,
        (flattened: IExtendedUserConfig, value: IExtendedUserConfig): IExtendedUserConfig => {
            // Destructure all values we need to modify/merge, keep rest to shove back into the end config
            const {
                extends: extendsArray,
                rules: rulesConfig,
                prompt: promptConfig,
                ignores: ignoresArray,
                plugins: pluginArray,
                utils: utilsObject,
                ...restConfig
            } = value;

            // Format previous extends value into a string interface, using a function invocation
            const configExtends: string[] = (() => {
                return Array.isArray(flattened.extends)
                    ? flattened.extends
                    : _.isString(flattened.extends)
                      ? [flattened.extends]
                      : [];
            })();

            // Return the formatted and flattened UserConfig
            return {
                extends: configExtends.concat(extendsArray ?? []),
                rules: { ...flattened.rules, ...rulesConfig },
                prompt: _.merge(flattened.prompt, promptConfig) ?? {},
                ignores: flattened.ignores?.concat(ignoresArray ?? []) ?? [],
                plugins: flattened.plugins?.concat(pluginArray ?? []) ?? [],
                utils: _.merge(flattened.utils, utilsObject) ?? {},
                ...restConfig,
            };
        },
        {},
    );
};

/**
 * Utility function that converts a set of config options and {@link IExtendedUserConfig}'s to a single
 * flat {@link IExtendedUserConfig}.
 * @param options - Set of config options to define the base settings for commitlint
 * @param configs - One or more {@link IExtendedUserConfig} objects to flatten into commitlint main config
 * @returns A flattened and sanitised {@link IExtendedUserConfig} object
 */
export const DefineConfig = (options: IConfigOptions, ...configs: IExtendedUserConfig[]): IExtendedUserConfig => {
    // Flatten the provided UserConfig array into a single UserConfig
    const flatConfig: IExtendedUserConfig = FlattenConfig(configs);

    // Merge the flattened config with the provided options to properly sanitise the UserConfig
    const sanitisedConfig: IExtendedUserConfig = _.merge({}, flatConfig, {
        extends: options.extends,
        formatter: options.formatter ?? defaultConfigOptions.formatter,
        parserPreset: options.parserPreset ?? defaultConfigOptions.parserPreset,
        helpUrl: options.helpUrl ?? defaultConfigOptions.helpUrl,
        defaultIgnores: options.defaultIgnores ?? defaultConfigOptions.defaultIgnores,
    });

    return sanitisedConfig;
};

//~ ---------------------------------------------------------------------------------------------------------------- ~//
