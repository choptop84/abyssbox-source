#!/bin/bash
set -e

# Copy all typescript files of /editor to /app_editor
cp editor/*.ts app_editor/
npx tsc -p tsconfig_app.json

# Copy contents of OfflineAddSamplesPrompt.ts into AddSamplesPrompt.ts
cp app_editor/OfflineAddSamplesPrompt.ts app_editor/AddSamplesPrompt.ts

# Combine build/app_editor/main.js and dependencies into app/beepbox_app_editor.js
npx rollup build/app_editor/main.js \
	--file app/beepbox_app_editor.js \
	--format iife \
	--output.name beepbox \
	--context exports \
	--sourcemap \
	--plugin rollup-plugin-sourcemaps \
	--plugin @rollup/plugin-node-resolve

# Minify app/beepbox_app_editor.js into app/beepbox_app_editor.min.js
npx terser \
	app/beepbox_app_editor.js \
	--source-map "content='app/beepbox_app_editor.js.map',url=beepbox_app_editor.min.js.map" \
	-o app/beepbox_app_editor.min.js \
	--compress \
	--mangle \
	--mangle-props regex="/^_.+/;"
