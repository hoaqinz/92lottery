#!/bin/bash

# Danh sách các trang cần cập nhật
pages=(
  "src/app/(guides)/huong-dan-dang-nhap/page.tsx"
  "src/app/(guides)/huong-dan-nap-tien/page.tsx"
  "src/app/(guides)/gioi-thieu/page.tsx"
  "src/app/(guides)/92lottery-co-lua-dao-khong/page.tsx"
  "src/app/(guides)/app-92lottery/page.tsx"
  "src/app/(guides)/92lottery-mini-game/page.tsx"
  "src/app/(guides)/92lottery-club/page.tsx"
  "src/app/(guides)/92lottery-bi-sap/page.tsx"
  "src/app/(guides)/92lottery-telegram/page.tsx"
  "src/app/(guides)/rut-tien-92lottery/page.tsx"
)

# Cập nhật canonical URL cho mỗi trang
for page in "${pages[@]}"; do
  # Sử dụng sed để thay thế canonical URL
  sed -i '' -E 's|canonical: '\''https://92lottery.dev/[^'\'']*'\'',|canonical: '\''https://92lottery.dev'\'',|g' "$page"
  sed -i '' -E 's|'\''vi'\'': '\''https://92lottery.dev/[^'\'']*'\'',|'\''vi'\'': '\''https://92lottery.dev'\'',|g' "$page"
  sed -i '' -E 's|'\''x-default'\'': '\''https://92lottery.dev/[^'\'']*'\''|'\''x-default'\'': '\''https://92lottery.dev'\''|g' "$page"
  
  echo "Updated canonical URL in $page"
done

echo "All pages updated successfully!"
