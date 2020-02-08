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
Start Containers
`docker-compose up`  
Start Containers with build
`docker-compose up --build`  
Launch in background
`docker-compose up -d`
Stop Container  
`docker-compose down`  