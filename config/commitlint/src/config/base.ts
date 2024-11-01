import { DefineConfig } from '../utils/config.js';
import type { UserConfig } from '@commitlint/types';
import configConventional from '@commitlint/config-conventional';
import configPnpmScopes from '@commitlint/config-pnpm-scopes';

/** Defines the {@link UserConfig} object for the base commitlint config */
const base = DefineConfig(
    // Options object that contains the basic settings for commitlint
    {},

    // Conventional that sets a baseline rule set for enforcing conventional commits
    configConventional,

    // Configuration that provides the package (pnpm workspace) names for the scope
    configPnpmScopes,

    // Define a custom config to overwrite the previously imported configs
    {
        // Custom rules that will override any previously defined rules
        rules: {},

        // Custom prompt defs that will override any previously defined prompts
        prompt: {},
    },
);

export default base;
