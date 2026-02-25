# 💇‍♀️ Salon Website – Dockerized Static Web Application

## 📌 Project Overview

This project is a static Salon Website built using:

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

## 🚀 How to Run This Project

### Step 1 — Build Docker Image

```bash
docker build -t salon-website .
```

### Step 2 — Run Docker Container

```bash
docker run -d -p 8080:80 salon-website
```

### Step 3 — Access the Website

Open your browser and go to:

```
http://localhost:8080
```

---

## 🔥 Why Docker?

- Packages web server + website together  
- No manual Nginx installation required  
- Runs identically on Windows, Linux, macOS  
- Ensures portability and environment consistency  

---

## 📂 Project Structure

```
Salon/
│── index.html
│── style.css
│── script.js
│── Dockerfile
│── README.md
```

---

## 🎯 Key Concepts Demonstrated

- Writing a custom Dockerfile  
- Using Nginx as a production web server  
- Building Docker images  
- Running containers with port mapping  
- Creating portable applications using containerization  
