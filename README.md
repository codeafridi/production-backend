# Production-Style Backend API

A production-ready backend API built with **Node.js, Express, PostgreSQL, Docker, and Docker Compose**.  
This project demonstrates real-world backend fundamentals including authentication, database design, containerization, and request rate limiting.

---

## 🚀 Features

- User signup with secure password hashing (bcrypt)
- User login with JWT-based authentication
- Protected routes using JWT middleware
- PostgreSQL database with proper schema design
- Rate limiting per authenticated user
- Dockerized backend
- Multi-service setup using Docker Compose
- Environment-based configuration

---

## 🏗️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Auth:** JWT (jsonwebtoken), bcrypt
- **Containerization:** Docker, Docker Compose
- **Language:** JavaScript

---

## 📂 Project Structure

production-backend/
├── src/
│ ├── routes/ # API routes (auth, protected routes)
│ ├── middleware/ # Auth & rate limiting middleware
│ ├── db/ # Database connection & schema
│ ├── config/ # Configuration files
│ └── app.js # Application entry point
├── Dockerfile
├── docker-compose.yml
├── .env.example
├── .gitignore
└── README.md


---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

PORT=3000
JWT_SECRET=your_secret_key
DATABASE_URL=postgres://postgres:postgres@db:5432/appdb


See `.env.example` for reference.

---

## 🐳 Running the Project (Docker)

### Build and start services
```bash
docker compose up --build
```
### Stop services
```bash 
docker compose down or docker compose stop
```

## API Endpoints
###Signup

POST /auth/signup

###Body:
```bash
{
  "email": "user@example.com",
  "password": "password123"
}
```   
###Login

POST /auth/login

Response:
```bash
{
  "token": "<JWT_TOKEN>"
}
```

###Protected Route
GET /me

###Header:
Authorization: Bearer <JWT_TOKEN>

##⏱️ Rate Limiting

100 requests per user per 15 minutes
Applied to protected routes
Returns HTTP 429 when limit is exceeded

## 🧠 Design Decisions

JWT over sessions for stateless authentication
PostgreSQL for relational data integrity
Docker Compose to model real production systems
Middleware-based auth & limits for clean separation of concerns
No ORM to maintain clarity over SQL and DB behavior

## 📌 Notes

Passwords are never stored in plain text
Secrets are never committed to version control
The database schema is designed with production constraints in mind

## 🏁 Status

✅ Core backend completed
🚧 Ready for deployment, monitoring, and scaling in future phases