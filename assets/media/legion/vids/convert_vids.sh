#!/usr/bin/bash
# 
#       Ferit Yiğit BALABAN <balaban.ferityigit@anticverse.com>
#       Maintainer
#
for file in *.mov
do
    ffmpeg -i "$file" -c:v libvpx-vp9 -crf 30 -b:v 0 "${file%.mov}.webm"
done
