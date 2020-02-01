import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';

import sass from 'rollup-plugin-sass';
import svelte from 'rollup-plugin-svelte';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

import path from 'path';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'postcss';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';


const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) || onwarn(warning);
const dedupe = importee => importee === 'svelte' || importee.startsWith('svelte/');

const preprocess = sveltePreprocess({
	scss: {
		data: `@import 'scss/config.scss';`,
		includePaths: ['src'],
	},
	postcss: {
		plugins: [autoprefixer],
	},
});

const aliases = alias({
	resolve: ['.js', '.svelte'],
	entries: [
		{ find: '@', replacement: path.resolve(__dirname, 'src') },
	]
});

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			sass({
				output: 'static/global.css',
				processor: css =>
					postcss(dev
						? []
						: [
							autoprefixer({
								grid: "autoplace"
							}),
							cssnano()
						]
					)
					.process(css, {
						from: 'undefined',
						map: dev
						? {
							inline: true
						} : false 
					})
					.then(result => result.css),
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: true,
				preprocess
			}),
			aliases,
			resolve({
				browser: true,
				dedupe
			}),
			commonjs(),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				runtimeHelpers: true,
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],

		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				generate: 'ssr',
				dev,
				preprocess
			}),
			aliases,
			resolve({
				dedupe
			}),
			commonjs()
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),

		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			commonjs(),
			!dev && terser()
		],

		onwarn,
	}
};
