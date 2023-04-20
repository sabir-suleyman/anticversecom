#!/usr/bin/env bash
# 
#       Ferit Yiğit BALABAN, <balaban.ferityigit@anticverse.com>
#       Maintainer from Anticverse Webraider
#

for file in *.PNG
do 
    convert "$file" -resize 150x150^ -gravity center -extent 150x150 -quality 100 "${file%.*}.webp"
done
