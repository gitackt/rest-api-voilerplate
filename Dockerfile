FROM golang:latest

LABEL maintainer "tackt"
WORKDIR /go/src

COPY go.mod .
COPY go.sum .

ENV GO111MODULE=on
RUN go mod download

COPY . .

EXPOSE 3000
CMD ["go", "run", "main.go"]