# msp-streak-docker
🎉 All the Codes and presentation of my workshop Docker 1o1 at Msp Streak

## Presentation link : https://bit.ly/3582R3a.

## YouTube

<a  href="https://youtu.be/4Sgz6EECnR8">  <img  alt="you-tube"  src="https://lh3.googleusercontent.com/tLkxs5BPO4FgltlhFZPVXqYChjuE5BQyAdfHLJmhPAkUp2jfhYeV9Jsf7PbA-t-jD0kQg9okycl_iyIjYHHgOqPBlu89uDoydY_FsfsyPpH_omkqB9L6jndDVo7lpnZg3rq3qq5OYJ0=w583-h328-no">  </a>

## Docker Cheat Sheet

## Installation
Docker
[https://docs.docker.com/engine/install/ubuntu/](https://docs.docker.com/engine/install/ubuntu/)

Docker-Compose
[https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)
## Basics
1. Hello World
```
$ docker run hello-world
```

2.  Display all Containers with details such images the containers are using, ports being used, status, command, created time and status.
```
$ docker ps -a
```

3.  Display all downloaded images with image id and created time and size.
```
$ docker images -a
```

4.  Stop a specific container.
```
$ docker stop [container name]
```

5. Display logs of a container.
```
$ docker logs [container name]
```

6. Pull Image From Docker Hubs
```
$ docker pull image-name:tag
```

## Creating Dockerfiles
We start with specifying our base image. Use the  `FROM`  keyword to do that -

```
FROM python:3.8
```

The next step usually is to write the commands of copying the files and installing the dependencies. First, we set a working directory and then copy all the files for our app.

```
# set a directory for the app
WORKDIR /usr/src/app

# copy all the files to the container
COPY . .
```

Now, that we have the files, we can install the dependencies.

```
# install dependencies
RUN pip install --no-cache-dir -r requirements.txt
```

The next thing we need to specify is the port number that needs to be exposed. Since our flask app is running on port  `5000`, that's what we'll indicate.

```
EXPOSE 5000
```

The last step is to write the command for running the application, which is simply -  `python ./app.py`. We use the  [CMD](https://docs.docker.com/engine/reference/builder/#cmd)  command to do that -

```
CMD ["python", "./app.py"]
```

The primary purpose of  `CMD`  is to tell the container which command it should run when it is started. With that, our  `Dockerfile`  is now ready. This is how it looks -

```
FROM python:3

# set a directory for the app
WORKDIR /usr/src/app

# copy all the files to the container
COPY . .

# install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# define the port number the container should expose
EXPOSE 5000

# run the command
CMD ["python", "./app.py"]
```

Now that we have our  `Dockerfile`, we can build our image. The  `docker build`  command does the heavy-lifting of creating a Docker image from a  `Dockerfile`.
## Running Dockerfiles
7. Build a Docker Image
```
$ docker build -t [image-name]:[tag] .
```

8. Running a Docker Image
```
$ docker run  -d [image-name:tag]
```

9.  Running Docker Image with a specific container name
```
$ docker run --name  [container-name] [image-name:tag]
```

10. Running Docker Image in detached terminal
```
$ docker run -d --name  [container-name] [image-name:tag] 
```
In the above command, `-d` will detach our terminal.

11. Reattach to a detached container
```
$ docker attach [container-name]
```

12. Running Docker Image by exposing a specific container port and binding it with host port

```
$ docker run -p [host-port]:[container-port] --name [container-name] [image-name:tag] 
```

## Stopping Containers

13. Stopping Containers by name
```
$ docker stop [container-name]
```

14. Stopping Container by container id
```
$ docker stop [container-id]
```

## Rename Containers and Images
15. Rename Image
```
$ docker tag [old-image-name]:[tag] [new-image-name:tag]
```

16. Rename Container
```
$ docker rename [old-container-name] [new-container-name]
```

## Deleting 

17. Delete a container
> Before Deleting a Container you need to stop the container
```
$ docker rm [container-name]
```

18. Delete a container by id
> Before Deleting a Container you need to stop the container
```
$ docker rm [container-id]
```
19. Delete an image
> Before Deleting an image you need to stop the container using that image
```
$ docker rmi [image-name:tag]
```
20. Delete an image by id
> Before Deleting an image you need to stop the container using that image
```
$ docker rmi [image-id]
```
## Miscellaneous

21. Excessing shell of a container
```
$ docker exec -it [container-name] bash
```
22. See statistics of docker usage of resources like ram, cpu and network usage
```
$ docker stats
```
23. Get Ip address of docker
```
$ docker-machine ip
```
## Push To Docker Hubs
1. Tag Image like this
```
$ docker tag [local-image-name:tag] [docker-hub-user-name/repository-name]:tag
```

2. Push the image
```
$ docker push [docker-hub-user-name/repository-name]:tag
```

## Docker-Compose
1. Build Images
```
$ docker-compose build
```
or 
```
docker-compose up --build
```
2. Start and Run all Containers
```
docker-compose up
```
3. Stop Containers
```
docker-compose down
```
4. Starts a specific service from docker-compose
```
docker-compose run [service-name]
```
