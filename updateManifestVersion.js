// updateManifestVersion.js
const fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const manifestJson = JSON.parse(fs.readFileSync('./manifest.json', 'utf8'));

manifestJson.version = packageJson.version;

fs.writeFileSync('./manifest.json', JSON.stringify(manifestJson, null, 2));
