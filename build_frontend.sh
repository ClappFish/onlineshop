#!/usr/bin/env bash

docker login gitlab.diva-e.com:5000
docker build --no-cache -t gitlab.diva-e.com:5000/fynn.fischbach/onlineshop:kubernetes .
docker push gitlab.diva-e.com:5000/fynn.fischbach/onlineshop:kubernetes
