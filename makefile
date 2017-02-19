.PHONY: install run build

PORT := 8080

install: ## Install application
	@ npm i

run: ## Run application
	@ NODE_ENV=production PORT=${PORT} ./node_modules/.bin/babel-node src/js/server.js

run-dev: ## Run dev environment
	@ NODE_ENV=development PORT=${PORT} ./node_modules/.bin/babel-node src/js/server.js & make watch & make browser-sync

browser-sync:
	@ browser-sync start --proxy "http://localhost:${PORT}" --files "dist/*"

watch: ## Watch
	@ mkdir -p dist && cp favicon.ico dist/
	@ ./node_modules/.bin/webpack --watch -d

build: ## Build with webpack
	@ mkdir -p dist && cp favicon.ico dist/
	@ NODE_ENV=production ./node_modules/.bin/webpack -p --progress --colors

lint:
	@ ./node_modules/.bin/eslint src/

lint-fix:
	@ ./node_modules/.bin/eslint --fix src/
