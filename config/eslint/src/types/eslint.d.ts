/**
 * Types used for eslint/eslint plugins when they do not provide their own
 */

/** Defines the types imported from the @eslint/js module */
declare module '@eslint/js' {
    import type { Linter } from 'eslint';

    export const configs: {
        readonly recommended: { readonly rules: Readonly<Linter.RulesRecord> };
        readonly all: { readonly rules: Readonly<Linter.RulesRecord> };
    };
}

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
