import express from "express";
import http from "node:http";
import { Server } from "socket.io";
import createBareServer from "@tomphttp/bare-server-node";
import path from "node:path";
import * as dotenv from "dotenv";
dotenv.config();

const __dirname = process.cwd();
const server = http.createServer();
const app = express(server);
const bareServer = createBareServer("/outerspace/");
const io = new Server(server);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, "static")));

const routes = [
  { path: "/", file: "index.html" },
  { path: "/news", file: "apps.html" },
  { path: "/algebra", file: "games.html" },
  { path: "/settings", file: "settings.html" },
  { path: "/tabs", file: "tabs.html" },
  { path: "/tabinner", file: "tabinner.html" },
  { path: "/go", file: "go.html" },
  { path: "/loading", file: "loading.html" },
  { path: "/404", file: "404.html" },
];

routes.forEach((route) => {
  app.get(route.path, (req, res) => {
    res.sendFile(path.join(__dirname, "static", route.file));
  });
});

app.get("/*", (req, res) => {
  res.redirect("/404");
});

// Bare Server 
server.on("request", (req, res) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

// Socket.io chat functionality
const activeUsers = new Map(); // Store active users with their usernames

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Handle user joining with username
  socket.on("join", (username) => {
    activeUsers.set(socket.id, username);
    console.log(`${username} joined the chat`);
    
    // Notify all users about the new user
    io.emit("user-joined", {
      username: username,
      userCount: activeUsers.size
    });
    
    // Send current user count to the new user
    socket.emit("user-count", activeUsers.size);
  });

  // Handle chat messages
  socket.on("chat-message", (data) => {
    const username = activeUsers.get(socket.id) || "Anonymous";
    console.log(`Message from ${username}: ${data.message}`);
    
    // Broadcast message to all users
    io.emit("chat-message", {
      username: username,
      message: data.message,
      timestamp: Date.now()
    });
  });

  // Handle user disconnect
  socket.on("disconnect", () => {
    const username = activeUsers.get(socket.id) || "Anonymous";
    activeUsers.delete(socket.id);
    console.log(`${username} disconnected`);
    
    // Notify all users about the disconnection
    io.emit("user-left", {
      username: username,
      userCount: activeUsers.size
    });
  });

  // Handle typing indicator
  socket.on("typing", (isTyping) => {
    const username = activeUsers.get(socket.id);
    if (username) {
      socket.broadcast.emit("user-typing", {
        username: username,
        isTyping: isTyping
      });
    }
  });
});

server.on("listening", () => {
  console.log(`MyWeb running at http://localhost:${process.env.PORT}`);
});

server.listen({
  port: 8080,
});