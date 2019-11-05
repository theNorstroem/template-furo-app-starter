#!/bin/zsh
EXIT=0;

ls ./shell/**/*.js
polymer lint ./shell/**/*.js


ls ./project/**/*.js
polymer lint ./project/**/*.js

ls ./techn_depts/**/*.js
polymer lint ./techn_depts/**/*.js

EXIT=$?

echo $EXIT
exit $EXIT
