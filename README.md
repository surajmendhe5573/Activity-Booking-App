# Basic Activity Booking App API

A simple REST API backend for a **Basic Activity Booking App**, inspired by MeetX use cases. This app allows users to register, login, explore available activities, book activities, and manage their bookings effortlessly.

---

## Objective

The objective of this project is to create a backend service that supports core functionalities for a basic activity booking application. This includes user authentication, activity management, and booking operations.

---

## Features

- User Registration and Login with JWT-based authentication.
- List of activities available for booking.
- Book an activity.
- View bookings made by the authenticated user.
- Input validation using `express-validator`.
- Password hashing with `bcrypt`.



## API Endpoints

### User Routes

| Method | Endpoint             | Description                  | Authentication |
|--------|----------------------|------------------------------|----------------|
| POST   | `/api/users/register` | Register a new user          | No             |
| POST   | `/api/users/login`    | Login user and get JWT token | No             |

---

### Activity Routes

| Method | Endpoint               | Description               | Authentication |
|--------|------------------------|---------------------------|----------------|
| GET    | `/api/activities`      | List all available activities | No          |
| POST   | `/api/activities/create` | Add a new activity | No |

---

### Booking Routes

| Method | Endpoint                 | Description                   | Authentication |
|--------|--------------------------|-------------------------------|----------------|
| POST   | `/api/bookings/book`     | Book an activity              | Yes            |
| GET    | `/api/bookings` | View bookings made by the user | Yes            |

---

## Example Requests

### Register a User

**Request:**
```json
POST /api/users/register
Content-Type: application/json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "1234567890",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "64b53d8ad50e3c1234f56789",
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}
```

---

### Login a User

**Request:**
```json
POST /api/users/login
Content-Type: application/json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### List Activities

**Request:**
```http
GET /api/activities
```

**Response:**
```json
{
    "message": "Activities listed successfully",
    "activities": [
        {
            "_id": "681f26542f8cd0a0abc47404",
            "title": "Cricket Match",
            "description": "Local cricket tournament finals",
            "location": "Sports Complex, City Center",
            "dateTime": "May 15, 2025, 8:30 AM",
            "__v": 0
        },
        {
            "_id": "681f269f2f8cd0a0abc47406",
            "title": "Football Match",
            "description": "Intercity championship",
            "location": "National Stadium",
            "dateTime": "May 19, 2025, 8:30 AM",
            "__v": 0
        }
    ]
}
```

---

### Book an Activity

**Request:**
```json
POST /api/bookings/book
Authorization: Bearer <JWT Token>
Content-Type: application/json
{
  "activityId": "64b54321d50e3c6789abcdef"
}
```

**Response:**
```json
{
  "message": "Activity booked successfully",
  "booking": {
    "id": "64b56789d50e3c9876abcdef",
    "user": "64b54321d50e3c6789abcxyz",
    "activity": "64b54321d50e3c6789abcdef",
  }
}
```

---

### View My Bookings

**Request:**
```http
GET /api/bookings/
Authorization: Bearer <JWT Token>
```

**Response:**
```json
{
    "message": "Booked activities fetched successfully",
    "bookings": [
        {
            "_id": "681f2f927e474a83a5dd99a5",
            "user": "681f207380aec21243e95b24",
            "activity": {
                "_id": "681f269f2f8cd0a0abc47406",
                "title": "Football Match",
                "description": "Intercity championship",
                "location": "National Stadium",
                "dateTime": "2025-05-19T03:00:00.000Z",
                "__v": 0
            },
            "__v": 0
        }
    ]
}
```

---

## Setup

1. Clone the repository:
   ```bash
   git clone <https://github.com/surajmendhe5573/News-Aggregator-App.git>
   cd <News-Aggregator-App>


## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB installed

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT)
- **Validation**: express-validator
- **Password Hashing**: bcrypt
- **API Testing**: Postman
- **Version Control**: Git and GitHub
## Environment Variables

Create a `.env` file in the root directory of the project with the following variables:

```
# Port
PORT=5000

# Database Connection
MONGO_URI=mongodb://localhost:27017/defaultdb

NEWS_API_KEY= default_api_key

```


## 🚀 About Me
I'm a Backend developer...


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/surajmendhe5573)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/suraj-mendhe-569879233/?original_referer=https%3A%2F%2Fsearch%2Eyahoo%2Ecom%2F&originalSubdomain=in)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)






