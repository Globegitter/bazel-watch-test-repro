load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "bazel_skylib",
    urls = ["https://github.com/bazelbuild/bazel-skylib/archive/0.8.0.tar.gz"],
    strip_prefix = "bazel-skylib-0.8.0",
    sha256 = "2ea8a5ed2b448baf4a6855d3ce049c4c452a6470b1efd1504fdb7c1c134d220a",
)

http_archive(
    name = "build_bazel_rules_nodejs",
    urls = ["https://github.com/bazelbuild/rules_nodejs/archive/0.28.0.tar.gz"],
    strip_prefix = "rules_nodejs-0.28.0",
    sha256 = "9140404756bca3fbe29f3b3918d2e0db5c86474354188774e7d96eba33baba4c",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories")

node_repositories()