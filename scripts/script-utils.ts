/** ====================================================================================================================
 * @categoryDescription Clean Workspace
 *
 *
 *
 * @author @skyeBreach
 *
 * ---------------------------------------------------------------------------------------------------------------------
 *
 * - TODO: Reformat and sort the file header out
 * - TODO: Get the basic idea implemented
 * - TODO: Add args and flags to this header
 * - TODO: Fix the module for this header
 * - TODO: Fix the category for this header
 * - TODO: Convert into tooling module
 * - TODO: Add in proper error logging with something like Pino
 *
 * ---------------------------------------------------------------------------------------------------------------------
 *
 * @showCategories
 * @module      development-utility-script
 *
===================================================================================================================== */

import type { PackageJson } from 'pkg-types';
import type { Schema as TTurboConfig } from '@turbo/types';

import * as fs from 'fs';
import * as path from 'path';

/* ------------------------------------------------------------------------------------------------------------------ */
// Workspace Root Path Utilities

// TODO: Potentially extend this to looking for 'package.json' and '.git' folder
/**
 * Gets the path for the workspaces root directory, by attempting to search upwards for the 'turbo.json' file
 *
 * @param cwd The current work directory to start searching up for the workspace root
 * @returns The string path if a root could be found, false otherwise
 */
export const GetWorkspaceRoot = (cwd: string): string | false => {
    // Start dir should be defaulted to the current process.cwd to avoid issues
    const startDir = cwd || process.cwd();

    // Use the search up function with a predicate to check for a turbo.json without an extends entry
    const rootDir = FileTree.SearchUp(
        'turbo.json',
        startDir,
        (content: string) => {
            const parsedTurboConfig = JSON.parse(content) as TTurboConfig;
            return !(parsedTurboConfig && "extends" in parsedTurboConfig);
        }
    );

    // Return the directory, or false if not found
    return rootDir || false;
}

/**
 * Gets the validated and parsed package.json file from the root directory, if one exists
 *
 * @param cwd The current work directory to start searching up for the workspace root
 * @returns If the package.json file exists in the root directory then the contents parsed as a json, false otherwise
 */
export const GetRootPackageJSON = (cwd: string): PackageJson | false => {
    // Find workspace root path
    const rootPath = GetWorkspaceRoot(cwd);

    // Base-case'd short path exits when no root path or root PackageJSON found
    if (!rootPath) return false;
    if (!FileTree.SearchDirectory('package.json', rootPath)) return false;

    // Parse the found 'package.json' file, using 'pkg-types' type
    const foundPackageJson: PackageJson = JSON.parse(fs.readFileSync(path.join(rootPath, 'package.json'), 'utf-8'));

    // ? Should we do some validation or sanitization on the found file ?

    // return the found and validated
    return foundPackageJson;
}

/* ------------------------------------------------------------------------------------------------------------------ */
// File System Utilities

/**
 * The namespace containing all script utilities relating to file tree operations
 */
export namespace FileTree {
    /**
     * Simple utility function that searches a single directory path for a given valid 'target' file.
     *
     * @param target The target file name to search for
     * @param searchDir The directory to search for a valid 'target' file
     * @param Predicate An optional predicate function to validate any potentially found target files
     * @returns True if a valid 'target' file exists within the provided search directory, false otherwise
     */
    export const SearchDirectory = (
        target: string,
        searchDir: string,
        Predicate?: (content: string) => boolean
    ): boolean => {
        const targetTestPath = path.join(searchDir, target);

        // Base case'd short path exit when no target exists
        if(!fs.existsSync(targetTestPath)) return false;

        // If we have file but predicate check fails then target not found
        if(Predicate && !Predicate(fs.readFileSync(targetTestPath).toString())) return false;

        // When all conditions pass we have found file
        return true;
    }

    /**
     * Iteratively searches up the the file tree from a defined point (cwd) for a valid 'target' file.
     *
     * @param target
     * @param cwd The current working directory to start the search in
     * @param Predicate An optional predicate function to validate any potentially found target files
     * @returns The directory of the target if one was found, false otherwise
     */
    export const SearchUp = (target: string, cwd: string, Predicate?: (content: string) => boolean): string | false => {
        // Store const root path of the search directory to act as a final stopping point
        const root = path.parse(cwd).root;

        // Do initial base case check to see if the current working directory contains valid target
        let bFound: boolean = SearchDirectory(target, cwd, Predicate);
        if (!bFound && cwd == root) return false;

        // Keep current search dir as primary iteration limiter and return val
        let searchDir: string = cwd;

        // Iterate through upwards until we find the target or hit the drive root
        while (!bFound && searchDir !== root) {
            // Traverse up one directory level
            searchDir = path.dirname(searchDir);

            // Check new searchDir for valid target
            bFound = SearchDirectory(target, searchDir, Predicate);

            // Break when we found a valid target
            if (bFound) break;
        }

        // If found then return dir where target found, else false to indicate failure
        return bFound ? searchDir : false;
    }
}

/* ------------------------------------------------------------------------------------------------------------------ */
