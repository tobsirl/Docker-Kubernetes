# Dockerfile

| Intructions | Arguments              | Explaination                                                                  |
|-------------|------------------------|-------------------------------------------------------------------------------|
| `FROM`      | alpine                 | Specify the Docker image to be used as a base                                 |
| `RUN`       | apk add --update redis | Executes any instructions in a new layer on top of the image                  |
| `CMD`       | [ "redis-server"]      | Provide defaults for an executing container                                   |
| `COPY`      | ./                     | Copies new files/dir from source and adds them to filesystem of the container |

Three of the most important instructions to know

## Tagging and image
`docker build -t tobsirl/redis:latest .`

tagging convention
Docker ID - Repo/Project name - Version

running the docker image
`docker run tobsirl/**redis`