#!/usr/bin/env bash

echo $(head -n1 $1) | bun commitlint --color --edit
