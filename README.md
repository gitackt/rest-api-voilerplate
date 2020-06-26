# Apollo-TypeORM-Api-Voilerplate

This is a boilerplate for an API server that uses [GraphQL](https://graphql.org/ 'GraphQL') in a [Docker](https://www.docker.com/ 'Docker') container.

- Language: [Typescript](https://www.typescriptlang.org/ 'Typescript')
- GraphQL: [Apollo](https://www.apollographql.com/ 'Apollo')
- Server: [Express](https://expressjs.com/ja/ 'Express')
- ORM: [TypeORM](https://typeorm.io/#/ 'TypeORM')
- Database: [MySQL](https://www.mysql.com/jp/ 'MySQL')

---

## First Setup

```env
TZ=Asia/Tokyo
DB_NAME=
DB_USERNAME=
DB_PASSWORD=
DB_PORT=
```

```shell
brew install yarn
docker-compose up --build
```

---

## Server

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

---

## Migration

### Exec app container

```shell
docker-compose exec api bash
```

### Generate Migrations

(In app container)

```shell
./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:generate -n  <migration-name>
```

### Run Migrations

(In app container)

```shell
./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:run
```
