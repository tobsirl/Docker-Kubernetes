# Dockerfile

| Intructions | Arguments              | Explaination                                                 |
|-------------|------------------------|--------------------------------------------------------------|
| `FROM`      | alpine                 | Specify the Docker image to be used as a base                |
| `RUN`       | apk add --update redis | Executes any instructions in a new layer on top of the image |
| `CMD`       | [ "redis-server"]      | Provide defaults for an executing container                  |
