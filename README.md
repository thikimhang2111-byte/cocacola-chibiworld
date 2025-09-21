# Web Game — Repository Ready for Deployment

Tôi đã giải nén project của bạn và tạo các file hỗ trợ để dễ deploy.

## Cấu trúc chính (đã kiểm tra)
- `package.json`, `vite.config.js` — dự án dùng Vite.
- `public/` — tài nguyên tĩnh.
- `src/` — mã nguồn front-end.
- `server/` — có một server Node (nếu bạn cần backend).

## Hướng dẫn build & chạy (trên máy của bạn)
1. Cài Node.js (phiên bản LTS).
2. Ở thư mục gốc project, chạy:
   ```bash
   npm install
   npm run build
   ```
   Kết quả build sẽ nằm trong `dist/`.

3. Kiểm tra local:
   ```bash
   npm install -g serve
   serve -s dist
   ```
   Mở `http://localhost:3000` để kiểm tra.

## Deploy 1 — GitHub Pages (tự động bằng GitHub Actions)
- Nếu trang chỉ frontend (static `dist/`), bạn có thể dùng GitHub Pages. Workflow có sẵn ở `.github/workflows/deploy-gh-pages.yml`.
- Chỉ cần push repo lên GitHub (main branch), Actions sẽ build và deploy vào `gh-pages`.

## Deploy 2 — Netlify (thích hợp, CI từ GitHub)
- Tạo repo trên GitHub, kết nối repo với Netlify, cấu hình build command: `npm run build` và publish directory: `dist`.
- Hoặc dùng Netlify Drop: upload thư mục `dist` sau khi build.

## Deploy 3 — Cloudflare Pages (tương tự Netlify)
- Kết nối GitHub repo, build command `npm run build`, output `dist`.

## Nếu project cần server (trong `server/`)
- Bạn cần host server Node (Render, Railway, Heroku, Fly). Cấu hình startup: `node server/index.js` hoặc theo `server/package.json`.

## Tệp tôi đã thêm
- `README.md` (bản này)
- `.github/workflows/deploy-gh-pages.yml` — workflow tự động build & deploy.

Nếu bạn muốn, tôi có thể:
- Tạo `dist/` build tại đây (cần môi trường Node — nếu bạn cho phép tôi chạy `npm` trong môi trường này).
- Chuẩn bị một repo-ready zip (đã tạo `web-game-deploy-ready.zip`).
- Hướng dẫn từng bước kèm ảnh chụp màn hình deploy.

