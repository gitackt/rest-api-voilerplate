# poifull

apollo api

## Setup

```
brew install yarn hivemind
ln -s .env.sample .env
```

## Dev

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
