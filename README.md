---

# E-Commerce Storefront with Medusa.js, React, and Docker 🚀

Welcome to the **E-Commerce Storefront** project!  

This repository is a **work-in-progress (WIP)** to create a fully functional, scalable e-commerce platform using **Medusa.js** as the backend, **React** as the frontend, and **Docker** for containerization and scaleability turning a cms based webshop to unique scaleable ecoomerce

---

The project is designed to be deployed with a **reverse proxy powered by Traefik** and utilizes **Supabase PostgreSQL** as the database.

---

## Project Overview ✨

This project aims to integrate cutting-edge technologies to build a modern e-commerce storefront. The architecture consists of two main parts:

- **Frontend (React)**: A storefront for customers to browse products, add items to their cart, and proceed to checkout with stripe.  
- **Backend (Medusa API)**: A robust and customizable e-commerce backend that powers product management, customer orders, and more.

The entire app is containerized with **Docker**, and traffic is routed and managed with **Traefik** for SSL, load balancing, and reverse proxying.

---

## Features 🚀

✅ **React Frontend**: A responsive and dynamic storefront for showcasing products.  

✅ **Medusa.js Backend**: A headless e-commerce platform for managing the backend operations of the store.  

✅ **Docker & Docker Compose**: For containerizing both the frontend and backend, ensuring portability and scalability.  

✅ **Traefik Reverse Proxy**: To handle routing, SSL certificates (via Let's Encrypt), and automatic service discovery in the Docker containers.  

✅ **Supabase PostgreSQL**: A scalable and managed PostgreSQL database for Medusa.

---

## Current Status 🚧 (WIP)

The project is in **active development**, and the following features have already been set up:

- ✅ built the frontend with mockup data

---

### To Be Completed:

- 🚧 Finalizing the database setup with **Supabase**  
- 🚧 Optimizing the deployment for production  
- 🚧 Additional configuration for scaling and improving app performance with Docker

---

## Technologies Used 🛠️

| Component      | Technology |
|-----------------|------------|
| Frontend        | React.js   |
| Backend         | Medusa.js  |
| Database        | Supabase (PostgreSQL) |
| Containerization| Docker, Docker Compose |
| Reverse Proxy   | Traefik (with Let's Encrypt SSL/ cloudflare cdn ) |

---

## Roadmap TODO 🛤️

- ✅ Dockerize frontend and backend  
- ✅ Set up PostgreSQL with Supabase  
- ✅ Integrate Traefik for SSL and reverse proxy  
- 🚧 Finalize production-ready deployment  
- 🚧 Optimize for scalability and performance  
- 🚧 Integrate additional features like payment gateways and user authentication

---
