import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const sharedScripts = ['title_case.ts', 'template_banner.ts', 'template_finished.ts'];

const vaults = [
    {
        dir: '../software-engineering',
        scripts: sharedScripts,
        replacer: {
            __TITLE__: 'Software Engineering 101: Plan and Execute Better Software',
            __URL__: 'https://www.udemy.com/course/software-engineering-101/',
        },
    },
    {
        dir: '../solid-principles',
        scripts: sharedScripts,
        replacer: {
            __TITLE__: 'SOLID Principles: Introducing Software Architecture & Design',
            __URL__: 'https://www.udemy.com/course/solid-design/',
        },
    },
    {
        dir: '../git',
        scripts: sharedScripts,
        replacer: {
            __TITLE__: 'The Git & GitHub Bootcamp',
            __URL__: 'https://www.udemy.com/course/git-and-github-bootcamp/',
        },
    },
];

export default vaults.flatMap((vault) =>
    vault.scripts.map((input) => ({
        input: `src/${input}`,
        output: { format: 'cjs', dir: `${vault.dir}/scripts` },
        plugins: [
            commonjs(),
            typescript(),
            nodeResolve(),
            replace({ preventAssignment: true, values: vault.replacer }),
        ],
    })),
);
