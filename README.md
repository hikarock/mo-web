mo-web
======

Mo!

## Setup

1. meteorをインストール
  * `curl https://install.meteor.com | /bin/sh`
1. meteorでアカウントを作成
  * https://www.meteor.com/
1. 管理者が対象者にデプロイ権限を付与
  * `meteor authorized mooo.meteor.com --add #{account_name}`

## Deploy

```sh
$ meteor deploy mooo.meteor.com
```
