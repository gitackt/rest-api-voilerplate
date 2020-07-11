# Golang-REST-Api-Voilerplate

[![GitHub issues](https://img.shields.io/github/issues/gitackt/rest-api-voilerplate?color=%236971ce)](https://github.com/gitackt/rest-api-voilerplate/issues)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/gitackt/rest-api-voilerplate?color=%236971ce)](https://github.com/gitackt/rest-api-voilerplate/issues)
[![GitHub issues-closed](https://img.shields.io/github/issues-closed/gitackt/rest-api-voilerplate?color=%23ce6990)](https://github.com/gitackt/rest-api-voilerplate/issues)
[![GitHub pull-requests closed](https://img.shields.io/github/issues-pr-closed/gitackt/rest-api-voilerplate?color=%23ce6990)](https://github.com/gitackt/rest-api-voilerplate/issues)
[![GitHub forks](https://img.shields.io/github/forks/gitackt/rest-api-voilerplate?color=%2369cebf)](https://github.com/gitackt/rest-api-voilerplate/network)
[![GitHub stars](https://img.shields.io/github/stars/gitackt/rest-api-voilerplate?color=%2369cebf)](https://github.com/gitackt/rest-api-voilerplate/stargazers)
[![GitHub contributors](https://img.shields.io/github/contributors/gitackt/rest-api-voilerplate?color=%2369cebf)](https://github.com/gitackt/rest-api-voilerplate/stargazers)
[![GitHub license](https://img.shields.io/github/license/gitackt/rest-api-voilerplate?color=%23ccb868)](https://github.com/gitackt/rest-api-voilerplate/blob/master/LICENSE)

This is a boilerplate for an API server that uses [rest](https://rest.org/ "rest") in a [Docker](https://www.docker.com/ "Docker") container.

- Language: [Go](https://golang.org/ "Go")
- Server: [Chi](https://github.com/go-chi/chi "Chi")
- ORM: [SQLVoiler](https://github.com/volatiletech/sqlboiler "SQLVoiler")
- Database: [MySQL](https://www.mysql.com/jp/ "MySQL")

---

## ① First Setup

### Create .env

See `.env.sample`.

```shell
vi .env
```

### Create container

The application is launched with [docker-compose](https://docs.docker.com/compose/ "docker-compose").

```shell
docker-compose up --build
```

## ② Test

The application is tested with [jest](https://jestjs.io/docs/ja/getting-started "jest").

## ③ Server

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
