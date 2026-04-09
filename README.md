# 📝 Collaborative Markdown Editor

## 🚀 Project Overview

This project is a **real-time collaborative markdown editor** that allows multiple users to edit a document simultaneously. It provides live preview of markdown content and synchronizes changes instantly across connected users using WebSockets.

The application also integrates **Git-based version control**, enabling document changes to be saved, tracked, and managed efficiently. All project code is hosted on GitHub for easy access and collaboration.

---

## 🎯 Key Features

* ✍️ Real-time collaborative editing
* 🔄 Instant synchronization using WebSockets
* 📝 Markdown live preview
* 💾 Save document as `.md` file
* 🔧 Git-based version control (commit history)
* ☁️ GitHub repository integration

---

## 🧱 Architecture Overview

```
Frontend (React)  →  Backend (Node.js + Socket.IO)  →  Git (Local Repo)  →  GitHub
```

* **Frontend** handles user interface and markdown editing
* **Backend** manages real-time communication and document storage
* **WebSockets** enable instant updates across users
* **Git** tracks document changes and versions

---

## 🛠️ Tech Stack

* **Frontend:** React
* **Backend:** Node.js, Express
* **Real-time Communication:** Socket.IO
* **Version Control:** Git
* **Repository Hosting:** GitHub

---

## ⚙️ How It Works

1. Users open the application in a browser
2. A WebSocket connection is established with the server
3. Any change made by a user is sent to the backend
4. The backend broadcasts updates to all connected users
5. The document is updated in real-time across all clients
6. On clicking **Save**, the content is stored and committed using Git

---

## ▶️ How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/markdown-collab-app.git
cd markdown-collab-app
```

### 2. Start Backend

```bash
cd backend
npm install
node server.js
```

### 3. Start Frontend

```bash
cd frontend
npm install
HOST=0.0.0.0 npm start
```

### 4. Access Application

Open in browser:

```
http://<YOUR_PUBLIC_IP>:3000
```

---

## 📌 Use Cases

* Collaborative documentation
* Team note-taking
* Live content editing
* Developer markdown tools

---

## ⚠️ Limitations (MVP)

* No authentication system
* Basic conflict handling
* Single document editing

---

## 🔮 Future Enhancements

* User authentication & authorization
* Multi-document support
* Cursor tracking (who is typing)
* Automatic GitHub push on save
* Improved UI/UX

---

## 🎯 Conclusion

This project demonstrates the implementation of a **real-time collaborative system** using WebSockets, combined with **Git-based version control**, reflecting real-world application design used in tools like Google Docs and Notion.

---
