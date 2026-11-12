#!/usr/bin/env bash
# Mở "Bé Yêu Mỗi Ngày" trong cửa sổ riêng (chế độ app của Chrome/Chromium), nếu không có thì dùng trình duyệt mặc định.
DIR="$(cd "$(dirname "$(readlink -f "$0")")" && pwd)"
URL="file://$DIR/index.html"
for b in google-chrome google-chrome-stable chromium chromium-browser; do
  if command -v "$b" >/dev/null 2>&1; then exec "$b" --app="$URL" --class=BeYeuMoiNgay --window-size=1200,860; fi
done
exec xdg-open "$URL"
