#!/usr/bin/env bash

function usage() {
  echo "Usage: ./raindrops <number>"
}

function main() {
  if [ $# -eq 1 ]; then
    local sentence=""

    [[ `expr $1 % 3` -eq 0 ]] && sentence+="Pling"
    [[ `expr $1 % 5` -eq 0 ]] && sentence+="Plang"
    [[ `expr $1 % 7` -eq 0 ]] && sentence+="Plong"

    [[ -z $sentence ]] && echo $1 || echo $sentence
    # echo ${sentence:-$1}

  else
    usage && exit 1
  fi
}

main "$@"