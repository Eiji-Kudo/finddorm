# デフォルトのターゲット
.PHONY: all
all: build

# Docker イメージをビルドする
.PHONY: build
build:
	docker-compose build

# Docker コンテナを起動する
.PHONY: up
up:
	docker-compose up --build

# Docker コンテナをバックグラウンドで起動する
.PHONY: up-detached
up-detached:
	docker-compose up -d

# Docker コンテナを停止し、関連するリソースを削除する
.PHONY: down
down:
	docker-compose down

# ログを表示する
.PHONY: logs
logs:
	docker-compose logs

# Rails コンソールを起動する
.PHONY: console
console:
	docker-compose run web rails console

# データベースをセットアップする（マイグレーションを含む）
.PHONY: setup-db
setup-db:
	docker-compose run web rake db:create db:migrate

# テストを実行する
.PHONY: test
test:
	docker-compose run web rake test


# Docker コンテナ内で bash を起動する
.PHONY: bash
bash:
	docker-compose run --entrypoint bash web