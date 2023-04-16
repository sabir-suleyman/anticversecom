#!/usr/bin/env bash
# 
#       Ferit Yiğit BALABAN, <balaban.ferityigit@anticverse.com>
#       Maintainer from Anticverse Webraider
#

for file in *.jpeg
do 
    convert "$file" -resize 300x300^ -gravity center -extent 300x300 -quality 80 "${file%.*}.webp"
done
