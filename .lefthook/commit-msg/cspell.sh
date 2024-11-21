#!/usr/bin/env bash

commit_msg_file=$1
pnpm cspell --no-summary --no-progress --language-id commit-msg $commit_msg_file
