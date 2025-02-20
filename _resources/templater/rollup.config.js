import typescript from '@rollup/plugin-typescript';
import dotenvPlugin from 'rollup-plugin-dotenv';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const userscripts = ['env', 'gemini', 'html_encode', 'title_case'];

export default userscripts.map((script) => ({
    input: `src/${script}.ts`,
    output: { format: 'cjs', dir: '../shared/scripts' },
    plugins: [
        json(),
        commonjs(),
        typescript(),
        nodeResolve(),
        dotenvPlugin(),
        terser({ format: { comments: false } }),
    ],
    external: ['obsidian'],
}));
