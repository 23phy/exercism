#!/usr/bin/env bash

function usage() {
  echo "Usage: ./error_handling <greetee>"
}

function main() {
  if [ $# -eq 1 ]; then
    echo "Hello, $1"
  else
    usage && exit 1
  fi
}

main "$@"