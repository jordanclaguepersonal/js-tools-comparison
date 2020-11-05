#!/bin/bash
startingDirectory="$PWD"

echo "Copying static files to dist/"
mkdir "$startingDirectory/dist/"
cp "$startingDirectory/index.html" "$startingDirectory/dist"
cp "$startingDirectory/styles.css" "$startingDirectory/dist"

reactDirectory="$startingDirectory/react"
echo "Building React app located at: $reactDirectory"
cd "$reactDirectory" && npm i
cd "$reactDirectory" && echo \"Bundling...\" && npx parcel build index.html -d ../dist/react --public-url ./

vuejsDirectory="$startingDirectory/vuejs"
echo "Building Vue.js app located at: $vuejsDirectory"
cd "$vuejsDirectory" && npm i
cd "$vuejsDirectory" && echo \"Bundling...\" && npx parcel build index.html -d ../dist/vuejs --public-url ./

angularjsDirectory="$startingDirectory/angular"
echo "Building Angular.js app located at: $angularjsDirectory"
cd "$angularjsDirectory" && npm i
cd "$angularjsDirectory" && echo \"Bundling...\" && npx ng build --output-path ../dist/angular --baseHref ./

exit 0
