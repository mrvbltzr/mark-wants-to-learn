import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const vaults = [
    {
        dir: '../software-engineering',
        inputs: ['src/header_template.ts', 'src/title_case.ts'],
        replacer: {
            __TITLE__: 'Software Engineering 101: Plan and Execute Better Software',
            __URL__: 'https://www.udemy.com/course/software-engineering-101/',
        },
    },
];

export default vaults.flatMap((vault) =>
    vault.inputs.map((input) => ({
        input,
        output: { format: 'cjs', dir: `${vault.dir}/scripts` },
        plugins: [
            commonjs(),
            typescript(),
            nodeResolve(),
            replace({ preventAssignment: true, values: vault.replacer }),
        ],
    })),
);
