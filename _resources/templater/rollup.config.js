import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const userscripts = ['env.ts', 'html_encode.ts', 'title_case.ts'];

export default userscripts.map((script) => ({
    input: `src/${script}`,
    output: { format: 'cjs', dir: '../shared/scripts' },
    plugins: [json(), terser(), commonjs(), typescript(), nodeResolve()],
}));
