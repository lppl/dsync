export const examples = [
  {
    usage: 'dsync read foobar -l bazzbar -s ssh://user@host:/fizzbazz',
    description:
      'Reads from remote directory fizzbazz/foobar into local $PWD/bazzbar/foobar',
  },
  {
    usage: 'dsync write foobar -l bazzbar -s ssh://user@host:/fizzbazz',
    description:
      'Write into remote directory fizzbazz/foobar from local $PWD/bazzbar/foobar',
  },
  {
    usage: 'dsync read foobar',
    description:
      'Expects environments variables DSYNC_LOCAL and DSYNC_SERVER with values for -l and -s parameters',
  },
  {
    usage: 'dsync write foobar',
    description:
      'Expects environments variables DSYNC_LOCAL and DSYNC_SERVER with values for -l and -s parameters',
  },
];
