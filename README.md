# micro-services-service-mesh
This repo contains micro services (golang, nodejs) to demonstrate service mesh usage to determine week parts of the distributed application.

# Prerequisites

- [Install Docker](https://docs.docker.com/get-docker/)
- [Enable Kubernetes with Docker Desktop](https://docs.docker.com/get-started/kube-deploy/)

![enable kube docker desktop](./assets/enable-kube-docker-desktop.png)

```bash
docker version
kubectl version
```

- [Install Go](https://go.dev/doc/install)
- [Install Micro Framework and CLI](https://github.com/micro/micro#installation)
- [Pull Micro Framework Docker Image](https://hub.docker.com/r/micro/micro)

```bash
docker pull micro/micro
```

- [Install Protocol Buffer Compiler](https://grpc.io/docs/protoc-installation/)

## Manually

```bash
# make micro cli executable to run it with docker
chmod +x ./bin/micro
# optionally update your PATH to include ./bin
PATH=$PATH:./bin/
```

# Start

Run server

```bash
# micro server
# docker run micro/micro:latest server
docker run -p 8080:8080 -p 8082:8082 -v $PWD:'/src' --name=micro micro/micro:latest server
```

Start web portal

```bash
# docker exec -it <CONTAINER-ID> ./micro web
docker exec -it micro ./micro web
# with cli
micro web
```

# Develop

Create new servce

```bash
micro new helloworld
```

# Links

- [Asim Aslam on Microservices, go-micro, and PaaS 3.0](https://soundcloud.com/infoq-channel/interview-asim-aslam)
- [Microservices in Golang](https://www.bookstack.cn/read/microservices-in-golang/1.md)
- [Getting Started - Welcome to Linkerd! 🎈](https://linkerd.io/2.12/getting-started/)