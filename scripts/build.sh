#!/bin/bash
startingDirectory="$PWD"

reactDirectory="$startingDirectory/react"
echo "Building React app located at: $reactDirectory"
cd "$reactDirectory" && npm i
cd "$reactDirectory" && echo \"Bundling...\" && npx parcel build index.html -d ../dist/react --public-url ./

vuejsDirectory="$startingDirectory/vuejs"
echo "Building Vue.js app located at: $vuejsDirectory"
cd "$vuejsDirectory" && npm i
cd "$vuejsDirectory" && echo \"Bundling...\" && npx parcel build index.html -d ../dist/vuejs --public-url ./

exit 0
