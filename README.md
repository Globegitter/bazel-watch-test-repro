# bazel-watch-test-repro

This works:
```
ibazel run bin # see contents of test.js
echo "something" >> test.js
# see updated contents of test.js in console
```

This does not:
```
ibazel run test # Exits immediately without waiting for input on stdin
```