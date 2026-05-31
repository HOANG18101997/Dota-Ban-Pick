# Dota Ban Pick Web App

Web app hỗ trợ ban/pick hero Dota 2 theo chuẩn Captain's Mode khi chơi với bạn bè.

## Tính năng
- Chọn BO3 hoặc BO5
- Ban/Pick theo đúng luật Captain's Mode (random team ban trước)
- 5 phase: 5 Ban + 5 Pick mỗi team
- Global Ban: hero đã dùng qua các game không thể dùng lại
- Undo, End Game, Reset All
- 110 hero Dota với hình ảnh

## Cấu trúc
```
/index.html          ← Mở file này để chạy (hoặc host root lên GitHub Pages)
/banpick/style.css   ← CSS
/banpick/app.js      ← JavaScript logic
/images/             ← 110 hero icons
/heroes.json         ← Hero data
```

## Host lên GitHub Pages
1. Push toàn bộ repo lên GitHub
2. Vào **Settings > Pages > Source: Deploy from branch > main > / (root)**
3. Truy cập: `https://[username].github.io/[repo]/`