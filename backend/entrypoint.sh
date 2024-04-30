#!/bin/bash
set -e

# DB が起動するまで待機するコマンド
# Docker Compose の depends_on はコンテナの起動順序を保証するものではないため、ここで待機処理を挟む
# 例: wait-for-it.sh db:5432 -- echo "DB is up"

# 既存の server.pid ファイルを削除
if [ -f /myapp/tmp/pids/server.pid ]; then
  rm /myapp/tmp/pids/server.pid
fi

# コマンド引数で指定されたコマンド（CMD）を実行
exec "$@" || bundle exec rails s -p 3000 -b '0.0.0.0'