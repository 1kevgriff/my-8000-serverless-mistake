import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'

if (existsSync('.env')) process.loadEnvFile('.env')

const args = ['slidev', '--port', '3030']
const password = process.env.SLIDEV_PRESENTER_PASSWORD
if (password) args.push('--remote', password)

spawn('npx', args, { stdio: 'inherit', shell: true })
  .on('exit', code => process.exit(code ?? 0))
