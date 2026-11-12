# Bé Yêu Mỗi Ngày

Ứng dụng giúp ba mẹ kể chuyện, hát, đọc thơ, học tiếng Anh cùng con (từ thai kỳ đến 10 tuổi), kèm bài học dạy con và mẹo sức khỏe mỗi ngày. Chạy offline, cài được lên điện thoại (PWA).

## Nội dung
| Mục | Số lượng | File |
|---|---|---|
| Truyện kể | 64 | `data/stories.js`, `data/stories2.js` |
| Bài hát, đồng dao, ca dao – tục ngữ | 36 | `data/songs.js`, `data/extra.js` |
| Thơ | 26 | `data/poems.js`, `data/extra.js` |
| Tiếng Anh (từ vựng + câu giao tiếp, có 🔊 phát âm) | 42 | `data/english.js` |
| Bài học dạy con | 56 | `data/parenting.js`, `data/extra.js` |
| Mẹo sức khỏe | 43 | `data/health.js`, `data/extra.js` |

Mỗi mục có trường `ages` (`"2-3"`, `"4-6"`, `"7-10"`) để lọc theo độ tuổi ở góc trên.

## Dùng trên Ubuntu
```bash
./install.sh     # thêm icon vào menu ứng dụng và Desktop
./run.sh         # hoặc mở trực tiếp
```

## Dùng trên điện thoại (PWA)
Cần đưa thư mục này lên một trang web có HTTPS (miễn phí), rồi trên điện thoại:
- **iPhone:** mở link bằng **Safari** → nút Chia sẻ → **Thêm vào MH chính**.
- **Android:** mở link bằng **Chrome** → menu ⋮ → **Cài đặt ứng dụng** / **Thêm vào màn hình chính**.

Sau lần mở đầu tiên, app chạy được cả khi không có mạng.

### Cách A — Netlify Drop (nhanh nhất, không cần git)
1. Vào https://app.netlify.com/drop và đăng nhập.
2. Kéo thả cả thư mục `be-yeu-moi-ngay` vào trang.
3. Nhận link dạng `https://ten-ngau-nhien.netlify.app` (có thể đổi tên trong Site settings).

### Cách B — GitHub Pages
```bash
cd be-yeu-moi-ngay
git init && git add . && git commit -m "Bé Yêu Mỗi Ngày"
git branch -M main
git remote add origin https://github.com/<tên-tài-khoản>/be-yeu-moi-ngay.git   # tạo repo trống trên github.com trước
git push -u origin main
```
Rồi vào repo → **Settings → Pages** → Source: *Deploy from a branch*, Branch: `main` / `(root)` → Save.
Link sẽ là `https://<tên-tài-khoản>.github.io/be-yeu-moi-ngay/`.

### Khi cập nhật nội dung
Sửa file trong `data/`, tăng `VERSION` trong `sw.js` (ví dụ `beyeu-v3`), rồi đưa lên lại. Điện thoại sẽ nhận bản mới ở lần mở app tiếp theo.

## Dữ liệu cá nhân
Yêu thích, lịch sử, ghi chú lưu trên từng thiết bị (không gửi đi đâu). Máy tính và điện thoại không tự đồng bộ — dùng ⚙️ → Xuất / Nhập file sao lưu để chuyển.
