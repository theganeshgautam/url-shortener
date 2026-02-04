# URL Shortener API

A RESTful API for creating, managing, and tracking short URLs with features like user authentication, URL shortening, analytics, and secure access, built with Node.js, Express, and MongoDB.

## Setup Instructions

1. Clone the Repository

- git clone https://github.com/your-username/url-shortener-api

2. Install Dependencies

- npm install

3. Configure Environment Variables

- Create a `.env` file in the root directory

- PORT=5000

- MONGO_URI=your_mongodb_connection_string

- JWT_SECRET=your_jwt_secret

4. Run the Server

- npm run dev

- then the server will start on http://localhost:5000

## Features

- User registration and login with JWT authentication.

- Create, retrieve, and redirect short URLs.

- Track clicks and access timestamps for analytics.

- Rate limiting to prevent abuse of URL shortening endpoint.

- Database indexing for fast lookup of URLs.

- Input validation to ensure only valid URLs are accepted.

## Main API Endpoints

- `POST /api/auth/register` → Register a new user  

- `POST /api/auth/login` → Login and receive JWT  

- `POST /api/url/shorten` → Create a short URL (requires JWT)  

- `GET /api/url/` → Get all URLs for the logged-in user  

- `GET /api/url/:shortId` → Redirect to the original URL  

- `GET /api/url/analytics/:shortId` → Get analytics for a URL (requires JWT)  

## Tech Stack

- Backend: Node.js, Express  

- Database: MongoDB with Mongoose  

- Authentication: JWT  

- Short ID Generation: nanoid (Base62 encoding)  

- Rate Limiting & Security: express-rate-limit, input validation  
