

# VRV Security Backend Assignment  

This repository contains the backend assignment project for VRV Security, showcasing **Authentication**, **Authorization**, and **Role-Based Access Control (RBAC)** functionalities.  

## Features  

- **User Authentication**:  
  Secure login and signup functionality using **JWT-based authentication**.  

- **Role-Based Access Control (RBAC)**:  
  Granular control of user access based on their roles (e.g., Admin, Editor, Viewer).  

- **Authorization**:  
  Ensures that users can only access resources for which they have permissions.  

## Technologies Used  

- **Node.js**  
- **Express.js**  
- **MongoDB**  
- **JWT (JSON Web Token)**  
- **bcrypt** (for password hashing)  
- **Joi** (for server-side validation)  

## Installation  

1. Clone this repository:  
   ```bash
   git clone https://github.com/Harsh-Dogney/vrv-assignment_nodoejs.git
   cd vrv-assignment_nodoejs/be
   ```  

2. Install dependencies:  
   ```bash
   npm install
   ```  

3. Create a `.env` file in the root directory and configure the following environment variables:  
   ```env
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_secret_key>
   ```  

4. Start the server:  
   ```bash
   npm start
   ```  

## API Endpoints  

### Authentication  

| Method | Endpoint            | Description              | Protected |  
|--------|---------------------|--------------------------|-----------|  
| POST   | `/api/auth/signup`  | Register a new user      | No        |  
| POST   | `/api/auth/login`   | Login a user             | No        |  
| POST   | `/api/auth/logout`  | Logout a user            | Yes       |  

### User Management  

| Method | Endpoint               | Description              | Protected |  
|--------|------------------------|--------------------------|-----------|  
| GET    | `/api/users/me`        | Get current user details | Yes       |  
| PUT    | `/api/users/:id/role`  | Update user role         | Yes (Admin) |  

## Folder Structure  

```plaintext  
├── controllers       # Request handlers  
├── middlewares       # Authentication & Authorization logic  
├── models            # MongoDB models  
├── routes            # API routes  
├── utils             # Utility functions  
├── .env.example      # Sample environment variables  
└── server.js         # Application entry point  
```  

## How to Use  

1. Use **Postman** or similar tools to test API endpoints.  
2. Assign roles and permissions to users using Admin routes.  
3. Access protected routes based on your role.  

## Future Enhancements  

- Add front-end integration for a seamless UI.  
- Implement refresh tokens for enhanced security.  
- Add unit and integration tests for APIs.  

