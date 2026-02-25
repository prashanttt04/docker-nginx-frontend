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
