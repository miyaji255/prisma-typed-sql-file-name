# prisma-typed-sql-file-name

## How to reproduce
```
$ pnpm build:esbuild

> prisma-typed-sql-file-name@ build:esbuild /home/miyaji255/workspace/prisma-typed-sql-file-name
> node --experimental-strip-types esbuild.ts

(node:2069442) ExperimentalWarning: Type Stripping is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
✘ [ERROR] Could not resolve "./getUsers.wasm.mjs"

    prisma-client-with-driverAdapters/sql/index.wasm.mjs:1:14:
      1 │ export * from "./getUsers.wasm.mjs"
        ╵               ~~~~~~~~~~~~~~~~~~~~~

/home/miyaji255/workspace/prisma-typed-sql-file-name/node_modules/.pnpm/esbuild@0.25.0/node_modules/esbuild/lib/main.js:1477
  let error = new Error(text);
              ^

Error: Build failed with 1 error:
prisma-client-with-driverAdapters/sql/index.wasm.mjs:1:14: ERROR: Could not resolve "./getUsers.wasm.mjs"
    at failureErrorWithLog (/home/miyaji255/workspace/prisma-typed-sql-file-name/node_modules/.pnpm/esbuild@0.25.0/node_modules/esbuild/lib/main.js:1477:15)
    at /home/miyaji255/workspace/prisma-typed-sql-file-name/node_modules/.pnpm/esbuild@0.25.0/node_modules/esbuild/lib/main.js:946:25
    at /home/miyaji255/workspace/prisma-typed-sql-file-name/node_modules/.pnpm/esbuild@0.25.0/node_modules/esbuild/lib/main.js:898:52
    at buildResponseToResult (/home/miyaji255/workspace/prisma-typed-sql-file-name/node_modules/.pnpm/esbuild@0.25.0/node_modules/esbuild/lib/main.js:944:7)
    at /home/miyaji255/workspace/prisma-typed-sql-file-name/node_modules/.pnpm/esbuild@0.25.0/node_modules/esbuild/lib/main.js:971:16
    at responseCallbacks.<computed> (/home/miyaji255/workspace/prisma-typed-sql-file-name/node_modules/.pnpm/esbuild@0.25.0/node_modules/esbuild/lib/main.js:623:9)
    at handleIncomingPacket (/home/miyaji255/workspace/prisma-typed-sql-file-name/node_modules/.pnpm/esbuild@0.25.0/node_modules/esbuild/lib/main.js:678:12)
    at Socket.readFromStdout (/home/miyaji255/workspace/prisma-typed-sql-file-name/node_modules/.pnpm/esbuild@0.25.0/node_modules/esbuild/lib/main.js:601:7)
    at Socket.emit (node:events:518:28)
    at addChunk (node:internal/streams/readable:561:12) {
  errors: [Getter/Setter],
  warnings: [Getter/Setter]
}

Node.js v22.11.0
 ELIFECYCLE  Command failed with exit code 1.
```

```
$ pnpm build:wrangler

> prisma-typed-sql-file-name@ build:wrangler /home/miyaji255/workspace/prisma-typed-sql-file-name
> wrangler deploy --outdir dist/workers --dry-run


 ⛅️ wrangler 3.114.0
--------------------


✘ [ERROR] Build failed with 1 error:

  ✘ [ERROR] Could not resolve "./getUsers.wasm.mjs"
  
      prisma-client-with-driverAdapters/sql/index.wasm.mjs:1:14:
        1 │ export * from "./getUsers.wasm.mjs"
          ╵               ~~~~~~~~~~~~~~~~~~~~~
  
  


🪵  Logs were written to "/home/miyaji255/.config/.wrangler/logs/wrangler-2025-03-07_12-56-07_855.log"
 ELIFECYCLE  Command failed with exit code 1.
```

```
$ build:rollup


main.w.ts, main.wo.ts → dist/rollup...
[!] (plugin rpt2) RollupError: [plugin rpt2] prisma-client-with-driverAdapters/sql/index.wasm.mjs: Could not resolve "./getUsers.wasm.mjs" from "prisma-client-with-driverAdapters/sql/index.wasm.mjs"
prisma-client-with-driverAdapters/sql/index.wasm.mjs

    at getRollupError (/home/miyaji255/workspace/prisma-typed-sql-file-name/node_modules/.pnpm/rollup@4.34.9/node_modules/rollup/dist/shared/parseAst.js:285:41)
    at Object.error (/home/miyaji255/workspace/prisma-typed-sql-file-name/node_modules/.pnpm/rollup@4.34.9/node_modules/rollup/dist/shared/parseAst.js:281:42)
    at ModuleLoader.handleInvalidResolvedId (/home/miyaji255/workspace/prisma-typed-sql-file-name/node_modules/.pnpm/rollup@4.34.9/node_modules/rollup/dist/shared/rollup.js:22198:36)
    at /home/miyaji255/workspace/prisma-typed-sql-file-name/node_modules/.pnpm/rollup@4.34.9/node_modules/rollup/dist/shared/rollup.js:22158:26

```
