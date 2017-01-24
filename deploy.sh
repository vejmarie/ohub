#!/bin/bash

set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [ "$TRAVIS_PULL_REQUEST" != "false" ]
then
  exit 0
fi

# if [ "$TRAVIS_BRANCH" != "master" ]
# then
#   echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
#   exit 0
# fi

rev=$(git rev-parse --short HEAD)

cd ${SCRIPT_DIR}/_book

cat > README.md <<EOF
# Open Hardware Platform

This website is automatically generated from
[sources](https://github.com/opencomputeproject/ohub/tree/master/docs)
EOF

git init
git config user.name "Travis CI"
git config user.email "travis-ci@opencomputeproject.org"

git remote add upstream "https://$GH_TOKEN@github.com/opencomputeproject/ohub.git"
git fetch upstream
git reset upstream/gh-pages

touch .

git add -A .
git commit -m "Generate documentation website at ${rev}"
git push -q upstream HEAD:gh-pages
