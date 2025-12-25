src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Gemini + Vercel + Vite</h1>
      <p>Your deployment is working 🎉</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
add main react entry
