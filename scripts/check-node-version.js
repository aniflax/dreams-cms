const major = Number(process.versions.node.split('.')[0]);

if (Number.isNaN(major) || major < 20 || major > 24) {
  console.error(
    `This project requires Node 20-24. Current Node: ${process.versions.node}\n` +
      'Run:\n' +
      '  source ~/.nvm/nvm.sh\n' +
      '  nvm use 20.20.1\n'
  );
  process.exit(1);
}
