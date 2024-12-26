# ChatNest

ChatNest is a social network API designed to facilitate dynamic user interactions, including sharing thoughts, reacting to friends' posts, and building friend lists. Built using Express.js and MongoDB, ChatNest efficiently handles large amounts of unstructured data, making it an ideal solution for social media applications.

## Features

- **User Management**: Create, update, and delete users.
- **Thought Sharing**: Users can post, update, and delete thoughts.
- **Reactions**: Users can add reactions to thoughts and remove them as needed.
- **Friendship Management**: Add and remove friends to/from a user's friend list.
- **NoSQL Database**: Utilizes MongoDB for scalable and flexible data storage.

---

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [API Endpoints](#api-endpoints)
4. [Technologies Used](#technologies-used)
5. [Contributing](#contributing)
6. [License](#license)

---

## Installation

To run ChatNest locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yaseminvatan/chatnest.git
   ```

2. Navigate to the project directory:
   ```bash
   cd chatnest
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up the MongoDB connection by creating a `.env` file and adding your MongoDB URI:
   ```
   MONGODB_URI=mongodb://localhost:27017/chatNestDB
   ```

5. Start the application:
   ```bash
   npm run start
   ```

---

## Usage

1. Start the server with the command:
   ```bash
   npm run start
   ```

2. Use [Insomnia](https://insomnia.rest/) or another API testing tool to interact with the API endpoints.

3. Test CRUD operations for users, thoughts, reactions, and friendships.

---

## API Endpoints

### **Users**

- `GET /api/users` - Retrieve all users.
- `GET /api/users/:userId` - Retrieve a single user by ID, including thoughts and friends.
- `POST /api/users` - Create a new user.
  ```json
  {
    "username": "exampleUser",
    "email": "example@example.com"
  }
  ```
- `PUT /api/users/:userId` - Update user details by ID.
- `DELETE /api/users/:userId` - Delete a user and their associated thoughts.

### **Thoughts**

- `GET /api/thoughts` - Retrieve all thoughts.
- `GET /api/thoughts/:thoughtId` - Retrieve a single thought by ID.
- `POST /api/thoughts` - Create a new thought.
  ```json
  {
    "thoughtText": "This is a thought!",
    "username": "exampleUser",
    "userId": "12345"
  }
  ```
- `PUT /api/thoughts/:thoughtId` - Update a thought by ID.
- `DELETE /api/thoughts/:thoughtId` - Delete a thought by ID.

### **Reactions**

- `POST /api/thoughts/:thoughtId/reactions` - Add a reaction to a thought.
  ```json
  {
    "reactionBody": "Great thought!",
    "username": "exampleUser"
  }
  ```
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction by ID.

### **Friends**

- `POST /api/users/:userId/friends/:friendId` - Add a friend to a user's friend list.
- `DELETE /api/users/:userId/friends/:friendId` - Remove a friend from a user's friend list.

---

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for flexible and scalable data management.
- **Mongoose**: ODM for MongoDB, enabling schema-based modeling.
- **dotenv**: Environment variable management.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Walkthrough Video

A walkthrough video demonstrating the functionality of ChatNest can be found [here](#).

