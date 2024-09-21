Notes CLI command to add, delete, filter, and list all notes.

```
Make sure to create a symbolic link to your CLI

```
$ npm link  # from inside the directory that the file lives in.
It takes a CLI and installs it inside the bin folder
$ which node
$ which note 
../../bin/note
All cli's live inside the /bin folder

The package.json has "type": "module", which let's you use modules in the ES6 way.
and it has "bin": { "note": "./index.js" }, which `note` is the the name of the cli command 
and it points to index.js. You want the name of the cli command to be a globally unique name.

```
## Added the shebang to index.js to let it what enviroment to run it one in this case node.

#!/usr/bin/env node

Make sure you are using node v18.0.0 for this specific use case

```

nvm use 18.0.0

```

Useful nvm flags

```

nvm list

nvm install <version>

nvm use <version>

```
npm install <package>

npm uninstall <package>

npm init

```
----------------------------------------------------------------------

Knowledge

In the example below `npm` is the CLI and `install` is the command.
$ npm install

db.json - acts like a database for our project.
{ "note": [] } // simple


``` 
How to use in CLI

$note --help
$note new "note to add" --tags "any tags"
$note all # lists all notes
$note find <filter>
$note remove <id>
$note clean # removes all notes
$note web [port]

```
