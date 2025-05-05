const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/[root-of-the-server]__81d459a8._.js");
runtime.getOrInstantiateRuntimeModule("[project]/node_modules/.pnpm/next@15.4.0-canary.3_react-_a20fa6a80afe39c5b39b7f1351731cd9/node_modules/next/app.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/.pnpm/next@15.4.0-canary.3_react-_a20fa6a80afe39c5b39b7f1351731cd9/node_modules/next/app.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
