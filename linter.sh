#!/bin/zsh
EXIT=0;

ls ./src/**/*.js
polymer lint ./src/**/*.js

EXIT=$?

echo $EXIT
exit $EXIT
