# Quick Start Guide

## ⚡ Fast Setup (5 minutes)

### Step 1: Install Dependencies

```bash
# Terminal 1 - Backend
cd backend
npm install

# Terminal 2 - Frontend  
cd frontend
npm install
```

### Step 2: Start Services

```bash
# Terminal 1 - Backend (from backend folder)
npm start

# Terminal 2 - Frontend (from frontend folder)
npm start
```

## 🎯 First Time Usage

1. **Register** - Click "Register" and create an account
2. **Login** - Use your credentials to login
3. **Add Category** - Create a product category
4. **Add Product** - Create a new product
5. **Manage** - Edit or delete products

## 📝 Default Test Credentials

After first setup, you can create any account:
- Email: test@example.com
- Password: password123

## 🔗 Important URLs

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB: localhost:27017

## ⚙️ Configuration

Before running, ensure:
1. MongoDB is installed and running
2. Node.js is installed (v14+)
3. .env files are configured correctly

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Kill process: `netstat -ano \| findstr :3000` |
| MongoDB connection error | Ensure MongoDB service is running |
| Module not found | Run `npm install` in that directory |
| API not responding | Check backend is running on port 5000 |

## 📚 Next Steps

- Explore the code structure
- Modify styles in `src/styles/`
- Add new features in components
- Extend API endpoints

Enjoy building! 🎉
