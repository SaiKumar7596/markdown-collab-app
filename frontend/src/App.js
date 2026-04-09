import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import ReactMarkdown from "react-markdown";

const socket = io("http://3.91.39.151:3001");

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    socket.on("load-document", (data) => {
      setText(data);
    });

    socket.on("receive-changes", (data) => {
      setText(data);
    });
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
    socket.emit("send-changes", e.target.value);
  };

  const saveDoc = () => {
    socket.emit("save-document");
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <textarea value={text} onChange={handleChange} rows={20} cols={50} />
      <div>
        <ReactMarkdown>{text}</ReactMarkdown>
        <button onClick={saveDoc}>Save</button>
      </div>
    </div>
  );
}

export default App;
