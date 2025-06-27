# 💬 WhatsApp Clone - MERN Stack

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101" alt="Socket.io" />
  <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="Material-UI" />
</div>

## 🧾 Project Overview

A full-featured WhatsApp Web clone built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that replicates the core functionality of WhatsApp with real-time messaging, user authentication, and a modern UI that feels just like the original WhatsApp Web application.

### 🎯 **How It Works**

This WhatsApp clone operates on a **three-tier architecture**:

1. **Frontend (React.js)**: Handles the user interface and user interactions
2. **Backend (Node.js/Express)**: Manages API endpoints, authentication, and database operations
3. **Socket Server**: Handles real-time communication between users
4. **Database (MongoDB)**: Stores user data, conversations, and messages

The application uses **Socket.IO** for real-time bidirectional communication, enabling instant messaging, online status updates, and typing indicators.

## ✨ Key Features

### 🔐 **Authentication & Security**
- [x] **Google OAuth Integration** - Secure login with Google accounts
- [x] **JWT Token Management** - Secure session handling
- [x] **Authentication Persistence** - Stay logged in across browser sessions
- [x] **Secure Logout** - Complete session cleanup

### 💬 **Messaging & Communication**
- [x] **Real-time Messaging** - Instant message delivery using Socket.IO
- [x] **Message History** - Complete conversation history
- [x] **Search Functionality** - Find users to start conversations
- [x] **Online/Offline Status** - Real-time user presence indicators
- [x] **Typing Indicators** - See when someone is typing

### 🎨 **User Interface & Experience**
- [x] **WhatsApp-like UI** - Authentic WhatsApp Web experience
- [x] **Material-UI Components** - Modern and responsive design
- [x] **Profile Management** - Update profile information
- [x] **Responsive Design** - Works on desktop and mobile browsers
- [x] **Loading States** - Smooth user experience with loading indicators

### 📱 **Advanced Features**
- [x] **Image Sharing** - Send and receive images in conversations
- [x] **Error Handling** - Comprehensive error boundary implementation
- [x] **Socket Debugging** - Built-in socket connection testing
- [x] **Conversation Management** - Create and manage multiple conversations

## 🏗️ **Project Architecture**

```
WhatsApp-Clone/
├── client/          # React.js Frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── context/         # React context providers
│   │   ├── service/         # API service functions
│   │   └── utils/           # Utility functions
│   └── public/             # Static assets
├── server/          # Node.js Backend
│   ├── controller/         # Route controllers
│   ├── database/           # Database configuration
│   ├── model/              # MongoDB schemas
│   ├── routes/             # API routes
│   └── utils/              # Server utilities
├── socket/          # Socket.IO Server
└── images/          # Documentation images
```

## ⚙️ **Technology Stack**

### **Frontend Technologies**
| Technology | Purpose | Version |
|------------|---------|---------|
| **React.js** | UI Framework | ^18.2.0 |
| **Material-UI** | Component Library | ^5.13.4 |
| **Socket.IO Client** | Real-time Communication | ^4.8.1 |
| **Axios** | HTTP Client | ^1.4.0 |
| **React OAuth Google** | Authentication | ^0.11.0 |
| **JWT Decode** | Token Management | ^3.1.2 |

### **Backend Technologies**
| Technology | Purpose | Version |
|------------|---------|---------|
| **Node.js** | Runtime Environment | >=14.0.0 |
| **Express.js** | Web Framework | ^4.18.2 |
| **MongoDB** | Database | ^7.3.0 |
| **Mongoose** | ODM | ^7.3.0 |
| **Socket.IO** | Real-time Engine | ^4.8.1 |
| **Multer** | File Upload | ^1.4.5 |
| **GridFS** | File Storage | ^1.1.1 |

### **DevOps & Tools**
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nodemon** - Development server
- **CORS** - Cross-origin resource sharing

## 🚀 **Getting Started**

### **Prerequisites**

Before you begin, ensure you have the following installed:
- **Node.js** (v14.0.0 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Git**
- **Docker & Docker Compose** (optional, for containerized setup)

### **Installation Methods**

You can run this application using either Docker (recommended) or traditional npm setup.

---

## 🐳 **Method 1: Docker Setup (Recommended)**

### **Step 1: Clone the Repository**
```bash
git clone <your-repository-url>
cd WhatsApp-Clone/Whatsapp
```

### **Step 2: Environment Configuration**
Create a `.env` file in the `server` folder:
```bash
cd server
```

Create `.env` file with the following content:
```env
# MongoDB Configuration
DB_USERNAME=admin
DB_PASSWORD=password
MONGODB_URI=mongodb://admin:password@mongodb:27017/whatsapp-clone?authSource=admin

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Application Configuration
PORT=8000
NODE_ENV=development
```

### **Step 3: Start with Docker Compose**
```bash
# From the server directory
docker-compose up -d
```

This will start:
- **MongoDB** container on port `27017`
- **Backend API** on port `8000`
- **Socket Server** on port `9000`
- **React Frontend** on port `3000`

### **Step 4: Access the Application**
Open your browser and navigate to: `http://localhost:3000`

---

## 💻 **Method 2: Traditional Setup**

### **Step 1: Clone and Setup**
```bash
git clone <your-repository-url>
cd WhatsApp-Clone/Whatsapp
```

### **Step 2: Install Dependencies**

**Install Server Dependencies:**
```bash
cd server
npm install --legacy-peer-deps
```

**Install Client Dependencies:**
```bash
cd ../client
npm install --legacy-peer-deps
```

**Install Socket Dependencies:**
```bash
cd ../socket
npm install --legacy-peer-deps
```

### **Step 3: Database Setup**

**Option A: Local MongoDB**
- Install MongoDB locally
- Start MongoDB service
- Create database: `whatsapp-clone`

**Option B: MongoDB Atlas**
- Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
- Create cluster and get connection string
- Update connection string in server configuration

### **Step 4: Environment Configuration**

Create `.env` file in the `server` directory:
```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/whatsapp-clone
# Or for Atlas: mongodb+srv://username:password@cluster.mongodb.net/whatsapp-clone

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Application Configuration
PORT=8000
NODE_ENV=development
```

### **Step 5: Start the Application**

You need to start three separate processes:

**Terminal 1 - Start Backend Server:**
```bash
cd server
npm start
```
Server will run on: `http://localhost:8000`

**Terminal 2 - Start Socket Server:**
```bash
cd socket
npm start
```
Socket server will run on: `http://localhost:9000`

**Terminal 3 - Start Frontend:**
```bash
cd client
npm start
```
Frontend will run on: `http://localhost:3000`

### **Step 6: Access the Application**
Open your browser and navigate to: `http://localhost:3000`

---

## 🔄 **Application Workflow**

### **1. User Authentication Flow**
```
1. User visits application → Login page displayed
2. User clicks "Sign in with Google" → Google OAuth popup
3. User authorizes → Google returns user data
4. Backend validates and creates JWT token
5. Token stored in localStorage → User redirected to chat interface
6. On subsequent visits → Token validated → Auto-login
```

### **2. Real-time Messaging Flow**
```
1. User A sends message → Frontend captures input
2. Message sent to backend API → Saved to MongoDB
3. Backend emits socket event → Socket server broadcasts
4. User B receives real-time update → Message appears instantly
5. Read receipts and typing indicators → Updated via socket events
```

### **3. User Search and Connection**
```
1. User searches for contacts → API query to user database
2. Results displayed → User selects contact to chat
3. New conversation created → Conversation ID generated
4. Socket rooms established → Real-time communication enabled
```

## 🎮 **Using the Application**

### **Login Process**
1. Open `http://localhost:3000`
2. Click "Continue with Google"
3. Authorize with your Google account
4. You'll be redirected to the main chat interface

### **Starting a Conversation**
1. Click the search icon in the sidebar
2. Search for users by name or email
3. Click on a user to start chatting
4. Type your message and press Enter

### **Logout Process**
1. Click on your profile picture (top-left)
2. Click the three dots menu (⋮)
3. Select "Logout"
4. You'll be redirected to the login screen

### **Profile Management**
1. Click on your profile picture
2. Update your profile information
3. Changes are saved automatically

## 🔧 **Development & Debugging**

### **Socket Connection Testing**
The application includes a built-in socket debugger:
- Access: `http://localhost:3000/socket-debug`
- Test real-time connections
- Monitor socket events

### **API Endpoints**
```
POST /api/auth/login          # User authentication
GET  /api/users/search        # Search users
POST /api/conversations       # Create conversation
GET  /api/conversations/:id   # Get conversation
POST /api/messages           # Send message
GET  /api/messages/:id       # Get messages
POST /api/upload             # Upload images
```

### **Database Collections**
```
users          # User profiles and authentication
conversations  # Chat conversations
messages       # Individual messages
```

## 🐛 **Troubleshooting**

### **Common Issues**

**Port Already in Use:**
```bash
# Kill process using port 3000
npx kill-port 3000

# Or find and kill process
lsof -ti:3000 | xargs kill -9
```

**Database Connection Issues:**
- Ensure MongoDB is running
- Check connection string in `.env`
- Verify network connectivity for Atlas

**Socket Connection Problems:**
- Check if socket server is running (port 9000)
- Verify CORS configuration
- Check browser console for errors

**Authentication Issues:**
- Verify Google OAuth credentials
- Check JWT secret configuration
- Clear browser localStorage and cookies

## 🚀 **Deployment**

### **Production Deployment**

**Environment Variables for Production:**
```env
NODE_ENV=production
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=super-secure-production-key
GOOGLE_CLIENT_ID=production-google-client-id
GOOGLE_CLIENT_SECRET=production-google-client-secret
```

**Build for Production:**
```bash
# Build React app
cd client
npm run build

# The build folder will contain optimized production files
```

## 📊 **Performance Optimization**

- **Code Splitting**: React components are lazy-loaded
- **Image Optimization**: Images are compressed and cached
- **Socket Optimization**: Efficient event handling and room management
- **Database Indexing**: Optimized queries with proper indexing
- **Caching**: Strategic caching of user data and conversations

## 🔒 **Security Features**

- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Server-side validation of all inputs
- **CORS Protection**: Configured cross-origin resource sharing
- **Rate Limiting**: Protection against spam and abuse
- **Secure File Upload**: Validated file types and sizes

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 **License**

This project is licensed under the ISC License - see the LICENSE file for details.

## 📸 **Application Screenshots**

<div align="center">

### Login Interface
<img src="./images/login-pannel.png" alt="Login Panel" width="800px">

### Authentication Process
<img src="./images/authentication.png" alt="Authentication" width="800px">

### Main Chat Interface
<img src="./images/chat-and-user-frame.png" alt="Chat and User Frame" width="800px">

### Active Conversation
<img src="./images/chat.png" alt="Chat Interface" width="800px">

### Profile Management
<img src="./images/profile-button.png" alt="Profile Button" width="800px">

### User Profile View
<img src="./images/user-profile.png" alt="User Profile" width="800px">

</div>

## 📞 **Contact & Support**

<div align="center">

<a target="_blank" href="https://www.linkedin.com/in/vinayak-chittora/">
 <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
</a>
<a target="_blank" href="mailto:vinayakchittora31@gmail.com">
 <img src="https://img.shields.io/badge/gmail-D14836?&style=for-the-badge&logo=gmail&logoColor=white" />
</a>

</div>

---

<div align="center">

### ⭐ **Show your support**

Give a ⭐️ if this project helped you learn something new!

**Made with ❤️ by [Your Name]**

</div>
