import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const vite = resolve(here, '../node_modules/vite/bin/vite.js')
const result = spawnSync(process.execPath, [vite, 'build'], {
  cwd: resolve(here, '..'),
  env: { ...process.env, VITE_MOBILE: '1' },
  stdio: 'inherit',
})

if (result.error) throw result.error
process.exit(result.status ?? 1)
