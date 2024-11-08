import type { IConfigOptions } from 'src/types/config';

//~ ---------------------------------------------------------------------------------------------------------------- ~//

// Config Defaults

/** Config object that sets the default options for all DefineConfig function invocations */
export const defaultConfigOptions: IConfigOptions = {
    // Commitlint can output the issues encountered in different formats, if necessary
    formatter: '@commitlint/format',

    // The parser preset used to parse commit messages
    parserPreset: 'conventional-changelog-conventionalcommits',

    // Whether commitlint uses the default ignore rules
    helpUrl: 'https://www.skyebreaach.com',

    // Custom URL to show upon failure
    defaultIgnores: true,
};

//~ ---------------------------------------------------------------------------------------------------------------- ~//
