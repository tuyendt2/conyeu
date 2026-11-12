#!/usr/bin/env bash
# Thêm "Bé Yêu Mỗi Ngày" vào menu ứng dụng Ubuntu (và Desktop nếu có).
set -e
DIR="$(cd "$(dirname "$(readlink -f "$0")")" && pwd)"
chmod +x "$DIR/run.sh"
APPS="$HOME/.local/share/applications"
mkdir -p "$APPS"
cat > "$APPS/be-yeu-moi-ngay.desktop" <<DESK
[Desktop Entry]
Type=Application
Name=Bé Yêu Mỗi Ngày
Comment=Truyện, bài hát, thơ cho bé và bài học dạy con, sức khỏe gia đình
Exec="$DIR/run.sh"
Icon=$DIR/icon.svg
Terminal=false
Categories=Education;
StartupWMClass=BeYeuMoiNgay
DESK
chmod +x "$APPS/be-yeu-moi-ngay.desktop"
update-desktop-database "$APPS" 2>/dev/null || true
DESKTOP_DIR="$(xdg-user-dir DESKTOP 2>/dev/null || echo "$HOME/Desktop")"
if [ -d "$DESKTOP_DIR" ]; then
  cp "$APPS/be-yeu-moi-ngay.desktop" "$DESKTOP_DIR/"
  chmod +x "$DESKTOP_DIR/be-yeu-moi-ngay.desktop"
  gio set "$DESKTOP_DIR/be-yeu-moi-ngay.desktop" metadata::trusted true 2>/dev/null || true
fi
echo "Đã cài xong. Tìm 'Bé Yêu' trong menu ứng dụng (phím Super) hoặc chạy: $DIR/run.sh"
