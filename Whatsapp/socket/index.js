import {Server} from 'socket.io';

const io = new Server(9000, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

let users = [];

const addUser = (userData, socketId) => {
    // Remove existing user if reconnecting
    users = users.filter(user => user.sub !== userData.sub);
    users.push({...userData, socketId});
    console.log(`👤 User added: ${userData.name}, Total users: ${users.length}`);
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
    console.log(`👋 User removed, Total users: ${users.length}`);
}

const getUser = (userId) => {
    return users.find(user => user.sub === userId);
}

io.on('connection', (socket)=>{
    console.log('🔗 User connected:', socket.id);
    
    socket.on("addUsers", userData => {
        addUser(userData, socket.id);
        io.emit("getUsers", users);
    })

    socket.on('sendMessage', data=>{
        const user = getUser(data.receiverId);
        console.log('📤 Sending message to:', data.receiverId);
        
        if (user) {
            io.to(user.socketId).emit('getMessage', data);
            console.log('✅ Message delivered to:', user.name);
        } else {
            console.log('❌ User not found:', data.receiverId);
            console.log('Available users:', users.map(u => u.sub));
        }
    })

    socket.on('disconnect', () => {
        console.log('🔌 User disconnected:', socket.id);
        removeUser(socket.id);
        io.emit("getUsers", users);
    })
})