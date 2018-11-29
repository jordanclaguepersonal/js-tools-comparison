#!/bin/bash
startingDirectory="$PWD"

reactDirectory="$startingDirectory/react"
echo "Building React app located at: $reactDirectory"
cd "$reactDirectory" && npm i
cd "$reactDirectory" && echo \"Bundling...\" && npx parcel build index.html -d ../dist/react --public-url ./

exit 0
