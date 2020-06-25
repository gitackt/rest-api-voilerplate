# Apollo-TypeORM-Api-server-Voilerplate

apollo api

## Setup

```
brew install yarn
ln -s .env.sample .env
```

## Server

### Build image

```
docker-compose build
```

### Start server

```
docker-compose up
```

### Start server（with build）

```
docker-compose up --build
```

### Start server（deamon）

```
docker-compose up --build -d
```

### Stop server

```
docker-compose down
```

### Stop server (remove volumes)

```
docker-compose down -v
```

## Container

### Exec

```
 docker exec -it <container-id> bash
```
