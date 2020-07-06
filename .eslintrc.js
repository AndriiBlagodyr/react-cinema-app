module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
		node: true
	},
	extends: ['airbnb', 'prettier', 'node'],
	plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y', 'node', 'import'],
	globals: {},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['src']
			}
		}
	},
	rules: {
		'max-len': ['warn', 120],
		'prettier/prettier': 'error',
		'spaced-comment': 'off',
		'no-console': 'warn',
		'consistent-return': 'off',
		'func-names': 'off',
		'object-shorthand': 'off',
		'no-process-exit': 'off',
		'no-param-reassign': 'off',
		'no-return-await': 'off',
		'no-underscore-dangle': 'off',
		'class-methods-use-this': 'off',
		'no-unused-vars': ['warn', { argsIgnorePattern: 'req|res|next|val' }],
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'no-shadow': ['warn', { builtinGlobals: false, hoist: 'functions', allow: [] }],
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'import/order': [2, { groups: ['builtin', 'external'], 'newlines-between': 'always' }],
		'react/jsx-props-no-spreading': 'off',
		'multiline-ternary': ['error', 'never'],
		'space-infix-ops': [2],
		'import/prefer-default-export': 'off',
		'react/jsx-indent': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/prefer-stateless-function': [2],
		'no-debugger': 'error'
	}
};
