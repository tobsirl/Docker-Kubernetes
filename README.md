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