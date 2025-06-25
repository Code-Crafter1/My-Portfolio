// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom"; // ✅ Add this
// import App from "./App.jsx";
// import "./index.css";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       {" "}
//       {/* ✅ Wrap your App with Router here */}
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // This now exports RouterProvider
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
