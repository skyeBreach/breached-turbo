/**
 * Types used for eslint/eslint plugins when they do not provide their own
 */

/** Defines the types imported from @eslint/js, as it doesn't export any */
declare module '@eslint/js' {
    import type { Linter } from 'eslint';

    export const configs: {
        readonly recommended: { readonly rules: Readonly<Linter.RulesRecord> };
        readonly all: { readonly rules: Readonly<Linter.RulesRecord> };
    };
}

/** Defines the types imported from @eslint/eslintrc, as it doesn't export any */
declare module '@eslint/eslintrc' {
    import type { Linter } from 'eslint';

    export class FlatCompat {
        constructor({
            baseDirectory,
            resolvePluginsRelativeTo,
        }: {
            baseDirectory: string;
            resolvePluginsRelativeTo: string;
        });

        extends(extendsValue: string): Linter.Config & {
            [Symbol.iterator]: () => IterableIterator<Linter.Config>;
        };

        config(config: Linter.Config): Linter.Config & {
            [Symbol.iterator]: () => IterableIterator<Linter.Config>;
        };
    }
}

/** Defines the types imported from @eslint/compat, as it doesn't export any */
declare module '@eslint/compat' {
    import type { Linter } from 'eslint';
    import type { ConfigWithExtends } from 'typescript-eslint';

    export const fixupConfigRules: (config: string | Linter.Config) => ConfigWithExtends[];
}

/** Defines the types imported from eslint-plugin-turbo, as it doesn't export any */
declare module 'eslint-plugin-turbo' {
    import type { Linter, Rule } from 'eslint';

    export const configs: {
        recommended: {
            rules: Linter.RulesRecord;
        };
    };

    export const rules: Record<string, Rule.RuleModule>;
}

/** Defines the types imported from @eslint-community/eslint-plugin-eslint-comments, as it doesn't export any */
declare module '@eslint-community/eslint-plugin-eslint-comments/configs' {
    import type { Linter, ESLint } from 'eslint';

    export const recommended: {
        plugins: {
            '@eslint-community/eslint-comments': ESLint.Plugin;
        };
        rules: Linter.RulesRecord;
    };
}

/** Defines the types imported from eslint-plugin-security, as it doesn't export any */
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
