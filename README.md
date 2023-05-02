# Dockerfile

| Intructions | Arguments              | Explaination                                                                  |
|-------------|------------------------|-------------------------------------------------------------------------------|
| `FROM`      | alpine                 | Specify the Docker image to be used as a base                                 |
| `RUN`       | apk add --update redis | Executes any instructions in a new layer on top of the image                  |
| `CMD`       | [ "redis-server"]      | Provide defaults for an executing container                                   |
| `COPY`      | ./                     | Copies new files/dir from source and adds them to filesystem of the container |
| `WORKDIR`   | /usr/app               | Sets the working directory                                                    |

Three of the most important instructions to know

### Tagging an image

`docker build -t tobsirl/redis:latest .`

tagging convention
Docker ID - Repo/Project name - Version

running the docker image
`docker run tobsirl/redis`

### Port mapping at run time

`docker run -p 8080:8080 tobsirl/simpleweb`

### Starting a shell in the container

`docker run -it tobsirl/simpleweb sh`
`docker exec -it e5936a165fbc sh`

## Docker Compose

yaml file

```yaml
version: '3'
services: 
  redis-server:
    image: 'redis'
  node-app:
    build: . 
    ports: 
      - "4001:8081"
```

| Command                     | Explaination                                                              |
|-----------------------------|---------------------------------------------------------------------------|
| `docker-compose up`         | Start Containers                                                          |
| `docker-compose up --build` | Start Containers with build                                               |
| `docker-compose up -d`      | Launch in background                                                      |
| `docker-compose down`       | Stop Containers                                                           |
| `docker-compose ps`         | Prints out a list of the running containers (requires docker-compose.yml) |

### Automatic Restarts

| Restart Policies | Explaination                                                        |
|------------------|---------------------------------------------------------------------|
| "no"             | Never attempt to restart this container if it stops or crashes      |
| always           | If this container stops for any reason always attempt to restart it |
| on-failure       | Only restart if the container stops with an error code              |
| unless-stopped   | Always restart unless we (the developers) forcibly stop it          |

## Docker Volumes

Volumes are the preferred mechanism for persisting data generated by and used by Docker containers.

`docker build -f Dockerfile.dev .`
`docker run -p 3000:3000 -v /app/node_modules -v$(pwd):/app <imageId>`

## Multi-Step Docker Builds

![Screenshot from 2020-02-11 16-08-02](https://user-images.githubusercontent.com/25591390/74254850-f4b75280-4ce8-11ea-9984-47718ab9c3bc.png)

## Docker Extension

[Docker Containers QuickStart Nodejs](https://code.visualstudio.com/docs/containers/quickstart-node)

## Multi-Container Application

![Screenshot from 2020-02-18 14-34-02](https://user-images.githubusercontent.com/25591390/74745460-d955c580-525b-11ea-932c-5e19b23ed909.png)

### Example of a json file for multi-container deployment with Elastic Beanstalk

```json
{
  "AWSEBDockerrunVersion": 2,
  "containerDefinitions": [
    {
      "name": "client",
      "image": "tobsirl/multi-client",
      "hostname": "client",
      "essential": false
    },
    {
      "name": "server",
      "image": "tobsirl/multi-server",
      "hostname": "api",
      "essential": false
    },
    {
      "name": "worker",
      "image": "tobsirl/multi-worker",
      "hostname": "worker",
      "essential": false
    },
    {
      "name": "nginx",
      "image": "tobsirl/multi-nginx",
      "hostname": "nginx",
      "essential": true,
      "portMappings": [
        {
          "hostPort": 80,
          "containerPort": 80
        }
      ],
      "links": ["client", "server"]
    }
  ]
}
```

## Docker Commands

```bash
docker run node # download latest node image and run it

docker ps -a # list all containers

docker run -it node # run container in interactive mode

docker srart <containerId> # start previous container
docker stop <containerId> # stop container

# Attached and Detached mode
docker run -it node # attached mode
docker run -it -d node # detached mode
docker start -a -i <containerId> # attached mode

# Attach to a running container
docker attach <containerId>

# dokcer logs
docker logs <containerId>
docker logs -f <containerId> # follow logs
docker logs -f -t <containerId> # follow logs with timestamps
dokker logs --tail 5 <containerId> # show last 5 logs

# docker interactive mode
docker run -it <containerId> sh # run shell in container
-i, --interactive                    Keep STDIN open even if not attached
-t, --tty                            Allocate a pseudo-TTY

docker start -i -a <containerId> # start container in interactive mode

# docker deleting images and containers
docker rm <containerId> # remove container
docker rm <containerId> <containerId> <containerId> # remove multiple containers
docker rmi <imageId> # remove image
docker rmi <imageId> <imageId> <imageId> # remove multiple images

# docker run remove container after exit
docker run --rm -it <containerId> sh

# inspect an image
docker image inspect <imageId>

# docker copy files into a container
docker cp <file> <containerId>:<path>
```
