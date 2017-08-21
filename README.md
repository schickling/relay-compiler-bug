# relay-compiler: Recursive Input Bug

## How to reproduce

```
# install relay-compiler
yarn

# compile relay
yarn relay
```

## Problematic input type

```
input CreateTestInput {
  testField: String!
  test: CreateTestInput
  clientMutationId: String!
}
```

## Output

```
yarn relay v0.28.1
$ relay-compiler --src ./src --schema ./schema.graphql
HINT: pass --watch to keep watching for changes.
Parsed default in 0.01s

Writing default
Error writing modules:
RangeError: Maximum call stack size exceeded
Unchanged: 0 files
Written default in 0.41s
✨  Done in 1.90s.
```
