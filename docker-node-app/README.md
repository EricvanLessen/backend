# Docker


## Docker Node.js App

This repository contains a simple Node.js application that is Dockerized. It serves as an example to help you get started with Dockerizing your own Node.js applications.

### Prerequisites

- Docker installed on your machine

### Getting Started

1. Clone this repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd docker-node-app
   ```

3. Build the Docker image:
   ```
   docker build -t docker-node-app .
   ```

4. Run the Docker container:
   ```
   docker run -p 3000:3000 docker-node-app
   ```

5. Access the application:
   Open a web browser and go to `http://localhost:3000` or use the command:
   ```
   curl http://localhost:3000
   ```

   You should see the message "Hello, Docker!" displayed in the browser or in the terminal if using `curl`.

### Customization

Feel free to modify the application code, add more dependencies, or customize the Dockerfile as per your requirements. This is just a basic example to help you understand the Dockerization process for a Node.js application.

For more information about Docker and its various features, refer to the official Docker documentation.

Happy Dockerizing!


## Overview
Docker is an open-source platform that enables you to automate the deployment and management of applications within containers. Containers are lightweight, isolated environments that encapsulate all the necessary dependencies for running an application. This readme provides a brief overview of Docker concepts and commands to help you get started.

## Software Requirements
- Docker: Install Docker on your host machine. Visit the [Docker website](https://www.docker.com/) for installation instructions specific to your operating system.

## Dockerfile
The Dockerfile is a text file that contains instructions for building a Docker image. It defines the base image, dependencies, environment variables, and other settings for your application.

Example Dockerfile:
```
# Specify the base image
FROM node:14

# Copy application files to the container
COPY . /app

# Set the working directory
WORKDIR /app

# Install dependencies
RUN npm install

# Set environment variables
ENV PORT 3000

# Expose a port
EXPOSE $PORT

# Define the command to run the application
CMD ["npm", "start"]
```

## Image and Container
- **Image**: An image is a read-only template that contains the application code, runtime, libraries, and dependencies. It serves as the basis for creating containers.
- **Container**: A container is a running instance of an image. It is isolated and contains everything needed to run the application, including the operating system, software dependencies, and configuration.

## Building and Running Docker Images
To build a Docker image from a Dockerfile, use the `docker build` command:
```
docker build -t image_name .
```

To run a container from an image, use the `docker run` command:
```
docker run -p host_port:container_port image_name
```

## Docker Compose
Docker Compose is a tool for defining and running multi-container Docker applications. It uses a YAML file (docker-compose.yml) to configure the services, networks, and volumes required for your application.

Example docker-compose.yml file:
```yaml
version: '3'
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - host_port:container_port
    volumes:
      - ./app:/app
    environment:
      - ENV_VARIABLE=value
```

To start the application using Docker Compose, run the following command in the same directory as the docker-compose.yml file:
```
docker-compose up
```

## Dockerignore
The .dockerignore file allows you to specify files and directories that should be excluded from the Docker build context. This helps reduce the size of the built image by omitting unnecessary files.

Example .dockerignore file:
```
node_modules
build
```

## Environment Variables
Environment variables are key-value pairs that can be passed to a container at runtime. They allow you to configure the application behavior without modifying the code.

To set an environment variable when running a container, use the `-e` flag:
```
docker run -e ENV_VARIABLE=value image_name
```

## Port Forwarding
Port forwarding allows you to expose a container's port to the host machine. It enables external access to the application running inside the container.

To forward a container's port to the host machine, use the `-p` flag:
```
docker run -p host_port:container_port image_name
```

## Shared Files
Docker volumes provide a way to share files and directories between the host machine and the container. Volumes are mounted into containers, allowing data to persist even when the container is stopped or deleted.

To mount a volume, use the `-v` flag:
```
docker run -v host_directory:container_directory image_name
```

## Kubernetes
Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It allows you to run and manage Docker containers across multiple hosts.

To deploy a Dockerized application on Kubernetes, you'll need to create Kubernetes manifests, such as deployment and service YAML files, to define the desired state of your application.

## Docker Desktop
Docker Desktop is a tool that provides an easy-to-use graphical interface for managing Docker containers and images on your local machine. It simplifies the process of building, running, and managing containers.

## Dockerfile Instructions
- `FROM`: Specifies the base image for the Docker image.
- `COPY`: Copies files and directories from the build context to the image.
- `WORKDIR`: Sets the working directory for subsequent instructions.
- `RUN`: Executes a command during the image build process.
- `ENV`: Sets environment variables inside the image.
- `EXPOSE`: Exposes a port for communication with other containers.
- `CMD`: Defines the default command to be executed when the container starts.

Please refer to the Docker documentation for more detailed information on Dockerfile instructions and their usage.

Note: This readme provides a basic introduction to Docker concepts and commands. It's recommended to explore the official Docker documentation for a deeper understanding and more advanced usage scenarios.