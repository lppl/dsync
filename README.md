# dsync

Wrapper over [rsync](https://www.npmjs.com/package/rsync) package.

## Goals

Problem old as programming. Two machines and with code base that needs to synchronised periodically. RSYNC to the
rescue, but there is a lot of orchestration. You need to specify paths, options where you want only to have minimalistic
command. So write your own wrapper as fun project.

Kata goals:

- remind `args` usage
- remind quick setup ts/esbuild/node project
- how to combine your code with multiple libraries

## Installation

```
git clone git@github.com:lppl/dsync.git
npm ci --prferre-offline
```

Link `dist/dsync.js` as `/usr/local/bin/dsync`

```
npm run link
```

Links

## Usage `dsync help`

```
  Usage: dsync [options] [command]

  Commands:
    help     Display help
    read     Fetches files
    version  Display version
    write    Writes files

  Options:
    -h, --help               Output usage information
    -l, --local_directory    Local directory with projects. Defaults to env variable DSYNC_LOCAL
    -s, --server_directory   Server directory with projects. Defaults to env variable DSYNC_SERVER
    -v, --version            Output the version number

  Examples:
    - Reads from remote directory fizzbazz/foobar into local $PWD/bazzbar/foobar
    $ dsync read foobar -l bazzbar -s ssh://user@host:/fizzbazz

    - Write into remote directory fizzbazz/foobar from local $PWD/bazzbar/foobar
    $ dsync write foobar -l bazzbar -s ssh://user@host:/fizzbazz

    - Expects environments variables DSYNC_LOCAL and DSYNC_SERVER with values for -l and -s parameters
    $ dsync read foobar

    - Expects environments variables DSYNC_LOCAL and DSYNC_SERVER with values for -l and -s parameters
    $ dsync write foobar
```
