// @flow

export type Base64String = string;

function base64(i: string): Base64String {
  return ((new Buffer(i, 'ascii')).toString('base64'));
}

function unbase64(i: Base64String): string {
  return ((new Buffer(i, 'base64')).toString('ascii'));
}
