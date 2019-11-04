import * as f1 from './file1';

export class Container {
    readonly classes = f1;
}

declare const c: Container;
// 'Go to definition' and 'Find all references' both work here
c.classes.Foo;

// Uncommenting this line make 'Find all references' work again
export { f1 };
