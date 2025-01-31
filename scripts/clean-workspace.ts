/** ====================================================================================================================
 * @categoryDescription Script Utilities
 *
 *
 * @author @skyeBreach
 *
 * ---------------------------------------------------------------------------------------------------------------------
 *
 * - TODO: Write header description
 * - TODO: Fix the module for this header
 * - TODO: Fix the category for this header
 *
 * ---------------------------------------------------------------------------------------------------------------------
 *
 * @showCategories
 * @module      development-utility-script
 *
===================================================================================================================== */

// TODO: Only pull certain things from lodash
// TODO: Should check if this script was directly called before allowing it, or maybe just to govern how it runs
// TODO: Move certain things to a util when the 'tooling-utils' package is up and running

import { $, Glob } from 'bun';
import { parseArgs } from "util";
import _ from 'lodash';

import { readdir } from "node:fs/promises";
import { GetWorkspaceRoot } from './script-utils';
import * as util from 'util';

/* ------------------------------------------------------------------------------------------------------------------ */
// Script Configuration

/**
 * Array of glob expressions to ignore when cleaning the workspace.
 *
 * @remarks
 * When the script finds a directory that is defined within this object it will refuse to delete it or any children
 * the path may have.
 *
 * The ignored array,
 * - Maintains its order.
 * - Is checked prior to and overrides the {@link included} array.
 * - Does not support 'negation' glob patterns.
 * - Stops the recursive algorithm from being called on directory paths it contains.
 *
 * @author skyeBreach <https://www.github.com/skyebreach>
 * @internal
 */
const ignored: string[] = [

];

/**
 * Array of glob expressions strings to include and clean when cleaning the workspace.
 *
 * @remarks
 * If the script finds a path that matches one of the glob expressions provided by this object it will be deleted by the
 * script, as long as the path does not match any expression provided in {@link ignored} as it takes precedent.
 *
 * The included array
 * - Must contain at least one valid pattern.
 * - Maintains its order.
 * - Is checked after and is overridden by the {@link ignored} array.
 * - Does not support 'negation' glob patterns.
 *
 * @author skyeBreach <https://www.github.com/skyebreach>
 * @internal
 */
const included: string[] = [
    '',
    '        ',
    'TITS'
];

/* ------------------------------------------------------------------------------------------------------------------ */
// Argument Parsing and Validation

/**
 *
 */
const { values, positionals } = parseArgs({
    args: Bun.argv.slice(2),
    options: {
        verbose: {
            type: 'boolean',
            default: false,

        }
    },
    strict: true,
    allowPositionals: false,
});

/* ------------------------------------------------------------------------------------------------------------------ */
// Configuration Validation and Sanitization

export class GlobArray {
    private _globs: Glob[] = [];
    private _patterns: string[] = [];
    private _length: number = 0;

    private _flags: { bRecursive: boolean } = {
        bRecursive: false,
    };

    constructor(stringArray: string[]){
        // Remove any 'falsy' strings, as they wont convert correctly, and store the string array
        this._patterns = stringArray.filter((pattern: string) => {
            // If string is truthy its not empty
            return !!pattern;
        });

        // Before setting globs, define the length based off the non-validated patterns (will be reset later)
        this._length = stringArray.length;

        // No need to map if the string array only had false-ish strings
        if (this._patterns.length !== 0) {
            // Map each string element to a new indexed 'Glob' element
            this._globs = this._patterns.map<Glob>((pattern: string) => {
                // TODO: Add a validation step, to check if each pattern is a glob

                // When pattern has been successfully validated return the glob object for it
                return new Glob(pattern);
            });
        }
    }

    public get length(): number {
        return this._length;
    }

    public Match (pattern: string): boolean {
        return false;
    }

    public ScanSync (): IterableIterator<string> {
        const testIterator: IterableIterator<string> = {
            next: (...[value]: [] | [any]): IteratorResult<string, any> => {

            },
            [Symbol.iterator]() {
              return this;
            },
        };

        return testIterator;
    };

    public Scan (): AsyncIterableIterator<string> {

    };
}

// TODO: Comment
/**
 *
 * @param inArr
 * @returns
 */
const StringArrToGlobArr = (inArr: string[]): Glob[] => {
    // Remove any 'empty' or 'empty-ish' strings, as they wont convert correctly
    const globArray = inArr.filter((element: string) => element);

    // No need to map if the initial array only had false-ish strings
    if (globArray.length == 1) return [];

    // Map each string element to a new 'Glob' element
    return globArray.map<Glob>((element: string) => new Glob(element));
}

// TODO: Comment
/**
 *
 */
const parsedConfig: {
    flags: {
        [flag: string]: boolean | string
    };
    ignored: Glob[];
    included: Glob[];
} = {
    flags: {
        bVerbose: values.verbose
    },
    ignored:    StringArrToGlobArr(ignored),
    included:   StringArrToGlobArr(included),
};

// We have no need to run a cleaning script if there are no configured object glob paths to actually clean
if (parsedConfig.included.length == 0) {
    console.log(`No paths/files are configured to be cleaned by this script!`)
    process.exit(1);
}

/* ------------------------------------------------------------------------------------------------------------------ */
// Configuration Value Debug Printing

// Print the scripts configuration vars and objects, only if we are being verbose
if (parsedConfig.flags.bVerbose) {
    console.log('\n--------------------------------------------------------------------------------------------------');
    console.log('\nParsed Config:')
    console.log(parsedConfig)
    console.log('--------------------------------------------------------------------------------------------------\n');
}

/* ------------------------------------------------------------------------------------------------------------------ */
// Workspace Scanning

const PathMatchesGlobArray = (path: string) => {

}

// The root path for this workspace/monorepo
const workspaceRoot = GetWorkspaceRoot(process.cwd());

//const testGlob()

// We have no need to run a cleaning script if there are no configured object glob paths to actually clean
if (!workspaceRoot) {
    console.log(`No paths/files are configured to be cleaned by this script!`)
    process.exit(1);
}

const glob = new Glob("**/*.tsx");
const files = await readdir(workspaceRoot);
const globs = new GlobArray(included);
console.log(globs)


/* ------------------------------------------------------------------------------------------------------------------ */
