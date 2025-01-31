
// TODO: Update file header to be useful
/**
 * Types used for eslint/eslint plugins when they do not provide their own
 */


// TODO: Update module comment to actually be useful
// TODO: Comment the type impl better
/** Defines the types imported from the @eslint/js module */
declare module '@eslint/js' {
    import type { Linter } from 'eslint';

    export const configs: {
        readonly recommended: { readonly rules: Readonly<Linter.RulesRecord> };
        readonly all: { readonly rules: Readonly<Linter.RulesRecord> };
    };
}

/**
 * Defines the types used in converting the old-style `.eslintrc` objects to the new flat-config style.
 * imported from the @eslint/eslintrc module.
 */
declare module '@eslint/eslintrc' {
    import type { Linter } from 'eslint';

    /** TypeDef associated with a flat config, and its templated iterator */
    type IterableConfig = Linter.Config & {
        [Symbol.iterator]: () => IterableIterator<Linter.Config>
    };

    export class FlatCompat {
        constructor({
            baseDirectory,
            resolvePluginsRelativeTo,
        }: {
            baseDirectory: string;
            resolvePluginsRelativeTo: string;
        });

        /**
         * Translates an '.eslintrc' style config into a flattened config object.
         *
         * @param  eslintrcConfig - The '.eslintrc' config object to flatten
         * @returns A single iterable flat config file formed from the inputted '.eslintrc' file
         */
        config(eslintrcConfig: Linter.Config): TIterableConfig;

        /**
         * Converts a '.eslintrc' object(s) `extends` object into an array or iterable flat configs.
         *
         * @param configsToExtend - Array of `extend` names to convert
         * @returns Array of iterable flat config objects, merged from the list of config extension names
         */
        extends(configsToExtend: string): TIterableConfig[];
    };
};


// TODO: Update module comment to actually be useful
// TODO: Comment the type impl better
/** Defines the types imported from the eslint-plugin-turbo module */
declare module 'eslint-plugin-turbo' {
    import type { Linter, Rule } from 'eslint';

    export const configs: {
        recommended: {
            rules: Linter.RulesRecord;
        };
    };

    export const rules: Record<string, Rule.RuleModule>;
}


// TODO: Update module comment to actually be useful
// TODO: Comment the type impl better
/** Defines the types imported from the @eslint-community/eslint-plugin-eslint-comments module */
declare module '@eslint-community/eslint-plugin-eslint-comments/configs' {
    import type { Linter, ESLint } from 'eslint';

    export const recommended: {
        plugins: {
            '@eslint-community/eslint-comments': ESLint.Plugin;
        };
        rules: Linter.RulesRecord;
    };
}


// TODO: Update module comment to actually be useful
// TODO: Comment the type impl better
/** Defines the types imported from the eslint-plugin-security module */
declare module 'eslint-plugin-security' {
    import type { Linter } from 'eslint';
    import type { ConfigWithExtends } from 'typescript-eslint';

    export const configs: {
        recommended: {
            [Symbol.iterator]: () => IterableIterator<ConfigWithExtends>;
            rules: Linter.RulesRecord;
        };
    };
}
