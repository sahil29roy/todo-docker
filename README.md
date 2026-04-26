# Todo Docker API

A simple REST API built with Node.js, Express, and MongoDB, fully containerized using Docker and Docker Compose.

## Project Description
This project is a robust backend service for managing a Todo list. It features a complete set of CRUD (Create, Read, Update, Delete) operations. The architecture is split into a web server (Node.js/Express API) and a database service (MongoDB), both running in separate Docker containers.

## Technologies Used
- **Node.js & Express**: Core application logic and routing.
- **Mongoose & MongoDB**: Data modeling and persistent storage.
- **Docker & Docker Compose**: Containerization and orchestration.

## How to Run the Application

### Prerequisites
- [Docker](https://www.docker.com/) installed on your machine.
- [Docker Compose](https://docs.docker.com/compose/) installed on your machine.

### Instructions

#### Using Docker Compose (Recommended)
1. Clone this repository:
   ```bash
   git clone https://github.com/sahil29roy/todo-docker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd todo-docker
   ```
3. Build and start the containers:
   ```bash
   docker-compose up -d --build
   ```
4. The API will be accessible at `http://localhost:5001`.

#### Using Docker Run (Standalone)
If you prefer to run only the API container and connect to a MongoDB instance manually:
```bash
docker run -p 8000:5001 sahil29roy/todo-docker:latest
```

## Resources
- **GitHub Repository**: [sahil29roy/todo-docker](https://github.com/sahil29roy/todo-docker)
- **Docker Hub Image**: [sahil29roy/todo-docker](https://hub.docker.com/r/sahil29roy/todo-docker)

## API Endpoints

The API is base-routed at `http://localhost:5001/todos`.

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| **POST** | `/todos` | Create a new todo item | `{ "title": "string", "completed": boolean }` |
| **GET** | `/todos` | List all todo items | None |
| **GET** | `/todos/:id` | Get details of a single todo | None |
| **PUT** | `/todos/:id` | Update an existing todo | `{ "title": "string", "completed": boolean }` |
| **DELETE** | `/todos/:id` | Remove a todo item | None |

### Request Body Example
For **POST** and **PUT** requests, use the following JSON structure:
```json
{
  "title": "Complete Docker assignment",
  "completed": false
}
```

## Stopping the Application
To stop and remove the containers created by Docker Compose:
```bash
docker-compose down
```
