# Instructions

1. Clone the repo.
2. Install dependencies (`npm install`).
3. Open folder (I'm using VSCode 1.39.2).

There are two, maybe related bugs in this repo, so there are two branches.

## Branch `bug1`

1. Open file `file3.ts` line 5.
2. On `c.classes.Foo` put cursor over `Foo` and run `Find all references`.

#### Expected

Three references found, on files `file1.ts`, `file2.ts` and `file3.ts`.

#### Actual

Only two references, `file3.ts` itself is missing.

#### Workaround

In file `file2.ts` line 12 uncomment line 12 `export { f1 };`. Now find references of `Foo` again
and all three are found.

## Branch `bug2`

1. Open file `file3.ts` line 5.
2. On `c.classes.Foo` put cursor over `Foo` and run `Find all references`.

#### Expected

Three references found, on files `file1.ts`, `file2.ts` and `file3.ts`.

#### Actual

TSServer crashes. The generated log can be found in file `tsserver.log`.

#### Workaround

In file `file4.ts` comment line 1 and uncomment line 3. Now find references of `Foo` again and it
works.
