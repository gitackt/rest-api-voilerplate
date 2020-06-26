# Apollo-TypeORM-Api-Voilerplate

This is a boilerplate for an API server that uses [GraphQL](https://graphql.org/ 'GraphQL') in a [Docker](https://www.docker.com/ 'Docker') container.

- Language: [Typescript](https://www.typescriptlang.org/ 'Typescript')
- GraphQL: [Apollo](https://www.apollographql.com/ 'Apollo')
- Server: [Express](https://expressjs.com/ja/ 'Express')
- ORM: [TypeORM](https://typeorm.io/#/ 'TypeORM')
- Database: [MySQL](https://www.mysql.com/jp/ 'MySQL')

---

## First Setup

### ① Create .env

```shell
vi .env
```

- `TZ=Asia/Tokyo`
- `DB_NAME=`
- `DB_USERNAME=`
- `DB_PASSWORD=`
- `DB_PORT=`

### ② Create container

The application is launched with [docker-compose](https://docs.docker.com/compose/ 'docker-compose').

```shell
brew install yarn
docker-compose up --build
```

---

<details>

<summary>
① Server 
</summary>

## ① Server

### Build image

```shell
docker-compose build
```

### Start server

```shell
docker-compose up
```

### Start server（with build）

```shell
docker-compose up --build
```

### Start server（deamon）

```shell
docker-compose up -d
```

### Start server（deamon with build）

```shell
docker-compose up --build -d
```

### Stop server

```shell
docker-compose down
```

### Stop server (remove volumes)

```shell
docker-compose down -v
```

</details>

---

<details>

<summary>
② Migration
</summary>

## ② Migration

### 1 - Exec app container

```shell
docker-compose exec api bash
```

### 2 - Generate Migrations

(In app container)

```shell
./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:generate -n  <migration-name>
```

### 3 - Run Migrations

(In app container)

```shell
./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:run
```

</details>
