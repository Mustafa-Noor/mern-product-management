# MERN Product Management System

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing products and categories with user authentication.

## Features

- ✅ User authentication with JWT
- ✅ Product CRUD operations
- ✅ Category management
- ✅ Search and filter products
- ✅ Role-based access control
- ✅ Responsive design
- ✅ MongoDB integration
- ✅ Express REST API

## Project Structure

```
mern-product-management/
├── backend/
│   ├── config/           # Configuration files
│   ├── controllers/       # Business logic
│   ├── middleware/        # Express middleware
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── .env              # Environment variables
│   ├── server.js         # Main server file
│   └── package.json      # Backend dependencies
├── frontend/
│   ├── public/           # Static files
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── context/      # React context for auth
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   ├── styles/       # CSS stylesheets
│   │   ├── App.js        # Main app component
│   │   └── index.js      # Entry point
│   └── package.json      # Frontend dependencies
└── README.md            # This file
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Installation & Setup

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file and configure
# The .env file is already created with default values
# Update MongoDB connection details if needed
```

### 2. Frontend Setup

```bash
# Navigate to frontend directory (in a new terminal)
cd frontend

# Install dependencies
npm install
```

## Running the Application

### Terminal 1 - Start MongoDB

```bash
# Make sure MongoDB is running
# On Windows with MongoDB installed:
mongod
```

### Terminal 2 - Start Backend Server

```bash
cd backend
npm start           # Production mode
# OR
npm run dev        # Development mode with nodemon
```

The backend server will run on `http://localhost:5000`

### Terminal 3 - Start Frontend Development Server

```bash
cd frontend
npm start
```

The frontend application will open on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (protected)
- `PUT /api/products/:id` - Update product (protected)
- `DELETE /api/products/:id` - Delete product (protected)

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get single category
- `POST /api/categories` - Create category (protected)
- `PUT /api/categories/:id` - Update category (protected)
- `DELETE /api/categories/:id` - Delete category (protected)

### Users
- `GET /api/users` - Get all users (protected)
- `GET /api/users/:id` - Get single user
- `PUT /api/users/:id` - Update user profile (protected)
- `DELETE /api/users/:id` - Delete user (protected)

## Environment Variables

### Backend (.env)
```
DB_HOST=localhost
DB_PORT=27017
DB_NAME=mern_product_db
MONGODB_URI=mongodb://localhost:27017/mern_product_db

PORT=5000
NODE_ENV=development

JWT_SECRET=your_jwt_secret_key_here_change_in_production
JWT_EXPIRE=7d

API_URL=http://localhost:5000
FRONTEND_URL=http://localhost:3000
```

## Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **express-validator** - Request validation

### Frontend
- **React** - UI library
- **React Router** - Navigation
- **Axios** - HTTP client
- **React Toastify** - Notifications
- **CSS** - Styling

## Development

### Adding a New Route

1. Create a controller file in `backend/controllers/`
2. Create a route file in `backend/routes/`
3. Import and use in `backend/server.js`

### Adding a New Page

1. Create a new file in `frontend/src/pages/`
2. Add route in `frontend/src/App.js`
3. Create corresponding CSS file in `frontend/src/styles/`

## Testing

You can test the API endpoints using:
- Postman
- Thunder Client
- curl commands

## Error Handling

All API responses follow a standard format:

**Success Response:**
```json
{
  "status": "success",
  "message": "Operation successful",
  "data": {...}
}
```

**Error Response:**
```json
{
  "status": "error",
  "message": "Error description"
}
```

## Security Features

- JWT authentication for protected routes
- Password hashing with bcryptjs
- CORS enabled for frontend-backend communication
- Input validation and sanitization
- Environment variable configuration

## Future Enhancements

- [ ] Image upload functionality
- [ ] Product reviews and ratings
- [ ] Advanced search filters
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Payment integration
- [ ] Order management

## License

MIT License - feel free to use this project for learning and development.

## Support

For issues or questions, please check the API response messages or console logs for debugging information.

---

Happy coding! 🚀
