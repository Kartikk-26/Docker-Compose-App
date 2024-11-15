
---

# 🚀 Docker Compose Multi-Container Application

This project demonstrates deploying a simple multi-container application using Docker Compose. The application includes a **React.js frontend** and a **Node.js backend** working together.

## 📑 Table of Contents

- [Project Structure](#-project-structure)
- [Requirements](#-requirements)
- [Setup and Usage](#️-setup-and-usage)
- [Project Overview](#-project-overview)
- [Application Output](#-application-output)
- [Docker Compose Configuration](#%EF%B8%8F-docker-compose-configuration)
- [Stopping the Application](#-stopping-the-application)
- [Connect with Me](#-connect-with-me)

## 📂 Project Structure

- **docker**: Contains the frontend application (React.js) and its Dockerfile.
- **node**: Contains the backend application (Node.js) and its Dockerfile.
- **docker-compose.yml**: Combines the configuration of frontend and backend Dockerfiles, allowing both services to run in isolated containers and communicate.

## 📋 Requirements

- Docker
- Docker Compose

## ⚙️ Setup and Usage

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Build and Run Containers**:
   Use Docker Compose to build and start the frontend and backend containers.
   ```bash
   docker-compose up --build
   ```

3. **Access the Application**:
   - The **frontend** is accessible at `http://localhost:<frontend-port>`.
   - The **backend** is accessible at `http://localhost:<backend-port>`.

## 📝 Project Overview

This is a simple Docker Compose project in which we deployed a multi-container **React.js** and **Node.js** application. Docker Compose manages both containers, allowing seamless integration between the frontend and backend services.

### 📸 Application Output

The output of the application (as shown in the attached screenshot) includes:

- **Album Review**: "When we all fall asleep, where do we go?"
- **Book Review**: "How can we escape this labyrinth of suffering?"
- **Documentary Review**: "How can we escape the rat race?"

## 🛠️ Docker Compose Configuration

The `docker-compose.yml` file includes the configuration for both services:

- **Frontend**:
  - Defined in the `docker` folder with its own Dockerfile.
  - Configured to run on a specified port.
  
- **Backend**:
  - Defined in the `node` folder with its own Dockerfile.
  - Exposes an API endpoint for the frontend to consume.

## 🛑 Stopping the Application

To stop and remove the containers, run:
```bash
docker-compose down
```

## 💡 Connect with Me

Stay connected on [LinkedIn](https://www.linkedin.com/in/-kartikjain/) to see more projects and improvements as I continue my learning journey. Let's collaborate and create impactful web applications!

Follow along to track my daily progress.

---