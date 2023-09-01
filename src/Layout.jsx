import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";

export default function Layout() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
