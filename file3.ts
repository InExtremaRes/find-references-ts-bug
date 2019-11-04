import { Container } from './file2';

declare const c: Container;
// 'Go to definition' works from here but 'Find all references' doesn't
c.classes.Foo;

export type S = {};
