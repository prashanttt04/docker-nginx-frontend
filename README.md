# 💄 Parlour Website – Dockerized Static Web Application

## 📌 Project Overview

This project is a static Parlour Website built using:

- HTML  
- CSS  
- JavaScript  

The main objective of this project is to demonstrate how Docker can be used to containerize a static web application so that it runs consistently on any system without manual server setup.

The website is served using Nginx inside a Docker container.

---

## 🐳 Dockerfile Used

```dockerfile
FROM nginx
LABEL maintainer="Prashant Rao Jagtap"
WORKDIR /usr/share/nginx/html
COPY . .
EXPOSE 80
CMD ["nginx" , "-g", "daemon off;"]
```

---

## 🔍 Dockerfile Explanation

### 1️⃣ Base Image  
`FROM nginx`  
Uses the official nginx image from Docker Hub.

### 2️⃣ Metadata  
`LABEL maintainer="Prashant Rao Jagtap"`  
Adds author information to the image.

### 3️⃣ Working Directory  
`WORKDIR /usr/share/nginx/html`  
Sets nginx’s default web root directory.

### 4️⃣ Copy Files  
`COPY . .`  
Copies all project files (HTML, CSS, JS) into the container’s web root.

### 5️⃣ Expose Port  
`EXPOSE 80`  
Indicates that the container listens on port 80.

### 6️⃣ Runtime Command  
`CMD ["nginx" , "-g", "daemon off;"]`  
Runs nginx in the foreground so the container stays active.

---

## 🚀 How to Run This Project

### Step 1 — Build Docker Image

```bash
docker build -t parlour-website .
```

### Step 2 — Run Docker Container

```bash
docker run -d -p 8080:80 parlour-website
```

### Step 3 — Access the Website

Open your browser and go to:

```
http://localhost:8080
```

---

## 🔥 Why Docker Is Used

Without Docker:
- Nginx must be installed manually  
- Server configuration is required  
- Environment differences can cause issues  

With Docker:
- The web server and application are packaged together  
- The project runs identically on any system  
- No manual configuration required  
- Ensures portability and reproducibility  

---

## 📂 Project Structure

```
Parlour/
│── index.html
│── style.css
│── script.js
│── Dockerfile
│── README.md
```

---

## 🎯 Key Concepts Demonstrated

- Writing a custom Dockerfile  
- Using nginx as a production web server  
- Building Docker images  
- Running containers with port mapping  
- Creating portable applications using containerization  
