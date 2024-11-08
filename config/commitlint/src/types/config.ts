import type { ParserPreset, UserConfig } from '@commitlint/types';

//~ ---------------------------------------------------------------------------------------------------------------- ~//
//~ Config Definition Type Defs

/** Type definition for an extended version of the {@link UserConfig} that includes the util functions */
export interface IExtendedUserConfig extends UserConfig {
    utils?: Record<string, (...args: unknown[]) => unknown>;
}

/** Type definition that defines a set of options for a config file */
export interface IConfigOptions {
    extends?: string[];
    formatter?: string;
    parserPreset?: string | ParserPreset | Promise<ParserPreset>;
    helpUrl?: string;
    defaultIgnores?: boolean;
}

//~ ---------------------------------------------------------------------------------------------------------------- ~//
//~ Config Object Type Defs

/** Type definition for the exported config objects */
export interface IConfigs {
    base: IExtendedUserConfig;
}

//~ ---------------------------------------------------------------------------------------------------------------- ~//
