#!/bin/bash

# Định nghĩa các đường dẫn đến các sub-apps
APPS=("app1" "app2")

# Lặp qua từng sub-app và thực hiện migration
for app in "${APPS[@]}"; do
  echo "Running migrations for $app..."
  cd "src/$app" || exit
  npx sequelize-cli db:migrate
  cd - || exit
done

echo "Migrations completed for all apps."
