#!/bin/bash
startingDirectory="$PWD"

reactDirectory="$startingDirectory/react"
echo "Building React app located at: $reactDirectory"
cd "$reactDirectory" && npm i && npm run build

exit 0
