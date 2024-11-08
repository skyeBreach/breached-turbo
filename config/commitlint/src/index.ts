import base from './config/base.js';
import type { UserConfig } from '@commitlint/types';
import type { IConfigs } from './types/config.d.ts';

//~ ---------------------------------------------------------------------------------------------------------------- ~//

// Config Type Def Exports

/** Export all config types */
export type { IExtendedUserConfig, IConfigOptions, IConfigs } from './types/config.d.ts';

//~ ---------------------------------------------------------------------------------------------------------------- ~//

// Config exports

/** Export all {@link UserConfig} objects as a collective object */
export const configs: IConfigs = {
    base,
};

//~ ---------------------------------------------------------------------------------------------------------------- ~//
