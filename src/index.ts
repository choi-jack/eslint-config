import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import * as tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    stylistic.configs.customize({
        arrowParens: true,
        indent: 4,
        semi: true,
    }) as tseslint.ConfigWithExtends,
    {
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: ['*.js'],
                    defaultProject: './tsconfig.json',
                },
            },
        },
    },
    {
        rules: {
            'no-console': 'error',
            '@typescript-eslint/array-type': [
                'error',
                {
                    default: 'generic',
                },
            ],
            '@typescript-eslint/typedef': [
                'error',
                {
                    arrayDestructuring: true,
                    arrowParameter: true,
                    memberVariableDeclaration: true,
                    objectDestructuring: true,
                    parameter: true,
                    propertyDeclaration: true,
                    variableDeclaration: true,
                    variableDeclarationIgnoreFunction: true,
                },
            ],
            '@typescript-eslint/no-non-null-assertion': 'warn',
            '@typescript-eslint/no-inferrable-types': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/consistent-generic-constructors': [
                'error',
                'type-annotation',
            ],
            '@typescript-eslint/restrict-template-expressions': [
                'warn',
                {
                    allowAny: false,
                    allowArray: false,
                    allowBoolean: true,
                    allowNever: false,
                    allowNullish: true,
                    allowNumber: true,
                    allowRegExp: true,
                },
            ],
            '@typescript-eslint/no-base-to-string': 'warn',
            '@typescript-eslint/no-explicit-any': [
                'error',
                {
                    ignoreRestArgs: true,
                },
            ],
            '@typescript-eslint/no-invalid-void-type': 'off',
            '@typescript-eslint/no-unnecessary-type-parameters': 'off',
        },
    },
) as ReadonlyArray<tseslint.ConfigWithExtends>;
