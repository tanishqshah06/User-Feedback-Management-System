# User Feedback Management System

A MERN stack application for managing user feedback.

## Features
- User authentication
- Feedback submission
- Admin dashboard
- Real-time updates

## Tech Stack
- MongoDB
- Express.js
- React.js
- Node.js

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd user-feedback-system
   ```

2. Install dependencies:
   ```bash
   # Install root dependencies
   npm install

   # Install frontend dependencies
   cd frontend
   npm install
   cd ..
   ```

## Configuration

1. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

2. For MongoDB Atlas:
   - Create a new cluster
   - Set up database access with a user
   - Configure network access
   - Get your connection string and update the `.env` file

## Running the Application

### Development Mode
```bash
# Start both frontend and backend
npm run dev

# Start backend only
npm run server

# Start frontend only
npm run client
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

### Feedback API
- `POST /api/feedback` - Submit new feedback
  ```json
  {
    "name": "string",
    "email": "string",
    "feedback": "string",
    "category": "suggestion|bug|feature|other"
  }
  ```

- `GET /api/feedback` - Get all feedback
  Query Parameters:
  - `category`: Filter by category
  - `sortBy`: Sort by date (newest/oldest)

## Project Structure

```
user-feedback-system/
├── backend/
│   ├── models/
│   │   └── Feedback.js
│   ├── routes/
│   │   └── feedbackRoutes.js
│   └── server.js
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/
│   │   │   ├── FeedbackForm.js
│   │   │   ├── Dashboard.js
│   │   │   └── Navbar.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── .env
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- Material-UI for the component library
- MongoDB Atlas for the database service
- React community for the amazing ecosystem 