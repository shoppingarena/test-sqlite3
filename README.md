# Test - SQLITE3 database

## Start prject with 'pnpm init'

### add 'type': 'module' to treat .js file run as ES modules

Issues with importing and verbose initialization sqlite3 as ES .mjs
Key Differences
Use of import:

Replaces require('sqlite3') with import sqlite3 from 'sqlite3';.
Verbose Initialization:

const sqlite3 = require('sqlite3').verbose();
**is replaced with const { verbose } = sqlite3; const db = new (verbose().Database)();**

## Install dependencies with 'pnpm add "package-name"'

pnpm add express
pnpm add nodemon

## Initialise git repository with 'git init'

touch .gitignore , copy template from <https://github.com/github/gitignore/blob/main/Node.gitignore>
git init

## Install sqlite3 and ORM sequelize

pnpm add sqlite3

# pnpm add sequelize

## Initialize Sequelize

You don’t need to directly use the sqlite3 library when working with Sequelize. Instead, you configure Sequelize to connect to your SQLite database.

## Set up sequelize and sqlite3
