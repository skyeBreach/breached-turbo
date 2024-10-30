import { DefineConfig } from './utils/config.js';
import { commonPatterns } from './utils/constants.js';

import { base } from './config/base.js';

/** Collect all utils into one object and export */
export const utils = {
    constants: {
        commonPatterns,
    },
    DefineConfig,
};

/** Export an object that contains all flattened configs */
export const config = {
    base,
};
