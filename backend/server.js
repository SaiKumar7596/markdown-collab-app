const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const fs = require("fs");
const simpleGit = require("simple-git");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

let documentContent = "";

io.on("connection", (socket) => {
  console.log("User connected");

  socket.emit("load-document", documentContent);

  socket.on("send-changes", (data) => {
    documentContent = data;
    socket.broadcast.emit("receive-changes", data);
  });

  socket.on("save-document", async () => {
    fs.writeFileSync("doc.md", documentContent);

    const git = simpleGit();
    await git.init();
    await git.add("./*");
    await git.commit("Updated document");

    console.log("Saved + committed");
  });
});

server.listen(3001, "0.0.0.0", () => {
  console.log("Backend running on port 3001");
});
