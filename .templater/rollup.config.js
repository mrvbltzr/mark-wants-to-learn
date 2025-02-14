import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const vaults = [];

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
