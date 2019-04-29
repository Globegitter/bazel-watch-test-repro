# bazel-watch-test-repro

This works:
```sh
ibazel run bin # see contents of test.js
echo "something" >> test.js
# see updated contents of test.js in console
```

This does not:
```sh
ibazel run test # Exits immediately without waiting for input on stdin
```