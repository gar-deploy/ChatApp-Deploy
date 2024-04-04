# Chat Application README

This repository contains the code for a Chat Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js), Socket.io for real-time communication, JWT for authentication, Tailwind CSS for styling, and Bcrypt for password hashing.

## Tech Stack

- **MongoDB**: NoSQL database used for storing user information and chat messages.
- **Express.js**: Backend web application framework for Node.js used for routing and middleware.
- **React.js**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime environment for running server-side applications.
- **Socket.io**: Real-time bidirectional event-based communication library.
- **JWT (JSON Web Tokens)**: Used for authentication and authorization.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Installation

To install the required Node packages, run the following command in your terminal:

```bash
npm install


This command will install all the dependencies specified in the `package.json` file.

## Getting Started

1. **Clone the Repository**: 
    ```
    git clone https://github.com/your-username/chat-application.git
    ```

2. **Install Dependencies**: 
    ```
    cd ChatApp
    npm install
    ```

3. **Set Up Environment Variables**:
    Create a `.env` file in the root directory of your project and set the following environment variables:
    ```
    MONGO_DB_URL =<your_mongodb_connection_string>
    JWT_SECRET_KEY=<your_jwt_secret_key>
    ```

4. **Run the Application**:
    Start the development server by running:
    ```
    npm start
    ```
    The application will run at `http://localhost:5000` by default.

## Usage

- **Sign Up**: Create a new account using your email and password.
- **Login**: Log in with your registered email and password.
- **Real-time Chat**: Start chatting with other users in real-time.
- **Logout**: Logout from the application.
