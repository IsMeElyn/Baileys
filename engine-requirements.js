const [major] = process.versions.node.split(".").map(Number);

if (major < 20) {
  console.error(`
❌ This package requires Node.js version 20 or higher to function correctly.
   Your current Node.js version is ${process.versions.node}.
   Please upgrade to Node.js 20 or later to proceed.
`);
  process.exit(1);
}
